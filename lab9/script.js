


let arr = []
let counters = new Map()

function getData(){
    return $.ajax("..//WebSites//lab9//dataGet.php")
}

async function main(){
    let dataStr = await getData();
    let data = JSON.parse(dataStr)
    if(data.num !== undefined) {
        for (let i = 0; i < data.num.length; i++) {
            arr.push(parseInt(data.num[i]))
            if (i === data.num.length - 1) {
                document.getElementById("numbers").innerText += parseInt(data.num[i])
            } else {
                document.getElementById("numbers").innerText += parseInt(data.num[i]) + ","
            }
        }
    }
    else{
        document.getElementById("numbers").innerText = ' '
    }
        document.getElementById('clearBtn').addEventListener('click', clear)

}

function clear(){
    // function to clear in db
    $.ajax({
        method: 'POST',
        url:'..//WebSites//lab9//dataClear.php',
        data: {confirm:true}
    })
    arr.length = 0;
    document.querySelector(".bars").innerHTML = ''
    document.getElementById("numbers").innerText = ' '
}


function addNumber(){
    console.log(arr)
    let number = document.getElementById("inputNum")
    if(counters.size > 20 && !counters.has(parseInt(number.value))) {
        document.getElementById("massive").innerText = "Max amount of unique elements"
    }
    else{
        if (!isNaN(parseInt(number.value))) {
            arr.push(parseInt(number.value))
            // function to add to db
            $.ajax({
                url:'..//WebSites//lab9//dataAdd.php',
                method:'POST',
                data: {num: parseInt(number.value)}
            })
        }
        number.value = ""
        let arrStr = arr.toString()
        document.getElementById("numbers").innerText = arrStr
        getPercents()

    }
}

function draw(){
    getPercents()
    const bars = document.getElementById("bars")
    while(bars.firstChild){
        bars.removeChild(bars.lastChild)
    }
    for (let key of counters.keys()) {
        bars.appendChild(document.createElement('li'))
        bars.lastChild.appendChild(document.createElement("div"))
        bars.lastChild.lastChild.className = "bar"
        bars.lastChild.lastChild.style.height = (counters.get(key)-12).toString() + "px"
        bars.lastChild.appendChild(document.createElement("span"))
        bars.lastChild.lastChild.textContent = key.toString()
    }
}

function getPercents(){
    counters.length = 0
    for (let i = 0; i < arr.length ; i++) {
        let counter = 0
        for(let j = 0;j<arr.length;j++) {
            if (arr[i] === arr[j]) {
                counter += 1
            }
            counters.set(arr[i], (counter/arr.length)*400)
        }
    }
    console.log(counters)

}
addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("add_btn").click();
    }
});

main()