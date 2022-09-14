const container = document.querySelector('.results');

window.onload = ()=>{
	for (var i = 0; i < data.length; i++) {
		container.innerHTML += `
			<div class="card">
				<div class="avatar">
					<img src="${data[i].avatar}" class="avatar-image">
				</div>
				<div class="user-info">
					<p><strong>${data[i].name}</strong></p>
					<p class="occupation">${data[i].post}</p>
					<p class="degree"><i>${data[i].degree}</i></p>
				</div>
			</div>
		`
	}
}
function search(e) {
	const results = data.filter((item)=>{
		return item.name.includes(e.path[0].value) 
	})
	if (results.length != 0) {
		for (var i = 0; i < results.length; i++) {
			container.innerHTML = `
			<div class="card">
				<div class="avatar">
					<img src="${results[i].avatar}" class="avatar-image">
				</div>
				<div class="user-info">
					<p><strong>${results[i].name}</strong></p>
					<p class="occupation">${results[i].post}</p>
					<p class="degree"><i>${results[i].degree}</i></p>
				</div>
			</div>
			`
		}
	}else {
		container.innerHTML = '<div>Nothing found!</div>'
	}

}