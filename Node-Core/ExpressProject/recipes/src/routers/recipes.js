const {Router} = require( "express" )

const router = Router()

const { getAll } = require( "../controllers/recipes" )

router.get("/", getAll)

module.exports = router