let teamDetails = JSON.parse(localStorage.getItem('teamObj'));
let playerDetails = JSON.parse(localStorage.getItem('playerObj'));
let productId = window.location.search.split('=')[1];
let playerId = decodeURIComponent(productId);

//console.log(productId)
//console.log(playerId)
let playerInformation = document.getElementById("player-info");

for (let i = 0; i < playerDetails.length; i++) {
    if (playerDetails[i].playerName == playerId) {
        playerInformation.innerHTML += `
  
        <div id="player-detail-img">
          <img src="${playerDetails[i].playerImg}" alt="">
        </div>

          <div id="player-stats">
          <h1> Player Overview </h1>
            <table cellpadding="10" cellspacing="0" width="300px">
                <tr>
                    <td>Player Name  </td>
                    <td>${playerDetails[i].playerName}  </td>
                </tr>
                    
                <tr>
                    <td> Team Name </td>
                    <td> ${playerDetails[i].playerTeam}  </td>
                </tr>
            
                <tr>
                    <td> Team Code </td>
                    <td>${playerDetails[i].from}   </td>
                </tr>
            
                <tr>
                    <td> Worth </td>
                    <td>${playerDetails[i].price}  </td>
                </tr>
            
                <tr>
                    <td> Is playing </td>
                    <td> ${playerDetails[i].isPlaying} </td>
                </tr>
            </table>
        </div>
        `;

        document.body.style.backgroundColor = "green"; // Set background color of body to green
    }
}
