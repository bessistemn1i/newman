class ToTop {
    constructor() {
        this.up = document.querySelector(".up-button");
        this.arrows = [...this.up.querySelectorAll('.up-button__arrow')];
        this.addEvents();
    }

    blinkArrows(arrows) {
        setInterval(() => {
            arrows.map((arrow) => {
                if(arrow.classList.contains('up-button__arrow--active')) {
                    arrow.classList.remove('up-button__arrow--active');
                }
                else {
                    arrow.classList.add('up-button__arrow--active');
                }
            })
        }, 1000);
    }

    addEvents() {
        this.blinkArrows(this.arrows);
    }
}

export default ToTop;