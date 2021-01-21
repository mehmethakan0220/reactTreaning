import ReactDOM from "react-dom";

//jsx varsayılan olarak injeciton vs xss saldırılarını önler
/*
Çünkü varsayılan olarak React DOM, render işlemi öncesinde gömülen değerlerdeki
<, & gibi bazı özel karakterleri &lt; ve &amp; olacak şekilde dönüştürür.
Böylece uygulama içerisinde, kullanıcının yazabileceği kötü amaçlı kodların
enjekte edilmesi engellenmiş olur. Render işlemi öncesi her şey string ifadeye
dönüştürüldüğünden dolayı, XSS saldırıları engellenmiş olur.


*/

const title = response.potentiallyMaliciousInput;
// Bu kullanım güvenlidir:
const element = <h1>{title}</h1>;


ReactDOM.render(jsxElement, document.getElementById("root"));

























































//
