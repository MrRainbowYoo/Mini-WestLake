// pages/draw/draw.js
const app = getApp()

Page({
    data: {
        isCanDraw: false,
    },
    onLoad(options) {},
    handleClose() {
        this.setData({
            isCanDraw: !this.data.isCanDraw
        })
    },
    getUserInfo(e) {
        wx.getUserProfile({
          desc: '获取您的头像昵称信息',
          success: res => {
              let { userInfo = {} } = res
            //   userInfo.avatarUrl = userInfo.avatarUrl.replace('https://thirdwx.qlogo.cn', 'https://wx.qlogo.cn')
            //   console.log(userInfo)
              this.setData({
                  userInfo,
                  isCanDraw: true
              })
          },
          fail: err => {
              console.log(err)
          }
        })
    }
})