import { carts } from "./searchProduct.js";
import { CookieUtil } from "./cookies.js";

export function addToCart(addCarEle, i, arr) {
    //เมื่อคลิกที่ปุ่มเพิ่มสินค้าลงตะกร้า มันจะส่ง alert มา ถ้าตกลงมันจะนําข้อมูลต่างๆของสินค้านั้นมาเก็บในตัวเเปร newItem
    addCarEle.addEventListener("click", () => {
        alert(`add car name : ${arr[i].carName}`);
        let newItem = {
            id: arr[i].carId,
            name: arr[i].carName,
            color: arr[i].color,
            qty: 1,
        };

        //เช็คว่ามีสินค้าชิ้นนั้นอยู่ในตะกร้าหรือยัง ถ้าไม่ก็นํา newItem ไปใส่ใน array ได้เลย
        if (carts.items.length == 0 || carts.itemId.includes(newItem.id) == false) {
            carts.items.push(newItem);
            carts.itemId.push(newItem.id);
        } else {
            //เก็บ array ใช้ใน previous ที่เริ่มต้นจาก 0 แล้ว เช็คเงื่อนไขว่า ถ้า id ของ item ที่เพิ่มชิ้นใหม่ขึ้นมา
            //เท่ากับชิ้นที่จะเพิ่มขึ้นมาแล้ว จะทำการเพิ่มสินค้าใน item ชิ้นนั้น 1 ชิ้น ถ้าไม่ตรงจะไม่เพิ่ม item ขึ้น
            carts.items.reduce((previous, current) => {
                return (current.qty += newItem.id == current.id ? 1 : 0);
            }, 0);
        }

 
        //สร้าง attribute ใหม่ชื่อว่า amount ไว้แสดงจำนวนสินค้าที่ได้ทำการกด add เข้าไปใน cart
        carts.totalQty = carts.items.reduce((sum, item) => {
            return (sum += item.qty);
        }, 0);

        const amount = document.querySelector("#num");
        amount.textContent = carts.totalQty;
        console.log(carts);

        //สร้าง cookies ที่ชื่อว่า cart เมื่อมีการ add สินค้าลงตะกร้าสินค้า
        //JSON คือ รูปแบบของข้อมูลที่ใช้สำหรับแลกเปลี่ยนข้อมูลที่มีขนาดเล็ก
        //JSON.stringify() รับวัตถุ JavaScript จากนั้นแปลงเป็นสตริง JSON
        CookieUtil.set("Cart", JSON.stringify(carts));
    });
}