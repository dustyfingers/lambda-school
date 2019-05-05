function getRoundedAverageAge(people) {
  let totalAgeSum = 0;
  people.forEach(person => {
    let currentAge = person.age;
    totalAgeSum += currentAge;
  });
  return Math.round(totalAgeSum / people.length);
}

/* Do not modify code below this line */

const examplePeopleArray = [
  { name: 'John', age: 19 },
  { name: 'Jack', age: 21 },
  { name: 'Jane', age: 22 }
];

console.log(getRoundedAverageAge(examplePeopleArray), '<-- should be 21');
