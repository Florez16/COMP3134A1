function genRandomInt() {
    return Math.floor(Math.random() * 10 + 1);
}

function genCats(amount) {
    var result = "";
    for (var i = 0; i < amount; i++) {
        result += "&#x1F431;";
    }
    return result;
}

function checkAnswer(cats, multiplier) {
    // Checks whether the answer given by the user is correct or not
    userAnswer = parseInt(document.getElementById("answer").value);
    console.log("User ans = " + userAnswer + "Type = " + typeof userAnswer);
    console.log("Cats = " + cats);
    console.log("Multiplier = " + multiplier);

    result = userAnswer == cats * multiplier;
    console.log(result);

    if (result) { // case: correct -> show tick image
        document.getElementById("result_img").innerHTML = '<img src="resources/tick.png" width="200" height="200">';
    }
    else {       // case: wrong -> show cross image
        document.getElementById("result_img").innerHTML = '<img src="resources/wrong.png" width="200" height="200">';
    }

    document.getElementById("next_button").style.display = 'block';     // unhide the "next" button
}

function reload() {
    location.reload();
}

function one() {
    document.getElementById("answer").value += "1";
}

function two() {
    document.getElementById("answer").value += "2";
}

function three() {
    document.getElementById("answer").value += "3";
}

function four() {
    document.getElementById("answer").value += "4";
}

function five() {
    document.getElementById("answer").value += "5";
}

function six() {
    document.getElementById("answer").value += "6";
}

function seven() {
    document.getElementById("answer").value += "7";
}

function eight() {
    document.getElementById("answer").value += "8";
}

function nine() {
    document.getElementById("answer").value += "9";
}

function zero() {
    document.getElementById("answer").value += "0";
}

function del() {
    document.getElementById("answer").value = "";
}