var age = 25;
console.log('=====start====');
if (age>=30) {
    console.log('ban du tuoi');
}else {
    console.log('ban chua du tuoi');
}
console.log('=====continue====');

var number = 10;
if (number<0){
    console.log('so am');
}else if(number >=0 && number < 5){
    console.log('so sieu nho');
}else if(number >=5 && number < 10){
    console.log('so nho');
}else if(number >=10 && number <15){
    console.log('so trung binh');
}else if(number >= 15 && number <20){
    console.log('so lon');
}else if(number >=20){
    console.log('so sieu lon');
}
//if else long nhau
var username = '123', password = '123';
if (username ==='' || password===''){
    if(username === ''){
        console.log('vui long nhap username');
    }else{
        console.log('vui long nhap password');
    }
}else{
    console.log('thoa man dieu kien');
}
var A = 0;
/**
 * co che ep lieu sang boolean(true false)
 * 0, empty, null => false
 * cac truong hop con lai => true
 */
if (A){//check === true
    console.log('ket qua dung');
}else{
    console.log('ket qua sai');
}