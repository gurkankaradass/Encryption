const leftText = document.querySelector("#leftTextarea");
const rightText = document.querySelector("#rightTextarea");
const encodeButton = document.querySelector("#encode");
const decodeButton = document.querySelector("#decode");
const cleanButton = document.querySelector("#clean");

runEventListener();

function runEventListener(){
    encodeButton.addEventListener("click", encode);
    decodeButton.addEventListener("click", decode);
    cleanButton.addEventListener("click", clear)
}

function encode(){
    if(leftText.value==""){
        alert("Kriptolonacak Şifreyi Giriniz");
        return;//Methodu sonlandırır
    }
    rightText.value = btoa(leftText.value);
    leftText.value = "";
}

function decode(){
    if(rightText.value==""){
        alert("Çözülecek Şifreyi Giriniz");
        return;//Methodu sonlandırır
    }
    leftText.value = atob(rightText.value);
    rightText.value="";
}

function clear(){
    leftText.value = "";
    rightText.value="";
}