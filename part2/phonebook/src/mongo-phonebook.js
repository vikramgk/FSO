// fetch all 3 input cli arguments -> node mongo.js yourpassword Anna 040-1234556
// connect
// add to phone book and print input -> added Anna number 040-1234556 to phonebook
// if only password arg, print all people in phonebook -> node mongo.js yourpassword, prints
// phonebook:
// Anna 040-1234556
// Arto Vihavainen 045-1232456
// Ada Lovelace 040-1231236

const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
} else if (process.argv.length > 5) {
  console.log('Please provide the addition in the format of: node mongo.js <password> <name> <number>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://vikram:${password}@cluster0.lvbvt.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)

const personSchema = new mongoose.Schema({
  personName: String,
  personNumber: String
})

const Person = mongoose.model("person", personSchema)

if (process.argv.length === 3) {
  // print all

  Person.find({}).then(result => {
    console.log("phonebook:")
    result.forEach(person => console.log(person.personName, person.personNumber))
    mongoose.connection.close()
  })
} else {
  // insert 
  const personName = process.argv[3]
  const personNumber = process.argv[4]

  const person = new Person({
    personName: personName,
    personNumber: personNumber
  })

  person.save().then(result => {
    console.log("saved!")
    mongoose.connection.close()
  })
}


// const noteSchema = new mongoose.Schema({
//   content: String,
//   date: Date,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'HTML is Easy',
//   date: new Date(),
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })