//add style to the link
const someStyle = (e) => {
    //fix[1]: for using button to toggle menu by using prototype
    if (e === undefined) {
        e = { target: document.querySelector('.nav .menu') };
    }
    if (e === null) {
        e = {target: document.querySelector('.nav .contact-us')};
    }
    e.target.style.color = 'white';
    e.target.style.textDecoration = 'underline 1px rgb(255, 191, 0)';


    e.target.onmouseout = (e) => {
        if (e.target.classList.contains('active')) {
            e.target.style.color = 'white';
            e.target.style.textDecoration = 'underline 1px rgb(255, 191, 0)';
            return;
        }
        e.target.style.color = 'hsl(45deg 100% 50%)';
        e.target.style.textDecoration = 'none';
    }
}

// function of the nav bar behiver
const navBehaiver = (e, linkList) => {
    linkList.forEach(l => {
        //fix [1]: if you click menu from button from 

        if (l.classList.contains('active')) {
            l.classList.toggle('active');
        }
        if (!l.classList.contains('active')) {
            l.style.color = 'hsl(45deg 100% 50%)';
            l.style.textDecoration = 'none';
        }
    });
    if (e === undefined) {
        document.querySelector('.menu').classList.toggle('active');
        someStyle(undefined);
        return;
    }
    if(e === null) {
        document.querySelector('.contact-us').classList.toggle('active');
        someStyle(null);
            return;
    }

    e.target.classList.toggle('active');
    someStyle(e);
}

/* these function take one argument and find any image or anchor tag
and abbend a click event with the desired action which must be function 
Note: you must enter a class name 
Note: you must provide a function */
const linkConverter = ([...args], func) => {
    args.forEach(a => {
        document.querySelectorAll(`${a} img`).forEach(img => {
            img.addEventListener('click', func);
        });

        document.querySelectorAll(`${a} a`).forEach(l => {
            l.addEventListener('click', func)
        })
    });

}
//To this note we need to use module

// the style win home btn is toggled
// must be in a new module call focus.js
const remove = (leftContent) => {

    const mainAdvertis = leftContent.querySelector('.main-advertise');
    const menu = leftContent.querySelector('.option-div');
    const contact = leftContent.querySelector('.contact-div');
    //remove home
    if (mainAdvertis) {
        document.querySelector('img').remove();
        mainAdvertis.remove();
    } 
    //remove menu
    if (menu) menu.remove();                
    //remove contact
    if(contact) contact.remove(); 
}

export  {
    someStyle,
    navBehaiver,
    linkConverter,
    remove
}