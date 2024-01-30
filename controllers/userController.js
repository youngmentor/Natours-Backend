const User = require('../models/userModels')
exports.getAllUser = (req,res) =>{
    res.status(500).json({
      status: 'error',
      message: 'no data yet'
    })
  }
  exports.getOneUser = async (req,res) =>{
    try {
      const oneUser = await User.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          user: oneUser,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  }
  exports.createUser = async (req,res) =>{
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
  exports.updateUser = async(req,res) =>{
    try {
      const updateUser = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: 'succes',
        data: {
          tour: updateUser,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  }
  exports.deleteUser = async(req,res) =>{
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'succes',
        data: {
          tour: null,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };