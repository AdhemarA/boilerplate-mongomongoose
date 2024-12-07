require('dotenv').config();
let express = require('express');
let mongoDbConex = require('mongoose');

let mongoDbURI = "mongodb+srv://aahborgesnogueira:dBJZnb3UNbMqcMho@cluster0.6qowl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoDbConex.connect(mongoDbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoDbConex.connection.on('connected', () => console.log('connected'));

let Person;
const personSchema = new mongoDbConex.Schema({
  name: { type: String, required: true },
  age: Number, favoriteFoods: [String]
 });

 Person = mongoDbConex.model( "Person", personSchema);

 const createAndSavePerson = () => {
  let mariano = new Person({ name: "Mariano", age: 36, favoriteFoods:[ "asado", "pizza"] });
  mariano.save(function(err,result){
    if (err){
        console.log(err);
    }
    else{
        console.log(result)
    }
})
};


  /*let output;
    (async () => {
       output = await mariano.save();
    })
       console.log(output);
  mariano.save( (error, data) => {
    if(error){
      console.log(error);
    }else{
      done(null, data);
    }
  })*/
 


const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
