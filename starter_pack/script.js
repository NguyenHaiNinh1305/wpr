document.getElementById('btn-start').onclick = function (e) {
    document.getElementById('introduction').style.display = "none";
    document.getElementById('attempt-quiz').style.display = "block";
}

document.getElementById('btn-try-again').onclick = function (e) {
    e.preventDefault();
    location.reload();

}


document.getElementById('btn-submit').onclick = function (e) {
    e.preventDefault();
    document.getElementById('introduction').style.display = "none";
    var radios = document.getElementsByClassName('option-selected');
    var value = 0;
    var answerArr = [];
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            answerArr.push(i + "-" + radios[i].value);

            value++;
        }

    }


    if (value === 10) {
        document.getElementById('attempt-quiz').style.display = "none";
        document.getElementById('review-quiz').style.display = "block";
    }
    checkAnswers(answerArr);


    document.getElementById('box-result').childNodes[3].innerHTML = calcResults(answerArr) + "/10";
    document.getElementById('box-result').childNodes[5].innerHTML = calcResults(answerArr) / 10 * 100 + "%";

}

function checkAnswers(answerArr) {
    var reviewQuiz = document.getElementsByClassName('quiz-review');

    for (var i = 0; i < reviewQuiz.length; i++) {
        var label = document.createElement('label');
        label.innerHTML = 'Correct answer';
        label.classList.add('label-aws-checked');
        if (reviewQuiz[i].value === 'true') {
            reviewQuiz[i].classList.add('correct-answer');
            reviewQuiz[i].parentElement.appendChild(label);
        }
    }
    for (var i = 0; i < answerArr.length; i++) {
        var label = document.createElement('label');
        label.innerHTML = 'Your answer';
        label.classList.add('label-aws-checked');
        if (answerArr[i].split('-')[1] === 'false'
            && reviewQuiz[answerArr[i].split('-')[0]].value === 'false') {
            reviewQuiz[answerArr[i].split('-')[0]].classList.add('wrong-answer');
            reviewQuiz[answerArr[i].split('-')[0]].parentElement.appendChild(label);
            reviewQuiz[answerArr[i].split('-')[0]].checked = true;

        }
        if (answerArr[i].split('-')[1] === 'true'
            || reviewQuiz[answerArr[i].split('-')[0]].value === 'true') {
            reviewQuiz[answerArr[i].split('-')[0]].checked = true;


        }

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

function calcResults(answerArr) {
    const mark = 0;
    for (var i = 0; i < answerArr.length; i++) {
        if (answerArr[i].value === 'true') {
            mark += 1;
        }
    }
    return mark;

}




