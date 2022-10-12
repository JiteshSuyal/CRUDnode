const Address = require("../models/address.Model");

const getAllUserAddress = async (req, res) => {
  try {
    const findAll = await Address.find({});
    return res.status(200).send({ success: true, data: findAll });
  } catch (error) {
    return res.status(400).send({ error: e });
  }
};

const postUserAddress = async (req, res) => {
  try {
    const createAddress = await Address.create(req.body);
    return res.status(200).send({ success: true, data: createAddress });
  } catch (error) {
    return res.status(400).send({ error: e });
  }
};

module.exports = { getAllUserAddress, postUserAddress };
