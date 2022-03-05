
import pizza from './pizza.jpg';
import food from './food.jpg';
import shopping from './girl-farm.jpg';

const root = document.getElementById('root');


const homepage = () =>{
    header();
    content();
    ourStory();
    console.log(root);
    

}

// header function

const header = () =>{
    console.log("header function activated");
    const container = document.createElement('div');
    container.classList.add('header');
    
    //add function to create 4 divs using spread operator

    const headerlinks = (...list) =>{
        for (let i = 0; i < list.length; i++) {
            const div = document.createElement('div');
            div.id = list[i];
            div.textContent = list[i];
            console.log(div);
            container.appendChild(div);
        }

    }

    headerlinks("Home", "Order-Online", "Menu", "Login");


    root.appendChild(container);
}


const content = () =>{
    console.log("Content function activated!");
    const container = document.createElement('div');
    container.classList.add("main-content");

    const img = new Image();
    img.src = food;



    const h4 = document.createElement('h4');
    h4.textContent = 'The';
    const h1 = document.createElement('h2');
    h1.textContent = "GREEN SHOP";
    const h3 = document.createElement('h3');
    h3.textContent = "PICK UP & HOME DELIVERY";


    container.appendChild(h4);
    container.appendChild(h1);
    container.appendChild(h3);

    const btn = document.createElement('button');
    btn.id = "order";
    btn.textContent = "Order Now"
    container.appendChild(btn);


    
    root.appendChild(container);

}


const ourStory = () =>{
    
    const container = document.createElement('div');
    container.classList.add('our-story');

    const line = document.createElement('div');
    line.classList.add('gap-filler');

    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('tags-container');

    const tag = document.createElement('div');
    tag.id = 'tag';
    tag.textContent = "About Us"


    const tag1 = document.createElement('div');
    tag1.id = 'tag1';
    tag1.textContent = "Items";

    //add both tags to container
    tagsContainer.appendChild(tag);
    tagsContainer.appendChild(tag1);
    
    const storyContent = document.createElement('div');
    storyContent.classList.add('story-content');
     const h1 = document.createElement('h1');
     h1.textContent = "A PASSION FOR FRESHNESS"

    const test = document.createElement('div');
    test.classList.add('story-img');

    const p = document.createElement('p');
    p.textContent = "Fresh Fruits and Vegetable"

    
    storyContent.appendChild(h1);
    storyContent.appendChild(test);
    storyContent.appendChild(p);
    // storyContent.appendChild(img);

    container.appendChild(line);
    container.appendChild(tagsContainer);
    container.appendChild(storyContent);

    

    root.appendChild(container);

}




export default homepage;