function barChart(ctx, data, config) {
	let YAxes = [/*{scale:11, y: 200}*/]

	// Set the height and the width of the chart without the padding that reserverd for chart labels
	config.propreHeight = config.canvasHeight - config.padding;
	config.propreWidth = config.canvasWidth - config.padding; 

	// Create title 
	const title = config.title || '';
	ctx.font = '15px Arial';
	ctx.fillText(title, config.padding-30, config.padding - (config.padding / 2))
	function createAxes() {
		// Y Axe 
		ctx.beginPath();
		ctx.lineWidth = config.lineWidth;
		ctx.strokeStyle = config.lineColor;
		ctx.moveTo(config.padding, config.padding); // from
		ctx.lineTo(config.padding, config.propreHeight); // to
		ctx.stroke();
		// X Axe
		ctx.beginPath();
		ctx.lineWidth = config.lineWidth;
		ctx.strokeStyle = config.lineColor;
		ctx.moveTo(config.padding, config.propreHeight); // from
		ctx.lineTo(config.propreWidth, config.propreHeight); // to
		ctx.stroke();
	}
	// Y Axes
	function createScalesY(){
		let divider = data.length - 1; /* How many X lines */
		let y = config.padding; // First X line's position
		let spaceBetweenXLines = (config.propreHeight - config.padding) / divider; // The space between two X lines in the Y Axe
		let getScaleValues = [];
		// Get the maximum scale
		data.forEach((scale)=>{ 
			getScaleValues.push(parseInt(scale.scale));
		})
		let scale = Math.max(...getScaleValues); // Start by the maximum scale in the Y Axe
		let scaleDifference = Math.floor(scale / divider); // Difference between two scales in the Y Axe 

		for (var i = 0; i < data.length; i++) {
			if (scale >= 0) {
				// line X
				ctx.beginPath();
				ctx.moveTo(config.padding, y); 
				ctx.lineTo(config.propreWidth, y);
				ctx.lineWidth = 1;
				ctx.strokeStyle = 'rgba(0,0,0,.2)';
				ctx.stroke();

				// Y Axe scale number
				ctx.font = '10px Arial';
				ctx.fillText(scale, config.padding - 30, y/*Y*/)

				// Push to Y axes object to another use
				YAxes.push({
					scale: parseInt(scale),
					y: Math.floor(y)
				});

				// position the next Y line
				y += spaceBetweenXLines;

				// Next Y scale in the Axe
				scale -= scaleDifference;
			}
		}
	}
	function loadData(){
		const barWidth = (config.propreWidth - config.padding) / data.length;
		let   x = config.padding;
		let   y = 0;

		for (var i = 0; i < data.length; i++) {
			// Returns the bar's height which is appropriate to the scale
			const scale = setBarHeight(parseInt(data[i].scale))

			// Set the Y position of the bar
			y = config.canvasHeight - scale.scaleYBar - config.padding;
			// create Bar
			ctx.beginPath();
			ctx.lineWidth = 1;
			ctx.strokeStyle = "white";
			ctx.fillStyle = config.barsColor;
			ctx.fillRect(x, y, barWidth, scale.scaleYBar);
			ctx.strokeRect(x, y, barWidth, scale.scaleYBar);
			ctx.fill();
			// Create scale text
			ctx.fillStyle = "white";
			ctx.font = '10px Arial';
			ctx.fillText(data[i].scale, x + 5, scale.scaleYText + 15/*Y*/)

			// Put the label and Y line in the position
			createLabelsX(x, barWidth, data[i].label);
			// position the next bar
			x += barWidth;
		}

	}
	function setBarHeight(currentScale){
		let scaleY = 0;

		for (var i = 0; i < YAxes.length; i++) {
			if (currentScale <= YAxes[i].scale && currentScale >= YAxes[i+1].scale) {
				scaleY = {
					scaleYBar: config.propreHeight - YAxes[i].y,
					scaleYText: YAxes[i].y
				};
			}
			else {
				continue;
			}
		}

		return scaleY;
	}
	// X axes
	function createLabelsX(x, barWidth, label) {
		// Put the label and Y line in the position
		const labelLinePosition = x + (barWidth / 2);
		const textPosition = x;
		// line Y
		ctx.beginPath();
		ctx.moveTo(labelLinePosition, config.propreHeight); 
		ctx.lineTo(labelLinePosition, config.propreHeight + 5/* 5 height of the small Y line*/);
		ctx.strokeStyle = config.lineColor;
		ctx.stroke();
		// text
		ctx.fillStyle = "black";
		ctx.font = '10px Arial';
		ctx.fillText(label, textPosition, config.propreHeight + 17/*Y*/)
	}

	createScalesY();
	loadData();
	createAxes();
}