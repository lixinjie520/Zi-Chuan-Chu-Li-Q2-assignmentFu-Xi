let name = 'Bernard'

function getResult() {
 // console.log(name.slice(0, 2))
  //複習的時候也想了很久，想得太複雜了
  // 解題思路：1.先取出要顯示的前兩個字母。2.之後再加上 * 
  let encodeName = name.slice(0, 2)
  for (let i = 2; i < name.length; i++) {
    encodeName += '*'
  }
  // 根本用不到replace
  // console.log(name.replace(name.slice(2, 3), '*'))
  // console.log(name.replace(name.slice(3, 4), '*'))
  // console.log(name.replace(name.slice(4, 5), '*'))
  // for (let i = 2; i < name.length; i++) {
  //  let encodeName = name.replace(name.slice(i), '*')
  //   console.log(encodeName)
  // }

 console.log(encodeName)
}

getResult()

module.exports = {
  getResult
}