/*
SM1 为对称加密
sm2 非对称加密,基于ECC
SM3 消息摘要
SM4 无线局域网标准的分组数据算法,对称加密
 */
import { sm2, sm3, sm4 } from 'sm-crypto'

export const getClientHeight = () => {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight)
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
  else
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
  return clientHeight
}
// const { sm2, sm3, sm4 } = require('sm-crypto')
// 加密测试
export function encrypt(msgString) {
  let msg = msgString
  if (typeof msgString !== 'string')
    msg = JSON.stringify(msgString)

  // sm2
  const { publicKey, privateKey } = sm2.generateKeyPairHex() // 获取密钥对 publicKey公钥 privateKey私钥

  const keypair2 = sm2.generateKeyPairHex('123123123123123') // 自定义随机数
  const verifyResult = sm2.verifyPublicKey(publicKey) // 验证公钥

  const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3，默认为1
  const encryptData = sm2.doEncrypt(msg, publicKey, cipherMode) // 加密结果
  const decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode) // 解密结果
  console.log(`sm2加密结果:\n${encryptData}`)
  console.log(`sm2解密结果:\n${decryptData}`)

  // sm3
  const hashData = sm3(msg) // 杂凑
  console.log(`sm3加密结果:\n${hashData}`)

  // sm4
  let key = '0123456789abcdef' // 可以为 16 进制串或字节数组，要求为 128 比特
  key = stringToByte(key)

  const encryptData2 = sm4.encrypt(msg, key) // 加密，默认输出 16 进制字符串，默认使用 pkcs#5 填充
  const decryptData2 = sm4.decrypt(encryptData2, key) // 解密，默认输出 utf8 字符串，默认使用 pkcs#5 填充
  console.log(`sm4加密结果:\n${encryptData2}`)
  console.log(`sm4解密结果:\n${decryptData2}`)
}

// sm3加密
export function encryptsm3(msgString) {
  let msg = msgString
  if (typeof msgString !== 'string')
    msg = JSON.stringify(msgString)

  return sm3(msg)
}

// sm4加密
export function encryptsm4(msgString) {
  let msg = msgString
  if (typeof msgString !== 'string')
    msg = JSON.stringify(msgString)

  const key = stringToByte(sessionStorage.getItem('secretKey'))
  return sm4.encrypt(msg, key)
}

// sm4解密
export function decryptsm4(data) {
  const key = stringToByte(sessionStorage.getItem('secretKey'))
  return sm4.decrypt(data, key)
}

// string转byte
function stringToByte(str) {
  let len, c
  len = str.length
  const bytes = []
  for (let i = 0; i < len; i++) {
    c = str.charCodeAt(i)
    if (c >= 0x010000 && c <= 0x10FFFF) {
      bytes.push(((c >> 18) & 0x07) | 0xF0)
      bytes.push(((c >> 12) & 0x3F) | 0x80)
      bytes.push(((c >> 6) & 0x3F) | 0x80)
      bytes.push((c & 0x3F) | 0x80)
    }
    else if (c >= 0x000800 && c <= 0x00FFFF) {
      bytes.push(((c >> 12) & 0x0F) | 0xE0)
      bytes.push(((c >> 6) & 0x3F) | 0x80)
      bytes.push((c & 0x3F) | 0x80)
    }
    else if (c >= 0x000080 && c <= 0x0007FF) {
      bytes.push(((c >> 6) & 0x1F) | 0xC0)
      bytes.push((c & 0x3F) | 0x80)
    }
    else {
      bytes.push(c & 0xFF)
    }
  }
  return new Int8Array(bytes)
}
