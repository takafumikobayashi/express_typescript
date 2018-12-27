var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Basic認証用
var user = new Schema({
  _id: Number,
  userid: String,
  password: String
});

// MongoDBへの接続
mongoose.connect('mongodb://localhost/vervb', { useNewUrlParser: true });

// スキーマからモデルをコンパイルし、モデルをエクスポートする
exports.BasicAuth = mongoose.model('user', user);


