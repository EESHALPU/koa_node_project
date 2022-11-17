'use strict';

/************* Modules ***********/
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;
const { GENDER } = require('../utils/constants');

/************* User Model ***********/
const userSchema = new Schema({
    firstName: { type: String },
    userType: { type : String },
    lastName: { type: String },
    email: { type: String },
    password : { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    state: { type: String },
    city: { type: String },
    postalCode: { type: String },
    mobile: { type: String, index: true },
    dob: { type: Date },
    status: { type: Number },
    // gender: { type: String, enum: object.values(GENDER)},
    isActive: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'user' },
}, { timestamps: true, versionKey: false, collection: 'users' });

module.exports = MONGOOSE.model('user', userSchema);