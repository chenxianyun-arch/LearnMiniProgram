// miniprogram/pages/home/home.js

// getApp()获取App()产生的示例对象
var app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
Page({
  handleGetUserInfo(event){
    console.log(event)
  }
})