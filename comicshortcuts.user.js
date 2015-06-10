// ==UserScript==
// @id             comicshortcuts
// @name           webcomic shortcuts
// @version        1.0
// @namespace      http://0x1f415.me
// @author         0x1f415
// @description    read webcomics quickly with keyboard shortcuts
// @include        http://*.tumblr.com/page/*
// @run-at         document-end
// ==/UserScript==

var iterable = false;

var type = '';

var base = window.location.href.split('/').slice(0, window.location.href.split('/').length-1).join('/');

var num;

// GM_log(base);

if (base.split('.')[1] === 'tumblr' && window.location.href.split('/')[3] === 'page') {
	type = 'tumblr reverse-chrono';
	var iterable = true;
	num = parseInt(window.location.href.split('/')[window.location.href.split('/').length-1]);
}

function handleKeypress(e) {
	var char = e.keyCode;

	GM_log(char);

	if (!char) return; // special key

	switch (char) {
		case  37: //left
			prevPage();
			break;
		case  39: //right
			nextPage();
			break;
	}	

}

function prevPage () {
	if (type === 'tumblr reverse-chrono') {
		window.location = base + '/' + (num+1);
	}
}

function nextPage () {
	if (type === 'tumblr reverse-chrono') {
		window.location = base + '/' + (num-1);
	}
}

if (iterable) {
	window.addEventListener('keydown', handleKeypress, true);
}