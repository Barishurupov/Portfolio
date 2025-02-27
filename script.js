document.getElementById('menu-toggle').addEventListener('click', function () {
    const menuList = document.getElementById('menu-list');
    if (menuList.classList.contains('hidden')) {
        menuList.classList.remove('hidden');
    } else {
        menuList.classList.add('hidden');
    }
});
// Первый слайдер справа
// Получаем все элементы слайдов
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Показываем первый слайд при загрузке страницы
slides[currentIndex].classList.add('active-slide');

// Функция для показа предыдущего слайда
function showPrevSlide() {
    const event = window.event; // Получаем объект события
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    hideCurrentSlide();
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    showNewSlide();
}

// Функция для показа следующего слайда
function showNextSlide() {
    const event = window.event; // Получаем объект события
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    hideCurrentSlide();
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showNewSlide();
}

// Скрываем текущий активный слайд
function hideCurrentSlide() {
    const activeSlide = document.querySelector('.active-slide');
    if (activeSlide) {
        activeSlide.classList.remove('active-slide');
    }
}

// Показываем новый слайд
function showNewSlide() {
    slides[currentIndex].classList.add('active-slide');
}


// Второй слайдер по центру
// Получаем все элементы слайдов
const slides_2 = document.querySelectorAll('.slide_2');
let currentIndex_2 = 0;

// Показываем первый слайд при загрузке страницы
slides_2[currentIndex_2].classList.add('active-slide_2');

// Функция для показа предыдущего слайда
function showPrevSlide_2() {
    const event = window.event; // Получаем объект события
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    hideCurrentSlide_2();
    if (currentIndex_2 === 0) {
        currentIndex_2 = slides_2.length - 1;
    } else {
        currentIndex_2--;
    }
    showNewSlide_2();
}

// Функция для показа следующего слайда
function showNextSlide_2() {
    const event = window.event; // Получаем объект события
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    hideCurrentSlide_2();
    if (currentIndex_2 === slides_2.length - 1) {
        currentIndex_2 = 0;
    } else {
        currentIndex_2++;
    }
    showNewSlide_2();
}

// Скрываем текущий активный слайд
function hideCurrentSlide_2() {
    const activeSlide_2 = document.querySelector('.active-slide_2');
    if (activeSlide_2) {
        activeSlide_2.classList.remove('active-slide_2');
    }
}

// Показываем новый слайд
function showNewSlide_2() {
    slides_2[currentIndex_2].classList.add('active-slide_2');
}


// 

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        const smallImage = slide.querySelector('.small-image');
        const zoomIcon = slide.querySelector('.zoom-icon');
        const modalId = slide.dataset.modalId;
        const modal = document.getElementById(modalId);
        const largeImage = modal.querySelector('.modal-content');
        const caption = modal.querySelector('.caption');
        const closeButton = modal.querySelector('.close-button');

        function openModal() {
            modal.style.display = 'block';
            largeImage.src = smallImage.src;
            caption.textContent = smallImage.alt || '';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        zoomIcon.onclick = openModal;

        closeButton.onclick = closeModal;
        window.onclick = function (event) {
            if (event.target == modal) {
                closeModal();
            }
        };
    });
});

