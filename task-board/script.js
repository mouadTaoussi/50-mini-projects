let tasks = document.querySelectorAll('.task');
// const tasksContainer = document.querySelector('.card-content');
let cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.cards-container');

// events
function addCard(e) {
	if (e.keyCode == 13) {
		const title = e.path[0].value || 'Untitled';
		cardsContainer.innerHTML += 
		`
			<article class="card">
				<div class="card-header">
					<p class='card-title'>${title}</p>
					<button onclick="deleteCard(event)" class="card-delete">Delete</button>
				</div>
				<div class="add-task">
					<input class="card-input" onkeydown="addTask(event)" placeholder="Add task">
				</div>
				<div class="card-content">
					
				</div>
			</article>
		`;
		e.path[0].value = '';
		// Update NodeLists and then refire drag & drop to work with updated NodeList 
		cards = document.querySelectorAll('.card');
		fireDragDropFunctionality()
	}
}
function deleteCard(e) {
	e.path[2].remove();
	// Update NodeLists
	cards = document.querySelectorAll('.card');
}
function addTask(e){
	if (e.keyCode == 13) {
		const current_tasks = e.path[2].children[2]
		const text = e.path[0].value;
		
		if (text == '') return

		const task = 
		`
			<div class="task" draggable="true" oncontextmenu="deleteTask(event)">${text}</div>
		`
		current_tasks.innerHTML += task;
		e.path[0].value = "";
		// Update NodeLists and then refire drag & drop to work with updated NodeList 
		tasks = document.querySelectorAll('.task');
		fireDragDropFunctionality()

	}
}
function deleteTask(e) {
	e.preventDefault();
	e.path[0].remove()
	// Update Node Lists and then refire drag & drop to work with updated NodeList 
	tasks = document.querySelectorAll('.task');
	fireDragDropFunctionality()
}
let taskDragging = null;
// Drag and drop functionnality
function fireDragDropFunctionality (){
	for (var i = 0; i < cards.length; i++) {
		cards[i].ondragenter = (e)=>{
		};
		cards[i].ondragover =(e)=>{
			e.preventDefault()
			
		};
		cards[i].ondragleave = (e)=>{
		};
		cards[i].ondrop = (e)=>{
			const dropOver = e.path.filter((items)=>{
				return items.className == "card";
			})
			dropOver[0].children[2].appendChild(taskDragging);
		};
	}

	for (var i = 0; i < tasks.length; i++) { 
		tasks[i].ondragstart = (e)=>{
			taskDragging = e.path[0];
		};
		tasks[i].ondragend = (e)=>{
		};
	}
}