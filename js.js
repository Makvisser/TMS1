const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('tabs__item--active'));
        this.classList.add('tabs__item--active');
    });
});