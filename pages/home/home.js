Page({
    data: {
        translateX: 0, // 位移x坐标 单位px
        translateY: 100, // 位移y坐标 单位px
        distance: 0, // 双指接触点距离
        scale: 3, // 缩放倍数
        startMove: { // 起始位移距离
            x: 0,
            y: 0,
        },
        startTouches: [], // 起始点touch数组,
        lastTapDiffTime: 0,

        latitude: 30.29149,
        longitude: 120.01089,
    },
    touchStart(e) {
        const touches = e.touches
        const { translateX, translateY } = this.data
        const { pageX, pageY } = touches[0]
        this.data.startMove = {
            x: pageX - translateX,
            y: pageY - translateY
        }
        this.data.startTouches = touches
    },
    touchMove(e) {
        const touches = e.touches
        const { pageX: onePageX, pageY: onePageY } = touches[0]
        const { startMove, scale, distance: oldDistance, startTouches } = this.data
        if (touches.length === 2 && startTouches.length === 2) {
            // 双指缩放
            const { pageX: twoPageX, pageY: twoPageY } = touches[1]
            // 求出当前双指距离
            const distance = Math.sqrt((twoPageX - onePageX) ** 2 + (twoPageY - onePageY) ** 2)
            this.data.distance = distance
            this.setData({
                scale: scale * (distance / (oldDistance || distance))
            })
        } else if (startTouches.length !== 2) {
            // 单指拖拽
            // this.setData({
            //     translateX: onePageX - startMove.x,
            //     translateY: onePageY - startMove.y
            // })


            var query = wx.createSelectorQuery();
            query.select('#map-img').boundingClientRect((rect) => {
                let { top, right, bottom, left, width, height } = rect
                console.log(rect)
                if(top > 0 || left > 0 || right < 375 || bottom < 543) {
                    console.log('越界')
                    console.log(onePageY - startMove.y)
                    // this.setData({
                    //     translateX: onePageX - startMove.x,
                    //     translateY: onePageY - startMove.y
                    // })
                } else {
                    this.setData({
                        translateX: onePageX - startMove.x,
                        translateY: onePageY - startMove.y
                    })
                }
            }).exec()
        }
    },
    touchEnd() {
        this.data.distance = null;
    },
    initMap() {
        this.data = {
            translateX: 0, // 位移x坐标 单位px
            translateY: 0, // 位移y坐标 单位px
            distance: 0, // 双指接触点距离
            scale: 1, // 缩放倍数
            startMove: { // 起始位移距离
                x: 0,
                y: 0,
            },
            startTouches: [] // 起始点touch数组
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.width = wx.getSystemInfoSync().windowWidth;

        this.mapCtx = wx.createMapContext('map')
        this.mapCtx.addGroundOverlay({
            id: 0,
            src: "https://obohe.com/i/2022/05/19/lpxwij.png",
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
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})