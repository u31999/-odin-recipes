//factory function to crate div
const createDiv = (c, id, text) => {
    const el = document.createElement('div');
    let selecter;
    document.body.append(el);
    if (c !== undefined) {
        el.classList.add(c);
    };
    if (id !== undefined) {
        el.setAttribute('id', id);
    };
    if (text !== undefined) {
        el.innerText = text;
    };

    return el;
};

//funnction to append element and return query
//its relay in createDiv()
//just create div
const appendAndReturnQuery = (elToAppend, c, id, text) => {
    let selecter;
    if (c !== undefined) {
        selecter = '.' + c;
        if (text !== undefined) {
            elToAppend.append(createDiv(c, undefined, text))
        } else {
            elToAppend.append(createDiv(c));
        }
    };

    if (id !== undefined) {
        selecter = '#' + id;
        if (text !== undefined) {
            elToAppend.append(createDiv(undefined, id, text));
        } else {
            elToAppend.append(createDiv(undefined, id));
        }
    }
    return document.querySelector(selecter);
}

//these function create and anchor tag and return link
const makeLink = (elToAppend, href, text, c) => {
    let link = elToAppend.prepend(document.createElement('a'));

    link = elToAppend.querySelector(`a:first-child`);

    let hrefLink = (href === undefined) ? '#' : href;
    link.setAttribute('href', hrefLink);

    if (text !== undefined) {
        link.innerText = text;
    }

    if (c !== undefined) {
        link.classList.add(c);
        return document.querySelector(`.${c}`);
    }
    return link;

}

export  {
    createDiv,
    appendAndReturnQuery,
    makeLink
}