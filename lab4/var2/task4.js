function onTextChange() {
    let text = textElem.value;
    let count = parseInt(text);
    let arr = createArray(count);

    infoElem.innerHTML = "";

    if (arr.length > 0) {
        printArray(arr);
        printSum(arr);
        printMult(arr);
        printMaxElem(arr);
        printSorted(arr);
    }
}

function createArray(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let rand = Math.floor((Math.random() - 0.5) * 100);
        arr.push(rand);
    }
    return arr;
}

function printArray(arr) {
    let arrText = document.createElement("p");
    arrText.innerHTML = "Масив: <p>";
    for (let i = 0; i < arr.length; i++) {
        arrText.innerHTML += `${arr[i]}, `;
    }
    infoElem.append(arrText);
}

function printSum(arr) {
    let arrText = document.createElement("p");
    arrText.innerHTML = "Сума парних елементів: <p>";
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    arrText.innerHTML += sum;
    infoElem.append(arrText);
}

function printMult(arr) {
    let arrText = document.createElement("p");
    arrText.innerHTML = "Добуток від’ємних елементів: <p>";
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            mult *= arr[i];
        }
    }
    arrText.innerHTML += mult;
    infoElem.append(arrText);
}

function printMaxElem(arr) {
    let arrText = document.createElement("p");
    arrText.innerHTML = "Максимальний елемент та його індекс серед додатних чисел: <p>";
    let el = -1000;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > el) {
            el = arr[i];
        }
        if (arr[i] > 0) {
            index++;
        }
    }
    arrText.innerHTML += `${el == -1000 ? "відсутній" : el}, ${index}`;
    infoElem.append(arrText);
}

function printMinElem(arr) {
    let arrText = document.createElement("p");
    arrText.innerHTML = "Мінімальний елемент та його індекс серед від'ємних чисел: <p>";
    let el = 1000;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < el) {
            el = arr[i];
        }
        if (arr[i] < 0) {
            index++;
        }
    }
    arrText.innerHTML += `${el == 1000 ? "відсутній" : el}, ${index}`;
    infoElem.append(arrText);
}

function printSorted(arr) {
    let arrText = document.createElement("p");
    arrText.innerHTML = "Упорядкований в порядку зростання масив: <p>";
    arr.sort((a, b) => {
        if (+a > +b) {
            return 1;
        } else {
            return -1;
        }
    });
    for (let i = 0; i < arr.length; i++) {
        arrText.innerHTML += `${arr[i]}, `;
    }
    infoElem.append(arrText);
}

const textElem = document.getElementById("arrayCountInput");
const infoElem = document.getElementById("info");

(function start() {
    textElem.addEventListener('input', onTextChange);
})();