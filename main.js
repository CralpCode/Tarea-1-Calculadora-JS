var nums = "";
var numbers = 0;
var operationNum = 0;
var all = "";
var data = document.getElementById("data");
var eraser = document.getElementById("eraser");

function btns(num) {

    if (num == "=") {
        
    }

    if (num == '+' || num == '-' || num == '/' ||num == '*' ) {
        all = all + num;
        data.innerHTML = all;
    }


}

function scrollleftTop() {

    let dataWidth = data.scrollWidth;
    data.scrollTo(dataWidth.toFixed(), 0);

}

function btnEraser(valor) {

    if (valor == false) {
        data.innerHTML = '0';
        all = "";
        nums = "";
        numbers = 0;
        operationNum = 0;
    }

    if (valor == true) {
        let valueWord = data.textContent;
        let newvalueWord = valueWord.substring(0, valueWord.length - 1);
        data.innerHTML = newvalueWord;
        all = newvalueWord;
    }

}