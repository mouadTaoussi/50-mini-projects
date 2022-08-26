const password = document.querySelector('input[type=password]');
const bg = document.querySelector('.bg');

password.oninput = (e)=> {
	const v = document.querySelector('input[type="password"]').value;
	const blurValue = 20 - v.length * 2;
	bg.style.filter = `blur(${blurValue}px)`;
}