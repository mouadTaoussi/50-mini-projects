const Notification = document.querySelector('.Notification');
const progress = document.querySelector('progress');
let remaining = 5000;

function show() {
	if (!Notification.classList.contains('show')) {
		Notification.classList.add('show');
	}
	const setTimer = window.setInterval(()=>{
		if (remaining != 0 && Notification.classList.contains('show')) {
			remaining -= 1000;
			progress.value = remaining;
		}else {
			Notification.classList.remove('show');
			remaining = 5000;
			clearInterval(setTimer)
			progress.value = remaining;
		}
	},1000)
}