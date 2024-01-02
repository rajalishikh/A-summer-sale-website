let total = 0;
function handleClick(target) {
  // find the name 
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement('li');
  li.innerText = itemName;
  
  // add the name in calculation section 
  const createdContainerList = document.getElementById('created');
  createdContainerList.appendChild(li);
  // find the add section 
  const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
  console.log(price);
  // add them
    total = parseInt(total) + parseInt(price);
    // set them into calculation section
 
    document.getElementById('total').innerText = total.toFixed(2);
    // find the purchas buatton
    if (total > 0) {
      const makeParchesButton = document.getElementById('Purchase');
      makeParchesButton.removeAttribute('disabled')
    }
    if (total >= 200) {
      const applyButton = document.getElementById('Apply2');
      applyButton.removeAttribute('disabled')
    }

}
// my calculation part

function couponApply() {
  const couponFieldValue = document.getElementById('Apply1').value;
  const totalValue = parseFloat(document.getElementById('total').innerText);
  const discountField = document.getElementById('discount');
  const grandtotalField = document.getElementById('grand-total');
  if (couponFieldValue == 'SELL200') {
    const discountValue = totalValue * 0.2;
    discountField.innerText = discountValue.toFixed(2);
    const grandtotalValue = totalValue - discountValue;
    grandtotalField.innerText = grandtotalValue.toFixed(2);
  }
  // my bonus part 
}
function buttonApply() {
  window.location.href = 'http://127.0.0.1:5500/index.html';
  
 

}
  
