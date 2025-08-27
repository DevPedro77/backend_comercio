import {Request, Response} from "express"
import {ListByCategoryService} from "../../services/product/ListByCategoryService"

class ListProductController {
  async handle(req: Request, res: Response){
    try {   
      const category_id = req.query.category_id as string    

      const listByCategoryService = new ListByCategoryService()

      const products = await listByCategoryService.execute({ category_id })
      
      return res.json(products)
      
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export { ListProductController }