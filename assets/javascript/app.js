$('#start-game').on('click', function(){
    $('#start-game').remove();
    for (var i = 0; i < questions.length; i++){
        $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j <questions[i].answers.length; j++){
            $("#subwrapper").append("<input type = 'radio' name = 'question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
        }
    }
});

var questions = [{
    question:"What was the first professional organization in sports (NFL, NHL, NBA, MLB) for the city of Seattle?",
    answers:["Seahawks", "Marines", "Sonics", "Sounders FC"],
    correctAnswer:"Sonics",
},  {
    question:"What venue was once home for both the Mariners and the Seahawks?",
    answers:["Kingdome", "CenturyLink Field", "KeyArena", "T-Mobile Park"],
    correctAnswer:"Kingdome",
},  {
    question:"Where does the University of Washington football team play its home games?",
    answers:["Kingdome", "CenturyLink Field", "T-Mobile Park", "Husky Stadium"],
    correctAnswer:"Husky Stadium",
}, {
    question:"Who of the following played college basketball for the Washington Huskies?",
    answers:["John Stockton", "Marques Johnson", "Harold Miner", "Detlef Schrempf"],
    correctAnswer:"Detlef Schrempf",
}, {
    question:"Who of the following was NEVER head coach of the Seattle Seahawks?",
    answers:["Tom Flores", "Chuck Knox", "Jack Patera", "Jim Lambright"],
    correctAnswer:"Jim Lambright",
}, {
    question:"What number did former Seahawk star wide receiver Steve Largent wear?",
    answers:["78", "80", "82", "85"],
    correctAnswer:"80",
}, {
    question:"Who of the following was NEVER a member of the Seattle Supersonics?",
    answers:["Patrick Ewing", "Dennis Johnson", "Bill Cartwright", "Clyde Drexler"],
    correctAnswer:"Clyde Drexler",
}];