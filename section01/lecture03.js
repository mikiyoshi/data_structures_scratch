// it can test at console

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

var user1 = new User('John', 'Smith', 26, 'male');

var user200 = new User('Jill', 'Robinson', 25, 'femail');

user1;
user200;

User.prototype.emailDomain = '@facebook.com';

user200.emailDomain;

User.prototype.getEmailAddress = function () {
  return this.firstName + this.lastName + this.emailDomain;
};

user1;
user200;

user200.getEmailAddress();
user1.getEmailAddress();
