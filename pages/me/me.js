// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{
          nickName:'登录',
          avatarUrl: '../../images/head.jpg'
      },
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //用户授权
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  login: function(e){
      var that = this;
      wx.getUserInfo({
          success: function(res){
            // console.log('sss')
              that.setData({
                  userInfo:{
                      nickName: res.userInfo.nickName,
                      avatarUrl: res.userInfo.avatarUrl
                  }
              })
          },
          fail:function(res){
            console.log(res); //未授权情况下
          }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  gotoback:function(){
    wx.navigateTo({
      url: '../feedback/feedback'
    });
  },
  goabout: function () {
    wx.navigateTo({
      url: '../about/about'
    });
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})