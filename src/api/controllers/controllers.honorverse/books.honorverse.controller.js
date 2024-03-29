const BookHonorverse = require('../../models/models.universo/books.model');

const getBooksHonorverse = async (req, res) => {
  try {
    const allBooksHonorverse = await BookHonorverse.find();
    return res.status(200).json(allBooksHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookHonorverse = await BookHonorverse.findById(id);
    return res.status(200).json(oneBookHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookHonorverse = async (req, res) => {
  try {
    const newBookHonorverse = new BookHonorverse(req.body);
    const createdBookHonorverse = await newBookHonorverse.save();
    return res.status(201).json(createdBookHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksHonorverse = new BookHonorverse(req.body);
    putvs._id = id;
    const updateBooksHonorverse = await BookHonorverse.findByIdAndUpdate(id, putBooksHonorverse, {
      new: true,
    });
    if (!updateBooksHonorverse) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookHonorverse = await BookHonorverse.findByIdAndDelete(id);
    if (!deleteBookHonorverse) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksHonorverse, getOneBookHonorverse, postBookHonorverse, putBookHonorverse, deleteBookHonorverse };
