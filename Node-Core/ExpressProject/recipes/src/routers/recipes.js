const { Router } = require( "express" )
const auth = require('../middleware/auth');

const router = Router()

const { getAllRecipe, saveRecipe, getRecipe, updateRecipe, deleteRecipe} = require( "../controllers/recipes" )


router.route( '/' ).get( getAllRecipe ).post(  auth.authenticate(), saveRecipe );
router.route( '/:id' ).get( getRecipe ).put( updateRecipe ).delete(deleteRecipe)

module.exports = router