let aTeamScore1 = 92,
  aTeamScore2 = 120,
  aTeamScore3 = 90;

let bTeamScore1 = 100,
  bTeamScore2 = 96,
  bTeamScore3 = 110;

let aTeamAver = (aTeamScore1 + aTeamScore2 + aTeamScore3) / 3;
let bTeamAver = (bTeamScore1 + bTeamScore2 + bTeamScore3) / 3;

if (aTeamAver >= 100 && bTeamAver >= 100) {
  if (aTeamAver == bTeamAver) {
    console.log("It's a Draw!");
  } else {
    (aTeamAver > bTeamAver)
      ? console.log("Team A won!")
      : console.log("Team B won");
  }
} else {
  console.log("Both teams are unqualified");
}
