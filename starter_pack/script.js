document.getElementById('btn-start').onclick = function (e) {
    document.getElementById('introduction').style.display = "none";
    document.getElementById('attempt-quiz').style.display = "block";
}

document.getElementById('btn-submit').onclick = function (e) {
    e.preventDefault();
    document.getElementById('introduction').style.display = "none";
    var radios = document.getElementsByTagName('input');
    var value = 0;
    var answerArr = [];
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            answerArr.push(radios[i].value);
            value++;
        }

    }
    if (value !== 10) {
        document.getElementById('attempt-quiz').style.display = "none";
        document.getElementById('review-quiz').style.display = "block";
    }

}

function setStyleForCorrectAws() {
    var radios = document.getElementsByTagName('input');
    var value = 0;
    var answerArr = [];
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            answerArr.push(radios[i].value);
            value++;
        }

    }
}


