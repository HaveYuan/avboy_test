$(function() {
	preloadimages(['images/cover.gif', 'images/cover2.gif'],function() {
		console.log("图片加载完成");
		$(".cover").fadeIn();
		setInterval(function() {
			$(".btn1").addClass('animated pulse');
			$(".next").addClass('animated bounceIn');
			setTimeout(function() {
				$(".btn1").removeClass('animated pulse');
				$(".next").removeClass('animated bounceIn');
			},500)
		},600)

		setInterval(function() {
				$(".cover").css("background-image", "url(images/cover2.gif)");
			setTimeout(function() {
				$(".cover").css("background-image", "url(images/cover.gif)");
			},300);
		},600);
	})

	//跑马灯
	$('#marquee').kxbdMarquee({scrollAmount: 3});

	$("#tkho").get(0).play();
	document.addEventListener("WeixinJSBridgeReady", function () {
	    document.getElementById("tkho").play();
	}, false);

	//关闭背景音乐
	$(".play").click(function() {
		if($(this).hasClass("open")) {
			$("#tkho").get(0).pause();
			$(this).removeClass("open").addClass("close");
		}else {
			$("#tkho").get(0).play();
			$(this).removeClass("close").addClass("open");
		}
	})

	//封面跳转
	$(".btn1").click(function() {
		$(".door").fadeIn();
		$(".cover").fadeOut();
		setTimeout(function() {
			$(".door").css("animation", "dooranimate 4s ease");
		},1000);
		setTimeout(function() {
			$(".door").css("background-image", "");
			$(".black").fadeIn();
		},3000);
		setTimeout(function() {
			$(".door").fadeOut();
			$(".div1").fadeIn();
		},4000);
	})

	//播放音频
	$(".iku").click(function() {
		$("#iplay").get(0).play();
		$("#tkho").get(0).pause();
		$(".play").removeClass("open").addClass("close");
		document.getElementById("iplay").addEventListener('ended', function () {  
			$("#tkho").get(0).play();
			$(".play").removeClass("close").addClass("open");
	    }, false);
	})

	var count = 0;            //分数
	var i = 1;                //第几个div标计
	var num = 3;              //倒计时
	$(".num").text(num);

	//下一题
	$(".con").click(function() {
		console.log(count);
		switch(i) {
			case 10:
				$(".div"+i).hide();
				$(".count").fadeIn();
				$('#marquee').kxbdMarquee({scrollAmount: 3});
				setTimeout(function() {
					$(".count").fadeOut();
					$(".result").fadeIn();
					//总分
					console.log(count);
					switch(count) {
						case 0:
							var img = '<img src="images/0.gif">';
							$(".result").append(img);
							break;
						case 20:
							var img = '<img src="images/20.gif">';
							$(".result").append(img);
							break;
						case 40:
							var img = '<img src="images/40.gif">';
							$(".result").append(img);
							break;
						case 60:
							var img = '<img src="images/60.gif">';
							$(".result").append(img);
							break;
						case 80:
							var img = '<img src="images/80.gif">';
							$(".result").append(img);
							break;
						case 100:
							var img = '<img src="images/100.gif">';
							$(".result").append(img);
							break;
					}
				}, 6000);
				var inter = setInterval(function() {
					num--;
					$(".num").text(num);
					if(num == 0) {
						clearInterval(inter);
					}
				},2000)
				break;
			default:
				$(".div"+i).hide();
				i++;
				$(".div"+i).fadeIn();
				break;
		}
	})

	//正确分数总和
	$(".right").click(function() {
		count = count + 20;
	})

	$('body').on('touchmove', function (event) {
    	event.preventDefault();
	});
	
	
})


// function audioAutoPlay(id){
// 	var audio = document.getElementById(id),
// 	    play = function(){
// 	        audio.play();
// 	        document.removeEventListener("touchstart",play, false);
// 	        document.removeEventListener("touchmove",play, false);
// 	        document.removeEventListener("touchend",play, false);
// 	    };
// 	audio.play();
// 	document.addEventListener("WeixinJSBridgeReady", function () {
// 	    play();
// 	}, false);
// 	document.addEventListener('YixinJSBridgeReady', function() {
// 	    play();
// 	}, false);
// 	document.addEventListener("touchstart",play, false);
// }

function preloadimages(arr,callback){
    var newimages=[];
    var flag = 0;
    var num = 0;
    var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
    for(var j=0; j<arr.length; j++) {
    	flag++;
    	console.log(flag);
    }
    for (var i=0; i<arr.length+1; i++){
    		num++;
    		console.log(num+"kk");
        newimages[i]=new Image();
        if(num>flag) {
    		console.log(num);
        	callback();
        }else {
        	newimages[i].src=arr[i];
        	console.log(newimages[i].src);
        }
       
    }
}