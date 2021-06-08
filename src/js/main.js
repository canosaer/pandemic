const toggleMenuElements = {
    toggle: document.querySelector(`.toggle`),
    siteNavigation: document.querySelector(`.menu`),
    siteNavigationList: document.querySelector(`.menu__list`),
    toggleLines: document.querySelectorAll(`.toggle__line`)
}

class MenuToggle{
    elements = null
    
    constructor(elements){
        this.toggle = elements.toggle
        this.siteNavigation = elements.siteNavigation
        this.siteNavigationList = elements.siteNavigationList
        this.toggleLines = elements.toggleLines

        

        this.setupListeners()
    }

    setupListeners() {

        this.toggle.addEventListener(`click`, this.handleToggleClick)
    }

    handleToggleClick = (evt) => {
        if(!this.siteNavigation.classList.contains(`menu_open`)){
            this.dimmer = document.createElement("div")
            this.dimmer.classList.add(`dimmer`)
            document.querySelector(`body`).appendChild(this.dimmer)
            document.querySelector(`body`).style.overflowX = `hidden`
            this.siteNavigation.classList.toggle(`menu_open`)
            this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
            this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
            this.siteNavigationList.classList.toggle(`menu__list_open`)
            setTimeout(() => { this.siteNavigation.style.width = `20.6rem` }, 10);
        }
        else{
            this.siteNavigation.style.width = `0`
            this.dimmer.remove()
            setTimeout(() => { 
                this.siteNavigation.classList.toggle(`menu_open`)
                this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
                this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
                this.siteNavigationList.classList.toggle(`menu_list_open`)
                document.querySelector(`body`).style.overflowX = `visible`
            }, 200);                
        }
    }
}

const toggleMenu = new MenuToggle(toggleMenuElements)