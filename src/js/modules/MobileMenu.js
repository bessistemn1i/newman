class MobileMenu {
    constructor() {
        this.iconTrigger = document.querySelector('.mobile-icon');
        this.mobileMenu = document.querySelector('.main-nav__mobile');
        this.addEvents();
    }

    addEvents() {
        this.iconTrigger.addEventListener('click', () => {
            this.iconTrigger.classList.toggle('mobile-icon--active');
            this.iconTrigger.classList.toggle('mobile-icon--inactive');
            this.mobileMenu.classList.toggle('main-nav__mobile--active');
        });
    }
}

export default MobileMenu