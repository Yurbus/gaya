"use script"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// if (isMobile.any()) {
//     document.body.classList.add('_touch');
	
// 			let menuArrows = document.querySelectorAll('.menu-item-has-children');
// 			if (menuArrows.length > 0) {
// 				for (let index = 0; index < menuArrows.length; index++) {
// 					const menuArrow = menuArrows[index];
// 					menuArrow.addEventListener("click", function (e) {
// 						menuArrow.parentElement.classList.toggle('_active');
// 					});
// 				}
// 			}

// } else {
//     document.body.classList.add('_pc');
// }


// Меню бурнер
// const iconMenu = document.querySelector('.menu__icon');
// const menuBody = document.querySelector('.menu__body');

// if (iconMenu) {
// 	iconMenu.addEventListener("click", function (e) {
// 		document.body.classList.add('_lock');
// 		iconMenu.classList.add('_active');
// 		menuBody.classList.add('_active');
// 	});
// }
// const IconClose = document.querySelector('.burger');
// if (IconClose) {
// 	IconClose.addEventListener("click", function (e) {
// 		document.body.classList.remove('_lock');
// 		iconMenu.classList.remove('_active');
// 		menuBody.classList.remove('_active');
// 	});
// }

// -------- Accordion -----------------------------------------
var acc = document.getElementsByClassName("accordion");
var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// --------- header------------------------------------------------

window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {  
        header.style.top = '0px'; 
        header.style.backgroundColor = 'white'; 
    } else {
        header.style.top = '52px'; 
        header.style.backgroundColor = 'transparent'; 
    }
});

// --------- Переключение языка ------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const headerLang = document.querySelector('.header__lang');
    const langList = document.querySelector('.lang__list');

    // Проверяем, является ли устройство мобильным
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (isMobile) {
        headerLang.addEventListener('click', function(event) {
            // Переключаем видимость меню при клике на мобильных устройствах
            if (langList.style.display === 'block') {
                langList.style.display = 'none';
            } else {
                langList.style.display = 'block';
            }
        });

        // Закрываем меню при клике вне его области
        document.addEventListener('click', function(event) {
            if (!headerLang.contains(event.target)) {
                langList.style.display = 'none';
            }
        });
    }
});



