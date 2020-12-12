function send(){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)
    
    
    
   
    question_number = "<h4" + number1+" X " +number2+ "</h4>";
    answer = " <br> Answer : <input type = 'text' id= 'answer'>";
    button = " <br><br> <button class = 'btn btn-warning' onclick='check()'>Check</button>";
    row = question + answer + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    
    }