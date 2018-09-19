var A=[35478067943]
var num
for(var k=0;k<A.length;k++){
    num=A[k]
    try{
        if(num==0){
            throw "нулевое значение"
        }
        document.write("Отличное от нуля число:" +num+ "<br>")
        }
    catch(e){
        document.write("Внимание--"+e+"")
        continue
    }   
    
}