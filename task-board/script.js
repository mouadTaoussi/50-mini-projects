let tasks = document.querySelectorAll('.task');
// const tasksContainer = document.querySelector('.card-content');
let cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.cards-container');
const instructions = document.querySelector('.instructions');

window.onload = ()=>{
	// Receive data from @localstorage
	const board = JSON.parse(localStorage.getItem('board'));

	for (var i = 0; i < board.cards.length; i++) {

		// delete instructions
		instructions.style.display = "none";

		// Loop over tasks for each card to put them in the appropriate card below
		let taskText = ``;
		for (var io = 0; io < board.cards[i][Object.keys(board.cards[i])[0]].length; io++) {
			taskText += `
			<div class="task" draggable="true" oncontextmenu="deleteTask(event)">${board.cards[i][Object.keys(board.cards[i])[0]][io]}</div>
			`
		}

		cardsContainer.innerHTML += 
		`
			<article class="card">
				<div class="card-header">
					<p class='card-title'>${Object.keys(board.cards[i])[0]}</p>
					<button onclick="deleteCard(event)" class="card-delete">Delete</button>
				</div>
				<div class="add-task">
					<input class="card-input" onkeydown="addTask(event)" placeholder="Add task">
				</div>
				<div class="card-content">
					${taskText}
				</div>
			</article>
		`;

	}

	// Update NodeLists and then refire drag & drop to work with updated NodeList 
	cards = document.querySelectorAll('.card');
	fireDragDropFunctionality()

}

// events
function addCard(e) {

	if (e.keyCode == 13) {
		// delete instructions
		instructions.style.display = "none";
		
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

		// Save to @localstorage
		const board = JSON.parse(localStorage.getItem('board'));
		if (!board) {
			const firstNewCard = {
				cards : [{[title]: []}]
			}
			localStorage.setItem('board',JSON.stringify(firstNewCard))
		}else {
			board.cards.push({[title]: []});
			localStorage.setItem('board',JSON.stringify(board))
		}

	}
}
function deleteCard(e) {
	const title = e.path[2].children[0].children[0].innerText;

	e.path[2].remove();
	// Update NodeLists
	cards = document.querySelectorAll('.card');

	// Delete from @localstorage 
	const board = JSON.parse(localStorage.getItem('board'));
	const cards_without_deleted = board.cards.filter((card)=>{
		return title !== Object.keys(card)[0]
	})
	// Assign the cards that excluded the deleted card
	localStorage.setItem('board', JSON.stringify({cards: cards_without_deleted}))
}
function addTask(e){
	if (e.keyCode == 13) {
		const current_tasks = e.path[2].children[2]
		const text = e.path[0].value;
		const cardTitle = e.path[2].children[0].children[0].innerText

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

		// Save to @localstorage
		const board = JSON.parse(localStorage.getItem('board'));

		for (var i = 0; i < board.cards.length; i++) {
			if (Object.keys(board.cards[i])[0] == cardTitle) {
				board.cards[i][cardTitle]/*<- returns array of tasks*/.push(text)
			}
		}
		localStorage.setItem('board', JSON.stringify(board))
		

	}
}
function deleteTask(e) {
	const cardTitle = e.path[2].children[0].children[0].innerText;
	const taskText = e.path[0].innerText;

	e.preventDefault();
	e.path[0].remove();

	// Update Node Lists and then refire drag & drop to work with updated NodeList 
	tasks = document.querySelectorAll('.task');
	fireDragDropFunctionality();

	// Delete from @localstorage
	const board = JSON.parse(localStorage.getItem('board'));
	for (var i = 0; i < board.cards.length; i++) {
		if (Object.keys(board.cards[i])[0] == cardTitle) {
			// console.log(board.cards[i][cardTitle]/*<- returns array of tasks*/)
			const tasks_without_deleted = board.cards[i][cardTitle].filter((task)=>{
				return task !== taskText;
			})

			// Assign the new array that exluded the deleted task
			board.cards[i][cardTitle] = tasks_without_deleted
		}
	}

	localStorage.setItem('board', JSON.stringify(board))
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