require('dotenv').config();
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let mongoDbURI = "mongodb+srv://aahborgesnogueira:dBJZnb3UNbMqcMho@cluster0.6qowl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 
mongoose.connect(mongoDbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('connected'));

let Person;
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number, favoriteFoods: [String] });

Person = mongoose.model( "Person", personSchema);

var createAndSavePerson = function(done) {
  var mariano = new Person({name: "Mariano", age: 36, favoriteFoods:[ "asado", "pizza"]});
  mariano.save(function(err, data) {
    if (err){
      console.error(err);
    }else{
      done(null, data);
    };
  });
};  

 module.exports.saveProduct = function(model,data){
     model.save(data);
  };
  
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people)=> {
    if(err){
      console.log(err);
    }else{
      done(null,people);
    };
  });
  };

var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) console.log(err);
    done(null, personFound);
  });
};

var findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if (err) console.log(err);
    done(null, data);
  });
};

var findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if (err)  console.log(err);
    done(null, data);
  });
};
const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';
  Person.findById(personId, (err, person) => {
    if(err){
      return console.log(err); 
    } else{
      person.favoriteFoods.push(foodToAdd);
      person.save((err, updatedPerson) => {
        if(err){
          return console.log(err);
        } else{
          done(null, updatedPerson);
        };
      });
    };
  });
};    
  
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err){    
      return console.log(err);
    } else{
    done(null, updatedDoc);
    };
  });
};

var removeById = function(personId, done) {
  Person.findByIdAndRemove(
    personId, (err, removedDoc) => {
      if(err){
        return console.log(err);
      }else{
      done(null, removedDoc);
      };
});
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, response) => {
    if(err){
       return console.log(err);
    }else{   
    done(null, response);
    };
  });
};

const queryChain = function(done){
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: {$all:[foodToSearch]}})
  .sort({name: "asc"})
  .limit(2)
  .select("-age")
  .exec((error, filteredResults)=>{
  if(error){
    return console.log(err);
  }else{   
    done(null, filteredResults);  
  };
  });
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
