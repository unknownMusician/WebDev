
let arr = []

function addToArray(){
    let number = document.getElementById("inputNumber")
    if(!isNaN(parseInt(number.value))){
        arr.push(parseInt(number.value))
    }
    number.value = ""
    let arrStr = "[" + arr.toString() + "]"
    document.getElementById("massive").innerText = arrStr
}

function sortArr(arr){
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}

function sort(){
    document.getElementById("functions").style.color = "green"
    if(arr.length >= 1) {
        let sortedArrStr = "Sorted array in decrease: " + sortArr(arr).reverse()
        document.getElementById("functions").innerText = sortedArrStr
    }
    else{
        document.getElementById("functions").style.color = "red";
        document.getElementById("functions").innerText = "An array is empty"
    }

}
function getBiggestInNegative(){
    if(arr.length >=1){
    document.getElementById("functions").style.color = "green"
    let biggestInNegative = "The biggest negative number in array: " +  arr.filter(x => x < 0).sort(compare).reverse()[0]
    document.getElementById("functions").innerText = biggestInNegative
        }
    else{
        document.getElementById("functions").style.color = "red";
        document.getElementById("functions").innerText = "An array is empty"
    }
}
function getLowestInPositive(){
    if(arr.length >= 1) {
        document.getElementById("functions").style.color = "green"
        let lowestInPositive = "The lowest positive number in array: " + arr.filter(x => x > 0).sort(compare)[0]
        document.getElementById("functions").innerText = lowestInPositive
    }
    else{
        document.getElementById("functions").style.color = "red";
        document.getElementById("functions").innerText = "An array is empty"
    }
}
function compare(a,b){
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("add_Number_Btn").click();
    }
});


