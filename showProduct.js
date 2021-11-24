
import { addToCart } from "./addtoCart.js";

//สร้างfunction showProduct วนลูปเเสดงรายการของรถ
export function showProduct(arr){
    // เลือก div ที่มี id product มาจากหน้า index
    const divProductEle = document.querySelector("#product");
    divProductEle.setAttribute("class","row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center")
    divProductEle.textContent = '';
    for (const i in arr) {
    // for (let i in arr) {
        //สร้าง div กําหนด attribute ของ id เเละตกเเต่ง
        const divCarEle = document.createElement("div");
        divCarEle.setAttribute("class", "card");
        divCarEle.setAttribute("style", "width: 18rem; line-height:1.6;");
        divCarEle.setAttribute("id", arr[i].carId);
    
        //สร้าง tag img กําหนด attribute src เพื่อนํา path file ของรูปภาพมาใส่ เเละกําหนดความกว้างความสูงของรูป
        //กําหนดให้ pCarImageEle เป็น child ของ div divCarEle
        const pCarImageEle = document.createElement("img");
        pCarImageEle.setAttribute("src", arr[i].image);
        pCarImageEle.setAttribute("height", "150px");
        pCarImageEle.setAttribute("width", "270px");
        pCarImageEle.setAttribute("class","card-img-top border border-5");
        
        divCarEle.appendChild(pCarImageEle);
    
        //สร้าง tag h3 เพื่อแสดงชื่อของรถเป็น heading3
        //กําหนดให้ h3CarNameEle เป็น child ของ div divCarEle
        const h3CarNameEle = document.createElement("h3");
        h3CarNameEle.setAttribute("class", "card-title");
        h3CarNameEle.textContent = arr[i].carName;

        divCarEle.appendChild(h3CarNameEle);

        //สร้าง tag p เพื่อแสดง color ของรถเป็น p
        //กําหนดให้ pCarColorEle เป็น child ของ div divCarEle
        const pCarColorEle = document.createElement("p");
        pCarColorEle.textContent = "Color: " + arr[i].color;
        pCarColorEle.setAttribute("class", "card-text");

        divCarEle.appendChild(pCarColorEle);
    
        //สร้าง tag p เพื่อแสดง price ของรถเป็น p
        //กําหนดให้ pCarPriceEle เป็น child ของ div divCarEle
        const pCarPriceEle = document.createElement("p");
        pCarPriceEle.textContent = "Price: " + arr[i].price;
        pCarPriceEle.setAttribute("class", "card-text");

        divCarEle.appendChild(pCarPriceEle);

        //สร้าง tag button เพื่อทำเป็นปุ่มในการเลือกรถเข้าตะกร้า
        //ทำฟังก็ชันให้กับปุ่ม button ให้แสดง id สินค้าออกมาเมื่อทำการกดเพิ่มสินค้าเข้าตะกร้า
        //พร้อมกับทำ condition ไว้ว่า ถ้าเพิ่มสินค้าที่มี id เหมือนกันให้เพื่อจำนวน quantity
        //โดนไม่ต้องสร้างลิสต์สินค้าใหม่ในตะกร้า
        const addCarEle = document.createElement("button");
        addCarEle.setAttribute("id","addToCart");
        addCarEle.setAttribute("class", "btn btn-outline-dark mt-auto");
        addCarEle.textContent = "Add to cart";
        divCarEle.appendChild(addCarEle);

        //เรียกใช้ function addTocart
        addToCart(addCarEle, i, arr);
    
        //กําหนดให้ divCarEle เป็น child ของ div divProductEle
        divProductEle.appendChild(divCarEle);
    } 
}

    