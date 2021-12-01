import {appendAndReturnQuery, makeLink} from "./creatDomElement.js";
import {someStyle, navBehaiver, remove} from "./domBehavier.js";
import {homeFocus, menuFocus, contactUsFocus} from "./navOption.js";
import './style.css';



const mainStyle = (() => {
    const content = document.querySelector('#content');
    //left and right content
    const leftContent = appendAndReturnQuery(content, 'left');
    const raightContent = appendAndReturnQuery(content, 'right');

    //make the top nav par
    const topLeft = appendAndReturnQuery(leftContent, 'top-menu');
    const logo = appendAndReturnQuery(topLeft, 'logo', undefined, 'Tryfood');

    //the nav element
    const nav = appendAndReturnQuery(topLeft, 'nav');
    const home = makeLink(nav, undefined, 'Home', 'home');
    const menu = makeLink(nav, undefined, 'Menu', 'menu');
    const contactUs = makeLink(nav, undefined, 'Contact Us', 'contact-us');
    //arrange the nav
    nav.style.flexDirection = 'row-reverse';

    //add some evect to the links
    let linkList = [home, menu, contactUs];

    linkList.forEach(l => l.onmouseover = (e) => someStyle(e));

    //Home btn toggle by default
    home.classList.add('active');
    if (home.classList.contains('active')) {
        home.style.color = 'white';
        home.style.textDecoration = 'underline 1px rgb(255, 191, 0)';
    }


    homeFocus(leftContent);

    //event listner for the nav
    home.addEventListener('click', (e) => {
        navBehaiver(e, linkList);
        remove(leftContent);
        homeFocus(leftContent);
    });
    menu.addEventListener('click', (e) => {
        navBehaiver(e, linkList);
        remove(leftContent);
        menuFocus(leftContent);

    });
    contactUs.addEventListener('click', (e) => {
        navBehaiver(e, linkList);
        remove(leftContent);
        contactUsFocus(leftContent);
    });

})();
