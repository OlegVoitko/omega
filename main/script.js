let offset = 0;
const slidesLine = document.querySelector('.slides');

document.querySelector('.next').addEventListener('click', function(){
	offset = offset + 1280;
	if (offset > 2560) {
		offset = 0
	}
	slidesLine.style.left = -offset + 'px'
})

document.querySelector('.prev').addEventListener('click', function(){
	offset = offset - 1280;
	if (offset < 0) {
		offset = 2560
	}
	slidesLine.style.left = -offset + 'px'
})

const clientsOpenBtn =  document.querySelectorAll('.result-head');
if (clientsOpenBtn) {
	clientsOpenBtn.forEach( btn => {
			btn.addEventListener('click', () => {
					if (btn.classList.contains('click')) {
							btn.classList.remove('click');
							btn.nextElementSibling.classList.remove('open');
					} else {
							btn.classList.add('click');
							btn.nextElementSibling.classList.add('open');
					}
			});
	});
}

let offsetFirmLogo = 0;
const slidesFirmLogo = document.querySelector('.item123');
const btnPrev = document.querySelector('.arrow-prev')
const btnNext = document.querySelector('.arrow-next')

document.querySelector('.arrow-prev').addEventListener('click', function(){
	offsetFirmLogo = offsetFirmLogo + 200;
	if (offsetFirmLogo === 0) {
		btnPrev.disabled = true;
	}
	btnNext.disabled = false;
	slidesFirmLogo.style.left = offsetFirmLogo + 'px'
})

document.querySelector('.arrow-next').addEventListener('click', function(){
	offsetFirmLogo = offsetFirmLogo - 200;
	if (offsetFirmLogo === -1400) {
		btnNext.disabled = true;
	}
	btnPrev.disabled = false;
	slidesFirmLogo.style.left = offsetFirmLogo + 'px'
})

const questionArr = document.querySelectorAll('.consultate form .question');
const nextQuestionArr = document.querySelectorAll('.consultate form .start')
const consultateOpenBtns = document.querySelectorAll('.trial-btn');

let questionCounter = 0;
const closeWindowBackground = function () {
    let activeWindow = document.querySelector('.window-background.open');
    activeWindow.classList.remove('open');
    document.body.style.overflow = 'auto';
    activeWindow.querySelectorAll('input:not(input[type="submit"])').forEach(item => {
        item.value = '';
    });
}
document.addEventListener('click', e => {
    if (document.querySelector('.window-background.open') && !e.target.closest('.trial-btn') && !e.target.closest('.consultate-btn') && !e.target.closest('.products .item') && !e.target.closest('.consultation .sub p a')) {
        if (!e.target.closest('.window-background .window-body')) {
            closeWindowBackground();
        }
    }
});
document.querySelectorAll('.window-close').forEach(btn => {
    btn.addEventListener('click', closeWindowBackground);
});
document.querySelectorAll('.trial-btn').forEach( btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.window-background.consultate').classList.add('open');
        if (btn.classList.contains('card')) {
            document.querySelector('.window-background.consultate').querySelector('.window-background.consultate .start h2').innerHTML = 'ОФОРМИТЬ ЗАЯКУ НА ПРОБНЫЙ ПЕРИОД';
        } else {
            document.querySelector('.window-background.consultate').querySelector('.window-background.consultate .start h2').innerHTML = 'ОФОРМИТЬ ЗАЯКУ НА ПРОБНЫЙ ПЕРИОД';
        }
        document.body.style.overflow = 'hidden';
    });
});

let runLeft = document.querySelectorAll('.run-left');
let runRight = document.querySelectorAll('.run-right');
let runLinesInterval = [];
for (let line of runLeft) {
	let left1 = 0;
	let left2 = 0;
	runLinesInterval.push = setInterval(function () {
			let p = line.querySelectorAll('p');
			let width = p[0].scrollWidth;
			left2 = left1 + width;
			if (-left1 > width) {
					left1 = 0;
			}
			p[0].style.left = left1 + 'px';
			p[1].style.left = left2 + 'px';
			left1--;
 }, 13);
}
for (let line of runRight) {
	let right1 = 0;
	let right2 = 0;
	runLinesInterval.push = setInterval(function () {
			let p = line.querySelectorAll('p');
			let width = p[0].scrollWidth;
			right2 = right1 + width;
			if (-right1 > width) {
					right1 = 0;
			}
			p[0].style.right = right1 + 'px';
			p[1].style.right = right2 + 'px';
			right1--;
 }, 13);
}