//  Assignment 2
// TESTDATA
const studentOne = {
  name: 'Dewald',
  testGrade: 81,
  assignmentGrade: 92,
  examGrade: 75,
}

const studentTwo = {
  name: 'Sean',
  testGrade: 67,
  assignmentGrade: 55,
  examGrade: 70,
}
// 1. Write a function which returns the final grade of a particular student according to the specifications above
function finalGrade() {
  return (
    this.testGrade * 0.2 + this.assignmentGrade * 0.3 + this.examGrade * 0.5
  )
}

// 2. Write a function which returns a grade symbol (A – F) based on the final grade of a student
function gradeSymbol(grade) {
  switch (true) {
    case grade >= 90:
      return 'A'
      break
    case grade >= 80:
      return 'B'
      break
    case grade >= 70:
      return 'C'
      break
    case grade >= 60:
      return 'D'
      break
    case grade >= 50:
      return 'E'
      break
    default:
      return 'F'
  }
}

// 3. Function which displays the students name, final grad and corresponding grade symbol
const students = [studentOne, studentTwo]

function displayDetails() {
  let grade = finalGrade.bind(this)
  let g = grade()
  console.log(this.name + ': ' + g + ' points = ' + gradeSymbol(g))
}

// 4. LOOP TO CALL THE DISPLAY-FUNCTION. Display all students details
// 5. LOOP THROUGH ALL THE STUDENTS, Display average of final grade.
let totalPoints = 0
for (const student of students) {
  let display = displayDetails.bind(student)
  display()
  let grade = finalGrade.bind(student)
  let g = grade()
  totalPoints = totalPoints + g
}
console.log(
  'Average of final grade is ' + Math.round(totalPoints / students.length)
)
