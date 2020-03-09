// get quiz to start once start quiz button is clicked
// display question once quiz starts
// hide start quiz button once quiz starts
// start timer once quiz starts
// use local storage to save high scores
// use objects to save question and answer data
// clear high scores will clear data .empty function could work here
var questionEl = $("#question");

var answerBtns = $(".button");

var startBtn = $("#start-btn");

var count=75;

var currentQuestion = 1;

var currentChoices = 1; 

console.log($("#choiceB").val()); 




var quizQuestions = [
    {
      question: "JavaScript is ECMAScript", 
      answers: {
        a: "False",
        b: "True",
        c: "Maybe",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
    {
        question: "JavaScript written under which of the following tag?",
        answers: {
            a: "<JavaScript></JavaScript>",
            b: "<script></script>",
            c: "<code></code>",
            d: "<head></head>"
        },
        correctAnswer: "b"
    },
    {
        question: "Variable in JavaScript declared with which of the following keyword?",
        answers: {
            a: "new",
            b: "int",
            c: "string",
            d: "var"
        },
        correctAnswer: "d"

    },
    {
        question: "Which of the followings are primitive data types in JavaScript?",
        answers: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following is NOT a JavaScript object?",
        answers: {
            a: "var obj = {};",
            b: "var obj = { name: 'Steve'}",
            c: "var obj = { name = 'Steve'};",
            d: "var obj = new Object();"
        },
        correctAnswer: "c"
    },
    {
        question: "What is null in JavaScript?",
        answers: {
            a: "Null means empty string value.",
            b: "Null means absence of a value.",
            c: "Null means unknown value.",
            d: "Null means zero value."
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following object represent parameters of current function inside any function?",
        answers: {
            a: "Global",
            b: "arguments",
            c: "this",
            d: "Object"
        },
        correctAnswer: "b"
    },
    {
        question: "A function can be assigned to a variable in JavaScript.",
        answers: {
            a: "True",
            b: "False",
            c: "Sometimes",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What will 1 == '1' return?",
        answers: {
            a: "True",
            b: "False",
            c: "0",
            d: "1"
        },
        correctAnswer: "a"
    },
    {
        question: "How to apply strict mode in JavaScript?",
        answers: {
            a: "strict mode",
            b: "strict",
            c: "use strict",
            d: "apply strict"
        },
        correctAnswer: "c"
    }
];

console.log(quizQuestions[0].answers.a); 

$(document).ready(function() {
    startBtn.on("click", function() {
        $(".homepage").hide(); 
        $("#question").show();
        $("#answer-btn").show(); 
    
        // var answerChoices = $("<button></button>");
        // answerChoices.attr("id", "answer-btn")
        // answerChoices.addClass("button");
        // answerChoices.text(quizQuestions[currentChoices].answers.a);
        // $("#answer-btn").append(answerChoices); 

        questionEl.text(quizQuestions[0].question); 

        $("#choiceA").text("a: " + quizQuestions[0].answers.a);
        $("#choiceB").text("b: " + quizQuestions[0].answers.b);
        $("#choiceC").text("c: " + quizQuestions[0].answers.c);
        $("#choiceD").text("d: " + quizQuestions[0].answers.d);


var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     $("#submit-score").show(); 
     $("#question").hide();
     $(".button").hide();
     $("#game-over").show();
     $("#final-score").text("Your Final Score is " + count); 
     return;
  }


  //Do code for showing the number of seconds here
  $("#time").text(count); 
}
        

    });



    



    $(".button").on("click", function() {
        $("#question").hide();
        // $(".new-question").show(); 

        var i = 0; 

        if($(this).attr("value") == quizQuestions[i].correctAnswer) {
            console.log("this is correct"); 
            i++;
        } else {
            console.log("this is not correct"); 
            i++;
            count = count - 10; 
        };

        var newQuestion = $("<div>");
        newQuestion.attr("id", "question");
        newQuestion.addClass("new-question");
        newQuestion.text(quizQuestions[currentQuestion].question);
        $("#container").prepend(newQuestion); 

        $("#choiceA").text("a: "+ quizQuestions[currentChoices].answers.a);
        $("#choiceB").text("b: " + quizQuestions[currentChoices].answers.b);
        $("#choiceC").text("c: " + quizQuestions[currentChoices].answers.c);
        $("#choiceD").text("d: " + quizQuestions[currentChoices].answers.d);

        currentQuestion++; 
        currentChoices++; 

        if(currentQuestion == 10 && currentChoices == 10) {
            $("#submit-score").show(); 
            $("#question").hide();
            $(".button").hide();
            $("#game-over").show();
            $("#final-score").text("Your Final Score is " + count); 
            $("#time").hide(); 

        };
        


});

$("#highscore").on("click", function() {
    $(".homepage").hide(); 
    $("#highscore-page").show(); 
    $("#back").show();
    $("#clear").show(); 
});

$("#back").on("click", function() {
    $(".homepage").show();
    $("#highscore-page").hide(); 
    $("#back").hide();
    $("#clear").hide(); 
    location.reload(true); 

});

$("#clear").on("click", function() {
    $("#submitted-score").empty(); 
})

$("#submit-score").on("click", function(event) {
    event.preventDefault(); 
    $(".homepage").hide(); 
    $("#game-over").hide(); 
    $("#highscore-page").show(); 
    $("#back").show();
    $("#clear").show(); 
    var initials = $("#initials").val(); 
    localStorage.setItem("getValue", initials);
    $("#submitted-score").text(localStorage.getItem("getValue") + ": " + count); 

})








});
