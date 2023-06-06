var nome1=localStorage.getItem("nome1")
var nome2=localStorage.getItem("nome2")

var score1=0
var score2=0


document.getElementById("player1Name").innerHTML=nome1+":"
document.getElementById("player2Name").innerHTML=nome2+":"
document.getElementById("player1Score").innerHTML=score1
document.getElementById("player2Score").innerHTML=score2


document.getElementById("playerQuestion").innerHTML="turno de pergunta-"+nome1
document.getElementById("playerAnswer").innerHTML="turno de resposta-"+nome2
          
function send(){
    getword=document.getElementById("word").value ;
    word=getword.toLowerCase()

    charAt1=word.charAt(1)
    lengthdiv1=Math.floor(word.length/2)
    charAt2=word.charAt(lengthdiv1)

    lengthMinus1=word.length-1
    charAt3=word.charAt(length-1)

    rCharAt1=word.replace(charAt1,"_")
    rCharAt2=rCharAt1.replace(charAt2,"_")
    rCharAt3=rCharAt2.replace(charAt3,"_")


    question_word = "<h4 id='wordDisplay'> P. "+rCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    linha = question_word + inputBox + checkButton ;
    document.getElementById("output").innerHTML = linha;
    document.getElementById("word").value = "";

}