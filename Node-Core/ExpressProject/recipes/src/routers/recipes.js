const {Router} = require( "express" )

const router = Router()

const { getAll, save} = require( "../controllers/recipes" )

router.get( "/", getAll )
router.post("/", save )

module.exports = router