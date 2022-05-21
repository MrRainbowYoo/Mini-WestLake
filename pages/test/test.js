Page({
    /**
     * 页面的初始数据
     */
    data: {
        latitude: 30.29149,
        longitude: 120.01089,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.mapCtx = wx.createMapContext('map')
        this.mapCtx.addGroundOverlay({
            id: 0,
            src: "https://obohe.com/i/2022/05/18/uqftk3.jpg",
            bounds: {
                southwest: { //西南角
                    latitude: 30.285826,
                    longitude: 120.007203,
                },
                northeast: { //东北角
                    latitude: 30.299964,
                    longitude: 120.02327,
                }
            },
            success(res) {
                console.log('wp', res)
            },
            fail(err) {
                console.log('wperr', err)
            }
        })
    },
})