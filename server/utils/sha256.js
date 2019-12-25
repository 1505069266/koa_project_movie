let crypto = require('crypto')


async function hashPwd(password){
  password = password + "xuanxuan" // 进行添加字符串的加密  防止黑客通过测试  sha256+密码 破解出密码
  let sha256 = crypto.createHash('sha256') //用hash算法的sha256算法
  return sha256.update(password).digest('hex')//返回加密的密文，以16进制的形式打印
}

module.exports = hashPwd