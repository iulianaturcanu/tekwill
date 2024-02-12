const loadLanguage = async (lang) => {
    // fetch("languages.json")
    // .then(res => res.json())
    // .then(data => console.log(data))

    const response = await fetch("languages.json");
    const data = await response.json();
    // 'english' data['english]
    return data[lang];
}

const updateContent = (langData) => {
    // sa selectez toate elementele care trebuie schimbate
    // dinamic (forEach) sa schimb continutul din ele 
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = langData[key];
    });
}

const switchLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    loadLanguage(lang).then(langData => updateContent(langData));
}

const language = localStorage.getItem('lang');
// default value
switchLanguage( language ?? 'english');

const menu = document.querySelector('.nav-main');
const menuItems = document.querySelectorAll('.nav-item');
const hamburger = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');
const modal = document.getElementById('myModal');

const toggleMenu = () => {

    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = "none";
        menuIcon.style.display = 'block';
         modal.style.display = 'none';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = "block";
        menuIcon.style.display = 'none';
        modal.style.display = 'flex';
    }
}


 const closeModal = () => {
        menu.classList.remove('showMenu');
        closeIcon.style.display = "none";
        menuIcon.style.display = 'block';
        modal.style.display = 'none';
    };