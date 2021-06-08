const toggleMenuElements = {
    toggle: document.querySelector(`.toggle`),
    siteNavigation: document.querySelector(`.menu`),
    siteNavigationList: document.querySelector(`.menu__list`),
    toggleLines: document.querySelectorAll(`.toggle__line`)
}

const galleryItems = document.querySelectorAll('.gallery__item')

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

class ImageGallery{
    constructor(items){
        this.imageSlots = items

        this.setupListeners()
    }

    setupListeners() {

        this.imageSlots.forEach(imageSlot => {
            imageSlot.addEventListener(`mouseover`, this.beginGallerySlotHover)
            imageSlot.addEventListener(`mouseout`, this.endGallerySlotHover)
        });
    }

    beginGallerySlotHover = (evt) => {
        if(window.innerWidth < 768){
            for(let i=0;i<this.imageSlots.length;i++){
                if(this.imageSlots[i].querySelector('img') === evt.target){
                    this.imageSlots[i].style.height = '35rem'
                }
            }
        }
        else{
            for(let i=0;i<this.imageSlots.length;i++){
                if(this.imageSlots[i].querySelector('img') === evt.target){
                    this.imageSlots[i].style.width = '80%'
                    this.imageSlots[i].style.height = '19rem'
                }
                else{
                    this.imageSlots[i].style.width = '20%'
                    this.imageSlots[i].style.height = 'unset'
                } 
            }
        }
        
    }

    endGallerySlotHover = (evt) => {
        if(window.innerWidth < 768){
            for(let i=0;i<this.imageSlots.length;i++){
                if(this.imageSlots[i].querySelector('img') === evt.target){
                    this.imageSlots[i].style.height = '0'
                }
            }
        }
        
    }


}

const toggleMenu = new MenuToggle(toggleMenuElements)

const galleryHandler = new ImageGallery(galleryItems)

function fixItems() {

    if(window.innerWidth < 768){
        galleryItems.forEach(item => {
            item.style.width = '100%'
        });
    }
}

window.onresize = fixItems;