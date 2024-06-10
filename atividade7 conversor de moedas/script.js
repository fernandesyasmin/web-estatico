 //body...
function result() {

    var score=0;
    if (quiz.Question1.value=='1')
        {
            score++;
        }

        if (quiz.Question2.value=='1')
        {
            score++;
        }
        if (quiz.Question3.value=='1')
        {
            score++;
        }
        if (quiz.Question4.value=='1')
        {
            score++;
        }
        if (quiz.Question5.value=='1')
            {
                score++;
            }
        alert("your score is:"+score);
}


function exibirAlerta() {
    var alert=0;
    if (alert.value=='1')
        {
            alert++;
        }

    alert("Ops! Looks like you don't answer all the questions!");
}

