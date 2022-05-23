Component({
    properties: {
        isCanDraw: {
            type: Boolean,
            value: false,
            observer(newVal) {
                newVal && this.handleStartDrawImg()
            }
        },
        userInfo: {
            type: Object,
            value: {
                avatarUrl: '',
                nickName: ''
            }
        }
    },
    data: {
        imgDraw: {},
        sharePath: ""
    },
    methods: {
        handleStartDrawImg() {
            wx.showLoading({
              title: '生成中',
            })
            
            this.setData({
                imgDraw: {
                    width: '750rpx',
                    height: '1334rpx',
                    background: '../../images/bg.png',
                    views: [
                        {
                            type: 'image',
                            url: '../../images/card-tp01.jpg',
                            css: {
                                top: '32rpx',
                                left: '30rpx',
                                right: '32rpx',
                                width: '688rpx',
                                height: '420rpx',
                                borderRadius: '16rpx'
                            }
                        },
                        {
                            type: 'image',
                            url: this.data.userInfo.avatarUrl,
                            css: {
                                top: '404rpx',
                                left: '328rpx',
                                width: '96rpx',
                                height: '96rpx',
                                borderWidth: '6rpx',
                                borderColor: '#fff',
                                borderRadius: '96rpx'
                            }
                        },
                        {
                            type: 'text',
                            text: this.data.userInfo.nickName,
                            css: {
                              top: '532rpx',
                              fontSize: '28rpx',
                              left: '375rpx',
                              align: 'center',
                              color: '#3c3c3c'
                            }
                          },
                          {
                            type: 'text',
                            text: `邀请您一起云游西湖`,
                            css: {
                              top: '576rpx',
                              left: '375rpx',
                              align: 'center',
                              fontSize: '28rpx',
                              color: '#3c3c3c'
                            }
                          },
                          {
                            type: 'text',
                            text: `宇宙最萌蓝牙耳机测评员`,
                            css: {
                              top: '644rpx',
                              left: '375rpx',
                              maxLines: 1,
                              align: 'center',
                              fontWeight: 'bold',
                              fontSize: '44rpx',
                              color: '#3c3c3c'
                            }
                          },
                          {
                            type: 'image',
                            url: '../../images/qrcode.png',
                            css: {
                              top: '834rpx',
                              left: '470rpx',
                              width: '200rpx',
                              height: '200rpx'
                            }
                          }
                    ]
                }
            })
        },
        onImgErr(e) {
            wx.hideLoading()
            wx.showToast({
              title: '生成分享图失败，请刷新页面重试',
            })
            this.triggerEvent('initData')
        },
        onImgOK(e) {
            wx.hideLoading()
            wx.showShareImageMenu({
              path: e.detail.path,
              fail: err => {
                  console.log(err)
              }
            })
            this.triggerEvent('initData')
        }
    }
})