console.log("Script loaded.");

function clickButton() {
    alert("Hello, world! Font size changed to 24pt.");
    document.getElementById("inputText").style.fontSize = "24pt";
}

function fancyAlert() {
    alert("Text style changed to FancyShamncy!");
}
function boringAlert() {
    alert("Text style changed to BoringBetty!");
}

function mooAlert() {
    alert("Let's get the Moo On!");
}

function switchStyle() {
    var text = document.getElementById("inputText");
    if (document.getElementById("fancy").checked) {
        fancyAlert();
        text.style.fontStyle = "italic";
        text.style.fontWeight = "bold";
        text.style.textDecoration = "underline";
        text.style.color = "blue";
    }else if (document.getElementById("boring").checked) {
        boringAlert();
        text.style.fontStyle = "normal";
        text.style.fontWeight = "normal";
        text.style.textDecoration = "none";
        text.style.color = "black";
    }else {
        document.getElementById("inputText").style.fontWeight = "normal";
    };
}

function mooTime() {
    mooAlert();
    var text = document.getElementById("inputText");
    //text.value = textArea.value.toUpperCase();
    var textContent = text.value;
    var sentences = textContent.split(". ");

    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        if (words.length > 0) {
            words[words.length - 1] = words[words.length - 1].trim() + "-Moo";
            sentences[i] = words.join("");
        }
    }

    text.value = sentences.join(". ");
}

document.getElementById("button").addEventListener("click", clickButton);
document.getElementById("fancy").addEventListener("change", switchStyle);
document.getElementById("boring").addEventListener("change", switchStyle);
document.getElementById("mooButton").addEventListener("click", mooTime);