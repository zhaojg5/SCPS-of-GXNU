function changeMobileNav(menu) {
    var mobileNav= document.getElementById('mobileNav');
    if(menu.classList.contains('active')) {
        mobileNav.className = mobileNav.className.replace(' active', '');
        menu.className = menu.className.replace(' active', '');
    }
    else {
        menu.className += ' active';
        mobileNav.className += ' active';
    }
}

window.onresize = function () {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 768) {
        var mobileNav= document.getElementById('mobileNav');
        var menu = document.getElementsByClassName('english-nav-menu')[0];
        mobileNav.className = mobileNav.className.replace(' active', '');
        menu.className = menu.className.replace(' active', '');
    }
}