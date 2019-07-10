const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  productUPC: {
    type: String,
    required: true
  },
  productName: {
    type: String
  },
  productBrand: {
    type: String
  },
  productType: {
    type: String
  },
  productImage: {
    type: String
  },
  tax: {
    type: String,
  },
  notax: {
    type: String
  },
  fullPrice: {
    type: String
  },
  availability: {
    type: String
  },
  weight: {
    type: String
  }
});

module.exports = ProductSchema