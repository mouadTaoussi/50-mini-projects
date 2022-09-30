const windows_icon = document.querySelector('.windows-icon');
const modal = document.querySelector('.modal');

windows_icon.onclick = ()=>{
	if (modal.classList.contains('show')) {
		modal.classList.remove('show');
	}else {
		modal.classList.add('show');
	}
}