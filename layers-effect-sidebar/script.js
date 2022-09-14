const sidebar = document.querySelector('.sidebar');

function toggleSideBar(){
	if (sidebar.children[2].classList.contains('show')) {
		sidebar.children[2].classList.remove('show')
		setTimeout(()=>{
			sidebar.children[1].classList.remove('show')
		},200)
		setTimeout(()=>{
			sidebar.children[0].classList.remove('show')
		},400)
	}else {
		sidebar.children[0].classList.add('show')
		setTimeout(()=>{
			sidebar.children[1].classList.add('show')
		},200)
		setTimeout(()=>{
			sidebar.children[2].classList.add('show')
		},400)
	}
}	