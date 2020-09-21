const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route GET api/items
// @desc  GET All Items
// @access Public
router.get('/', (req, res) => {
  // console.log(`items / GET ...`);
  Item.find()
  .sort({date: -1})
  .then(items => res.json(items))
  .catch(err => console.log(err));
});

// @route POST api/items
// @desc  Create a new item
// @access Public
router.post('/', (req, res) => {
  // console.log(`items / POST ...`);
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save()
  .then(item => res.json(item))
  .catch(err => console.log(err));
});

// @route DELETE api/items/:id
// @desc  Delete an item
// @access Public
router.delete('/:id', (req, res) => {
  // console.log(`items/:id / DELETE ...`);
  // console.log(req.params);
  const id = req.params.id;
  Item.findById(id)
  .then(item => {
    item.deleteOne()
    .then(() => res.status(404).json({success: true}));
  })
  .catch(err => res.status(404).json({success: false}));
});


module.exports = router;