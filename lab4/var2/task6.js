function openCloseMenu(index) {
    let buttons = document.getElementsByTagName("div")[1 + index * 2].children;
    console.log(buttons.length);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className == "closed" ? "opened" : "closed";
    }
}

const mainArr = [
    ["Page1.html", "Page2.html", "Page3.html"],
    ["Page4.html", "Page5.html", "Page6.html"],
    ["Page7.html", "Page8.html", "Page9.html"]
];

(function createMenu(bigArr) {
    let header = document.createElement("header");
    document.body.prepend(header);
    for (let i = 0; i < bigArr.length; i++) {
        let mainDiv = document.createElement("div");
        header.append(mainDiv);
        let button = document.createElement("button");
        mainDiv.append(button);
        button.className = "upperMenu"
        button.onclick = () => openCloseMenu(i);
        button.innerHTML = i;

        let div = document.createElement("div");
        header.append(div);
        for (let j = 0; j < bigArr[i].length; j++) {
            let button = document.createElement("button");
            div.append(button);
            button.className = "closed"
            button.onclick = () => { window.location.replace(`task6${bigArr[i][j]}`) };
            button.innerHTML = bigArr[i][j];
        }
    }
})(mainArr);