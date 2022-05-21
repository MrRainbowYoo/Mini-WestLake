Page({
    data: {
        imgSrc: 'https://obohe.com/i/2022/05/19/m192dx.jpg',
        postions: [
            {id: 0, left: 50, top: 50, name: '杭州站', content: 'this is position 0'},
            {id: 1, left: 350, top: 100, name: '宁波站', content: 'this is position 1'},
            {id: 2, left: 150, top: 250, name: '台州站', content: 'this is position 2'},
            {id: 3, left: 200, top: 200, name: '嘉兴站', content: 'this is position 3'},
        ],
        highlightPos: 2
    },
    loadImg() {
        wx.hideLoading()
    },
    clickPostion(e) {
        let { id: clickId } = e.currentTarget.dataset
        this.setData({
            highlightPos: clickId
        })
        let currentPostion = this.data.postions.find(item => item.id === clickId)
        let content = currentPostion.content
        console.log(content)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.showLoading({
            title: '加载中......'
          });
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