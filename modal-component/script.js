const modal = document.querySelector('.modal');
const modal_overlay = document.querySelector('.modal-overlay');

function toggleModal() {
	if (modal.classList.contains('hidden')) {
		modal.classList.remove('hidden');
		modal_overlay.classList.remove('hidden');
	}else {
		modal.classList.add('hidden');
		modal_overlay.classList.add('hidden');
	}
}