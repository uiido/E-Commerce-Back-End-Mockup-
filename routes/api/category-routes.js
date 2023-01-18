const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id);
  res.json(categoryData);
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body);
  res.json(categoryData);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body);
  res.json(categoryData);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } });
  res.json(categoryData);
});

module.exports = router;
