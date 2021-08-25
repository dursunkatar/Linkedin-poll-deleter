window.addEventListener('scroll',(event) => {
    document.querySelectorAll('div.feed-shared-poll').forEach(e=> {
		e.closest('div.relative').remove();
		console.log('Anket silindi');
	});
});
