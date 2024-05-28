const dataMapper = require("../dataMapper");

const categoryController = {

  // méthode pour la page article
  selectCategory: async (req, res, next) => {

    try {
      const targetCategory = req.params.category;
      
      const category = await dataMapper.selectCategory(targetCategory);
      res.render("category", { category });
    } catch (error) {
      res.status(500).send(`Erreur de notre coté : ${error}`);
      throw error;
    }
  },

};


module.exports = categoryController;