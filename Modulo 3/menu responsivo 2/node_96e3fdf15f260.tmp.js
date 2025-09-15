class MobileNavbar {
    constructor(MobileMenu, navList ,navLinks){
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"   
        
        this.handleClick = this.handleClick.bind();
    }

     handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
     }
     addClickEvent(){
        this.MobileMenu.addClickEventListener("click" , this.handleClick );    
     }
     Init(){
        if (this.MobileMenu){
            this.addClickEvent();
        }
        return this;
     }
}
const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.Init();