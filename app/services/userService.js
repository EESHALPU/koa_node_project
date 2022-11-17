'use strict';

const { UserModel } = require('../models');

let userService = {};

/**
* function to create user.
*/
userService.create = async (payload) => {
    return await new UserModel(payload).save();
};

/**
* function to insert users.
*/
userService.insertMany = async (payload) => {
    return await UserModel.insertMany(payload);
};

/**
* function to find users.
*/
userService.find = async (criteria, projection = {}) => {
    return await UserModel.find(criteria, projection).lean();
};

/**
* function to find one user.
*/
userService.findOne = async (criteria, projection = {}) => {
    return await UserModel.findOne(criteria, projection).lean();
};

/**
* function to update one user.
*/
userService.findOneAndUpdate = async (criteria, dataToUpdate, projection = {}) => {
    return await UserModel.findOneAndUpdate(criteria, dataToUpdate, projection).lean();
};

/**
* function to update users.
*/
userService.updateMany = async (criteria, dataToUpdate, projection = {}) => {
    return await UserModel.updateMany(criteria, dataToUpdate, projection).lean();
};

/**
* function to delete one user.
*/
userService.deleteOne = async (criteria) => {
    return await UserModel.deleteOne(criteria);
};

/**
* function to delete users.
*/
userService.deleteMany = async (criteria) => {
    return await UserModel.deleteMany(criteria);
};

/**
* function to apply aggregate on UserModel.
*/
userService.aggregate = async (query) => {
    return await UserModel.aggregate(query);
};

module.exports = userService;