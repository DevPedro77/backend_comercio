import prismaClient from "../../prisma";

interface RequestDeleteItem {
  item_id: string
}

class RemoveItemService {
  async execute({item_id}: RequestDeleteItem){

    const removeItem = await prismaClient.item.delete({
      where: {
        id: item_id
      }
    })

    return removeItem
 
  }
}


export {RemoveItemService}