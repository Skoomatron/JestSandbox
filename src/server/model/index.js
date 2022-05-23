const db = require('../../db/index.js');
const {Testing} = require('../../db/schema.js');

const createData = async (params) => {
  console.log(params.name, 'in model')
  try {
    console.log(db.collection('testings'), 'this is a test');
    db.collection('testings').insertOne({
      name: params.name,
    })
  } catch (error) {
    return error;
  }
}

module.exports = {
  createData,
}