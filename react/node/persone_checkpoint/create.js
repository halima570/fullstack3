const Person=require('./Person')



// Creating and saving a person record
const createPerson = (done) => {
    const person = new Person({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["pizza", "hamburger", "sushi"]
    });
    person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
    });
    };
    createPerson()