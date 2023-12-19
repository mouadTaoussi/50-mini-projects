const button = document.querySelector('button');

button.onclick = (e)=>{
	// const ripple = e.path[0].children[0]; // path element is depercated
	const ripple = e.srcElement.childNodes[0]

	const rippleHeight = ripple.clientHeight / 2;
	const rippleWidth = ripple.clientWidth / 2;

	ripple.style.top = e.offsetY - rippleHeight + 'px';
	ripple.style.left = e.offsetX - rippleWidth + 'px';
	ripple.classList.add('scale');
	
	setTimeout(()=>{	
		ripple.classList.remove('scale')
	},500)
}