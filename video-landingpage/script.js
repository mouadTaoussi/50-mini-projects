window.setInterval(()=> {
	const video_1 = document.querySelector('.traffic-1');
	const video_2 = document.querySelector('.traffic-2');
	const video_3 = document.querySelector('.traffic-3');

	if (video_1.classList.contains('visible')) {
		video_1.classList.remove('visible')
		video_2.classList.add('visible')
	}
	else if (video_2.classList.contains('visible')) {
		video_2.classList.remove('visible');
		video_3.classList.add('visible');
	}
	else if (video_3.classList.contains('visible')) {
		video_3.classList.remove('visible')
		video_1.classList.add('visible')
	}

},10000)

document.querySelectorAll('.header-menu').forEach((menu)=>{
	menu.onclick = ()=>{
		const menu = document.querySelector('.menu');
		const menu_list = document.querySelector('.menu-list');
		const inner_header_menu = document.querySelector('.inner-header-menu');

		if (menu.classList.contains('menu-visible') && !menu.classList.contains('menu-invisible')) {
			menu.classList.add('menu-invisible');
			menu.classList.remove('menu-visible');
			//
			menu_list.classList.add('menu-list-invisible')
			menu_list.classList.remove('menu-list-visible')

			inner_header_menu.classList.add('menu-list-invisible')
			inner_header_menu.classList.remove('menu-list-visible')
		}
		else {
			menu.classList.remove('menu-invisible');
			menu.classList.add('menu-visible');
			//
			window.setTimeout(()=>{
				menu_list.classList.add('menu-list-visible')
				menu_list.classList.remove('menu-list-invisible')

				inner_header_menu.classList.add('menu-list-visible')
				inner_header_menu.classList.remove('menu-list-invisible')
			},1000)
		}

	}

})