	window.app={
	nettyServerUrl:'ws://169.254.52.130:8088/ws',
	/**
	 *后端服务发布的url地址
	 */
	serverUrl:'http://169.254.52.130:8080',
	/**
	 *图片服务器服务发布的url地址
	 */
	imgserverUrl:'http://192.168.243.129:88/ning/',
	/**判断字符串是否为空
	 * @param {Object} str
	 */
	/**
	 *图片服务器服务发布的url地址
	 */
	videoserverUrl:'http://192.168.243.129:88/ning/',
	/**判断字符串是否为空
	 * @param {Object} str
	 */
	isNotNull:function(str){
		if(str!=null&&str!=""&&str!=undefined){
			return true;
		}
		return false;
	},
	/**前端提示的html5+的,封装消息提示框
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast:function(msg,type){
		plus.nativeUI.toast(msg,{icon:"image/"+type+".png",verticalAlign:"center"})
	},
	/**保存用户全局对象
	 * @param {Object} user
	 */
	setUserGlobalInfo:function(user){
		var userInfoStr=JSON.stringify(user);
		plus.storage.setItem("userInfo",userInfoStr);
	},
	getUserGlobalInfo:function(){
		var userInfoStr=plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	},
	/**
	 * 清空stirage的缓存
	 */
	userLogout:function(){
		plus.storage.removeItem("userInfo");
	},
	//保存一级导航
	saveSortMain:function(SortMainList){
		var sortMainList=JSON.stringify(SortMainList);
		plus.storage.setItem("SortMainList",sortMainList);
	},
	//获取一级导航
	getSortMain:function(){
		var sortMainList =plus.storage.getItem("SortMainList");
		if(!this.isNotNull(sortMainList)){
			return [];
		}
		return JSON.parse(sortMainList);
	},
	//保存二级导航
	saveSort_sec:function(SortSecList){
		var SortSecList=JSON.stringify(SortSecList);
		plus.storage.setItem("SortSecList",SortSecList);
	},
	//获取二级导航
	getSort_sec:function(){
		var SortSecList =plus.storage.getItem("SortSecList");
		if(!this.isNotNull(SortSecList)){
			return [];
		}
		return JSON.parse(SortSecList);
	},
	/**保存章节信息
	 * @param {Object} courseId课程id
	 * @param {Object} flag是否为章,0表章,1表节
	 */
	saveCourseZj:function(courseId,contactList){
		var chatkey="coursezj-"+courseId;
		var contactListStr=JSON.stringify(contactList);
		plus.storage.setItem(chatkey,contactListStr);
	},
	//获取章节列表
	getCourseZj:function(courseId){
		var chatkey="coursezj-"+courseId;
		var courseListStr =plus.storage.getItem(chatkey);
		if(!this.isNotNull(courseListStr)){
			return [];
		}
		return JSON.parse(courseListStr);
	},
	//清空章节列表
	removeCourseZj:function(courseId){
		var chatkey="coursezj-"+courseId;
		plus.storage.removeItem(chatkey);
	}
}