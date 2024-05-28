const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');
const categoryController = require('./controllers/categoryController');


const router = express.Router();

// page article
router.get('/', mainController.articlePage);
router.get('/article/:id', mainController.oneArticle);

// page favoris
router.get('/bookmark', bookmarksController.bookmarksPage );
router.get('/bookmark/add/:id', bookmarksController.bookmarksAddFavorite );
router.get('/bookmark/delete/:id', bookmarksController.bookmarksDeleteFavorite );
router.get('/:category', categoryController.selectCategory);


// on exporte le router 
module.exports = router;