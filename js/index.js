function myFunction() {
    var element = document.body;
    element.classList.toggle("retro-mode");
  }

function changeImage(){
    if(document.getElementById('retroButton').checked){
        var img1 = document.getElementById("img1");
        img1.src="images/instruct4.jpg"
        return false;
    }
    else{
        var img1 = document.getElementById("img1");
        img1.src="images/instruct1.jpg"
        return false;
    }
}

function changeImage2(){
    if(document.getElementById('retroButton').checked){
        var img2 = document.getElementById("img2");
        img2.src="images/instruct5.jpg"
        return false;
    }
    else{
        var img2 = document.getElementById("img2");
        img2.src="images/instruct2.jpg"
        return false;
    }
}

function changeImage3(){
    if(document.getElementById('retroButton').checked){
        var img3 = document.getElementById("img3");
        img3.src="images/instruct6.jpg"
        return false;
    }
    else{
        var img3 = document.getElementById("img3");
        img3.src="images/instruct3.jpg"
        return false;
    }
}