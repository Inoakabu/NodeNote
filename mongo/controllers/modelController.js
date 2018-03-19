var Model = require('../models/model');

var async = require('async');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// place model.count ... somewhere idk where

exports.index = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Site Home Page');

    async.parallel({
        model_count: function(callback){
            Model.count(callback);
        }
    }, function(err,results){
        res.render('index',{title: 'Note Library Home',error:err,data: results});
    });
};

// Display list of all models.
exports.model_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: model list');
    Model.find({}, 'title')
        .populate('notes')
        .exec(function(err,list_model){
            if (err){return (err); }
            res.render('model_list',{title: 'Note List',model_list: list_models});
        });
};

// Display detail page for a specific model.
exports.model_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: model detail: ' + req.params.id);
};

// Display model create form on GET.
exports.model_create_get = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: model create GET');
    async.parallel({
        titles: function(callback){
            Model.find(callback);
        }, function (err,results){
            if(err) {return next(err);}
            res.render('note_form',{title:'Create Note',titles: results.title});
        }
    });
}
// Handle model create on POST.
exports.model_create_post = function(req, res) {
    //res.send('NOT IMPLEMENTED: model create POST');
    //https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form
};

// Display model delete form on GET.
exports.model_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: model delete GET');
};

// Handle model delete on POST.
exports.model_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: model delete POST');
};

// Display model update form on GET.
exports.model_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: model update GET');
};

// Handle model update on POST.
exports.model_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: model update POST');
};