const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

//definition du modele pour les Users
const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true,"Le prenom est obligatoire"]
    },
    lastName : {
        type : String,
        required : [true,"Le nom est obligatoire"]
    },
    email: {
        type : String, 
        required : [true,"L'email est obligatoire"], 
        unique : true,
        validate : [(value)=> validator.isEmail(value),'Email non valide']
    },
    password : {
        type : String,
        required : [true,"Le mot de passe est obligatoire"],
        minlength:[6,"Minimum 6 caracteres pour mot de passe"]
    },
    phone_number :{
         type : String, 
         required : [true,"Le numero de telephone est obligatoire"]
    },
    role:{
        type : String,
        required : true,
        enum : ['user', 'admin','pro'],
        default : 'user'
    },
    profession : {
        type: String
    }
});

UserSchema.pre('save', async function(){
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password,salt);
});

UserSchema.statics.login = async function (email,password){
            const user = await this.findOne({email});
            if(user){
                const match = await bcrypt.compare(password,user.password);
                if(match){
                    return(user);
                    
                }
                throw Error('invalid password');
            }
            throw Error('invalid email')
}
const UserModel = mongoose.model('UserModel',UserSchema)
module.exports = UserModel;