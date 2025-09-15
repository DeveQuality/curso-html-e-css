class MobileNavbar {
    constructor(MobileMenu, navList ,navLinks){
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active"   
     }
     addClickEvent(){
        this.MobileMenu.addClickEventListener("click" , () =>console.log("ola mundo"))
     }
}