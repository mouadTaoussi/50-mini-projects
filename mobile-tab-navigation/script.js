const tabs = document.querySelector('.tabs');
const navtabs = document.querySelectorAll('.nav-tab');
const content = document.querySelector('.content');
/*
Transition of the tabs;
	Home => 0%
	Download => -100%
	Library => -200%
	Recent => -300%
	factor: 100
*/

navtabs[0].onclick = ()=>{
	navtabs.forEach((navs)=> {
		navs.classList.remove('active');
	})
	navtabs[0].classList.add('active');

	tabs.style.transform = `translateX(0%)`;
}
navtabs[1].onclick = ()=>{
	navtabs.forEach((navs)=> {
		navs.classList.remove('active');
	})
	navtabs[1].classList.add('active');

	tabs.style.transform = `translateX(-100%)`;
}
navtabs[2].onclick = ()=>{
	navtabs.forEach((navs)=> {
		navs.classList.remove('active');
	})
	navtabs[2].classList.add('active');

	tabs.style.transform = `translateX(-200%)`;
}
navtabs[3].onclick = ()=>{
	navtabs.forEach((navs)=> {
		navs.classList.remove('active');
	})
	navtabs[3].classList.add('active');

	tabs.style.transform = `translateX(-300%)`;
}