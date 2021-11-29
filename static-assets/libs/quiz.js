const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


class Quiz {
    constructor(type, questions, results) {

        this.type = type;


        this.questions = questions;


        this.results = results;


        this.score = 0;


        this.result = 0;


        this.current = 0;
    }

    Click(index) {

        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;


        if (value >= 1) {
            correct = index;
        }
        else {

            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }


    Next() {
        this.current++;

        if (this.current >= this.questions.length) {
            this.End();
        }
    }


    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}


class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}


class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}


class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }


    Check(value) {
        if (this.value <= value) {
            return true;
        }
        else {
            return false;
        }
    }
}


const results =
    [
        new Result("Уроовень сложности коструктора, который вам подойдет - начальный", 0),
        new Result("Уроовень сложности коструктора, который вам подойдет - средний", 2),
        new Result("Уроовень сложности коструктора, который вам подойдет - продвинутый", 4),
        new Result("Уроовень сложности коструктора, который вам подойдет - сложный", 6)
    ];


const questions =
    [
        new Question("lg(e) = ",
            [
                new Answer("0", 0),
                new Answer("1", 1),
                new Answer("e", 0),
                new Answer("нет правильного ответа", 0)
            ]),

        new Question("Сколько вам лет?",
            [
                new Answer("меньше 14", 0),
                new Answer("от 14 до 18", 1),
                new Answer("от 18 до 25", 2),
                new Answer("больше 25", 3)
            ]),

        new Question("Как часто вам приходится работать с мелкими деталями? ",
            [
                new Answer("никогда", 0),
                new Answer("редко", 0),
                new Answer("часто", 1),
                new Answer("постоянно", 2)
            ]),

        new Question("Есть ли у вас опыт сборки конструкторов? ",
            [
                new Answer("нет", 0),
                new Answer("да", 1),
            ])

    ];


const quiz = new Quiz(2, questions, results);

Update();


function Update() {

    if (quiz.current < quiz.questions.length) {

        headElem.innerHTML = quiz.questions[quiz.current].text;


        buttonsElem.innerHTML = "";


        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }


        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;


        Init();
    }
    else {

        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Очки: " + quiz.score;
    }
}

function Init() {

    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {


        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) {

    let correct = quiz.Click(index);


    let btns = document.getElementsByClassName("button");


    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }


    if (quiz.type == 1) {
        if (correct >= 0) {
            btns[correct].className = "button button_correct";
        }

        if (index != correct) {
            btns[index].className = "button button_wrong";
        }
    }
    else {

        btns[index].className = "button button_correct";
    }


    setTimeout(Update, 1000);
}