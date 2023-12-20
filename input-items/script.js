const input = document.querySelector('.input-items-input');
const items_container = document.querySelector('.input-items-container');

function addItem(e){
	if (e.keyCode == 13) {
		// const input = e.path[0].value; // path element is depercated
		const input = e.srcElement.value
		items_container.innerHTML += `
			<div class="input-items-item">
				<p>${input}</p>
				<p onclick="deleteItem(event)"><strong>x</strong></p>
			</div>
		`;
		// e.path[0].value = ""; // path element is depercated
		e.target.value = ""
	}
}
function deleteItem(e) {
	// e.path[2].remove(); // path element is depercated
	console.log(e.target.parentElement.parentElement.remove()) // not workin with multiple inputs
}