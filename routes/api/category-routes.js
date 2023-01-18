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

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id);
  res.json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);
  res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(req.body);
  res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({ where: { id: req.params.id } });
  res.json(categoryData);
});

module.exports = router;
