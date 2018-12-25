var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Basic認証用
var user = new Schema({
  _id: Number,
  userid: String,
  password: String
});

// MongoDBへの接続
mongoose.connect('mongodb://52.195.9.101:27017/verdb');

// スキーマからモデルをコンパイルし、モデルをエクスポートする
exports.BasicAuth = mongoose.model('BasicAuth', user);


