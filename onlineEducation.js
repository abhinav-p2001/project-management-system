// Base class User
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    // Method to log user details
    getDetails() {
      console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
  }
  
  // Student class inheriting from User
  class Student extends User {
    constructor(name, email, studentId) {
      super(name, email); // Call the parent class constructor
      this.studentId = studentId;
    }
  
    // Method to enroll the student
    enroll() {
      console.log(`Student ${this.name} has enrolled.`);
    }
  }
  
  // Instructor class inheriting from User
  class Instructor extends User {
    constructor(name, email, instructorId) {
      super(name, email); // Call the parent class constructor
      this.instructorId = instructorId;
    }
  
    // Method to assign grade to a student
    assignGrade() {
      console.log(`Instructor ${this.name} assigned a grade.`);
    }
  }
  
  // Demonstrating the system
  
  // Creating instances of Student and Instructor
  const student1 = new Student("John Doe", "john.doe@example.com", "S123");
  const instructor1 = new Instructor("Dr. Smith", "dr.smith@example.com", "I456");
  
  // Calling methods for Student
  student1.getDetails(); // Output: Name: John Doe, Email: john.doe@example.com
  student1.enroll(); // Output: Student John Doe has enrolled.
  
  // Calling methods for Instructor
  instructor1.getDetails(); // Output: Name: Dr. Smith, Email: dr.smith@example.com
  instructor1.assignGrade(); // Output: Instructor Dr. Smith assigned a grade.