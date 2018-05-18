// pages/setting/setting.js

const url_user_by_phone = require('../../config').user_by_phone
const url_statistics_by_user = require('../../config').statistics_user

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    list_data: [{ type: 'school', service:'student.auth.timetable',date:'2018-05-17 12:30:00'}],
    user: {},
    user_ui_visibility: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 搜索用户
   */
  onSearch: function () {
    this.findUserByPhone(this.data.phone);
  },

  /**
   * 手机号码输入
   */
  onPhoneInput: function (e) {
    this.setData({ phone: e.detail.value })
  },



  /**
   * 查询用户  根据手机号码
   */
  findUserByPhone: function (phone) {
    var _this = this;

    wx.request({
      data: {
        phone: phone
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      url: url_user_by_phone,
      success: function (result) {
        _this.setData({
          user: result.data.data,
          user_ui_visibility: true
        })

        //查询统计
        _this.statisticsByUser();
      },
      fail: function (e) {
        _this.setData({
          user: null,
          user_ui_visibility: false
        })
      }
    })
  },

  /**
   * 统计某用户
   */
  statisticsByUser: function () {
    var _this = this;
    wx.request({
      url: url_statistics_by_user,
      method: 'POST',
      data: {
        user_id: this.data.user.id  
      },
      success: function (result) {
        _this.setData({
          list_data: result.data
        })
      },
      fail: function (e) {

      }
    })
  }
})