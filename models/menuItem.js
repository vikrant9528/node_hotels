const mongoose = require('mongoose');
const menuschema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
    taste:{
      type:String,
      enum:["spicy","sweet"]
    },
    is_drink:{
      type:Boolean,
      default:false
    },
    ingredients:{
      type:[String],
      default:[]
    },
    num_sales:{
      type:Number,
      default:0
    }
  }
)
const menu = mongoose.model('menu',menuschema);
module.exports = menu;