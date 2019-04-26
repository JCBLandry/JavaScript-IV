// CODE here for your Lambda Classes
class Person {
    constructor(info) {
      this.name = info;
      this.age = info;
      this.location = info;
      this.gender = info;
    }
    speak(){
      return (`Hello my name is ${name}, I am from ${location}!`);
    }
  }
  
  class Instructor extends Person {
    contructor (stuff) {
      super(stuff);
      this.specialty = stuff;
      this.favLanguage = stuff;
      this.catchPhrase = stuff;
      }
    demo('subject'){
      return (`Today we are learning about ${subject}!`);
    }
    grade(student, 'subject'){
      return (`${student.name} receieves a perfect score on ${subject}`);
    }
  }
  
  class Student extends Person {
    constructor (extra) {
      super(extra);
      this.previousBackground = extra;
      this.className = extra;
      this.favSubjects = extra;
    }
    listsSubjects (){
      return (${favSubjects});
    }
    PRAssignment (subject){
      return (`${student.name} has submitted a PR for ${subject}!`);
    }
  sprintChallenge (subject){
    return (`${student.name} has begun sprint challenge on ${subject}!`);
  }
  }
  
  class ProjectManager extends Instructor{
    contructor (PM) {
      super(PM);
      this.gradClassName = PM;
      this.favInstructor = PM;
    }
    standUp (channel){
      return (`${name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode (student, subject){
      return (`${name} debugs ${student.name}'s code on ${subject}!`);
    }
  }