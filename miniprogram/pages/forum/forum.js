// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    d_sty: 0,
    k_sty: 0,
    r_sty: 0,
    d_bc: '#05b8fd4d',
    k_bc: ''
  },

  btn_click: function (e){
    //点击按钮，样式改变
    let that = this;
    console.log(e.currentTarget.id)
    if (e.currentTarget.id == 'discover') {
      that.setData({
        d_sty: 1,
        d_bc: '#05b8fd4d',
        k_sty: 0,
        k_bc: ''
      });
    } else {
      that.setData({
        d_sty: 0,
        d_bc: '',
        k_sty: 1,
        k_bc: '#05b8fd4d'
      });
    }
    
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

  }
})