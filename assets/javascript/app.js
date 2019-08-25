$('#start-game').on('click', function(){
    startGame();
});

$(document).on('click', '#end', function(){
    done();
})

var questions = [{
    question:"1. What was the first professional organization in sports (NFL, NHL, NBA, MLB) for the city of Seattle?",
    answers:[" Seahawks ", " Marines ", " Sonics ", " Sounders FC "],
    correctAnswer:" Sonics ",
},  {
    question:"What venue was once home for both the Mariners and the Seahawks?",
    answers:[" Kingdome ", " CenturyLink Field ", " KeyArena ", " T-Mobile Park "],
    correctAnswer:" Kingdome ",
},  {
    question:"Where does the University of Washington football team play its home games?",
    answers:[" Kingdome ", " CenturyLink Field ", " T-Mobile Park ", " Husky Stadium "],
    correctAnswer:" Husky Stadium ",
}, {
    question:"Who of the following played college basketball for the Washington Huskies?",
    answers:[" John Stockton ", " Marques Johnson ", " Harold Miner ", " Detlef Schrempf "],
    correctAnswer:" Detlef Schrempf ",
}, {
    question:"Who of the following was NEVER head coach of the Seattle Seahawks?",
    answers:[" Tom Flores ", " Chuck Knox ", " Jack Patera ", " Jim Lambright "],
    correctAnswer:" Jim Lambright ",
}, {
    question:"What number did former Seahawk star wide receiver Steve Largent wear?",
    answers:[" 78 ", " 80 ", " 82 ", " 85 "],
    correctAnswer:" 80 ",
}, {
    question:"Who of the following was NEVER a member of the Seattle Supersonics?",
    answers:[" Patrick Ewing ", " Dennis Johnson ", " Bill Cartwright ", " Clyde Drexler "],
    correctAnswer:" Clyde Drexler ",
}];

var correct = 0;
var incorrect = 0;
var counter = 24;

function countdown(){
    counter--;
    $('#counter').html(counter);
    if (counter <= 0){
        console.log("Time is up");
        done();
    }
}

function startGame (){
    timer = setInterval(countdown,1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id = "counter">24</span> Seconds</h2)');
    $('#start-game').remove();
    for (var i = 0; i < questions.length; i++){
        $('#subwrapper').append('</br><h2>' + questions[i].question + '</h2>');
        for (var j = 0; j <questions[i].answers.length; j++){
            $("#subwrapper").append("</br><input type = 'radio' name = 'question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
        }
    }
    $('#subwrapper').append('<br><button class="btn btn-success btn-block reset-button" id = "end">DONE</button>');
}

function done(){
    $.each($('input[name="question-0"]:checked'),function(){
        if ($(this).val() == questions[0].correctAnswer){
            correct++;
        }else{
            incorrect++;
        }
    });
    $.each($('input[name="question-1"]:checked'),function(){
        if ($(this).val() == questions[1].correctAnswer){
            correct++;
        }else{
            incorrect++;
        }
    });
    $.each($('input[name="question-2"]:checked'),function(){
        if ($(this).val() == questions[2].correctAnswer){
            correct++;
        }else{
            incorrect++;
        }
    });
    $.each($('input[name="question-3"]:checked'),function(){
        if ($(this).val() == questions[3].correctAnswer){
            correct++;
        }else{
            incorrect++;
        }
    });
    $.each($('input[name="question-4"]:checked'),function(){
        if ($(this).val() == questions[4].correctAnswer){
            correct++;
        }else{
            incorrect++;
        }
    });
    $.each($('input[name="question-5"]:checked'),function(){
        if ($(this).val() == questions[5].correctAnswer){
            correct++;
        }else{
            incorrect++;
        }
    });
    $.each($('input[name="question-6"]:checked'),function(){
        if ($(this).val() == questions[6].correctAnswer){
            correct++;
        }else{
            incorrect++;
        }
    });

    this.result();
}



function result(){
    clearInterval(timer);
    $('#subwrapper h2').remove();

    $('#subwrapper').html("<h2>All done!</h2>");
    $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $('#subwrapper').append("<h3>Unanswers: " + (questions.length-(this.incorrect + this.correct))+ "</h3>");
}