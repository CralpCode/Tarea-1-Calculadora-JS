var nums = "";
var num = 0;
var convert = 0;
var guardstring = "";
var guardnum = 0;
var guardar = [];
var all = "";
var data = document.getElementById("data");
var eraser = document.getElementById("eraser");

function btns(entry) {

    num = entry.toString();

    if (num == '=') {

        guardar.push(guardnum);
        convert = operations(guardar);
        data.innerHTML = convert.toString();
        all = convert.toString()
        guardar.length = 0;
        nums = all;
        return;
    }

    else {
        all = all + num;
        data.innerHTML = all;
        scrollleftTop();
    }

    if (typeof entry === 'number') {
        nums += entry.toString();
        guardnum = parseInt(nums);
    }

    if (typeof entry === 'string') {
        guardstring = entry;
        guardar.push(guardnum);
        guardar.push(guardstring);
        nums = '';
        guardnum = 0;
    }

}

function operations(list) {

    function reordenar(index, result) {
        list[index - 1] = result;
        for (let i = index; i < list.length; i++) {
            list[i] = list[i + 2]
        }
        list.pop();
        list.pop();
        list[list.length] = result;


    }

    for (let index = 0; index < list.length; index++) {
        if (list[index] == "res") {
            let result = list[index - 1] % list[index + 1];
            reordenar(index, result);
            index = 0;
        }
        if (list[index] == "-" && list[index + 1] > 0) {
            let result = -(list[index + 1]);
            list[index + 1] = result;
            

            if (list[index - 1] == 0) {
                reordenar(index, result);
                index = 0;
            }
            list[list.length] = result;

        }
        if (list[index] == "^") {
            let result = Math.pow(list[index - 1], list[index + 1]);
            reordenar(index, result);
            index = 0;

        }

        if (list[index] == "√") {
            let result = Math.sqrt(list[index + 1]);
            if (index > 1) {
                reordenar(index, result);
                index = 0;

            }

            list[index - 1] = result;
            list[list.length] = result;
        }

    }

    for (let index = 0; index < list.length; index++) {
        if (list[index] == "*") {
            let result = list[index - 1] * (list[index + 1]);
            reordenar(index, result);
            index = 0;

        }

        if (list[index] == "/") {
            let result = list[index - 1] / list[index + 1];
            reordenar(index, result);
            index = 0;
        }

    }

    for (let index = 0; index < list.length; index++) {
        if (list[index] == "+" || list[index] == "-") {
            let result = list[index - 1] + list[index + 1];
            list[index + 1] = result;
            list[list.length] = result;

        }

    }

    return list[list.length - 1];
}

function scrollleftTop() {

    let dataWidth = data.scrollWidth;
    data.scrollTo(dataWidth.toFixed(), 0);

}

function btnEraser() {
    data.innerHTML = '0';
    all = "";
    nums = "";
    numbers = 0;
    guardar = [];
    numbers = 0;
    num = 0;
    convert = 0;
    guardstring = "";
    guardnum = 0;
}