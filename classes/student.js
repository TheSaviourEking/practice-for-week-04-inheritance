const Person = require('./person');

console.log(Person)
class Student extends Person{
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student2.GPA > student1.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}
// Your code here
const student1 = new Student('John', 'Doe', 'Computer Science', 3.8);
const student2 = new Student('Jane', 'Smith', 'Biology', 3.9);

// let student1 = new Student("billy", "johnson", "software-development", 3.2);
console.log(student1)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
