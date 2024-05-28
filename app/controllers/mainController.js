const dataMapper = require("../dataMapper");

const mainController = {

  // méthode pour la page article
  articlePage: async (req, res, next) => {

    try {
      const figurines = await dataMapper.getAllFigurines();
      res.render("home", { figurines });
    } catch (error) {
      res.status(500).send(`Erreur de notre coté : ${error}`);
      throw error;
    }
  },
  
  oneArticle: async (req, res, next) => {

    const targetId = Number(req.params.id);

    try {
      const searchedFigurine = await dataMapper.getOneFigurine(targetId);
      const searchedReviews = await dataMapper.selectReview(targetId);

      if (!searchedFigurine){
        return next();
      }
      const star = "&#9733; ";
      const starLess = "&#9734; ";
      res.render("article", { searchedFigurine, searchedReviews, star , starLess });
    } catch (error){
      res.status(500).send(`Erreur de notre coté : ${error}`);
    }
  }

};


module.exports = mainController;

