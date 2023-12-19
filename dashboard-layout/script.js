const sideBar = document.querySelector('aside');
const container = document.querySelector('section');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdown_overlays = document.querySelectorAll('.dropdown-overlay')
const mediaQuery = window.matchMedia("(max-width: 700px)")
const root = document.querySelector(':root');
const canvas = document.querySelectorAll('#chart')[0];
const canvas1 = document.querySelectorAll('#chart')[1];
const c = canvas.getContext('2d');
const c1 = canvas1.getContext('2d');

window.onload = ()=>{

	barChart(c, [
			{label: "01/02", scale: 325},
			{label: "02/02", scale: 544},
			{label: "03/02", scale: 250},
			{label: "04/02", scale: 225},
			{label: "05/02", scale: 199},
			{label: "06/02", scale: 122},
			{label: "07/02", scale: 154},
			{label: "08/02", scale: 266},
			{label: "09/02", scale: 758},
			{label: "10/02", scale: 588},
			{label: "11/02", scale: 425},
			{label: "12/02", scale: 631},
			{label: "13/02", scale: 160},
			{label: "14/02", scale: 110}
		], {
			canvasWidth: canvas.width,
			canvasHeight: canvas.height,
			barsColor: getComputedStyle(root).getPropertyValue('--primary'),  
			lineWidth: 2,
			lineColor: "rgba(0,0,0,.5)",
			padding : 25,
	})

	barChart(c1, [
			{label: "01/02", scale: 220},
			{label: "02/02", scale: 210},
			{label: "03/02", scale: 250},
			{label: "04/02", scale: 225},
			{label: "05/02", scale: 199},
			{label: "06/02", scale: 244},
			{label: "07/02", scale: 265},
			{label: "08/02", scale: 514},
			{label: "09/02", scale: 200},
			{label: "10/02", scale: 222},
			{label: "11/02", scale: 260},
			{label: "12/02", scale: 280},
			{label: "13/02", scale: 160},
			{label: "14/02", scale: 110}
		], {
			canvasWidth: canvas.width,
			canvasHeight: canvas.height,
			barsColor: getComputedStyle(root).getPropertyValue('--primary'), //   
			lineWidth: 2,
			lineColor: "rgba(0,0,0,.5)",
			padding : 25,
			// propreHeight: 0, // the height of the chart
			// propreWidth: 0, // the width of the chart
	})
}

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
	// const dropdown = e.path[1].children[1];
	console.log(e)
	// const dropdown_overlay = e.path[1].children[2];

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