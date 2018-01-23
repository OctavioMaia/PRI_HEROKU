var Post                = require('../app/models/posts');

var express             = require('express');
var router              = express.Router();

// NEWSFEED ==============================
router.get('/', function(req, res,next) {
    var filter = 'all'
    var posts
    Post.find({privacy: 'public'}).lean().exec(function(err, doc) {
        if (!err && doc.length!=0) {
            posts = doc
            res.render('newsfeed', {
                title: 'News Feed',
                posts,
                filter
            });
        } else {
            var err = new Error('There are no posts.');
            err.status = 400;
            next(err);
        }
    });
});

router.get('/:filter', function(req, res, next) {
    var filter = req.params.filter
    console.log(filter)
    var posts
    console.log("Antes do find.");
    Post.find({privacy: 'public', type: filter}).lean().exec(function(err, doc) {
        if (!err && doc.length!=0) {
            posts = doc
            console.log(doc)
            res.render('newsfeed', {
                title: 'News Feed',
                posts,
                filter
            });
        } else {
            var err = new Error('There are no posts in this category.');
            err.status = 400;
            next(err);
        }
    });
});

module.exports = router;