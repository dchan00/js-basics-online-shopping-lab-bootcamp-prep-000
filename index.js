var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newObj = {}
 var rand = Math.floor(Math.random()*100)+1
 newObj[item]=rand

 cart.push(newObj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var tmp = 'In your cart, you have '

  if(cart.length===0){
    console.log('Your shopping cart is empty.')
  }
  else if(cart.length===1){
    tmp = tmp + Object.keys(cart)[0] + ' at ' + Object.values(cart)[0]] + '.'
    console.log(tmp)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
