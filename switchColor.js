import { colImg } from "./searchProduct.js";

export function init() {
  let bgcolor = document.body.style.backgroundColor = "white";
  let h1 = document.getElementById("h1").style.color = "black";
  let num = document.getElementById("num").style.color = "black";
  colImg.setAttribute("src","image/dark.png")
  
  localStorage.setItem("BG", bgcolor);
  localStorage.setItem("fontColor", h1)
  localStorage.setItem("amountColor", num)
  localStorage.setItem("theme", colImg.src)
}

//function นี้ไว้สําหรับการเปลี่ยนโหมดโดยถ้ามันเป็นพื้นหลังสีสว่างอยู่เมื่อ function นี้ทํางานมันจะเปลี่ยนเป็นพื้นหลังสีมืด
//รวมถึงตัวหนังสือหัวข้อเเละเลขสินค้าที่อยู่ในตะกร้าขณะนั้นก็จะเปลี่ยนเป็นสีขาว เเละ colImg ก็จะเปลี่ยนเป็นรูปสีขาวเเทน
//สร้าง local storage ไว้เก็บสี background, สีของหัวข้อ, สีของเลขจํานวนสินค้าเเละ colImg
//เเต่ถ้าขณะนั้นเป็นพื้นหลังสีมืดอยู่เมื่อ function นี้ทํางานมันจะเปลี่ยนเป็นพื้นหลังสีสว่าง การทํางานข้างใน elseก็จะคล้ายๆ if
//เเต่ว่าจะเเตกต่างที่สีที่นํามาเเสดงผลเเละสีที่นําไปเก็บใน local storage
export function switchMode() {
  if (document.body.style.backgroundColor == "white") {
    alert(`change to dark`);
    let bgcolor = (document.body.style.backgroundColor = "#424242");
    let h1 = (document.getElementById("h1").style.color = "white");
    let num = (document.getElementById("num").style.color = "white");
    colImg.setAttribute("src", "image/light.png");

    localStorage.setItem("BG", bgcolor);
    localStorage.setItem("fontColor", h1);
    localStorage.setItem("amountColor", num);
    localStorage.setItem("theme", colImg.src);
  } else {
    alert(`change to light`);

    let bgcolor = (document.body.style.backgroundColor = "white");
    let h1 = (document.getElementById("h1").style.color = "black");
    let num = (document.getElementById("num").style.color = "black");
    colImg.setAttribute("src", "image/dark.png");

    localStorage.setItem("BG", bgcolor);
    localStorage.setItem("fontColor", h1);
    localStorage.setItem("amountColor", num);
    localStorage.setItem("theme", colImg.src);
  }
}

export function save() {
  //ดึง value ที่อยู่ใน local storage ออกมา
  let getBgColor = localStorage.getItem("BG");
  let getFontColor = localStorage.getItem("fontColor");
  let getAmountColor = localStorage.getItem("amountColor");
  let getTheme = localStorage.getItem("theme");

  //เอา value ที่ได้มาเปลี่ยนตามที่ user เลือกล่าสุด
  document.body.style.backgroundColor = getBgColor;
  document.getElementById("h1").style.color = getFontColor;
  document.getElementById("num").style.color = getAmountColor;
  document.getElementById("theme").src = getTheme;
}
