let header = document.querySelector('header');
logoImg = document.querySelector(".header__logo");

const scrollNavBarBgColorChange = () => {
    if (window.scrollY >= 100) {
        header.classList.add('scroll');
        logoImg.innerHTML = `<img src="/asset/images/logo-icon-white.png" alt="logo">`;
    } else {
        header.classList.remove('scroll');
        logoImg.innerHTML = `<img src="/asset/images/logo-icon.png" alt="logo">`;

    }

    // scroll up btn
    scrollUpBtn = document.querySelector(".scrollUpBtn");
    window.scrollY >= 100 ? scrollUpBtn.classList.add('scrollshow') : scrollUpBtn.classList.remove('scrollshow');
}


window.addEventListener("scroll", scrollNavBarBgColorChange);


// for menu list toggle
navToggle = document.querySelector('.nav__toggle');
navMenu = document.querySelector('.nav__menu');
navClose = document.querySelector('.nav__close');

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
})


//for search bax
searchBtn = document.querySelector('.search-btn');
searchInputBox = document.querySelector('.search-input-box');
searchCloseBox = document.querySelector('.input-close');
inputSearchBtn = document.querySelector('.input-box a');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchInputBox.classList.add('searchshow');
    });
}

if (searchCloseBox, inputSearchBtn) {
    searchCloseBox.addEventListener('click', () => {
        searchInputBox.classList.remove('searchshow');
    })
    inputSearchBtn.addEventListener('click', () => {
        searchInputBox.classList.remove('searchshow');
    })
}

// for swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1, },
        768: { slidesPerView: 2, },
        995: { slidesPerView: 3, }
    }
});



// for accrodion
limitBoxs = document.querySelectorAll('.limit');

limitBoxs.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');

        let description = item.querySelector('.grade');
        icon = item.querySelector('.age i')
        age = item.querySelector('.age');
        ageHeader = item.querySelector(".age h5");

        if (item.classList.contains('open')) {
            description.style.height = "130px";
            age.style.backgroundColor = "#E85248";
            ageHeader.style.color = "#ffffff";
            icon.classList.replace("ri-add-fill", "ri-subtract-fill");


        } else {
            description.style.height = " 0px";
            age.style.backgroundColor = "#FFFFFF";
            ageHeader.style.color = "#141315";
            icon.classList.replace("ri-subtract-fill", "ri-add-fill");

        }

        removeOpen(index);
    })
})


const removeOpen = (index1) => {
    limitBoxs.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove('open');

            let description = item2.querySelector('.grade');
            icon = item2.querySelector('.age i');

            description.style.height = "0px";
            icon.classList.replace("ri-subtract-fill", "ri-add-fill")
        }
    })
}