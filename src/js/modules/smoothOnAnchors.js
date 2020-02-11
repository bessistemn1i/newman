class SmoothOnAnchors {
    constructor() {
        this.anchors = [...document.querySelectorAll('.smooth-trigger')];
        if(this.anchors) {
            this.addEvents();
        }
    }

    addEvents() {
        this.anchors.map((el) => el.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(el.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }));
    }
}

export default SmoothOnAnchors;