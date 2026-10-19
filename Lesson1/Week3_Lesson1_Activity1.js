let scores = [85, 72, 91, 64, 78];
let i;
let grading_interpretation;
let did_pass;
let total_score = 0;
let average_score = 0;
let highest_score = scores[0];
let lowest_score = scores[0];
let passed = 0;
let failed = 0;

console.log(`Student Grades:`)
for(i = 0; i < scores.length; i++){
    console.log(`${scores[i]}`);
}

console.log();
for(i = 0; i < scores.length; i++){
    if(scores[i] >= 90){
        grading_interpretation = "Excellent - Passed";
        passed++;
    }else if(scores[i] >= 80){
        grading_interpretation = "Very Good - Passed";
        passed++;
    }else if(scores[i] >= 75){
        grading_interpretation = "Good - Passed";
        passed++;
    }else{
        grading_interpretation = "Failed";
        failed++;
    }

    if(highest_score <= scores[i])
        highest_score = scores[i];

    if(lowest_score >= scores[i])
        lowest_score = scores[i];

    
    console.log(`Student ${i + 1}: ${scores[i]} - ${grading_interpretation}`);

    total_score += scores[i];
}
average_score = total_score / scores.length;

console.log();
console.log(`Total Score: ${total_score}`);
console.log(`Average Score: ${average_score}`);
console.log(`Highest Score: ${highest_score}`);
console.log(`Lowest Score: ${lowest_score}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);


