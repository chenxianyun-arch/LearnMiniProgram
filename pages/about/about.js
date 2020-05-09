// miniprogram/pages/about/about.js
Page({
  data: {
    name: "陈贤云",
    movies:[
      {id: 1,name: "火隐忍者", price: 23},
      {id: 2,name: "西瓜太郎", price: 34},
      {id: 4,name: "喜洋洋",   price: 40},
      {id: 5,name: "火锅大王", price: 50}
    ],
    counter :1
  },
  increment(){
    this.setData({
      counter:this.data.counter+1
    })
  },
  decrement(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})