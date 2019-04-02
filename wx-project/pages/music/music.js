//酷狗音乐 f12 复制src
Page({
  data:{
		slow:"-",
		quick:"+",
		percent1: 0,
		percent2: 0,
		status: 'normal',
		name1: "年轮",
    singer1: "张碧晨",
    src1: "http://fs.w.kugou.com/201902230228/ec366103b8affd79bb99b33560ffb0dd/G016/M09/10/1D/8JMEAFV6tEiAGRnKAEMC5mAl6f4464.mp3",
    name2: "只要平凡",
    singer2: "张杰 张碧晨",
    src2: "http://fs.w.kugou.com/201902230100/1af5e05684044d74941426f2c50714b2/G128/M0B/0D/05/IIcBAFss7SWAFJ0BADwVp8tbUyg648.mp3"
  },
	onShow:function(){
		wx.request({
			url:"https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/music",
			success:(res)=>{
				console.log(res)
				this.setData({
					name1:res.data.data.name1,
					singer1:res.data.data.singer1,
					src1:res.data.data.src1,
					name2:res.data.data.name2,
					singer2:res.data.data.singer2,
					src2:res.data.data.src2,
				})
			}
		})
	
		
	},
	 handleAdd1:function(){
        if (this.data.percent1 === 100) return;
        this.setData({
            percent1: this.data.percent1 + 10
        });
        if (this.data.percent1 === 100) {
            this.setData({
                status: 'success'
            });
        }
		
				this.src1.seek(this.data.percent1)
    },
		handleAdd2:function(){
				if (this.data.percent2 === 100) return;
				this.setData({
						percent2: this.data.percent2 + 10
				});
				if (this.data.percent2 === 100) {
						this.setData({
								status: 'success'
						});
				}
		
				this.src2.seek(this.data.percent2)
		},
    handleReduce1:function() {
        if (this.data.percent1 === 0) return;
        this.setData({
            percent1: this.data.percent1 - 10,
            status: 'normal'
        })
				
				this.src1.seek(this.data.percent1)
    },
		handleReduce2:function() {
				if (this.data.percent2 === 0) return;
				this.setData({
						percent2: this.data.percent2 - 10,
						status: 'normal'
				})
				
				this.src1.seek(this.data.percent2)
		},
	onReady(e) {
		// 使用 wx.createAudioContext 获取 audio 上下文 context
		this.src1 = wx.createAudioContext('src1')
		this.src2 = wx.createAudioContext('src2')
		//设置src
		// this.audioCtx.setSrc('http://fs.w.kugou.com/201901221030/1b900e8a24ebec3d42a0bfb20667e6bb/G149/M02/15/18/NYcBAFvo8v6AUzwCADTY9URVT8U514.mp3')
	},
  src1Play(){
    if(this.src1.play()){
			this.src1.play()
		}else{
			this.src2.pause()
		}
  },
	//避免点击另外一首会同时播放
	src2Play(){
		if(this.src2.play()){
			this.src2.play()
		}else{
			this.src1.pause()
		}
	},
  src1Pause(){
    this.src1.pause()
  },
	src2Pause(){
		this.src2.pause()
	},
	src1Time(){
		this.src1.seek(60)
	},
	src2Time(){
		this.src2.seek(60)
	},
  src1Start(){
    this.src1.seek(0)	
  },
	src2Start(){
		this.src2.seek(0)
	},
	onShareAppMessage: function(res) { //转发接口
		if (res.from === 'button') {
			// 来自页面内转发按钮
			console.log(res.target)
		}
		return {
			title: '影之讯', //转发的标题
			path: 'pages/music/music' //转发的页面
			//imageUrl:'https://languanzhao.github.io/img-for-wxproject/pic.png'  //转发显示的图片
		}
	}
})