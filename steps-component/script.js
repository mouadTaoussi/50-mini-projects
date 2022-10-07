const steps = document.querySelectorAll('.step');
const steps_navigation = document.querySelectorAll('.steps-navigation button');
let current_step = 0;
let steps_array = [];

steps.forEach((step)=>{
	steps_array.push(step)
	step.addEventListener('click',(event)=>{
		current_step = steps_array.indexOf(event.path[1]);

		if (event.path[1].children[0].classList.contains('active')) {
			// Step forward
			inActivatingStep(current_step);
		}else {
			// Step backward
			activatingStep(current_step);
		}
	})
})
steps_navigation[0].onclick = ()=>{
	current_step = current_step == 0 ? 0 : current_step-1;
	// current_step = current_step - 1;
	inActivatingStep(current_step);
}
steps_navigation[1].onclick = ()=>{
	current_step = current_step == steps.length - 1 ? steps.length - 1 : current_step+1;
	// current_step = current_step + 1;
	activatingStep(current_step);
}

function activatingStep(current_step){
	for (var i = 0; i < steps.length; i++) {
		const current_vertical_line = i-1 < 0 ? 0 : i-1;
		// Activate all the -previous- steps
		if (current_step >= i) {
			/* Cercle */
			steps[i].children[0].classList.add('active');
			/* Line */
			steps[current_vertical_line].children[1].classList.add('active');
		}
	}
}
function inActivatingStep(current_step){
	// reversed for loop  (...5 - 3 - 2 - 1 - 0)
	for (var i = steps.length - 1; i > 0; i--) {
		// inActivate all the -next- steps
		if (current_step < i) {
			/* Cercle */
			steps[i].children[0].classList.remove('active');
			/* Line */
			steps[i-1].children[1].classList.remove('active');
		}
	}
}