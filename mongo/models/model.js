var mongoose = require('mongoose');
// Define Schema
var Schema = mongoose.Schema;
// define model
var NoteSchema = new Schema({
    title: {type: String, required: true, max: 100},
    content: {type: String, required: false},
    createDate: {type: Date, default: Date.now}
});

NoteSchema
.virtual('name')
.get(function(){
    return this.title;
});
NoteSchema
.virtual('url')
.get(function(){
    return '/note/' + this.id;
});

module.exports = mongoose.model('NoteModel',NoteSchema);