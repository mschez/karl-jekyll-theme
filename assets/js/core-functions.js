function decreaseQuantity() {
  var effect = document.getElementById('qty');
  var qty = effect.value;

  if(!isNaN(qty) && qty > 1) {
    effect.value--;
  }

  return false;
}

function increaseQuantity() {
  var effect = document.getElementById('qty');
  var qty = effect.value;

  if(!isNaN(qty)) {
    effect.value++;
  }

  return false;
}
