import prismaClient from "../../prisma";

interface RequestDelete {
  order_id: string
}

class DeleteOrderService {
  async execute({order_id}: RequestDelete){

  const deleteOrder = prismaClient.order.delete({
    where: {
      id: order_id
    }
  })
  
  
  return deleteOrder
  }
}


export {DeleteOrderService}