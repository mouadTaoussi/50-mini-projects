const degree_input_input = document.querySelector('.degree-input');
const degree_input_output = document.querySelector('.degree-output');

const unit_select_input = document.querySelector('.unit-input');
const unit_select_output = document.querySelector('.unit-output');

const convert = (e)=>{
	const parent = e.path[1];
	const input_value = parent.children[0].value;
	const input_unit = parent.children[1].value;
	let output_value;
	let output_unit;
	let to_output; // Where to put the output value
	// Get output's location
	/**
	* Know where to put the output, EX: if user type in output field then 
	* the result should be written in input field and vise versa
	**/
	if (parent.classList.contains('input')) {
		// put output in the output field
		output_unit = document.querySelector('.output').children[1].value;
		to_output = document.querySelector('.output').children[0];
	}
	else if (parent.classList.contains('output')) {
		// if (e.path[0].classList.contains('unit-output')) {
		// 	// @todo recalculate the temperature when user changes the unit
		// 	output_unit = document.querySelector('.output').children[1].value;
		// 	to_output = document.querySelector('.output').children[0];
		// }
		// else {
			// put output in the input field
			output_unit = document.querySelector('.input').children[1].value;
			to_output = document.querySelector('.input').children[0];
		// }
	}
	// Calculate the temperature
	// For more info about formulas, see: https://www.calculators.org/math/temperature.php#:~:text=Celsius%20Conversion%20Formulas%20Celsius%20to%20Fahrenheit%3A%20F%20%3D,Rankine%3A%20Ra%20%3D%20C%20x%209%2F5%20%2B%20491.67
	/* Celsuis convertion */
	if (input_unit == "C" && output_unit == "C") output_value = input_value; 
	if (input_unit == "C" && output_unit == "F") output_value = input_value * 9/5 + 32; 
	if (input_unit == "C" && output_unit == "K") output_value = input_value + 273.15; 
	if (input_unit == "C" && output_unit == "R") output_value = input_value * 9/5 + 491.67; 
	/* Fahreneit convertion */
	if (input_unit == "F" && output_unit == "C") output_value = (input_value - 32) * (5/9); 
	if (input_unit == "F" && output_unit == "F") output_value = input_value; 
	if (input_unit == "F" && output_unit == "K") output_value = (input_value + 459.67) * (5/9); 
	if (input_unit == "F" && output_unit == "R") output_value = input_value + 459.67; 
	/* Kelvin convertion */
	if (input_unit == "K" && output_unit == "C") output_value = input_value - 273.15; 
	if (input_unit == "K" && output_unit == "F") output_value = (input_value * 9/5) - 459.67; 
	if (input_unit == "K" && output_unit == "K") output_value = input_value; 
	if (input_unit == "K" && output_unit == "R") output_value = (input_value * 9/5); 
	/* Renkine convertion */
	if (input_unit == "R" && output_unit == "C") output_value = (input_value - 491.67) / 1.8; 
	if (input_unit == "R" && output_unit == "F") output_value = input_value - 459.67; 
	if (input_unit == "R" && output_unit == "K") output_value = input_value / 1.8; 
	if (input_unit == "R" && output_unit == "R") output_value = input_value; 

	to_output.value = parseFloat(Math.round(output_value * 100) / 100).toFixed(2);
}
degree_input_input.onkeyup = convert;
degree_input_output.onkeyup = convert;
unit_select_input.onchange = convert;
unit_select_output.onchange = convert;