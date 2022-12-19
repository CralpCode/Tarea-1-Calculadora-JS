var nums = "";
var convert = 0;
var numbers = 0;
var operationNum = 0;
var guardnum = 0;
var guardar = [];
var all = "";
var data = document.getElementById("data");
var eraser = document.getElementById("eraser");

function btns(numb) {
        num = numb.toString();
    if (num == '√') {
        return console.log(Math.sqrt(25));
    }

    if (num == '^') {
        return console.log(Math.pow(5,2));
    }

    if (num == '=') {
        numbers = eval(all);
        all = numbers.toString();
        data.innerHTML = all;
    }
    else {
        all = all + num;
        data.innerHTML = all;
        scrollleftTop();
    }

    if (typeof numb === 'number'){
        nums += numb.toString();
        guardnum = parseInt(nums); 
    }

    if (typeof numb === 'string') {
        console.log('numero guardado = ' + guardnum);
        guardar.push(guardnum);
        nums ='';
        guardbum = 0; 
        console.log(guardar);
        console.log('numero borrado = ' + guardnum);
    }

    /* if (typeof numb === 'string') {
        console.log('letra')
    }
        convert = parseInt(all);
        let verify = all*1;
        console.log(verify);
        if (Number.isNaN(verify)){
            console.log(convert)
            let guardar = [];
            guardar.push(convert);
            convert = 0;
        } */
    
    
   

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