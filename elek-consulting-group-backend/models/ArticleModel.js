const mongoose = require('mongoose');
//definition du modele pour les articles
const ArticleSchema = new mongoose.Schema({
    date_article: {
        type : Date, 
        default : Date.now,
        required : true, 
    },
    author : {
        type : String,
        required : [true,"Un article doit nécessairement avoir un auteur"]
    },
    content_article :{
         type : String, 
         required : [true,"Un article doit avoir du contenu"]
    },
    admin:{
        type : mongoose.Schema.Types.ObjectId,
         ref:'UserModel',
         required : [true,"Vous devez mettre l'identifiant de l'admin qui a rédigé l'article"]
    }
});
const ArticleModel = mongoose.model('ArticleModel',ArticleSchema)
module.exports = ArticleModel;