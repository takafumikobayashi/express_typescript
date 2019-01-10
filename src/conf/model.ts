import * as mongoose from 'mongoose';
import Schema = mongoose.Schema;
import Document = mongoose.Document;
import Model = mongoose.Model;

export class MongoConnect {

  public connect() {
    // MongoDBへの接続
    mongoose.connect('mongodb://localhost:27017/vervb', { useNewUrlParser: true });
  };

  public model() {
    // Basic認証用
    const user = new mongoose.Schema({
      _id: Number,
      userid: String,
      password: String
    });

    // スキーマからモデルをコンパイルし、モデルをエクスポートする
    const BasicAuth = mongoose.model("users", user);

  };
};



