export class CookieUtil {
    //หา value ของ cookie ที่มี parameter name เป็นตัวรับ
    static get(name) {
        //if cookie has name: cart , value: %7B%22id%22%3A%22h001%22%2C%22qty%22%3A1%7D //object by url encode format 
      console.log(`all cookies: ${document.cookie}`); //all cookies: cart=%7B%22id%22%3A%22h001%22%2C%22qty%22%3A1%7D
      //cookieName เก็บ URL ที่ encode ออกมา , cookieStart ทำ
      let cookieName = `${encodeURIComponent(name)}=`, //หา name ของ cookie
        cookieStart = document.cookie.indexOf(cookieName), //หา index เริ่มต้นของ value ใน cookie ที่จะไปหา name
        cookieValue = null;
      console.log(`cookieName = ${cookieName}`); // cookieName = cart=
      console.log(`cookieStart = ${cookieStart}`); // cookieStart = 0

      //ตรวจสอบว่า cookieStart ควรมากกว่า -1
      if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(";", cookieStart); //หา index เริ่มต้นของ value ที่อยู่ หลัง cookieStart ใน cookie ที่จะไปหา name
        console.log(`cookieEnd = ${cookieEnd}`); // cookieEnd = -1
        if (cookieEnd == -1) {
          cookieEnd = document.cookie.length; //ควรจะมีค่าเท่ากับ -1
        }
        cookieValue = decodeURIComponent(
          document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
        ); //ทำการ decode substring ของ cookie จาก ตำแหน่งที่ cookie name ไปถึงตอนที่เรียก value ของ cookie
        console.log(`cookieValue = ${cookieValue}`);
      }
  
      return cookieValue; //return value ของ cookie
    }

    //สร้าง cookie ที่มี name, value และ expire ขึ้นมา
    static set(name, value, expires) {
      //สร้าง cookie
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

      //เช็คว่าถ้าหาก cookie หมดอายุจะไม่แสดงผลขึ้นมาบน console
      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toUTCString()}`;
        // cookieText += `; expires=${expires}`;
      }

      console.log(`cookieText = ${cookieText}`); // cookieText = cart=%7B%22id%22%3A%22h001%22%2C%22qty%22%3A1%7D
      document.cookie = cookieText;
    }

    //ลบ cookie ที่ขึ้นอยู่กับ browser เมื่อ parameter name ตรงกัน เพราะว่า cookie หมดอายุในวันที่ 1 มกราคม 1970
    static unset(name) {
      CookieUtil.set(name, "", new Date(0)); // Date(0) = January 1, 1970
    }
}