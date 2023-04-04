var numberA = 10;
var numberB = '20';
var numberC = numberA + parseInt(numberB);//ep kieu numberB
console.log(numberC)
//phep tang: ++
var count = 0, total = 0;
// tang them 1 don vi
// count = count+1;
// count+=1; //count = count+1;
// count++; //count = count+1;
// ++count; //count = count+1;

//su khac nhau giua count ++ va c++count

//neu dung doc lap==> giong nhau
//neu gan voi mot bien thuc:
//TH1 total = count++;
total = 10 + ++count;
console.log(count);
console.log(total);
// tuong tu count-- va --count 
var check1 = '10', check2 = 10;
// console.log(check1 === check2);
// toan tu == so sanh gia tri, toan tu === so sanh gia tri cung voi kieu du lieu 
// console.log(check1 != check2); //so sanh khac nhau theo gia tri
// console.log(check1 !== check2); // so sanh khac nhau theo gia tri cung voi kieu du lieu, chi can false 1 trong 2 dieu kien thi ket qua tra ve true
//toan tu ly luan
var numberA1 = 10, numberB1 = 20;

// var check = numberA1>=10 && numberB1>=20; // voi and thi chi can 1 bieu thuc sai thi tra ve false
// var check = numberA1>=10 || numberB1>20; // voi OR thi chi caan 1 bieu thuc dung thif ket qua tra ve true
var check = !(numberA1>=10) // voi NOT thi bieu thuc true thi ket qua tra ve false va nguoc lai

console.log(check);