var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var OutputDiv = document.querySelector("#output");


function clickHandler() {
 OutputDiv.innerText = "aaaaaaaaaaaaaaaaaa  " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);
