import prismaClient from "../../prisma";

interface RequestProduct {
  category_id: string
}

class ListByCategoryService{
  async execute({category_id}: RequestProduct){

    const ListByCategory = await prismaClient.product.findMany({
      where: {
        category_Id: category_id
      }
    })

    return ListByCategory
  }
}


export {ListByCategoryService}