//No More var - let, const
//Fat arrow functions
//Object literal value shorthand notation
//String template literals

var allProducts = [];

var product1 = {
  name: "Mop Attire",
  imagePath: "./images/mopAttire.jpg",
  imageAlt: "Product: Mop Attire",
  description: "This is a really good description of our product. It really sells it. It;s the best.",
  price: 3000,
  soldOut: false
};

var product2 = {
  name: "Taco Suit",
  imagePath: "./images/tacoSuit.jpg",
  imageAlt: "Product: Taco Suit",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 25,
  soldOut: false
};

var product3 = {
  name: "Neck Decoration",
  imagePath: "./images/neckDecoration.jpg",
  imageAlt: "Product: Neck Decoration",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 750,
  soldOut: false
};

var product4 = {
  name: "Head Ornament",
  imagePath: "./images/headOrnament.jpg",
  imageAlt: "Product: Head Ornament",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 3.22,
  soldOut: true
};

var product5 = {
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

console.log("All my weird baby products", allProducts);

var productContainer = document.getElementById("product-container");




function buildDomString (product){
  var domString = "";


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

var printProductArrayToDom = function(productArray){
  for(var i = 0; i < productArray.length; i++) {

  var currentProduct = productArray[i];
  var productDomString = buildDomString(currentProduct);
  productContainer.innerHTML += productDomString;
  }
}

printProductArrayToDom(allProducts);

var selectedCard;

document.getElementById("product-container").addEventListener("click", function(event){
  console.log(event);
  changeBorder(event);
  printSelectedDescription();
});

function changeBorder(event){
  if (event.target.classList.contains("child")){
    selectedCard = event.target.parentNode;
  } else if (event.target.parentNode.parentNode.classList.contains("product")){
    selectedCard = event.target.parentNode.parentNode;
  } else if (event.target.classList.contains("product")){
    selectedCard = event.target;
  }
  
  selectedCard.classList.add("border-funsies");
}

function printSelectedDescription(){
  var description = selectedCard.childNodes[2].childNodes[0].innerHTML;
  console.log(description);
}
