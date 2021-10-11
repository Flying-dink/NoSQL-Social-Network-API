const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtBYID,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller')


router

      .route('/')
      .get(getAllThoughts)
      .post(createThought);

router

      .route('/:id')
      .get(getThoughtById)
      .put(updateThought)
      .delete(deleteThought);
      
router
      .route('/:thoughtIDreactions/')
      .post(addReaction) 
      .delete(deleteReaction)
      
      module.exports = router;