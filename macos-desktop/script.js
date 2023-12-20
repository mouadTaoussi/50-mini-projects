const navigation_bar = document.querySelector('.navigation-bar');

for (var i = 0; i < navigation_bar.children.length; i++) {
	navigation_bar.children[i].onmouseover = (e)=>{
		// e.path[0].classList.add('hovered') // path element is depercated
		e.target.classList.add('hovered')
	}
	navigation_bar.children[i].onmouseleave = (e)=>{
		// e.path[0].classList.remove('hovered') // path element is depercated
		e.target.classList.remove('hovered')
	}
}