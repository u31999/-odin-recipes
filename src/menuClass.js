import { remove, navBehaiver } from "./domBehavier.js";
import { contactUsFocus } from "./navOption.js";

export const classMenu = class {
    constructor(name, img, description) {
        this.name = name;
        this.img = img;
        this.description = description;
    }

    make(appendEl) {
        let container = document.createElement('div');

        (appendEl === undefined)? document.body.append(container) :appendEl.append(container);

        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.gap = '20px';


        let photo = document.createElement('img');
        container.append(photo);
        photo.src = this.img;
        photo.style.width = '200px';
        photo.style.height = '150px';
        photo.style.borderRadius = '30%';

        let title = document.createElement('div');
        container.append(title);
        title.innerText = this.name;
        title.style.textAlign = 'center';
        title.style.widows = '200px';
        title.style.fontSize = '25px';
        title.style.fontFamily = 'cursive';
        title.style.textShadow = 'rgb(0 0 0) 4px 2px 2px';
        title.style.color = 'rgb(255, 191, 0)';

        let pragraph = document.createElement('div');
        container.append(pragraph);
        pragraph.innerText = this.description;
        pragraph.style.width = '200px';
        pragraph.style.color = 'white';
        pragraph.style.fontSize = '20px';
        pragraph.style.textAlign = 'center';

        let btn = document.createElement('button');
        container.append(btn);
        btn.innerText = 'Order Now';
        btn.style.color = 'white';
        btn.style.backgroundColor = 'blueviolet';
        btn.style.borderRadius = '15px';
        btn.style.fontFamily = 'cursive';
        btn.style.padding = '5px 10px';
        btn.style.fontWeight = '900';
        btn.style.fontSize = '15px';
        btn.style.border = 'none';

        btn.addEventListener('mouseover', (e) => {
            e.target.style.cursor = 'pointer';
            e.target.style.color =  'blueviolet';
            e.target.style.backgroundColor =  'white';
        });
        btn.addEventListener('mouseout', (e) =>{
            e.target.style.color =  'white';
            e.target.style.backgroundColor =  'blueviolet';
        });
        btn.addEventListener('click', () => {                    
                
            if(document.querySelector('.menuMain')){
                document.querySelector('.menuMain').remove();
            }
            if(document.querySelector('.menuSalad')){
                document.querySelector('.menuSalad').remove();
            }
            if(document.querySelector('.menuDesert')){
                document.querySelector('.menuDesert').remove();
            };

            let linkList = document.querySelectorAll('.nav a');
            let leftContent = document.querySelector('.left');
            remove(leftContent);
            contactUsFocus(leftContent);
            navBehaiver(null, linkList);
        });

    }

    }

export const menu = {
    main: {
        Kofta: {
            'title': 'Kofta',
            'img': '../dist/resources/kofta.jpg',
            'description' : 'Larm ipsium dollar, larm ipsum dollar, blah blah blah',
        },
        HamBurger: {
            'title': 'Ham Burger',
            'img': '../dist/resources/hum-burger.png',
            'description' : 'Larm ipsium dollar, larm ipsum dollar, blah blah blah',
        }
    },
    salad: {
        ceaser: {
            'title': 'Ceaser Salad',
            'img': '../dist/resources/ceaser-salad.jpg',
            'description' : 'Larm ipsium dollar, larm ipsum dollar, blah blah blah',
        },
        green: {
            'title': 'Green Salad',
            'img': '../dist/resources/green-salad.jpg',
            'description' : 'Larm ipsium dollar, larm ipsum dollar, blah blah blah',
        },
    },
    deserts: {
        choklateCake: {
            'title': 'Chocklate Cake',
            'img': '../dist/resources/choclate-cake.jpg',
            'description' : 'Larm ipsium dollar, larm ipsum dollar, blah blah blah',
        },
        cinnamonRolls: {
            'title': 'Cinnamon Rolls',
            'img': '../dist/resources/cinnamon-rolls.jpg',
            'description' : 'Larm ipsium dollar, larm ipsum dollar, blah blah blah',
        },
    },
}

