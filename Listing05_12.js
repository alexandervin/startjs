// Преобразование в прототипе метода toString():
Array.prototype.toString=function(){
var txt="< "+this.join(" ; ")+" >"
return txt
}
// преобразование в прототипе метода valueOf():
Array.prototype.valueOf=function(){
return eval(this.join("+"))/this.length
}
// Массив:
var A=[1,[2,3],4,"текст",true]
document.write("Массив:<br>")
// Оттображение массива  (вызывается метод toString()):
document.write(A)
// Массив:
var B=[3,5,1,8,2]
// отображение массива (вызывается метод toString()):
document.write(["<br>B = ",B].join(""))
// вызывается метод valueOf():
document.write("<br>Среднее значение: "+B+"<br>")
// явный вызов метода toString() и valueOf():
document.write("Массив "+[1,2,3,4].toString()+" - Среднее "+[1,2,3,4].valueOf())