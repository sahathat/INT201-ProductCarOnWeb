import { car } from "./carList.js";
import { showProduct } from "./showProduct.js";
import { CookieUtil } from "./cookies.js";
import { clearCart } from "./clearCart.js";
import { init, switchMode, save } from "./switchColor.js";

//สร้าง object ของ cart เก็บสินค้าที่เพิ่มเข้ามาในตะกร้า
export let carts = { items: [], itemId: [], totalQty: 0 };

//เลือก div ที่มี id searchCart มาจากหน้า index
const divSearchCartEle = document.querySelector("#searchCart");

//สร้าง div(divSearch) span(spanSeachBar,spanCart)
//set attribute ให้กับ spanCart กําหนดให้ไปอยู่ทางขวามือของเพจ
const divSearch = document.createElement("div");
const spanSeachBar = document.createElement("span");
const spanCart = document.createElement("span");
spanCart.setAttribute("style", "float: right;");

//สร้าง img element ชื่อ colImg โดยกําหนดไอดีชื่อว่า theme
export const colImg = document.createElement("img");
// // let bgcolor = document.body.style.backgroundColor = "white";
// // let h1 = document.getElementById("h1").style.color = "black";
// // let num = document.getElementById("num").style.color = "black";
// themeColor.setAttribute("src", "image/dark.png");
// localStorage.setItem("BG", bgcolor);
// localStorage.setItem("fontColor", h1);
// localStorage.setItem("amountColor", num);
// localStorage.setItem("theme", colImg.src);
colImg.setAttribute("id", "theme");
colImg.setAttribute("src", "image/dark.png");
colImg.setAttribute("height", "30px");
colImg.setAttribute("width", "30px");
colImg.addEventListener("click", switchMode);

spanCart.appendChild(colImg);

//function นี้ไว้สําหรับการเปลี่ยนโหมดโดยถ้ามันเป็นพื้นหลังสีสว่างอยู่เมื่อ function นี้ทํางานมันจะเปลี่ยนเป็นพื้นหลังสีมืด
//รวมถึงตัวหนังสือหัวข้อเเละเลขสินค้าที่อยู่ในตะกร้าขณะนั้นก็จะเปลี่ยนเป็นสีขาว เเละ colImg ก็จะเปลี่ยนเป็นรูปสีขาวเเทน
//สร้าง local storage ไว้เก็บสี background, สีของหัวข้อ, สีของเลขจํานวนสินค้าเเละ colImg
//เเต่ถ้าขณะนั้นเป็นพื้นหลังสีมืดอยู่เมื่อ function นี้ทํางานมันจะเปลี่ยนเป็นพื้นหลังสีสว่าง การทํางานข้างใน elseก็จะคล้ายๆ if
//เเต่ว่าจะเเตกต่างที่สีที่นํามาเเสดงผลเเละสีที่นําไปเก็บใน local storage
// function switchMode() {
//     if(document.body.style.backgroundColor=="white") {
//         alert(`change to dark`)
//         let bgcolor = document.body.style.backgroundColor = "#424242";
//         let h1 = document.getElementById("h1").style.color = "white";
//         let num = document.getElementById("num").style.color = "white";
//         colImg.setAttribute("src","image/light.png")

//         localStorage.setItem("BG", bgcolor)
//         localStorage.setItem("fontColor", h1)
//         localStorage.setItem("amountColor", num)
//         localStorage.setItem("theme", colImg.src)

//     }else{
//         alert(`change to light`)
//         let bgcolor = document.body.style.backgroundColor = "white";
//         let h1 = document.getElementById("h1").style.color = "black";
//         let num = document.getElementById("num").style.color = "black";
//         colImg.setAttribute("src","image/dark.png")

//         localStorage.setItem("BG", bgcolor);
//         localStorage.setItem("fontColor", h1)
//         localStorage.setItem("amountColor", num)
//         localStorage.setItem("theme", colImg.src)
//     }
// }

//สร้าง image element ชื่อ searchIcon นํารูปมาใส่ กําหนดขนาดรูป
const searchIcon = document.createElement("img");
searchIcon.setAttribute("src", "image/searchIcon.png");
searchIcon.setAttribute("height", "30px");
searchIcon.setAttribute("width", "30px");

//สร้าง image element ชื่อ cart นํารูปมาใส่ กําหนดขนาดรูป
const cart = document.createElement("img");
cart.setAttribute("src", "image/cart.png");
cart.setAttribute("height", "35px");
cart.setAttribute("width", "35px");

//สร้าง span element ชื่อ amount ตกเเต่ง เเล้วกําหนดให้ตัวเลขสินค้าที่อยู่ในตะกร้า default = 0
const amount = document.createElement("span");
amount.setAttribute("id", "num");
// amount.setAttribute('class', 'border border-2 fs-5');
amount.setAttribute("style", "width: 10000px");
amount.textContent = " 0 ";

//สร้าง image element ชื่อ bin นํารูปมาใส่ กําหนดขนาดรูป set attribute id
//และตั้ง bin ไว้รับ event สำหรับลบทิ้งไอเทมใน cart ทั้งหมด
const bin = document.createElement("img");
bin.setAttribute("src", "image/bin.png");
bin.setAttribute("id", "clear");
bin.setAttribute("height", "35px");
bin.setAttribute("width", "35px");

//เมื่อกดที่ bin เเล้ว จะมี alert เด้งขึ้นมาเเจ้งเตือนว่าจะทําการลบสินค้าออกจากตะกร้าหรือไม่
//ถ้าคลิกตกลงมันจะลบสินค้าทั้งหมดที่อยู่ในตะกร้าเเละเเสดงจํานวนสินค้าในตะกร้าเป็น 0
// function clearCart() {
//     alert('click ok to clear all of carts')
//     carts = {items: [], itemId: [] , totalQty: 0};
//     const amount = document.querySelector('#num');
//     amount.textContent = 0;
//     console.log(carts)
//  console.log(carts)
//     //ให้มันไปลบ cookies ที่ชื่อ Cart เมื่อลบสินค้า
//     CookieUtil.unset("Cart");
// }
bin.addEventListener("click", () => clearCart(carts));

// appendChild ให้มัน
divSearch.appendChild(searchIcon);
divSearchCartEle.appendChild(divSearch);
divSearch.appendChild(spanSeachBar);
divSearch.appendChild(spanCart);
spanCart.appendChild(cart);
spanCart.appendChild(amount);
spanCart.appendChild(bin);

//สร้างช่อง input เเละปุ่ม button ไว้สําหรับ search สินค้า รวมถึง set attribute ให้มัน
const input = document.createElement("input");
input.setAttribute("id", "inputValue");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Search...");

const button = document.createElement("button");
button.textContent = "Search";
button.setAttribute("id", "searchButton");

//appendChild ให้มัน เเละกําหนดให้ spanSearchBar ไม่เเสดง
spanSeachBar.appendChild(input);
spanSeachBar.appendChild(button);
spanSeachBar.style.visibility = "hidden";

//ใช้ toggle เเล้ว add event ให้กับ searchIcon เมื่อคลิกเข้าไปตรงรูปภาพ search
//มันจะไปเรียกใช้ function showSearchBar
let toggle = true;
searchIcon.addEventListener("click", () => {
  toggle = !toggle;
  showSearchBar();
  
});

//function นี้ ไว้สําหรับซ่อนเเละเเสดงช่องค้นหาเเละปุ่ม button

function showSearchBar() {
  if (spanSeachBar.style.visibility == "hidden") {
    spanSeachBar.style.visibility = "visible";

    //ตัวแปรชื่อว่า searchBtn ไว้ใช้สำหรับค้นหาสินค้าที่ได้รับมาจาก searchbar
    //และเพิ่มดักจับ event ไว้จับเมื่อมีการกดเริ่ม search จะทำการหาชื่อของสินค้าที่คล้ายที่สุดที่ได้รับ input เข้ามา
    //โดยใช้ RegExp ไว้ใช้ว่า pattern เหมือนกันไหม โดย pattern จากตัวอักษรตัวพิมพ์ใหญ่และเล็กได้ แล้ว filter item ที่ match กันออกมาแสดง
    //note Regexp reference: https://blog.sessionstack.com/how-javascript-works-regular-expressions-regexp-e187e9082913

    const searchBtn = document.querySelector("#searchButton");
    searchBtn.addEventListener("click", () => {
      const value = document.querySelector("#inputValue").value;

      let pattern = new RegExp(value, "i");
      console.log(pattern);

      const newSearch = car.filter((item) => {
        return item.carName.match(pattern) != null;
      });
      console.log(newSearch);

      showProduct(newSearch);
    });

    const searchBar = document.querySelector("#inputValue");
    searchBar.addEventListener("keyup", () => {
      if (searchBar.value == "") {
        showProduct(car);
      }
    });

  } else {
    spanSeachBar.style.visibility = "hidden";
  }
}

//ถ้าในตะกร้าสินค้ามีสินค้าอยู่ ก็ไป get cookies ที่ชื่อ cart ออกมา
//ใช้ JASON.parse เพื่อเเปลงจาก text ไปเป็น javascript object
//เเล้วนําไปเก็บไว้ในตัวเเปร carts ที่เก็บข้อมูลของสินค้าที่อยู่ในตะกร้า
//query ตัวเลขของสินค้าที่อยู่ในตะกร้าที่มี id ชื่อ num ออกมา เก็บในตัวเเปร quantity
//ไปดึงข้อมูล totalQuantity(จํานวนสินค้าทั้งหมดที่อยู่ในตะกร้า) มาเก็บ
if (CookieUtil.get("Cart") != null) {
  carts = JSON.parse(CookieUtil.get("Cart"));
  let quantity = document.querySelector("#num");
  quantity.textContent = carts.totalQty;
}

init(); //กำหนดค่าเริ่มต้นของสีพื้นหลังเวลาเปิดเว็ปไซต์
save(); //เปลี่ยนสีเมื่อไปกดแล้วเกิด event



