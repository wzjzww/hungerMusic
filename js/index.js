$('.icon-bofang').click(function(){
	if($(this).hasClass('icon-bofang')){
		$(this).removeClass('icon-bofang').addClass('icon-zanting')
		// _this.audio.pause()
	}else{
		$(this).removeClass('icon-zanting').addClass('icon-bofang')
		// _this.audio.play()
	}
})
$('footer').mouseover(function(){
	$('.content>.iconfont').css('opacity','1')
})
$('footer').mouseout(function(){
	$('.content>.iconfont').css('opacity','0')
})
this.isToEnd = false
this.isToStart = true
this.isAnimate = false
var _this = this
$('.icon-forword').on('click', function(){
	if(_this.isAnimate) return
	var itemWidth = _this.$('.imgList').find('li').outerWidth(true)
	var rowCount = Math.floor(_this.$('.imgList').width()/itemWidth)
	if(!_this.isToEnd){
	_this.isAnimate = true
	_this.$('.imgList>ul').animate({
	    left: '-='+rowCount*itemWidth
	}, 400, function(){
			_this.isAnimate = false
			_this.isToStart = false
			if(parseFloat(_this.$('.imgList').width()) - parseFloat(_this.$('.imgList>ul').css('left')) >= parseFloat(_this.$('.imgList>ul').css('width')) ){
				_this.isToEnd = true
			}
		})
	}
})
$('.icon-back').on('click', function(){
  if(_this.isAnimate) return
  var itemWidth = _this.$('.imgList').find('li').outerWidth(true)
  var rowCount = Math.floor(_this.$('.imgList').width()/itemWidth)
  if(!_this.isToStart) {
    _this.isAnimate = true
    _this.$('.imgList>ul').animate({
      left: '+='+rowCount*itemWidth
    }, 400, function(){
      _this.isToEnd = false
      _this.isAnimate = false
      if(parseFloat(_this.$('.imgList>ul').css('left')) >= 0 ){
        _this.isToStart = true
      }
    })
  }     
})
// function getData(data){
// 	var _this = $(this)
// 	$.ajax({
// 		url: 'http://jirenguapi.applinzi.com/fm/getChannels.php',
// 		dataType: 'jsonp'
// 	}).done(function(ret){
// 		console.log(ret)
// 		_this.render(ret.channels)
// 	}).fail(function(){
// 		console.log('error')
// 	})
// }
// // console.log(getData())
// // function renderData(items){
// // 	var tpl=''
// // 	var nodes
// // 	for(var i=0;i<items.length;i++){
// // 		tpl +='<li class="item">'
// // 		tpl +=	'<div class="'+items.channel_id+'">'
// // 		tpl +=		'<img src="img/loading.gif" data-src="'+items.cover_small+'">'
// // 		tpl +=	'</div>'
// // 		tpl +=	'<h3>'+items.name+'</h3>'
// // 		tpl +='</li>'
// // 	}
// // 	var $nodes = $(tpl)
// // 	$('.item').append($nodes)
// // 	return $nodes
	
// // }

// // renderData()

	
// function render(channels){
// 	console.log(channels)
// 	var html = ''
// 	renderData.forEach(function(items){
// 		html += '<li class="item">'
// 				+ '<div class="'+items.channel_id+'">'
// 				+ 	'<img src="img/loading.gif" data-src="'+items.cover_small+'">'
// 				+ '</div>'
// 				+ '<h3>'+items.name+'</h3>'
// 			  + '</li>'
// 	})
// 	this.$('.imgList>ul').html(html)
// 	this.setStyle()
// }
	
	

