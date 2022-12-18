var nums = "";
var numbers = 0;
var operationNum = 0;
var all = "";
var data = document.getElementById("data");
var eraser = document.getElementById("eraser");
var pila = new Pila();
var operacion = new Operations();

function btns(num) {
    if (typeof num === "number") {
        nums += num.toString();

        console.log('----tipo num----');
        console.log('numero');
        console.log(nums);
        console.log('--------');
    }

    if (typeof num === "string" && num != `=`) {
        pila.push(parseInt(nums));
        nums = "";
        operationNum = num;
        pila.push(num);
        console.log('----tipo str----')
        console.log('letra');
        console.log(num);
        console.log('--------');
        
    }

    
    if (num != '='){
        all += num.toString();
        data.innerHTML = all;
    }
    
    
    if (num === '='){
        console.log('------igual ------');
        console.log(pila);
        pila.push(parseInt(nums));
        operacion.valorx = pila.pila[0];
        operacion.valory = pila.pila[2];
        all= operacion.adition();
        data.innerHTML = all;
        num = operacion.adition();
        pila.empty();
        nums = operacion.adition();
        console.log(pila);

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