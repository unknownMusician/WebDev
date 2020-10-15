function note() {
    let content = document.getElementById('content').value
    var date = new Date();
    document.getElementById('noteContent').innerHTML += `<li>${content}</li>`

}

function search() {
    let group = document.getElementById("inputSearchSchedule").value
    let ref = findURL(group);
    if (ref != null)
        window.location.href = ref;
}

function findURL(text) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.rozklad.org.ua/v2/groups/" + text, false); // false for synchronous request
    xmlHttp.send(null);
    let url = xmlHttp.response;

    let startIndex = url.indexOf('http');
    if (startIndex == -1) {
        return null;
    }
    let lastIndex = url.indexOf("\"", startIndex);
    return url.substring(startIndex, lastIndex);
}

function clearNotes() {
    document.getElementById('noteContent').innerHTML = ""
}