// create sample content
// var mongoose = require('mongoose');

// var mongoDB = 'mongodb://localhost/local';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;

// db.on('error',console.error.bind(console,'error'));

// var Schema = mongoose.Schema;
// // define model
// var NoteSchema = new Schema({
//     title: {type: String, required: true, max: 100},
//     content: {type: String, required: false},
//     createDate: {type: Date, default: Date.now}
// });

// var NoteModel = mongoose.model('NoteModel', NoteSchema);

// var note_instance = new NoteModel({title:'Title1', content:'Some Content1'});
// var note_instance2 = new NoteModel({title:'Title2', content:'Some Content2'});

// note_instance.save(function(err){
//     if (err) return handleError(err);
// });