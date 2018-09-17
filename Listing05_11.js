// фунцкция отображения массива
function show(name,array){
document.write(name+" = "+array.join(" | ")+"<br>")
}
// фукция копирования массива:
function makeCopy(array){
// создание массива:
var tmp=new Array(array.length)
//поэлементное копирование значений :
for(var k=0;k<tmp.length;k++){
// если копируемый элемент массив:
if(Array.isArray(array[k])){
// рекурсивный вызов функции:
tmp[k]=makeCopy(array[k])
}
// если копируемый элемент не массив:
else{
tmp[k]=array[k]
}
}
// результат фукции - массив:
return tmp
}
// создание массива с числовыми элементами:
var A=[1,2,3,4,5]
show("A",A)
// создание массива Б копией:
var B=makeCopy(A)
document.write("После присваивания <code> B = makeCopy(A)</code>:<br>")
show("B",B)
// присваивание значения элементц массива:
A[0]=100
document.write("После присваивания <code>A[0] = 100</code>:<br>")
show("A",A)
show("B",B)
document.write("Массив содержит среди элементов другой массив:<br>")
// Создание массива с элементом масситвом:
var C=[1,[2,3],4,5]
show("C",C)
// Создание копии массива:
var D=makeCopy(C)
document.write("После присваивания <code>D = makeCopy(C)</code>:<br>")
show("D",D)
// Присваивание значенийэлементам массива 
C[1][0]=200
C[1][1]=250
C[2]=400
C[3]=500
document.write("После выполнения команд <code>C[1][0] = 200</code> и </code>C[3] = 500</code>:<br>")
show("C",C)
show("D",D)