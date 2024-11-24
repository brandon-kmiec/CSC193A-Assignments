function buttonPress() {
    document.getElementById("textarea").style.fontSize = "4em";
    //alert("Hello, world!");
}

function fancyShmancy() {
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";
    //alert("Hello, world!");
}

function boringBetty() {
    document.getElementById("textarea").style.fontWeight = "";
    document.getElementById("textarea").style.color = "";
    document.getElementById("textarea").style.textDecoration = "";
}

function moo() {
    const textArea = document.getElementById("textarea");
    const oldText = textArea.value;
    textArea.value = oldText.toUpperCase();

    var parts = textArea.value.split(".");
    textArea.value = parts.join("-Moo.")
}