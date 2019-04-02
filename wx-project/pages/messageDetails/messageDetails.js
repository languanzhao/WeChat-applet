//跳转到相对应的详情页
//navigator 拼接 id 跳转 ，详情页onLoad自带参数query接收
//获取 id=1 后台接口后拼接query.id 即 
// https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/messageDetails/messageId=1

//获取 id=2 后台接口后拼接query.id 即 
// https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/messageDetails/messageId=2

//获取 id=3 后台接口后拼接query.id 即 
// https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/messageDetails/messageId=3
Page({
  data: {
			list:[],
			bool:false,
			loadingText:"加载中..."
  },
  onLoad: function (query) {
		console.log(query)
		var that = this
		//  https://easy-mock.com  后台接口
		  wx.request({
				url:"https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/messageDetails/messageId="+query.id,
				data:{
					
				},
				success:function(res){
					console.log(res)
					that.setData({
						bool:true,
						list:res.data.list,
						})
				}
			})
			
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
  onShareAppMessage: function(res) { //转发接口
  	if (res.from === 'button') {
  		// 来自页面内转发按钮
  		console.log(res.target)
  	}
  	return {
  		title: '影之讯', //转发的标题
  		path: 'pages/messageDetails/messageDetails' //转发的页面
  		//imageUrl:'https://languanzhao.github.io/img-for-wxproject/pic.png'  //转发显示的图片
  	}
  }
})