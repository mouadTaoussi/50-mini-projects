const sideBar = document.querySelector('aside');
const container = document.querySelector('section');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdown_overlays = document.querySelectorAll('.dropdown-overlay')
const mediaQuery = window.matchMedia("(max-width: 700px)")
const root = document.querySelector(':root');

function toggleSideBar(){

	if (container.classList.contains('show-side-bar') && sideBar.classList.contains('show')){
		container.classList.add('hide-side-bar');
		sideBar.classList.add('hide');
		container.classList.remove('show-side-bar');
		sideBar.classList.remove('show');
	}else {
		container.classList.add('show-side-bar');
		sideBar.classList.add('show');
		container.classList.remove('hide-side-bar');
		sideBar.classList.remove('hide');
	}

}
function toggleDropdown(e){
	e.preventDefault();
	const dropdown = e.path[1].children[1];
	const dropdown_overlay = e.path[1].children[2];

	if (dropdown.classList.contains('show')) {
			dropdown.classList.remove('show');
			dropdown_overlay.classList.remove('show');
	}else {
		closeDropdowns();
		dropdown.classList.add('show');
		dropdown_overlay.classList.add('show');
	}
}
function changeTheme(e){
	const cssVars = getComputedStyle(root);
	root.style.setProperty('--primary', e.path[0].style.backgroundColor);
	root.style.setProperty('--primary-darker', e.path[0].style.backgroundColor);

	closeDropdowns();
}

function closeDropdowns() {
	dropdowns.forEach((dp)=>{
		dp.classList.remove('show');
	})
	dropdown_overlays.forEach((dpo)=>{
		dpo.classList.remove('show');
	})
}
toggleSideBar()
mediaQuery.addListener(toggleSideBar)