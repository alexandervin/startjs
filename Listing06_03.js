var A=[3,5,4,7,8,0,6,7,9,4,3];
var num;
for (var k=0; k < A.length; k++) {
    num = A[k];
    try{
        if(num==0) {
            throw 'нулевое значение';
        }
        document.write("Отличное от нуля число:" +num+ "<br>");
        }
    catch(e) {
        document.write("Внимание--" +e+ "<br>");
        continue;
    }   
    try {
        if(num%3==0)
         throw new Error("Число делится на 3");
 }  

catch(e) {
    document.write(e.message);
}
document.write("<hr>");
}