const Person=require('./Person')
const express=require('express')
require('./database.js')
const app=express()
const port=3000
const createPerson = async () => {
/*try {
   const person = new Person({
    name: "halima",
     age: 21,
    favoriteFoods: ["pizza", "hamburger"],
  });
  const savedPerson = await person.save();
  console.log(savedPerson);
 } catch (err) {
   console.log(err);
  }*/

Person.create({name: "halima",
    age: 21,
  favoriteFoods: ["pizza", "hamburger"],})
  .then((doc)=>console.log(doc))
  .catch(err=>console.log(err))


  };
//  createPerson()

// creating many people
const createManyPeople = async () => {
    try {
      const savedPeople = await Person.create([
        {name: "ismail",
    age: 23,
    favoriteFoods: ["pizza", "hamburger"]}
    ,{name: "kamal",
    age: 24,
    favoriteFoods: ["pizza"]},
    {name: "ibrahim",
    age: 20,
    favoriteFoods: ["hamburger"],}
    ]);
      console.log(savedPeople);
    } catch (err) {
      console.log(err);
    }
  };
  //createManyPeople()

  const findPeopleByName = async () => {
    try {
      const foundPeople = await Person.findOne({name:'halima'});
      console.log(foundPeople);
    } catch (err) {
      console.log(err);
    }
  };
//findPeopleByName();

// finding one person with a given food in their favorites
const findOnePersonByFood = async () => {
    try {
      const foundPerson = await Person.findOne({ favoriteFoods: ['pizza']});
      console.log(foundPerson);
    } catch (err) {
      console.log(err);
    }
  };
  //findOnePersonByFood()

  // finding one person by id
const findPersonById = async () => {
    try {
      const foundPerson = await Person.findById('640cd113de3df6805c0feade');
      console.log(foundPerson);
    } catch (err) {
      console.log(err);
    }
  };
//findPersonById();
// updating a person's favorite foods
const updatePersonFavoriteFoods = async () => {
    try {
      const foundPerson = await Person.findById('640cd113de3df6805c0feade');
      foundPerson.favoriteFoods.push("hamburger");
      await foundPerson.save();
      console.log(foundPerson);
    } catch (err) {
      console.log(err);
    }
  };
  //updatePersonFavoriteFoods()


// updating a person's age
const findOneAndUpdatePersonAge = async () => {
    try {
      const updatedPerson = await Person.findOneAndUpdate(
        { name:'halima'},
        { age: 20 },
        { new: true }
      );
      console.log(updatedPerson);
    } catch (err) {
      console.log(err);
    }
  };
 // findOneAndUpdatePersonAge()
 // deleting a person by id
const removePersonById = async () => {
    try {
      const removedPerson = await Person.findByIdAndRemove('640cd113de3df6805c0feade');
      console.log(removedPerson);
    } catch (err) {
      console.log(err);
    }
  };
//removePersonById()

// deleting all people with a given name
const removePeopleByName = async () => {
    try {
      const result = await Person.deleteMany({ name:'halima' });
      console.log(result);
      
    } catch (err) {
      console.log(err);
    }
  };
  removePeopleByName()
 
  // finding people who like burritos, sorting by name, limiting results to two, and hiding their age
const queryChain = async () => {
    try {
      const result = await Person.find({ favoriteFoods: "pizza" })
        .sort("name")
        .limit(2)
        .select("-age")
        .exec();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
 //queryChain()
    app.listen(port,()=>{
        console.log(`connect to http://localhost:${port}` )
    })