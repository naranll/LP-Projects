let batGrade = 67,
    dumdGrade = 59;

let batFeedback, dumdFeedback;

if(batGrade < 60){
    batFeedback = "Very Bad";
}else if(batGrade < 70){
    batFeedback = "Barely made it";
}else if(batGrade < 80){
    batFeedback = "Average";
}else if(batGrade < 90){
    batFeedback = "Good";
}else if(batGrade <= 100){
    batFeedback = "Very Good";
}

if(dumdGrade < 60){
    dumdFeedback = "Very Bad";
}else if(dumdGrade < 70){
    dumdFeedback = "Barely made it";
}else if(dumdGrade < 80){
    dumdFeedback = "Average";
}else if(dumdGrade < 90){
    dumdFeedback = "Good";
}else if(dumdGrade <= 100){
    dumdFeedback = "Very Good";
}

console.log("Bat", '\t', batGrade, '\t', batFeedback);
console.log("Dumd", '\t', dumdGrade,'\t', dumdFeedback);
