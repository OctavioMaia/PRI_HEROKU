// load the things we need
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//Schemas for publication
var AcademicRegistrySchema = new Schema({
    author: {type: String, required: true},
    ident: {type: String, required: true},
    location: {type: String, required: false},
    privacy: {type: String, required: true},
    title: {type: String, required: true},
    date: {type: Date, required: true},
    pubdate: {type: Date, default: Date.now},
    description: {type: String, required: true},
    type: {type: String, required: true},
    duration: {type: String, required:false},
    credits: {type: String, required: true},
    comments: {type:[String], require:false}
})

module.exports = mongoose.model('AcademicRegistry', AcademicRegistrySchema, 'posts');