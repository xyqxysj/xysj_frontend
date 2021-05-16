// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    which_tab: 0,
    unselect_bc: '',
    select_bc: '#05b8fd4d',
    tab_type: 1
  },

  btn_click: function (e){
    //点击按钮，样式改变
    let that = this;
    console.log(e.currentTarget.id)
    if (e.currentTarget.id == 'discover') {
      that.setData({
        which_tab: 0,
        tab_type: 1
      });
    } else {
      that.setData({
        which_tab: 1,
        tab_type: 2
      });
    }
    
  },

  shard_item: function (e) {
    console.log(e)
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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '校友圈',
      path: '/page/index/index'
    }
  }
})