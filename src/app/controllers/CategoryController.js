const CategoryRepository = require("../repositories/CategoryRepository");

class CategoryController {

  async index(request, response) {

    const categorys = await CategoryRepository.findAll();

    response.json(categorys)
  }

  async show(request, response) {
    const {id} = request.params

    const row = await CategoryRepository.findById(id)

    response.json(row);
  }

  async store(request, response) {
 
    const { name } = request.body[0]
    console.log(name)
    if(!name) {
      return response.status(400).json({error: 'Name is required'});
    }

    // const categoryExists = await CategoryRepository.findByName(name);

    // if(categoryExists) {
    //   return response.status(400).json({error: ' This category exists'});
    // }

    const category = await CategoryRepository.create({name})
    response.send(category);

  }

  async update(request, response) {
    const {id} = request.params;
    const {name} = request.body;

    const categoryExists = await CategoryRepository.findById(id);

    if(!categoryExists) {
      return response.status(400).json({error: "This id not exists"})
    }

    const row = await CategoryRepository.update(id, name);

    response.json(row)

  }

  async delete(request, response) {

    const { id } = request.params;

    await CategoryRepository.delete(id)


    response.sendStatus(204)
  }


}

module.exports = new CategoryController
