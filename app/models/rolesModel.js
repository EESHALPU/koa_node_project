'use strict';

/************* Modules ***********/
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;

/************* Role Model ***********/
const roleSchema = new Schema({
    name: { type: String, required: true }, //eg: name = Organization Head
    role: { type: String, required: true }, // eg: role = OH
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true, versionKey: false, collection: 'roles' });

module.exports = MONGOOSE.model('roles', roleSchema);