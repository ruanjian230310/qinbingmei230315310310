function cj(n){
if(n>=90){
    return '优秀';
}
if(n<90 && n>=80){
    return '良';
}
if(n<80 && n>=70){
    return '良好';
}
if(n<70 && n>=60){
    return '及格';
}
if(n<60){
    return '不及格';
}
}
var result;
result=cj(80);
console.log(result)
