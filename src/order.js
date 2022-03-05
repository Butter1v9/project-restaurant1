import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

const imgs = [img1, img2];
const shop = () => {
  const content = document.querySelector(".our-story");

  console.log(content);

  const container = document.createElement("div");
  container.id = "shop";
  console.log("Shop activated");
  content.appendChild(container);
  cards();
};

const cards = () => {
  const shop = document.getElementById("shop");

  const cardsCreator = (id) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `${id}`;

    const img = new Image();
    card.appendChild(img);

    shop.appendChild(card);
  };
  cardsCreator("img1");
  cardsCreator("img2");
  cardsCreator("img3");


  const title = document.createElement('div');
  title.textContent
  
  const imageLink = (id, img) =>{
    const cardImg = document.getElementById(id).getElementsByTagName('img').item(0);
    cardImg.src = img;
    console.log("hello World imgs");
    console.log(cardImg);
    
  }

  imageLink("img1", img1);
  imageLink("img2", img2);
  imageLink("img3", img3);

  
};

export default shop;
