const input = document.querySelector('.input-items-input');
const items_container = document.querySelector('.input-items-container');

function addItem(e){
	if (e.keyCode == 13) {
		items_container.innerHTML += `
			<div class="input-items-item">
				<p>${e.path[0].value}</p>
				<p onclick="deleteItem(event)"><strong>x</strong></p>
			</div>
		`;
		e.path[0].value = "";
	}
}
function deleteItem(e) {
	e.path[2].remove();
}