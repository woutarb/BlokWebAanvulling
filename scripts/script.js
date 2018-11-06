/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var mobileMenu = document.getElementsByTagName('img')[1];
var gifArrayMobile = ['./images/hamburg.gif', './images/hamburg-reverse.gif'];
var nonMobileMenu = document.getElementsByTagName('ul')[0];
var nonMobileListItem = document.getElementsByTagName('li')[0];

function hamburgFunction() {
    switch (mobileMenu.getAttribute('src')) {
        case 'images/hamburger.png':
            mobileMenu.setAttribute('src', gifArrayMobile[0]);
            mobileMenu.addEventListener('click', hamburgFunction);
            break;
        case './images/hamburg.gif':
            mobileMenu.setAttribute('src', gifArrayMobile[1]);
            mobileMenu.addEventListener('click', hamburgFunction);
            break;
        case './images/hamburg-reverse.gif':
            mobileMenu.setAttribute('src', gifArrayMobile[0]);
            mobileMenu.addEventListener('click', hamburgFunction);
            break;
        default:
            break;
    }
}

function searchbarTransform() {
    console.log(nonMobileMenu.textContent);
    nonMobileListItem.setAttribute('id', 'hide');
    nonMobileMenu.setAttribute('id', 'show');
}


nonMobileListItem.addEventListener('click', searchbarTransform);
mobileMenu.addEventListener('click', hamburgFunction);
