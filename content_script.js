setInterval(() => {
	let wrapper = document.getElementById('game-area-wrapper');
	let canvas = document.getElementById('cvs');
	
	if(!canvas || !wrapper || wrapper.style.display === "")
		return;
	
	canvas.style.cursor = 'default';		
}, 500);