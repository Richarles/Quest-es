function resp_certas(){
    var cont=0;
    var certa=document.getElementsByName('x');
    var certa1=document.getElementsByName('y');
    var certa2=document.getElementsByName('z');
    
    if(certa[3].checked==true){
        cont++;
    }
    if(certa1[3].checked==true){
        cont++;
    }
    if(certa2[3].checked==true){
        cont++;
    }   
    document.getElementById('demo').innerHTML=cont+" acertos";
    
    if(cont<=1){
        document.querySelector("#demo").style.color="red";
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Questaoum");
    
  if (n >slides.length) {
      document.querySelector("#respostas").style.display="block";
      document.querySelector("#btn").style.display="none";

  }
    
  if (n < 1) {
      slideIndex =1;
  }
    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    slides[slideIndex-1].style.display = "block";
}