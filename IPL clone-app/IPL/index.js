// team and player data
let playerData = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 1,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 2,
        "playerName": "Shubham Gill",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": false,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 3,
        "playerName": "Jayant Yadav",
        "from": "GT",
        "price": "2.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "1.30 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 5,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "13.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 6,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 7,
        "playerName": "Shahbaz Ahmed",
        "from": "RCB",
        "price": "1.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 8,
        "playerName": "Mohhamad Siraj",
        "from": "RCB",
        "price": "5.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 9,
        "playerName": "Dinesh Kartik",
        "from": "RCB",
        "price": "3.00cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 10,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 12,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 13,
        "playerName": "Mayank Markande",
        "from": "MI",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4951.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 14,
        "playerName": "Rahul Budhhi",
        "from": "MI",
        "price": "5.00 Cr",
        "isPlaying": true,
        "description": "bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20597.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 15,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 16,
        "playerName": "Dwayne Bravo",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 17,
        "playerName": "Robin Uthappa",
        "from": "CSK",
        "price": "02.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 18,
        "playerName": "Ambati Raydu",
        "from": "CSK",
        "price": "01.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 19,
        "playerName": "Shivam Dube",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
        "playerTeam": "Chennai Super Kings"
    },

    {
        "id": 20,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 21,
        "playerName": "Mandeep Singh",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 22,
        "playerName": "Lalit Yadav",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/6870.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 23,
        "playerName": "Prithvi shaw",
        "from": "DC",
        "price": "18.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
        "playerTeam": "Delhi Capitals"
    },
   
    {
        "id": 24,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 25,
        "playerName": "Karun Nair",
        "from": "RR",
        "price": "01.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 26,
        "playerName": "Dhruv Jurel",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20620.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 27,
        "playerName": "Riyan Parag",
        "from": "RR",
        "price": "03.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 28,
        "playerName": "Devdutt Paddikal",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 29,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 30,
        "playerName": "Abhijeet Tomar",
        "from": "KKR",
        "price": "18.50 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 31,
        "playerName": "Pat Cummins",
        "from": "KKR",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 32,
        "playerName": "Ashok Sharma",
        "from": "KKR",
        "price": "18 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 33,
        "playerName": "Rinku Singh",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 34,
        "playerName": "Rahul Tripathi",
        "from": "SRH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 35,
        "playerName": "Anukul Sharma",
        "from": "SRH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 36,
        "playerName": "Abdul Samad",
        "from": "SRH",
        "price": "5.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 37,
        "playerName": "Nicolas Pooran",
        "from": "SRH",
        "price": "3.50 Cr",
        "isPlaying": false,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 38,
        "playerName": "Kl Rahul",
        "from": "LSG",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 39,
        "playerName": "Manan Vohra",
        "from": "LSG",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/185.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 40,
        "playerName": "Avesh Khan",
        "from": "LSG",
        "price": "5.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/109.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 41,
        "playerName": "Marcus Stoinis",
        "from": "LSG",
        "price": "3.50 Cr",
        "isPlaying": false,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/23.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 42,
        "playerName": "Shikhar Dhawan",
        "from": "PBK",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png",
        "playerTeam": "Punjab Kings"
    },
    {
        "id": 43,
        "playerName": "Jitesh Sharma",
        "from": "PBK",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1000.png",
        "playerTeam": "Punjab Kings"
    },
    {
        "id": 44,
        "playerName": "Arshdeep Singh",
        "from": "PBK",
        "price": "5.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/125.png",
        "playerTeam": "Punjab Kings"
    },
    {
        "id": 45,
        "playerName": "Sam Curran",
        "from": "PBK",
        "price": "3.50 Cr",
        "isPlaying": false,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png",
        "playerTeam": "Punjab Kings"
    },
   

];

let teamData = [

    {
        "id": 0,
        "teamName": "Chennai Super Kings",
        "teamCode": "CSK",
        "fullSname":"CSK (Chennai Super King)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
        "WonCount": 4,
        "color":"#feca05",
    },
    {
        "id": 1,
        "teamName": "Delhi Capitals",
        "teamCode": "DC",
        "fullSname":"DC (Delhi Capitals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
        "WonCount": 0,
        "color":"#feca05",
    },
    {
        "id": 2,
        "teamName": "Gujarat Titan",
        "teamCode": "GT",
        "fullSname":"GT (Gujarat Tistan)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Logooutline/GToutline.png",
        "WonCount": 1,
        "color":"#feca05",
    },
    {
        "id": 3,
        "teamName": "Kolkata Knight Riders",
        "teamCode": "KKR",
        "fullSname":"KKR (Kolkata Knight Riders)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
        "WonCount": 2,
        "color":"#feca05",
    },
    {
        "id": 4,
        "teamName": "Lucknow Super Giants",
        "teamCode": "LSG",
        "fullSname":"LSG (Lucknow Super Giants)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
        "WonCount": 0,
        "color":"#feca05",
    },
    {
        "id": 5,
        "teamName": "Mumbai Indians",
        "teamCode": "MI",
        "fullSname":"MI (Mumbai Indians)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png",
        "WonCount": 5,
        "color":"#feca05",
    },
    {
        "id": 6,
        "teamName": "Punjab Kings",
        "teamCode": "PBK",
        "fullSname":"PBK (Punjab Kings)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
        "WonCount": 0,
        "color":"#feca05",
    },
    {
        "id": 7,
        "teamName": "Rajasthan Royals",
        "teamCode": "RR",
        "fullSname":"RR (Rajasthan Royals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Logooutline/RRoutline.png",
        "WonCount": 1,
        "color":"#feca05",
    },
    {
        "id": 8,
        "teamName": "Royal Challengers Bangalore",
        "teamCode": "RCB",
        "fullSname":"RCB (Royal challengers Bangalore)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
        "WonCount": 0,
        "color":"#feca05",
    },
    {
        "id": 9,
        "teamName": "Sunrises Hyderabad",
        "teamCode": "SRH",
        "fullSname":"SRH (Sunrises Hyderabad)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
        "WonCount": 1,
        "color":"#feca05",
    },


];
    let detailofTeam = [];
    let detailOfPlayer = [];
    var teamGrid = document.getElementById("teams")
    if(localStorage.getItem("teamObj") === null)
    localStorage.setItem("teamObj",JSON.stringify(teamData));
    if(localStorage.getItem("playerObj") === null)
    localStorage.setItem("playerObj",JSON.stringify(playerData))


    detailofTeam = JSON.parse(localStorage.getItem("teamObj"));
    detailOfPlayer = JSON.parse(localStorage.getItem("playerObj"));

//slick changes
$('.carousalContainer').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    previous: false,
    prevArrow: false,
    nextArrow: false,
  });


const teamsDiv= document.getElementById("teams")
//teams card
for(var i=0;i<teamData.length;i++){
    teamsDiv.innerHTML+=`
    <a href="./teaminfo.html?t=${teamData[i].teamCode}" id=${"teamInfo"+i}> 
    <div >

    <div class=${"mainimage-div"+i}>
       <img src="${teamData[i].teamIcon}" class="main-image" alt=""/>
    </div>
     

    <div class=${"teamTitle-div"+i}>
         <p class="teamName"> ${teamData[i].teamName}   </p>
    </div>

    </div></a>

`
}   

let filter = document.getElementById('search-box')
let sugesstions = document.getElementById('suggestions')
let userList=[]
//seacrh box
    teamData.forEach((team)=>{
       
      const li= document.createElement("li")
      userList.push(li)
      li.append(team.teamCode)
    })

    function filterUserData(searchInput){

        console.log("searchInput---",searchInput)
        
        userList.forEach(item=>{
    
            if(item.innerText == searchInput){
                window.open(`./teamInfo.html?=${searchInput}`,"_self")
            }
           
        })
    
    }
    console.log("userList------",userList)
    
filter.addEventListener("keypress",function(event) {
    if (event.key === "Enter") {

    filterUserData((event.target.value).toUpperCase()) //search input 
    }
    
})
