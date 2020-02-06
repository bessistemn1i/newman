import SmoothScroll from './SmoothScroll';
class ToTop {
    constructor() {
        this.up = document.querySelector(".up-button");
        this.arrows = [...this.up.querySelectorAll('.up-button__arrow')];
        this.target = document.body;
        if(this.up) {
            this.up.style.opacity = '0';
            this.up.style.pointerEvents = 'none';
            this.addEvents();
        }
    }

    blinkArrows() {
            setInterval(() => {
                if(this.up.classList.contains('up-button--blinked')) {
                    this.up.classList.remove('up-button--blinked');
                }
                else {
                    this.up.classList.add('up-button--blinked');
                }
            }, 1000);
    }

    addEvents() {
        this.blinkArrows();
        const smoothUp = new SmoothScroll({
            trigger: this.up,
            target: this.target
        });
        document.addEventListener('scroll', () => {
            /**
            |--------------------------------------------------
            | window.scrollY - динамичный скролл от верха страницы (при скролле увеличивается)
            window.innerHeight - статичная высота окна браузера
            |--------------------------------------------------
            */
            if(window.scrollY > window.innerHeight) {
              this.up.style.opacity = '1';
              this.up.style.pointerEvents = 'auto';
            } else {
              this.up.style.opacity = '0';
              this.up.style.pointerEvents = 'none';
            }
        });
    }
}

export default ToTop;