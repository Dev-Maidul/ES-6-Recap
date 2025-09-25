// const records = [
//   { name: "Tamim", score: 89, address: "Dhaka" },
//   { name: "Ashraful", score: 22, address: "Rangpur" },
//   { name: "Mashrafi", score: 12, address: "Rajshahi" },
//   { name: "Liton", score: 32, address: "Korail Bosti" },
//   { name: "Sabbir", score: 47, address: "Kamrangi" },
//   { name: "Kader", score: 15, address: "Dhaka" },
// ];
// const arr = [];
// records.reduce((Selection, playerState) => {
    
//   const runs = playerState?.score >= 30 ? "top" : "";
//   if(runs=="top") {
//     arr.push(playerState);
//   }
  
// }, {});
// const topMost=arr.filter((player)=>player.score>=50);
// console.log(topMost)

function Todo(){
    setTimeout(()=>{
        console.log("Task Done")
    },2000)
}
Todo();