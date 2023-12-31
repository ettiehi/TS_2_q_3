"use strict";
exports.__esModule = true;
exports.logPerson = exports.persons = void 0;
var persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
exports.persons = persons;
function logPerson(person) {
    console.log(" - " + person.name + ", " + person.age);
}
exports.logPerson = logPerson;
