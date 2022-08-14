window.onload = ()=>{
	let image = document.querySelector('.image');
	let percentage = document.querySelector('.percentage');


	window.setInterval(()=>{
		let currentValue = parseInt(image.style.filter.slice(5,8)) 
		let percentageValue = 100 - currentValue;

		if(currentValue != 0) {
			currentValue -= 1;
			percentage.innerText = percentageValue + "%";
			image.style.filter = `blur(${currentValue}px)`
			percentage.style.opacity = '.'+ currentValue

		}
	},30)
		// if(parseInt(percentage.style.opacity) == 0) {
		// 	console.log('delete it')
		// }

}