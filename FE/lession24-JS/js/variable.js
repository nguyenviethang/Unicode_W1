//khai bao bien
var customerName,
  customerAge,
  customerAddress = "Ha noi",
  userName = "nguyen viet thang";
var userId = 10;
var customerAge = 30;

//thay doi gia tri cua bien bang cach gan lai va no nhan gia tri cuoi cung
// chuong trinh se doc tu tren xuong, tu trai sang phai

customerAddress = "Nghe an";
console.log(customerName);
console.log(customerAge);
console.log(customerAddress);
console.log(userId);
console.log(customerAge);
console.log(userName);
//in gia tri ra trinh duyet
document.write(customerAddress);

//noi bien trong js => dang toan tu +

var before = "<h2>";
var after = "</h2>";
var html = before + customerAddress + after;
console.log(html);
document.write(html);
/**khi gan bien trong js la 1 chuoi => chi chap nhan tren 1 dong */
/**cach khac thay dau nhay don va nhay kep bang dau ` `
 * <div class="post_title">
 *     <h2><a href="https://hoangan.net/
 *      huong-dan-tu-hoc-lap-trinh-php-hieu-qua.html" >huong dan tu    hoc lap trinh PHP hieu qua </a></h2>
 * </div>
 */

title = "huong dan tu hoc lap trinh PHP hieu qua";
link = "https://hoangan.net/huong-dan-tu-hoc-lap-trinh-php-hieu-qua.html";
var postTitle = `<div class="post_title">
    <h2><a href="${link}">${title}</a></h2>
 </div>`;
document.write(postTitle);
//day la cach noi bien: ${tenbien}
