class SmoothScroll {
    constructor(obj) {
        this.btn = obj.trigger;
        this.target = obj.target;
        this.addEvents();
    }

    ease(t) {
        return t;
    }

    scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset) {
        const runtime = stamp - start;
        let progress = runtime / duration;
        const ease = this.ease(progress);
        progress = Math.min(progress, 1);
        window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

        if(runtime < duration){
        requestAnimationFrame(() => {
            const stamp = new Date().getTime();
            this.scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        })
        }
    }

    scrolling(evt) {
        console.log(evt.target);
        if(window.location.pathname == '/' || window.location.pathname == '/en') {
            evt.preventDefault();
        }
        let href;
        if(this.btn.hasAttribute('href')) {
            href = this.btn.href;
            if(href !== undefined && href.indexOf('#services') == -1) {
                evt.preventDefault();
            }
        }
        const scrollEndElem = this.target;
        
        const anim = requestAnimationFrame(() => {
        const stamp = new Date().getTime();
        const duration = 500;
        const start = stamp;
        const startScrollOffset = window.pageYOffset;

        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
        this.scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        });
    }

    addEvents() {
        this.btn.addEventListener('click', () => this.scrolling(event));
    }
}

export default SmoothScroll;