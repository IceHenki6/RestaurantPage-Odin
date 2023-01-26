import Menu from "./components/Menu.js";
import Contact from "./components/Contact.js";
import heroImage from "./images/restaurantimg.jpg"
const content = document.getElementById('content');

//navbar
const navBar = document.createElement('nav');
navBar.classList.add('navbar');
navBar.innerHTML = `
    <nav class="navbar">
    <ul>
        <li class="navbar-item"><a href='#' id="home">Home</a></li>
        <li class="navbar-item"><a href='#' id="menu">Menu</a></li>
        <li class="navbar-item"><a href='#' id="contact">Contact</a></li>
    </ul>
    </nav>
`;

//homepage
const myHeroImg = new Image();
myHeroImg.src = heroImage;
console.log(myHeroImg);
console.log(heroImage);
const homePage = document.createElement('div');
homePage.classList.add('home');
homePage.innerHTML = `
    <div id="restaurant-title">
        <h1 id="restaurant-name">Cacho's Bodegon</h1>
        <h3 id="restaurant-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, porro!</h3>
    </div>
    <div id="restaurant-image">
        <img src = ${myHeroImg.src}  alt="">
    </div>
`;


content.appendChild(navBar);
content.appendChild(homePage);


//clearPage
const clearPage = ()=>{
    content.innerHTML = '';
    content.appendChild(navBar);
}

document.addEventListener('click', (event)=>{
    if(event.target.id == 'home'){
        clearPage();
        content.appendChild(homePage);
    }
    else if(event.target.id == 'menu'){
        clearPage();
        content.appendChild(Menu.menu);
    }
    else if(event.target.id == 'contact'){
        clearPage();
        content.appendChild(Contact.contact);
    }
})

