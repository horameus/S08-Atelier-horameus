const dataMapper = require("../dataMapper");

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
    try {
      const bookmarkList = req.session.bookmarks;
      res.render("bookmark", { bookmarkList });
    } catch (error) {
      res.status(500).send(`Erreur de notre coté : ${error}`);
      throw error;
    }
  },

  bookmarksAddFavorite : async (req, res, next) => {
    try {

      const id = Number(req.params.id);
      
      const getBookmark = await dataMapper.getOneFigurine(id);

       if (!req.session.bookmarks){
       const bookmarkList = req.session.bookmarks = [];
       bookmarkList.push(getBookmark);
      } else {
        const bookmarkList = req.session.bookmarks;
        const objectFound = bookmarkList.find((element) => element.id === id);
        if (!objectFound){
        bookmarkList.push(getBookmark);
        }
      }
      res.redirect("/bookmark");
    } catch (error) {
      res.status(500).send(`Erreur de notre coté : ${error}`);
      throw error;
    }
  },

  bookmarksDeleteFavorite : (req, res, next) => {
    try {

      const id = Number(req.params.id);

      const bookmarkListTemporary = req.session.bookmarks;

      const bookmarkList = bookmarkListTemporary.filter((person) => person.id !== id)

      req.session.bookmarks = bookmarkList;

      res.redirect("/bookmark");
    } catch (error) {
      res.status(500).send(`Erreur de notre coté : ${error}`);
      throw error;
    }
  },

};


module.exports = bookmarksController;
