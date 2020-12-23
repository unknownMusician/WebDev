


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
        }
        await addNumberIntoHTML()
    }
    else{
        document.getElementById("numbers").innerText = ' '
    }
        document.getElementById('clearBtn').addEventListener('click', clear)

}

async function addNumberIntoHTML(){
    let dataStr = await getData();
    let data = JSON.parse(dataStr)
    if(data.num !== undefined) {
        document.getElementById("numbers").innerText = data.num.toString()
    }
}

async function load(){
    await getPercents()
    await  addNumberIntoHTML()
    await draw()
}

setInterval(load,1000);

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


async function addNumber(){
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
        await getPercents()

    }
}

async function draw(){
    await getPercents()
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

async function getPercents(){
    let data = JSON.parse(await getData())
    let newArr = data.num;
    counters.length = 0
    if(newArr !== undefined) {
        for (let i = 0; i < newArr.length; i++) {
            let counter = 0
            for (let j = 0; j < newArr.length; j++) {
                if (newArr[i] === newArr[j]) {
                    counter += 1
                }
                counters.set(newArr[i], (counter / newArr.length) * 400)
            }
        }
    }


}
addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("add_btn").click();
    }
});

main()