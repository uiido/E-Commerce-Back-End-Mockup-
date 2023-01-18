const router = require('express').Router();
const { restart } = require('nodemon');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product]
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: "Sorry, no tag with this id was found!" });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: "Sorry, no tag with this id was found!" });
        return;
      }
      res.json({ message: "This product was successfully deleted!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;
