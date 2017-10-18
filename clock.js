(function (){
  
  var updateHour= function(){
    var date= new Date(),
        hours= date.getHours(),
        ampm,
        minutes=date.getMinutes(),
        seconds=date.getSeconds(),
        dayWeek=date.getDay(),
        day= date.getDate(),
        month=date.getMonth(),
        year=date.getFullYear();
    
    
    var pHours= document.getElementById("hours"),
        pAMPM= document.getElementById("ampm"),
        pMinutes= document.getElementById("minutes"),
        pSeconds= document.getElementById("seconds"),
        pWeekDay= document.getElementById("weekDay"),
        pDay=document.getElementById("day"),
        pMonth= document.getElementById("month"),
        pYear= document.getElementById("year");
    
    var week= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    pWeekDay.textContent= week[dayWeek];
     pDay.textContent=day; 
    
    var fullYear= ["January", "February","March","April","May","June","July","August","September","October","November","December"];
    pMonth.textContent=fullYear[month];
    
    pYear.textContent= year;
    
    if(hours>=12){
      hours = hours - 12;
      ampm="PM";
    }else{
      ampm="AM";
    }
    
    if (hours == 0){
      hours = 12;
    }
    
    pHours.textContent = hours;
    pAMPM.textContent= ampm;
    
    if(minutes<10){minutes= "0" + minutes};
    if(seconds<10){seconds= "0" + seconds};
    
    pMinutes.textContent=minutes;
    pSeconds.textContent=seconds;
  };
  
    
  
  
 updateHour();
  var interval= setInterval(updateHour,1000);
  
}())









////crear element
//var element = document.createElement("h2");
//
////crear nodo
//var contingut = document.createTextNode("ESCRIT DE PRACTIQUES");
////afegir contingut
//
//element.appendChild(contingut);
//
//// afegir atributs
//
//element.setAttribute("align", "center");
//
////agregar element al doc.
//
//document.getElementById("subtitol").appendChild(element);
//
//var elementDos = document.createElement("li");
//
//var contigutDos = document.createTextNode("nou text de practica");
//
//elementDos.appendChild(contigutDos);
//
//var pare = document.getElementsByTagName("li")[0].parentNode;
//var ref = document.getElementsByTagName("li")[0];
//pare.appendChild(ref);
//
//var elementTres = document.createElement("div");
//var pare3 = document.getElementById("container");
//var refe = document.getElementsByTagName("div")[0];
//
//elementTres.setAttribute("class", "blau");
//
//pare3.insertBefore(elementTres, refe);
//
////var zoom= function(){
////  var thumb= document.getElementById("thumb");
////  if(thumb.className=="thumb"){
////    thumb.className = "thumb gran";
////  }else{
////    thumb.className = "thumb";
////  }
////}
//
////(function () {
////
////  var saludo = function (e) {
////console.log("event de tipus: " + e.type);
////  };
////            
////  var boton = document.getElementById("boton");
////  boto.addEventListener("click", saludo);
////}());
//
////(function () {
////  
////var form= document.getElementsByName(form)[0],
//// boton= document.getElementById("btn");
////
////  var validarNom=function(e){
////    if(form.nom.value == 0){
////      alert("incompet");
////      e.preventDefault();
////    }
////  };
////  
////  var validarRadio= function(){
////    if(form.genere[0].checked==true|| form.genere[1].checked==true){ 
////    }else{
////      alert("incomplet");
////      e.preventDefault();
////    }
////  }
////  var validarCheckbox= function(e){
////    if(form.tIc.checked==false){
////      alert("incomplet");
////      e.preventDefault();
////    }
////  }
////  
////var validar=function(e){
////  validarNom(e);
////  validarRadio(e);
////}
////  
////  form.addEventListener("submit", validar);
////}())
////
////(function(){
////  var contador=0;
////var saludo= function(){
////  console.log(contador);
////  contador++;
////  if(contador===5){
////    clearInterval(intervalo)
////  }
////};  
//////  setTimeout(saludo, 3000);
////  
////  var intervalo= setInterval(saludo, 1000);
////}())
//
//(function(){
//  var fecha = new Date();
//  document.write(fecha);
//  
//  console.log(fecha.getHours()-12);
//  console.log(fecha.getMinutes());
//  console.log(fecha.getSeconds());
//  
//  
//    console.log(fecha.getDay());
//    console.log(fecha.getDate());
//    console.log(fecha.getMonth());
//    console.log(fecha.getFullYear());
//
//  
//}())
