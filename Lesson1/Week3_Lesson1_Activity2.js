let grading_interpretation;
let average_score = 0;
let highest_average = 0;
let highest_student = ``;
let total_score = 0;
let total_average = 0;
let class_average = 0;
const students = [];

class Student{
    constructor(name, scores){
        this.name = name;
        this.scores = scores;
    }
    getAverage(){
        total_score = 0;

        for(let i = 0; i < this.scores.length; i++){
            total_score += this.scores[i];
        }
        average_score = total_score / this.scores.length;
        return average_score;
    }
    getLetterGrade(){
        average_score = this.getAverage();

        if(average_score >= 90){
            grading_interpretation = "A";
            return grading_interpretation;
        }else if(average_score >= 80){
            grading_interpretation = "B";
            return grading_interpretation;
        }else if(average_score >= 70){
            grading_interpretation = "C";
            return grading_interpretation;
        }else if(average_score >= 60){
            grading_interpretation = "D";
            return grading_interpretation;
        }else{
            grading_interpretation = "F";
            return grading_interpretation;
        }
    }
}

const analyzeClass = (students) => {
    console.log(`------- STUDENT REPORT -------`);

    for(let i = 0; i < students.length; i++){
        average_score = students[i].getAverage();
        grading_interpretation = students[i].getLetterGrade();

        console.log(`${students[i].name} - Average: ${average_score.toFixed(1)} | Grade: ${grading_interpretation}`);

        total_average += average_score;

        if(average_score > highest_average){
            highest_average = average_score;
            highest_student = students[i].name;
        }
    }
    class_average = total_average / students.length;

    console.log(`-----------------------------------`);
    console.log(`Class Average: ${class_average.toFixed(1)}`);
    console.log(`Top Student: ${highest_student} with ${highest_average.toFixed(1)}`);
} 

const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];

for(let i = 0; i < studentData.length; i++){
    students[i] = new Student(studentData[i].name, studentData[i].scores);
}

analyzeClass(students);

