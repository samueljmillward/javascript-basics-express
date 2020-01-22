const createPerson = (name, age) => {
  let person = {
    name: name,
    age: age
  }
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true
  };
  return false
};

const isOver65 = person => {
  if (person.age > 65) {
    return true
  }
  else return false;
};

const getAges = people => {

  return people.map((a) => {
    return a.age;
  })
};

const findByName = (name, people) => {
  return people.filter(e => e.name === name)[0];
};

const findHondas = cars => {
  return cars.filter(e => e.manufacturer === 'Honda');
};

const averageAge = people => {
  let ages = people.map(a => { return a.age });
  return ages.reduce((total, currentValue) => total + currentValue, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  this.name = name;
  this.age = age;
  this.introduce = function (friend) {
    return "Hi " + friend + ", my name is " + name + " and I am " + age + "!"
  }

  return this;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};