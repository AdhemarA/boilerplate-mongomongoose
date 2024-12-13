require('dotenv').config();
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let mongoDbURI = "mongodb+srv://aahborgesnogueira:dBJZnb3UNbMqcMho@cluster0.6qowl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
                  mongodb+srv://aahborgesnogueira:<db_password>@cluster0.6qowl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect(mongoDbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('connected'));

let Person;
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number, favoriteFoods: [String] });
  
Person = mongoose.model( "Person", personSchema);
let mariano = new Person({ name: "Mariano", age: 36, favoriteFoods:[ "asado", "pizza"] });

module.exports.saveProduct = function(model,data){
    model.save(data)
};

const createAndSavePerson = () => {
  router.post('/insert',(req,res)=>{
  Person.saveProduct(mariano,(err)=>{
        if(err){ console.log(err);
           res.redirect('/');
        }else{
          console.log( "exito" );
        };
    });
  });
  
};
  
createAndSavePerson();

// mongoose.set('transactionAsyncLocalStorage', true);
//  await mongoose.connection.transaction(async() => {
//  await modelSav.save();
//  throw new Error('Oops');
//  }).catch(() => {});

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
