import homepage from './content';
import css from './index.css';
import shop from './order';

console.log("Hello World");
const subcontent = document.createElement('div');
subcontent.id = 'content';

homepage();
shop();

const aboutUs = document.querySelector('.story-content');
const items = document.getElementById('shop');




//switching between tabs - DOM manipulation

    const tag = document.getElementById('tag');
    const tag1 = document.getElementById('tag1');

    tag.addEventListener('click', () =>{
        console.log("tag clicked");
        items.style.display = 'none';
        aboutUs.style.display = 'flex';
        
    })
    
    tag1.addEventListener('click', () =>{
        console.log("tag1 clicked");
        aboutUs.style.display = 'none';
        items.style.display = 'grid';

    })

    console.log(tag1);


// if () added, it will auto run 
//orderNow.onclick = tabSwitch;


