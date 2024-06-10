function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (
        quiz.question1[0].checked == false &&
        quiz.question1[1].checked == false &&
        quiz.question1[2].checked == false &&
        quiz.question1[3].checked == false

        ||
        quiz.question2[0].checked == false &&
        quiz.question2[1].checked == false &&
        quiz.question2[2].checked == false &&
        quiz.question1[3].checked == false

        ||
        quiz.question3[0].checked == false &&
        quiz.question3[1].checked == false &&
        quiz.question3[2].checked == false &&
        quiz.question1[3].checked == false

        ||
        quiz.question4[0].checked == false &&
        quiz.question4[1].checked == false &&
        quiz.question4[2].checked == false &&
        quiz.question1[3].checked == false
        ||
        quiz.question5[0].checked == false &&
        quiz.question5[1].checked == false &&
        quiz.question5[2].checked == false &&
        quiz.question1[3].checked == false
    ){
        alert("Please fill in all questions.");
        return;
        }
    if (q1=="javascript") {c++}
    if (q2=="background-color") {c++}
    if (q3=="The first two options") {c++}
    if (q4=="JavaScript is a programming language that adds interactivity to your website.") {c++}
    if (q5=="Cascading Style Sheets") {c++}
    quiz.style.display="none";
    if (c<=3) {
result.textContent=`your result is ${c}. it is not so good please try again.`
    } else{
result.textContent=`your result is ${c}. it is awesome. keep it up!.`
    }
}


 

