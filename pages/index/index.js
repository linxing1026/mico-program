//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
		 imgUrls: [
       '/assets/imgs/swiper01.jpg',
       '/assets/imgs/swiper02.jpg',
       '/assets/imgs/swiper03.jpg',
		
		],
		indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
		indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        "logo": "/assets/imgs/pro_01.jpg",
        "title": "sdfdsfdsf",
        "con": "sdfdsfdsfds"
      },
      {
        "logo": "/assets/imgs/pro_02.jpg",
        "title": "sdfdsfdsf",
        "con": "sdfdsfdsfds"
      },
      {
        "logo": "/assets/imgs/pro_03.jpg",
        "title": "sdfdsfdsf",
        "con": "sdfdsfdsfds"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  copy:function() {
    wx.setClipboardData({
      data: 'sdfsdfdsf',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  goDetail(e) {
    console.log(e);
  },
  onLoad: function () {
    wx.request({
      url:"https://mall.roamingman.cn/oms/spu/querySysPackage",
      method:"POST",
      data:{
        currentPage:1,
        dataStatus: "Common@valid",
        perPageCount:6,
        resource:"MALL_H5",
        streamNo: "web_bss1532600125297525456"
      },
      success:function(res) {
        console.log(res);
      }
    })
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
	changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
