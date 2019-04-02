
Page({
  data: {
			list:[],
			bool:false,
			loadingText:"加载中..."
  },
  onLoad: function (options) {
				//  https://easy-mock.com  
				wx.request({
					url:"https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/message",
					success:(res)=>{
						this.setData({
							bool:true,
							list:res.data.list,
							})
					}
				})
  },
  onReady: function () {

  },
  onShow: function () {
			//移除 tabBar 某一项右上角的文本
			wx.removeTabBarBadge({
				index: 2             //第二页 （从左算起）
			})
  },
	onShareAppMessage: function(res) { //转发接口
		if (res.from === 'button') {
			// 来自页面内转发按钮
			console.log(res.target)
		}
		return {
			title: '影之讯', //转发的标题
			path: 'pages/message/message' //转发的页面
			//imageUrl:'https://languanzhao.github.io/img-for-wxproject/pic.png'  //转发显示的图片
		}
	}
})