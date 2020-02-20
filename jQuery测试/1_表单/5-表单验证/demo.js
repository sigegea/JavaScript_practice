	$(function(){
		$("form :input.required").each(function(){
			var $required = $("<strong class='high'> *</strong>"); //创建元素
			//$(this).parent().append($required); //获得当前元素的父元素，然后将星号标识追加到在父元素的内部末尾
			//$(this).after($required);//直接在当前元素的后面加入星号
			$required.insertAfter(this);//将星号插入到当前元素的后面
		}).blur(function(){//文本框失去焦点后
			// $(this).parent().children(".formtips").remove();//清除以前的提示信息
			$(this).nextAll(".formtips").remove();
			 //验证用户名
			 if( $(this).is('#username') ){
					if( this.value=="" || this.value.length < 6 ){
					    var errorMsg = '请输入至少6位的用户名.';
                        $(this).next().after('<span class="formtips onError">'+errorMsg+'</span>');
					}else{
					    var okMsg = '输入正确.';
					    $(this).next().after('<span class="formtips onSuccess">'+okMsg+'</span>');
					}
			 }
			 //验证邮件
			 if( $(this).is('#email') ){
				if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                      var errorMsg = '请输入正确的E-Mail地址.';
					  $(this).next().after('<span class="formtips onError">'+errorMsg+'</span>');
				}else{
                      var okMsg = '输入正确.';
					  $(this).next().after('<span class="formtips onSuccess">'+okMsg+'</span>');
				}
			 }
		}).keyup(function(){
		   $(this).triggerHandler("blur");
		}).focus(function(){
	  	   $(this).triggerHandler("blur");
		});//end blur

		
		//提交，最终验证。
		 $('#send').click(function(){
				$("form :input.required").trigger('blur');
				var numError = $('form .onError').length;
				if(numError){
					return false;
				} 
				alert("注册成功,密码已发到你的邮箱,请查收.");
		 });

		//重置
		 $('#res').click(function(){
				$(".formtips").remove(); 
		 });
	});
