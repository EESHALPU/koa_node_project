'use strict';

/************* Modules ***********/
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;

/************* Permission Model ***********/
const permissionSchema = new Schema({
    name: { type: String, required: true }, //eg: name = 'view','update' etc.
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true, versionKey: false, collection: 'permissions' });

module.exports = MONGOOSE.model('permissions', permissionSchema);