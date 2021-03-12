
function moneyFormat(price, sign = "VND") {
    const pieces = parseFloat(price).toFixed(0).split(""); //phantach chuoi thaeo ki tu
    let ii = pieces.length - 3; //toFixed:chuyen thanh chuoi giu lai thap phan()
    while (ii > 0) {
      pieces.splice(ii, 0, "."); //xoa 0 pt vt ii them vao .
      ii -= 3; //1,234,567
    }
    return pieces.join("") + " " + sign;
  }
  export default {moneyFormat}