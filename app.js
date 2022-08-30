let homeScore = 0
let awayScore = 0

function homeGoal() {
  homeScore++
  drawScore()
}
function homeTouchdown() {
  homeScore += 3
  drawScore()
}
function awayGoal() {
  awayScore++
  drawScore()
}
function awayTouchdown() {
  awayScore += 3
  drawScore()
}

function drawScore() {
  // @ts-ignore
  document.getElementById('homeScore').innerHTML = `
<div> ${homeScore} </div>
`
  // @ts-ignore
  document.getElementById('awayScore').innerHTML = `
<div> ${awayScore} </div>
`

}









// function addScoreHome() {
//   if (document.getElementById('homeFieldGoal')) {
//     homeScore++
//   } else (document.getElementById('homeTouchdown')) {
//     homeScore += 3
//   }
// }
// function addScoreAway() {
//   if (document.getElementById('awayFieldGoal')) {
//     awayScore++
//   } else (document.getElementById('awayTouchdown')) {
//     awayScore += 3
//   };
// }



function reset() {
  homeScore = 0
  awayScore = 0
  drawScore()
}
