class Person {
    constructor(info) {
      this.name = info.name;
      this.age = info.age;
      this.location = info.location;
      this.gender = info.gender;
    }
    speak() {
      return (`Hello my name is ${this.name}, I am from ${this.location}!`);
    }
  };
  
  class Instructor extends Person {
    constructor (stuff) {
      super(stuff);
      this.specialty = stuff.specialty;
      this.favLanguage = stuff.favLanguage;
      this.catchPhrase = stuff.catchPhrase;
      }
    demo(subject){
      return (`Today we are learning about ${this.subject}!`);
    }
    grade(student, subject){
      return (`${student.name} receieves a perfect score on ${subject}`);
    }
  }
  
  
  
  class Student extends Person {
    constructor (extra) {
      super(extra);
      this.previousBackground = extra.previousBackground;
      this.className = extra.className;
      this.favSubjects = extra.favSubjects;
    }
    listsSubjects() {
       for(let i=0; i < this.favSubjects.length; i++) {
           console.log(this.favSubjects[i]);
    }}
    
    PRAssignment (subject){
      return (`${student.name} has submitted a PR for ${subject}!`);
    }
  sprintChallenge (subject){
    return (`${student.name} has begun sprint challenge on ${subject}!`);
  }
  }
  
  class ProjectManager extends Instructor{
    contructor (PM) {
      this.gradClassName = PM.gradClassName;
      this.favInstructor = PM.favInstructor;
    }
    standUp (channel){
      return (`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode (student, subject){
      return (`${this.name} debugs ${student.name}'s code on ${subject}!`);
    }
  }
  
  
  // two Instructors
  const john = new Instructor({
    name: 'John', 
    age: 24, 
    location: 'Blue City', 
    gender: 'Male', 
    specialty: 'Front End', 
    favLanguage:'Javascript', 
    catchPhrase: 'Killer Brah'
  });
  
  const jane = new Instructor({
    name: 'Jane', 
    age: 22, 
    location: 'Red City', 
    gender: 'Female', 
    specialty: 'Back End', 
    favLanguage:'C#', 
    catchPhrase: 'Lets boogie'
  });
 
  
  // two Students
  const billy = new Student({
    name: 'Billy', 
    age: 21, 
    location: 'Green City', 
    gender: 'Male', 
    previousBackground: 'Stunt Driver',
    className: 'WEB1',
    favSubjects: ['Science', 'Math']
  });

  const mandy = new Student({
    name: 'Mandy', 
    age: 22, 
    location: 'Purple City', 
    gender: 'Female', 
    previousBackground: 'Movie Star',
    className: 'WEB2',
    favSubjects: ['English', 'Science']
  });

  // two Project Managers

const cindy = new ProjectManager({
  name: 'Cindy',
  age: 34,
  location: 'Yellow City',
  gender: 'Female',
  specialty: 'Back End',
  favLanguage: 'CSS',
  catchPhrase: 'Lets get fired up!',
  gradClassName: 'Web2',
  favInstructor: 'John'
});

const ricky = new ProjectManager({
  name: 'Ricky',
  age: 28,
  location: 'Orange City',
  gender: 'Male',
  specialty: 'Back End',
  favLanguage: 'HTML',
  catchPhrase: 'Tubing catfish is safe 100%!',
  gradClassName: 'Web3',
  favInstructor: 'Jane'
});