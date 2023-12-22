const tasks = document.querySelector('.tasks')
const ls = localStorage;
window.onload = ()=>{
	// load todos
	const todos_ls = JSON.parse(ls.getItem('todos'));
	const todos = todos_ls.todos;

	for (var i = 0; i < todos.length; i++) {
		tasks.innerHTML += `
			<div 
				class="todo${ todos[i].completed ? ' completed':'' }" 
				onclick="done(event)"
				oncontextmenu="remove(event)"
			>${todos[i].todo}</div>
		`
	}
}
function addTask(e){
	if(e.keyCode == 13) {
		// const input = e.path[0].value // path element is depercated
		const input = e.target.value
		if (input != "") {
			tasks.innerHTML += `
				<div 
					class="todo" 
					onclick="done(event)"
					oncontextmenu="remove(event)"
				>${input}</div>
			`

			// add todo to localstorage
			const todos_ls = JSON.parse(ls.getItem('todos'))
			if (todos_ls == null ) {
				ls.setItem('todos', JSON.stringify({todos: [{
					todo: input, completed: false
				}]}))
			}else {
				todos_ls.todos.push({
					todo: input, completed: false
				})
				ls.setItem('todos', JSON.stringify(todos_ls))
			}
		
			e.target.value = "";
		}
	}
}
function done(e){
	e.target.classList.add('completed');
	// mention todo to be completed to localstorage
	const todos_ls = JSON.parse(ls.getItem('todos'));
	const todos = todos_ls.todos;
	
	for (var i = 0; i < todos.length; i++) {
		if (todos[i].todo == e.target.innerText) {
			todos[i].completed = true
		}else {
			continue;
		}

		ls.setItem('todos', JSON.stringify({todos}));
	}
}
function remove(e){
	e.target.remove();
	// remove todo to localstorage
	const todos_ls = JSON.parse(ls.getItem('todos'));
	const todos = todos_ls.todos;
	let ûpdated_todos = [];

	for (var i = 0; i < todos.length; i++) {
		if (todos[i].todo != e.target.innerText) {
			ûpdated_todos.push(todos[i])
		}else {
			continue;
		}

		ls.setItem('todos', JSON.stringify({todos: ûpdated_todos}));
	}
}