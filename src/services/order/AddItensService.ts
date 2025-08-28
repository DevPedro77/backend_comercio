import prismaClient from "../../prisma";

interface RequestItens {
  order_id: string,
  product_id: string,
  amount: number
}

class AddItensService {
  async execute({order_id, product_id, amount}: RequestItens){
    

    const addItem = await prismaClient.item.create({
      data: {
        order_Id: order_id,
        product_Id: product_id,
        amount: amount
      }


    })

    return addItem

  }
}


export {AddItensService}