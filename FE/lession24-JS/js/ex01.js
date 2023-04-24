//khai mbao bien

var customerName,
  customerAge,
  customerAddress = "Ha noi";
var useId = 10;

//gan bien
customerAge = 30;

//khi thay doi giatri cau bien bang cach gan lai
customerAddress = "ho chi minh city";

console.log(customerName);
console.log(customerAge);
console.log(customerAddress);
console.log(useId);
console.log(customerAge);
console.log(customerAddress);

var before = "<h2>";
var after = "</h2>";
var html = before + customerAddress + after;
console.log(html);

document.write(html);

// var postTitle = ` <div class="the_title">
//     <h1>lorem jdsahfjahjkfafsdf</h1>
// </div>`;
// document.write(postTitle);

title = "tu hoc lap trinh hieu qua";
var link = "https://vnexpress.net/";
var postTitle = `<div class="post_title">
<h2><a href="${link}">${title}</a></h2>
</div>`;
document.write(postTitle);
