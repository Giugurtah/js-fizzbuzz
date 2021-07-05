var resultPlaceHolder = document.getElementById("result");
var message = "";

for (var i=1; i<=100; i++) {
    if(i%3==0){
        message = message + "fizz";
    }
    if(i%5==0){
        message = message + "buzz";
    }
    if(i%5 !=0 && i%3!=0) {
        message = message + i;
    }
    message = message + " <br> ";
}

resultPlaceHolder.innerHTML = "Impara a contare con noi!! <br>" + message;