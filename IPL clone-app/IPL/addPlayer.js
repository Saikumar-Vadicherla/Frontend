let localTeam = JSON.parse(localStorage.getItem("teamObj"));
let localPlayers = JSON.parse(localStorage.getItem("playerObj"));

var selectTeam=document.getElementById("inp6")
for(var i=0;i<localTeam.length;i++){
    selectTeam.innerHTML+=`
    <option value="${localTeam[i].teamName}">${localTeam[i].teamName}</option>
               
    `
}
var newData=10
$("#addteamform").submit(function (e) {
    e.preventDefault();
    let inp_val = $("#inp6").val();
    let shortName = '';
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }
    var trueOrFal=""
    if($("#inp3").val()=="true"){
        trueOrFal=true
    }
    else{
        trueOrFal=false
    }
 
    let addPlayer={
        "id":localPlayers.length,
        "playerName": $("#inp1").val(),
        "from": shortName,
        "price": $("#inp2").val()+"Cr",
        "isPlaying": trueOrFal,
        "description":  $("#inp4").val(),
        "playerImg":  $("#inp5").val(),
        "playerTeam":  $("#inp6").val(),


    }

    localPlayers.push(addPlayer)
    localStorage.setItem('playerObj',JSON.stringify(localPlayers))

    location.href = "./index.html";
})
