try{
    document.write("Начало выполнения <code> try </code> блока <br>")
    //Отображение поля для ввода считывания строки
     var txt=prompt("Введите значение для вычисления:")
    //Попытка вычислить значение записанное в переменную txt
    document.write("Результат вычисления:" +eval(txt)+"<br>")
    document.write("Конец тру блока завершено <br>")
}
// обработка исключительных событий
catch(e){
    document.write("<b>Произошла ошибка</b><br>")
    var name=e.name
    var message=e.message
    var str
    switch(name){
        case "ReferenceError":
         str="Некорректная ссылка"
        break
        case "SyntaxError":
         str="Синтаксическая ошибка"
        break
        default:
         txt="Ошибка"+name

    }
}
//отображение характеристик ошибки
document.write("<b>Внимание! Произошла ошибка<b><br>")
document.write("Тип ошибки:" +txt+"<br>")
document.write("Описание ошибки:"+message+"<br>")

document.write("Завершени сценария")

/*
document.write("Íà÷àëî âûïîëíåíèÿ <code>try</code>-áëîêà<br>")
var txt=prompt("Ââåäèòå âûðàæåíèå äëÿ âû÷èñëåíèÿ:")
document.write("Ðåçóëüòàò âû÷èñëåíèÿ âûðàæåíèÿ: "+eval(txt)+"<br>")
document.write("Âûïîëíåíèå <code>try</code>-áëîêà çàâåðøåíî<br>")
}
catch(e){
// Íàçâàíèå îøèáêè
var name=e.name
// Îïèñàíèå îøèáêè:
var message=e.message
// Òåêñò äëÿ îòîáðàæåíèÿ:
var str
// Ïðîâåðêà òèïà îøèáêè:
switch(name){
case "ReferenceError":
str="Íåêîððåêòíàÿ ññûëêà"
break
case "SyntaxError":
str="Ñèíòàêñè÷åñêàÿ îøèáêà"
break
default:
str="Îøèáêà "+name
}
// Îòîáðàæåíèå õàðàêòåðèñòèê îøèáêè:
document.write("<b>Âíèìàíèå! Ïðîèçîøëà îøèáêà!</b><br>")
document.write("<b>Òèï îøèáêè: </b>"+str+"<br>")
document.write("<b>Îïèñàíèå îøèáêè: </b>"+message+"<br>")
// Äëÿ Mozilla Firefox:
if("fileName" in e){
document.write("<b>Ôàéë ñ îøèáêîé: </b>"+e.fileName+"<br>")
}
}
document.write("Âûïîëíåíèå ñöåíàðèÿ çàâåðøåíî")*/