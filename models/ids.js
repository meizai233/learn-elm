"use strict";

import mongoose from "mongoose";

const idsSchema = new mongoose.Schema({
  restaurant_id: Number,
  food_id: Number,
  orderId: Number,
  user_id: Number,
  address_id: Number,
  cart_id: Number,
  img_id: Number,
  category_id: Number,
  item_id: Number,
  sku_id: Number,
});

const Ids = mongoose.model("Ids", idsSchema);

Ids.findOne().then((data) => {
  if (!data) {
    const newIds = new Ids({
      restaurant_id: 0,
      food_id: 0,
      orderId: 0,
      user_id: 0,
      address_id: 0,
      cart_id: 0,
      img_id: 0,
      category_id: 0,
      item_id: 0,
      sku_id: 0,
    });
    newIds.save();
  }
});
export default Ids;
