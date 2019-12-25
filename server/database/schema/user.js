const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed
const { hashPwd } = require('./../../utils/sha256')

const userSchema = new Schema({
  username: {
    unique: true,
    type: String,
  },
  email: {
    unique: true,
    type: String
  },
  password: {
    unique: true,
    type: String
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

userSchema.pre('save', next => {
  if(!user.isModified('password')) return next()

  user.password = hashPwd(this.password)

  if(this.isNew){
    this.meta.createdAt = this.meta.updateAt = Date.now()
  }else{
    this.meta.updateAt = Date.now()
  }

  next()
})

userSchema.methods = {
  comparePassword: (_password, password) => {
    return new Promise((resolve,reject)=>{
      bcrypt.compare(_password,password,(err,isMatch)=>{
        if(!err) resolve(isMatch);
        else reject(err)
      })
    })
  }
}

mongoose.model('User', userSchema)