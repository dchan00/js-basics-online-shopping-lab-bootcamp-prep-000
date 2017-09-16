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
  else {
    for(var i=0; i<cart.length; i++) {
      if(cart.length===1){
        tmp += Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])] + '.'
        console.log(tmp)
      }
      else if(cart.length===2){
        tmp += Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])]

        if(i===cart.length-1){
          tmp += '.'
        }
        else{
          tmp += ' and '
        }
        console.log(tmp)
      }
      else{
        if(i===cart.length-1){
          tmp += 'and '
        }
        tmp += Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])]

        if(i===cart.length-1){
          tmp += '.'
        }
        else{
          tmp += ', '
        }
        console.log(tmp)
      }
    }
  }

}

function total() {
  // write your code here
  var total = 0
  for (var i=0; i<cart.length; i++){
      total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
