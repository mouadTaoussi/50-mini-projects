let toastsContainer = document.querySelector('.toasts-container');
let toasts = []

function addToast(e){
	const r =Math.random();
	const toast = `
		<article class="toast-component">
			<header>
				<p>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16">
				  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
				</svg>
				Mouad just messaged you <i class="time">(5 sec ago)</i></p>
			</header>
			<div class="body">
				Hello, I hope you going good, Please check out your inbox as soon as possible in order to get your confirmation link before it will be invalid. Thanks!
			</div>
		</article>
	`
	toastsContainer.innerHTML += toast;
	toastsContainer = document.querySelector('.toasts-container');
	toasts.push({remaining: 5000})
}

setInterval(()=>{
	for (var i = 0; i < toastsContainer.children.length; i++) {
		if (toasts[i]) {
			if (toasts[i].remaining <= 0) {
				// Remove the first toast
				toastsContainer.children[i].remove()
				toasts.splice(i,1);
			}else {
				toasts[i].remaining -= 1000;
			}
		}
	}

},1000)