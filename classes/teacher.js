const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstname, lastName, subject, yearsOfExperience) {
    super(firstname, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    // let sum = 0;
    // teachers.forEach(el => sum += el.yearsOfExperience);
    // return sum
    return teachers.reduce((sum, currentValue) => sum + currentValue.yearsOfExperience, 0);
  }
}


let teacher1 = new Teacher("susan", "jones", "biology", 5);
let teacher2 = new Teacher("bobby", "roberts", "math", 15);

console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
