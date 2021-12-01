import {classMenu, menu} from "./menuClass.js";
import {appendAndReturnQuery, createDiv} from "./creatDomElement.js";
import {linkConverter, remove, navBehaiver} from "./domBehavier.js";

//the function which define the menu and make the dishes
function defineMenu (nameDom) {
    let dishes, value, name, body;
    switch(nameDom.innerText){
        case 'Main':
            name = 'main';
            dishes = Object.keys(menu[`${name}`]);
            break;
        case 'Salad':
            name = 'salad';
            dishes = Object.keys(menu[`${name}`]);
            break;
        case 'Desert':
            name = 'deserts';
            dishes = Object.keys(menu[`${name}`]);
            break;
        default :
        break;
    }

    body = document.querySelector('.body');
    dishes.forEach(d => {
        //prevrnt to loop into the proto chain
        if(d === undefined) return;
        value = Object.values(menu[`${name}`][`${d}`]);
        new classMenu(value[0], value[1], value[2]).make(body);      
    });
}

const homeFocus = (leftContent) => {
    // the body of the left content
    if (leftContent.querySelector('.main-advertise')) return;


    const mainAdvertis = appendAndReturnQuery(leftContent, 'main-advertise');
    const firtText = appendAndReturnQuery(mainAdvertis, 'hungry', undefined, 'Are you hungry?');
    const secontText = appendAndReturnQuery(mainAdvertis, 'dont-wait', undefined, 'Don\'t wait !');
    const theButton = (() => {
        let theDiv = appendAndReturnQuery(mainAdvertis, 'btn-div');
        theDiv = mainAdvertis.querySelector('.btn-div');
        theDiv.append(document.createElement('button'));

        let btn = theDiv.querySelector('button');
        btn.innerText = ('Check out menu');
        btn.addEventListener('mouseover', (e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.cursor = 'pointer';
        });
        btn.addEventListener('mouseout', (e) => e.target.style.transform = 'scale(1)');
        btn.addEventListener('click', (e) => {
            let linkList = document.querySelectorAll('.nav a');
            let leftContent = document.querySelector('.left');
            remove(leftContent);
            navBehaiver(undefined, linkList);
            menuFocus(leftContent);
        });

        return btn;
    })();
    // left cotent
    //to create the main image and append it to leftContent
    const img = (() => {
        let image = document.body.append(document.createElement('img'));
        image = document.querySelector('img');
        image.setAttribute('src', '../resources/dish.png');
        image.setAttribute('alt', 'dish-img');

        return document.querySelector('img[alt=dish-img]');
    })();
    leftContent.append(img);

}


const menuFocus = (leftContent) => {

    //these function create the menu page with options
    const  createMenuPage = (c, title) => {
        let menu = createDiv(c);
        menu.style.position = 'absolute';
        menu.style.width = '100%';
        menu.style.height = '100%';
        menu.style.backgroundColor = 'hsl(222deg 13% 15%)';
        menu.style.opacity = '0.9';
        menu.style.display = 'grid';
        menu.style.gridTemplateRows = '20% auto 20%';

        const header = appendAndReturnQuery(menu, 'header', undefined, title);
        const body = appendAndReturnQuery(menu, 'body');
        const divBtn = appendAndReturnQuery(menu, 'div-btn');

        header.style.display = 'flex';
        header.style.justifyContent = 'center';
        header.style.alignItems = 'center';
        header.style.color = 'hsl(45deg 100% 50%)';
        header.style.fontSize = '50px';
        header.style.fontWeight = '900 !important';
        header.style.fontFamily = 'cursive';
        header.style.textShadow = 'hsl(0deg 0% 0%) 4px 2px 2px';

        const btn = document.createElement('button');
        btn.innerText = 'Back';
        btn.style.padding = '0 30px';
        btn.style.fontFamily = 'cursive';
        btn.style.fontSize = '35px';
        btn.style.fontWeight = '900';
        btn.style.color = 'hsl(45deg 100% 50%)';
        btn.style.backgroundColor = 'rgb(44, 48, 65)';
        btn.style.border = 'none';
        btn.style.borderRadius = '15px';
        divBtn.append(btn);

        divBtn.style.display = 'flex';
        divBtn.style.justifyContent = 'center';
        divBtn.style.alignItems = 'center';

        body.style.display = 'flex';
        body.style.justifyContent = 'center';
        body.style.gap = '50px';
        

        

        //the event for the btn
        btn.onmouseover = (e) => {
            e.target.style.backgroundColor = 'rgb(255, 191, 0)' 
            e.target.style.color = 'rgb(44, 48, 65)';
            e.target.style.cursor = 'pointer';
        }
        btn.onmouseout = (e) => {
            e.target.style.backgroundColor = 'rgb(44, 48, 65)';
            e.target.style.color = 'rgb(255, 191, 0)';
        };
        btn.onclick = (e) => {
            menu.remove();
        }
        defineMenu(header);

    }

    // the menu option
    const menuOptionDiv = appendAndReturnQuery(leftContent, 'option-div');
    const mainDish = appendAndReturnQuery(menuOptionDiv, 'main');
    const salad = appendAndReturnQuery(menuOptionDiv, 'salad');
    const desert = appendAndReturnQuery(menuOptionDiv, 'desert');

    //set the style
    menuOptionDiv.style.height = '400px';
    menuOptionDiv.style.width = '400px';
    menuOptionDiv.style.display = 'grid';
    menuOptionDiv.style.gridTemplateRows = 'auto auto auto';

    //make one option
    const allOption = [...menuOptionDiv.querySelectorAll('div')];
    allOption.forEach(o => {
        let imgDiv, textDiv;

        imgDiv = appendAndReturnQuery(o, 'img-div');
        textDiv = appendAndReturnQuery(o, 'text-div');
        o.style.display = 'grid';
        o.style.gridTemplateColumns = 'auto auto';
    });

    //make the img and title and description
    let imgDiv = menuOptionDiv.querySelectorAll('.img-div');
    let textDiv = menuOptionDiv.querySelectorAll('.text-div');

    imgDiv.forEach(div => {
        let img;
        img = document.createElement('img');
        img.classList.add('menu-div');
        div.append(img);
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        img.style.width = '150px';
        img.style.height = '90%';
        img.style.borderRadius = '25px';

        img.onmouseover = (e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.opacity = '0.7';
            e.target.style.cursor = 'pointer';
        };
        img.onmouseout = (e) => {
            e.target.style.transform = 'scale(1)'
            e.target.style.opacity = '1';
        };
    });

    textDiv.forEach(text => {
        let a = document.createElement('a');
        text.append(a);

        text.style.display = 'flex';
        text.style.justifyContent = 'center';
        text.style.alignItems = 'center';
        text.style.fontFamily = 'fantasy';
        text.style.fontSize = '30px';
        text.style.color = '#ffbf00';
    });

    allOption.forEach(o => {
        if (o.classList.contains('desert')) {
            o.querySelector('.img-div img').src = '../resources/deserts.jpg';
            o.querySelector('.text-div a').innerText = 'Deserts';
        } else if (o.classList.contains('main')) {
            o.querySelector('.img-div img').src = '../resources/shish-taouk.jpg';
            o.querySelector('.text-div a').innerText = 'Main';


        } else if (o.classList.contains('salad')) {
            o.querySelector('.img-div img').src = '../resources/salad.jpg';
            o.querySelector('.text-div a').innerText = 'Salad';
        };
    });

    let a = document.querySelectorAll('.text-div a');

    a.forEach(l => {
        l.addEventListener('mouseover', (e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.cursor = 'pointer';
            e.target.style.textDecoration = 'underline 1px white';
            e.target.style.opacity = '0.7';
        });
        l.addEventListener('mouseout', (e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.textDecoration = 'none';
            e.target.style.opacity = '1';

        });
    });

    linkConverter(['.main', '.salad', '.desert'], menuChice);

    

    function menuChice(e) {

        if (e.path[2].classList.contains('main')) return createMenuPage('menuMain', 'Main');
        if (e.path[2].classList.contains('salad')) return createMenuPage('menuSalad', 'Salad');
        if (e.path[2].classList.contains('desert')) return createMenuPage('menuDesert', 'Desert');
    }




}

const contactUsFocus = (leftContent) => {

    const contact = appendAndReturnQuery(leftContent, 'contact-div');
    const manger = appendAndReturnQuery(contact, 'manger');
    const titleManger = appendAndReturnQuery(manger, 'title', undefined, 'Cusmore Manger : ');
    const phoneManger = appendAndReturnQuery(manger, 'phone', undefined, '+249-123-456-789');
    const dellivery = appendAndReturnQuery(contact, 'delivery');
    const titleDelivery = appendAndReturnQuery(dellivery, 'title', undefined, 'Delivery : ');
    const phoneDelivery = appendAndReturnQuery(dellivery, 'phone', undefined, '+249-987-654-321');

    const contactChildern = document.querySelectorAll('.contact-div div');
    contactChildern.forEach(c =>{
         c.style.display = 'flex';
         c.style.width = '50%';
         c.style.marginLeft = 'auto';
         c.style.marginRight = 'auto';
         c.style.textAlign = 'center';
         c.style.justifyContent = 'center';
         c.style.alignItems = 'center';
         c.style.fontSize = '20px';
         c.style.fontWeight = '900';
         c.style.fontFamily = 'cursive';
         c.style.color = '#ffbf00';
        });
    

    contact.style.display = 'flex';
    contact.style.alignItems = 'flex-start';
    contact.style.flexDirection = 'column';
    contact.style.justifyContent = 'center';
    contact.style.gap = '50px';
    contact.style.height = '50%';

    const classPhone = document.querySelectorAll('.phone');
    classPhone.forEach(p => {
        p.style.padding = '10px 10px';
        p.style.backgroundColor = 'rgb(102 51 153 / 0.5)';
        p.style.borderRadius = '40%';
        p.style.fontFamily = 'fangsong';
    })
}

export  {
    defineMenu,
    homeFocus,
    menuFocus,
    contactUsFocus
}
