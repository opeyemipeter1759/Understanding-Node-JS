const service = require( "../services/recipes" )

const getAllRecipe = async (req, res, next) =>{
    try {
        res.json( {
            data: await service.getAll()
        })
    } catch (error) {
        next(error)
    }
}

const getRecipe = async ( req, res, next ) =>
{
    try {
        const recipe = await service.get( req.params.id );
        if ( recipe === undefined ) {
            const err = new Error( "Recipe not found" );
            err.statusCode = 404;
            throw err
        }
        res.status(201).json( {
            data: recipe
        })
    } catch (error) {
       next(error) 
    }
}

const saveRecipe = async ( req, res, next ) =>
{
    try {
      
      const {
        name,
        healthLabels,
        cookTimeMinutes,
        prepTimeMinutes,
        ingredients,
      } = req.body;
  
      const newRecipe = {
        name,
        healthLabels: [...healthLabels], 
        cookTimeMinutes,
        prepTimeMinutes,
        ingredients: [...ingredients], 
      };
  
      res.status(201).json({ data: await service.save(newRecipe) });
    } catch (error) {
      next(error);
    }
};
  
const updateRecipe = async ( req, res, next ) =>
{
    try {
        const recipe = await service.get( req.params.id )
        if (recipe === undefined) {
            const err = new Error( "Recipe not Found" );
            err.statusCode = 404;
            throw err
        }
        const {
            name,
            healthLabels,
            cookTimeMinutes,
            prepTimeMinutes,
            ingredients,
        } = req.body;
        
        const updated = await service.update( req, params.id, {
            name,
            healthLabels: [...healthLabels],
            cookTimeMinutes,
            prepTimeMinutes,
            ingredients: [...ingredients],
        } );

        res.status(201).json( {
            data: updated
        })

    } catch (error) {
        next(error)
    }
}

const deleteRecipe = async (req, res, next) => {
    try {
      const recipe = await service.get(req.params.id);
  
      if (recipe === undefined) {
        const err = new Error("Recipe not found");
        err.statusCode = 404;
        throw err;
      }
  
      await service.remove(req.params.id);
  //  Send a proper status
        
        res.sendStatus(204)
    } catch (error) {
      next(error);
    }
  };

module.exports = {
    getAllRecipe,
    saveRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe
}