// pages/feedback/feedback.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [],
    suggestValue: "",
    contactValue: "",
    suggestColor: "#b3b0b0"
  },

  suggestValue: function(e){
    var content = e.detail.value
    if ('' != content) {
      this.setData({
        suggestColor: "#b3b0b0"
      })
    }
    this.setData({
      suggestValue: e.detail.value
    })
  },
  contactValue: function(e){
    this.setData({
      contactValue: e.detail.value
    })
  },
  pictureUpload: function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        })
        console.log(res)
        var size = res.tempFiles[0].size;
        var path = res.tempFiles[0].path;
        var formatImage = path.split(".")[(path.split(".")).length - 1];
        console.log("图片格式" + formatImage)
        if (formatImage != "png" && formatImage != "jpg" && formatImage != "jpeg") {
          return wx.showToast({
            title: '只能上传.png、.jpg、.jpep 格式',
            icon: 'none',
            image: '',
            duration: 2000,
            mask: true,
          })
        }
        if (2*1024*1024 < size) {
          return wx.showToast({
            title: '图片大小限制:' + (2*1024*1024 / 1024 / 1024) + "MB",  ///config.image_size 配置文件中设置
            icon: 'none',
            image: '',
            duration: 1500,
            mask: true,
          })
        }
        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)
            var currentImage = {
              fileID: res.fileID,
              cloudPath: cloudPath,
              imagePath: filePath
            }
            that.setData({
              images: that.data.images.concat(currentImage)
            })
            
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

  deleteImage: function (e) {
    var that = this;
    var images = that.data.images;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          images.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          images
        });
      }
    })
  },

  submitFeedback: function(e){
    if ('' === this.data.suggestValue || null === this.data.suggestValue) {
      console.log("aaa")
      this.setData({
        suggestColor: "#ff0000"
      })
    } else {
      var userInfo = app.globalData.userInfo
      var feedbackInfo = {
        images: this.data.images,
        content: this.data.suggestValue,
        contact: this.data.contactValue,
        userInfo: userInfo
      }
      console.log(app)
      console.log(feedbackInfo)
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