const counters = document.querySelectorAll('.number');

counters.forEach((counter)=>{
	let Incrementing = 0; 
	setInterval(()=>{

		let dataTarget = parseInt(counter.getAttribute('data-target'));
		Incrementing += 210;

		counter.innerText = Incrementing <= dataTarget ? Incrementing : dataTarget;

	},5)
})