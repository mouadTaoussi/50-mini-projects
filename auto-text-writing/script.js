const texts = [ 'Programming', 'Running and training', 'Exploring the opportunities' ];


function setText(index) {
	while (index.length < 3) {
		const currentText = texts[index];

		console.log(texts)

		setTimeout(setText(index+1),2000);
	}
}

setText(0);