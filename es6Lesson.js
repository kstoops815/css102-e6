//No More var - let, const
//Fat arrow functions
//Object literal value shorthand notation
//String template literals
//let poop = "crap"; //let allows you to change the value to the variable
//poop = 4;


//const does not allow you to change the value of the variable
//you never declare a const with no value it would never have a value
//const poop = "crap"; 

let allProducts = [];

const product1 = {
  name: "Mop Attire",
  imagePath: "./images/mopAttire.jpg",
  imageAlt: "Product: Mop Attire",
  description: "This is a really good description of our product. It really sells it. It;s the best.",
  price: 3000,
  soldOut: false
};

//you can change things within the object, just not the object itself using a const

const product2 = {
  name: "Taco Suit",
  imagePath: "./images/tacoSuit.jpg",
  imageAlt: "Product: Taco Suit",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 25,
  soldOut: false
};

const product3 = {
  name: "Neck Decoration",
  imagePath: "./images/neckDecoration.jpg",
  imageAlt: "Product: Neck Decoration",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 750,
  soldOut: false
};

const product4 = {
  name: "Head Ornament",
  imagePath: "./images/headOrnament.jpg",
  imageAlt: "Product: Head Ornament",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 3.22,
  soldOut: true
};

const product5 = {
  name: "Boob Hat",
  imagePath: "./images/boobHat.jpg",
  imageAlt: "Product: Boob Hat",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 36,
  soldOut: true
};

allProducts.push(product1);
allProducts.push(product2);
allProducts.push(product3);
allProducts.push(product4);
allProducts.push(product5);


//Object literal value shorthand notation
const addNewProduct = (name, imagePath, imageAlt, description, price, soldOut) => {
  const newProduct = {name, imagePath, imageAlt, description, price, soldOut};
  allProducts.push(newProduct);
}

addNewProduct("Butt Cream", "https://upload.wikimedia.org/wikipedia/en/e/e8/Boudreauxs_Butt_Paste.jpg", "Here is a picture of butt cream", "rub on", 4.99, true);

console.log("All my weird baby products", allProducts);





const productContainer = document.getElementById("product-container");




const buildDomString = (product) => {
  //var changed to let because you are always changing the value
  let domString = "";


  domString+=   '<section class="product">';
  domString+=     '<div class="title child">';
  domString+=       '<h2>' + product.name + '</h2>';
  domString+=     '</div>';
  domString+=     '<div class="image child">';
  domString+=       '<img src="'+ product.imagePath +'" alt="'+product.imageAlt +'">';
  domString+=     '</div>';
  domString+=     '<div class="description child">';
  domString+=       '<p>' + product.description +'</p>';
  domString+=       '<h6>$'+ product.price +'</h6>';
  domString+=     '</div>';
  if (product.soldOut) {
    domString+= '<div class="sold-out child">';
    domString+=    '<img src="./images/soldOut.png" alt="Sold Out">';
    domString+=  '</div>';
  }
  domString+=   '</section>';
  return domString;

}

//change the var to const so that you can't overwrite the variable later 
//fat arrow function notation
const printProductArrayToDom = (productArray) => {
  //the var has to be let since the value is always changing thru the for loop
  for(let i = 0; i < productArray.length; i++) {
//these should be changed to const since they don't exist outside of the for loop
//also, once you go thru the for loop once, then it is erased and goes thru the 
//loop the next time, and it only knows that value, and so on and so forth
  const currentProduct = productArray[i];
  const productDomString = buildDomString(currentProduct);
  productContainer.innerHTML += productDomString;
  }
}

printProductArrayToDom(allProducts);


//this var changes to let since the value is always changing
let selectedCard;

//inside the event listener, an anonymous function using fat arrow function
document.getElementById("product-container").addEventListener("click", (event) => {
  console.log(event);
  changeBorder(event);
  printSelectedDescription();
});

const changeBorder = (event) => {
  if (event.target.classList.contains("child")){
    selectedCard = event.target.parentNode;
  } else if (event.target.parentNode.parentNode.classList.contains("product")){
    selectedCard = event.target.parentNode.parentNode;
  } else if (event.target.classList.contains("product")){
    selectedCard = event.target;
  }
  
  selectedCard.classList.add("border-funsies");
}



const printSelectedDescription = () => {
  //this var changes to const since it is inside a function and not global
  const description = selectedCard.childNodes[2].childNodes[0].innerHTML;
  console.log(description);
}
