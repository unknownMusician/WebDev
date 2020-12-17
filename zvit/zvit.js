//* Functions and variables for labs *//

export const fontSizeHeightLineHTML = "font-size: 15pt;line-height: 30px";

import showLab1 from "./zvitL1.js";
import showLab2 from "./zvitL2.js";
import showLab3 from "./zvitL3.js";
import showLab4 from "./zvitL4.js";
import showLab5 from "./zvitL5.js";
import showLab6 from "./zvitL6.js";
import showLab7 from "./zvitL7.js";
import showLab8 from "./zvitL8.js";

// Functions for creating buttons and setting them a content

export function createLeftInfoBtn(parent, buttonText, mainContentText, style) {
    parent.appendChild(createBtn(buttonText, "activeButton", () => setMainContent(buttonText, mainContentText, style)));
}

export function createLeftGroupBtn(parent, buttonText, onclick) {
    parent.appendChild(createBtn(buttonText, "activeButton", onclick));
}

export function createBtnWithRedirect(parent, buttonText, locationOfRedirect) {
    parent.appendChild(createBtn(buttonText, "activeButton", () => {
        window.location.href = locationOfRedirect
    }));
}

export function createBtn(buttonText, id, onclick) {
    let btn1 = document.createElement("button");
    btn1.id = id;
    btn1.style = "width: 100%";
    btn1.textContent = buttonText;
    btn1.onclick = onclick;
    return btn1;
}

export function setMainContent(buttonText, mainText, style) {
    document.getElementById('headOfMainContent').innerHTML = buttonText;
    document.getElementById('mainContent').innerHTML = mainText;
    document.getElementById("content").style = "background-color: #f5f5f5";
    document.getElementById("mainContent").style = style;

}

//

(function start() {
    let elements = document.querySelectorAll(".activeButton");
    let funcs = [showLab1, showLab2, showLab3, showLab4, showLab5, showLab6, showLab7,showLab8];

    let leftButtons = document.getElementById("leftButtons");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', e => {
            leftButtons.innerHTML = "";
            funcs[i](leftButtons);
        });
    }
})();