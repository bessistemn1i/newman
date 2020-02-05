class TabSwitcher {
    constructor(obj) {
        this.tabs = [...document.querySelectorAll(obj.tabs)];
        this.elToOpen = [...document.querySelectorAll(obj.elToOpen)];
        this.classActive;
        if(this.tabs.length > 0) {
            this.addEvents();
        }
    }

    switchClass(element) {
        this.tabs.map((el) => el.classList.remove(this.classActive));
        element.classList.add(this.classActive);
        this.elToOpen.map((el) => {
            el.style.display = 'none';
            if(element.id == el.dataset.tab) {
                el.style.display = 'flex';
            }
        })
    }

    addEvents() {
        const regExp = /^\S+/;
        const tabClass = this.tabs[0].className.match(regExp)[0];
        this.elToOpen[0].style.display = 'flex';
        this.classActive = `${tabClass}--active`;
        this.tabs.map((el) => el.addEventListener('click', () => this.switchClass(el)));
    }
}

export default TabSwitcher;