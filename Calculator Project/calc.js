function erase(){
    document.getElementById("writebox").value= 0;
    document.getElementById("outputbox").value = 0;
}

function del(){
  var del1 = document.getElementById("writebox").value;
  var result = del1.slice(0,-1);
  document.getElementById("writebox").value = result;
}

function percentage(){
    document.getElementById("writebox").value += "%";
}

function divison(){
    document.getElementById("writebox").value += "/";
}

function seven(){
    document.getElementById("writebox").value += 7;
}

function eight(){
    document.getElementById("writebox").value += 8;
}

function nine(){
    document.getElementById("writebox").value += 9;
}

function multiplication(){
    document.getElementById("writebox").value += "*";
}

function four(){
    document.getElementById("writebox").value +=4;
}

function five(){
    document.getElementById("writebox").value +=5;
}

function six(){
    document.getElementById("writebox").value +=6;
}

function subtraction(){
    document.getElementById("writebox").value +="-";
}

function one(){
    document.getElementById("writebox").value +=1;
}

function two(){
    document.getElementById("writebox").value +=2;
}

function three(){
    document.getElementById("writebox").value +=3;
}

function addition(){
    document.getElementById("writebox").value +="+";
}

function zero(){
    document.getElementById("writebox").value +=0;
}

function equal(){
  var data =  document.getElementById("writebox").value;
  if(data == 0){
      alert("Plaese Enter a value")
  }
  else{
    var result1 = eval(data);
    document.getElementById("outputbox").value = result1;
  }
}
