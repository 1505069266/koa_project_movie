const mongoose = require('mongoose')
const db = 'mongodb://47.95.216.215/douban'
const util = require('util')
const glob = require('glob')
const { resolve } = require('path')

mongoose.Promise = global.Promise

exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.connect = () => {
  let maxConnectTimes = 0

  return new Promise((resolve,reject)=>{
    if(process.env.NODE_ENV !== 'production'){
      mongoose.set('debug',true)
    }
  
    mongoose.connect(db)
  
    mongoose.connection.on('disconnected',()=>{
      maxConnectTimes++
      if(maxConnectTimes < 5){
        console.log('数据库连接断开');
        mongoose.connect(db)
      }else{
        console.log('数据库重连超过五次,请检查代码或数据库!');
      }
      
    })
  
    mongoose.connection.on('error',err=>{
      reject(err)
      console.log(err);
      console.log("数据库连接失败");
    })
  
    mongoose.connection.on('open',()=>{
    //  const Dog =  mongoose.model('Dog',{name:String})
    //  const doga = new Dog({name:'阿尔法'})

    //  doga.save().then(()=>{
    //    console.log('wang');
    //  })
      resolve()
      console.log("数据库连接成功!");
    })
  })
  
}