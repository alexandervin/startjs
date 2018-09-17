var obj={}
obj.name="Alexandr"
obj.age=30
obj.show=function(){
document.write("<b>Imya</b>: "+this.name+"<br>")
document.write("<b>Vozrast</b>: "+this.age+"<br>")
}
obj.show()