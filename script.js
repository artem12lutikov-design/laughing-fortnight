// Плавная прокрутка к секциям
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Обработка формы контактов
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за сообщение! Я свяжусь с тобой скоро.');
    this.reset();
});

// Добавляем эффект при загрузке страницы
window.addEventListener('load', function() {
    console.log('🎉 Сайт загружен!');
    
    // Анимация карточек при скролле
    const cards = document.querySelectorAll('.skill-card, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
});
