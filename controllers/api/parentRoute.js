const router = require('express').Router();
const { Baby, Parents, User } = require('../../models');

// Get all parent data
router.get('/', async (req, res) => {
    try {
      const parentsData = await Parents.findAll({
        include: [{
            model: User,
            attributes: ["name", "email"]
          }]
      });
      res.status(200).json(parentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  })

router.post('/', async (req, res) => {
    try {
        const parentInfo = await Parents.create({
            id: req.body.id,
            parents_name: req.body.parents_name, 
            father_age: req.body.father_age,
            mother_age: req.body.mother_age
        })
        res.status(200).json(parentInfo)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;