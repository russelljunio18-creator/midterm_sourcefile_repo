'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = [
  'Ana',
  'Ben',
  'Carla',
  'Daniel',
  'Ella'
];

const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

//Part A: Display the Original Records
console.log('\nPART A: ORIGINAL RECORDS');

function displayRecords(studentNames, studentScores){
    for(let i = 0; i < studentNames.length; i++){
        console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
    }
}
displayRecords(studentNames, studentScores);

//Part B: Add New Students
console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push(`Faith`);
studentScores.push(88);
studentNames.unshift(`Aaron`);
studentScores.unshift(76);
displayRecords(studentNames, studentScores);
console.log(`Updated Names: `, studentNames);
console.log(`Updated Scores: `, studentScores);
console.log(`Number of Students: `, studentNames.length);

//Part C: Remove and Replace Records
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();
studentNames.pop();
studentScores.pop();
const danielIndex = studentNames.indexOf(`Daniel`);
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);
studentNames.splice(2, 0, `Grace`);
studentScores.splice(2, 0, 82)

displayRecords(studentNames, studentScores);
console.log(`Names: `, studentNames);
console.log(`Scores: `, studentScores);

//Part D: Calculate Class Statistics
console.log('\nPART D: CLASS STATISTICS');

let totalScore = studentScores.reduce((runningTotal, number) => 
    {return runningTotal + number}
);

let averageScore = totalScore / studentScores.length;

let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for(let i = 0; i < studentScores.length; i++){
    if(highestScore <= studentScores[i])
        highestScore = studentScores[i];
    if(lowestScore >= studentScores[i])
        lowestScore = studentScores[i];
}

console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score; ${lowestScore}`);

//Part E: Analyze Passing Scores
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const isPass = (number) => number >= 75;
const passingScores = studentScores.filter(isPass);
const passedOrFailed = studentScores.map(isPass);
const somePassed = studentScores.some(isPass);
const allPassed = studentScores.every(isPass);

console.log(`Passing Scores: `, passingScores);
console.log(`Statuses: `, passedOrFailed);
console.log(`At Least One Failed: `, somePassed);
console.log(`All Students Passed: `, allPassed)

//Part F: Sort and Search
console.log('\nPART F: SORT AND SEARCH');

const copyStudentScores = Array.from(studentScores);
const sortedCopy = copyStudentScores.sort((a, b) => b - a)
const include91 = copyStudentScores.includes(91);
const index91 = copyStudentScores.indexOf(91);

console.log(`Scores from Highest to Lowest: `, sortedCopy);
console.log(`Contains 91: `, include91);
console.log(`Index of 91: `, index91)

//Part G: Process a Two-Dimensional Array
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

let rowAverage = [];

for(let i = 0; i < activityScores.length; i++){
    rowAverage[i] = 0;
    let output = (`${studentNames[i]}'s Activity Score: `)
    for(let j = 0; j < activityScores[i].length; j++){
        output += (`${activityScores[i][j]}, `);
        rowAverage[i] += activityScores[i][j];
    }
    rowAverage[i]/= activityScores[i].length;
    rowAverage[i] = rowAverage[i].toFixed(1);

    console.log(output);
    console.log(`${studentNames[i]}'s activity average: `, rowAverage[i]);
}
console.log(`Activity Averages: ${rowAverage}`);

//Part H: Create a Text Summary 
console.log('\nPART H: TEXT SUMMARY');

const joinNames = studentNames.join(` | `);

console.log(`Students: ${joinNames}`);