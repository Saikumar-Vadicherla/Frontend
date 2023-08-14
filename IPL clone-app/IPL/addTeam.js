let localTeam = JSON.parse(localStorage.getItem("teamObj"));
let localPlayers = JSON.parse(localStorage.getItem("playerObj"));

$("#addteamform").submit(function (e) {


    e.preventDefault();


    let inp_val = $("#inp1").val();
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

    let addData = {
        "id": localTeam.length,
        "teamName":$("#inp1").val() ,
        "teamCode": shortName,
        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),


    }

   localTeam.push(addData);
   localStorage.setItem("teamObj", JSON.stringify(localTeam)); 

   location.href = `./teamInfo.html?name=${addData.teamCode}`;
})

     