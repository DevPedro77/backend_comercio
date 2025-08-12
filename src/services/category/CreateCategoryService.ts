import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string,
}

class CreateCategoryService {
  async execute({name}: CategoryRequest){
    if(name === ''){
      throw new Error("Digite o nome da categoria");
    }
    if(!name){
      throw new Error("Nome da categoria é obrigatório");
    }

    //-- Verifica se a categoria já existe
    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name: name
      }
    })

    //-- Criando a categoria
    const category = await prismaClient.category.create({
      data: {
        name: name
      },
      select: {
        id: true,
        name: true
      }
    })

    return category;
  }
}

export { CreateCategoryService };