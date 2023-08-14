let teamDetails = JSON.parse(localStorage.getItem('teamObj'));
let playerDetails = JSON.parse(localStorage.getItem('playerObj'));
let tableTeam = document.getElementById("right-div");
let productId = window.location.search.split('=')[1];
let playerDiv = document.getElementById('left-div');

let cnt = 0;
for (let i = 0; i < playerData.length; i++) {
    if (playerData[i].from == productId) {
        cnt++;
    }
}

let topBatsman = "";
for (let i = 0; i < playerData.length; i++) {
    if (playerData[i].description == "Batsman" && playerData[i].from == productId) {
        topBatsman = playerData[i].playerName;
        break;
    } else {
        topBatsman = "No Player";
    }
}

let topBowler = "";
for (let i = 0; i < playerData.length; i++) {
    if (playerData[i].description == "Bowler" && playerData[i].from == productId) {
        topBowler = playerData[i].playerName;
        break;
    } else {
        topBowler = "No Player";
    }
}

teamDetails.map((item) => {
    if (productId == item.teamCode) {
        tableTeam.innerHTML += `
            <h1 id="teamName">${item.teamName}</h1>
            <img src="${item.teamIcon}" class="team-page-icon" alt="">
            <div class="teamInfo">
                <table>
                    <tr>
                        <td>Player count</td>
                        <td>${cnt}</td>
                    </tr>
                    <tr>
                        <td>Top Batsman</td>
                        <td>${topBatsman}</td>
                    </tr>
                    <tr>
                        <td>Top Bowler</td>
                        <td>${topBowler}</td>
                    </tr>
                    <tr>
                        <td>Won Count</td>
                        <td>${item.WonCount}</td>
                    </tr>
                </table>
            </div>
        `;
    }
});

for (let i = 0; i < playerData.length; i++) {
    if (playerData[i].from == productId) {
        playerDiv.innerHTML += `
            <a href="./playerInfo.html?t=${playerData[i].playerName}" id="playerInfo">
                <div class="playerCard">
                    <img src="${playerData[i].playerImg}" class="playerImage" alt="">
                    <div class="playerInfo">
                        <p class="playerName">${playerDetails[i].playerName}</p>
                        <p class="playerPrice">price: ${playerDetails[i].price}</p>
                        <p class="playing">Playing Status: ${playerDetails[i].isPlaying}</p>
                        <p class="role">Role: ${playerDetails[i].description}</p>
                    </div>
                </div>
            </a>
        `;
    }
}

const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", function () {
    const searchQuery = searchBox.value.toLowerCase();
    tableTeam.innerHTML = "";
    playerDiv.innerHTML = "";
    
    teamDetails.forEach((item) => {
        if (item.teamCode.toLowerCase().includes(searchQuery)) {
            tableTeam.innerHTML += `
                <a href="./teaminfo.html?t=${item.teamCode}" id="teamInfo">
                    <div>
                        <div class="mainimage-div">
                            <img src="${item.teamIcon}" class="main-image" alt="">
                        </div>
                        <div class="teamTitle-div">
                            <p class="teamName">${item.teamName}</p>
                        </div>
                    </div>
                </a>
            `;
        }
    });

    playerData.forEach((player) => {
        if (player.playerName.toLowerCase().includes(searchQuery)) {
            playerDiv.innerHTML += `
                <a href="./playerInfo.html?t=${player.playerName}" id="playerInfo">
                    <div class="playerCard">
                        <img src="${player.playerImg}" class="playerImage" alt="">
                        <div class="playerInfo">
                            <p class="playerName">${playerDetails[i].playerName}</p>
                            <p class="playerPrice">price: ${playerDetails[i].price}</p>
                            <p class="playing">Playing Status: ${playerDetails[i].isPlaying}</p>
                            <p class="role">Role: ${playerDetails[i].description}</p>
                        </div>
                    </div>
                </a>
            `;
        }
    });
});
