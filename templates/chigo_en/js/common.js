/* 
*作者：一些事情
*时间：2015-4-17
*需要结合jquery和Validform和artdialog一起使用
----------------------------------------------------------*/

//链接下载
function downLink(point, linkurl){
	if(point > 0){
		dialog({
			title:'提示',
			content:"下载需扣除" + point + "个积分<br />重复下载不扣积分，需要继续吗？",
			okValue:'确定',
			ok:function (){
				window.location.href = linkurl;
			},
			cancelValue: '取消',
			cancel: function (){}
		}).showModal();
	}else{
		window.location.href = linkurl;
	}
	return false;
}
//搜索查询
function SiteSearch(send_url, divTgs, channel_name) {
    //var strwhere = "";
    //if (channel_name !== undefined) {
       // strwhere = "&channel=news"
   // }
	var str = $.trim($(divTgs).val());
	if (str.length > 0 && str != "请输入") {
	    window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
	}
	return false;
}


/*表单AJAX提交封装(包含验证)
------------------------------------------------*/
function AjaxInitForm(formObj, btnObj, isDialog, urlObj, callback){
	var argNum = arguments.length; //参数个数
	$(formObj).Validform({
		tiptype:3,
		callback:function(form){
			//AJAX提交表单
            $(form).ajaxSubmit({
                beforeSubmit: formRequest,
                success: formResponse,
                error: formError,
                url: $(formObj).attr("url"),
                type: "post",
                dataType: "json",
                timeout: 60000
            });
            return false;
		}
	});
    
    //表单提交前
    function formRequest(formData, jqForm, options) {
        $(btnObj).prop("disabled", true);
        $(btnObj).val("提交中...");
    }

    //表单提交后
    function formResponse(data, textStatus) {
		if (data.status == 1) {
            $(btnObj).val("提交成功");
			//是否提示，默认不提示
			if(isDialog == 1){
				var d = dialog({content:data.msg}).show();
				setTimeout(function () {
					d.close().remove();
					if (argNum == 5) {
						callback();
					}else if(data.url){
						location.href = data.url;
					}else if($(urlObj).length > 0 && $(urlObj).val() != ""){
						location.href = $(urlObj).val();
					}else{
						location.reload();
					}
				}, 2000);
			}else{
				if (argNum == 5) {
					callback();
				}else if(data.url){
					location.href = data.url;
				}else if($(urlObj)){
					location.href = $(urlObj).val();
				}else{
					location.reload();
				}
			}
        } else {
			dialog({title:'提示', content:data.msg, okValue:'确定', ok:function (){}}).showModal();
            $(btnObj).prop("disabled", false);
            $(btnObj).val("再次提交");
        }
    }
    //表单提交出错
    function formError(XMLHttpRequest, textStatus, errorThrown) {
		dialog({title:'提示', content:'状态：'+textStatus+'；出错提示：'+errorThrown, okValue:'确定', ok:function (){}}).showModal();
        $(btnObj).prop("disabled", false);
        $(btnObj).val("再次提交");
    }
}

function AjaxInitDownload(btnObj, isDialog, urlObj, callback){
    $(btnObj).click(function(){
        $.ajax({
            type: "get",
            url: "/tools/submit_ajax.ashx?action=Download_validate&pwd="+$(this).prev(".pwstext").val()+"&id="+$(this).attr('data-id'),
            contentType: "application/json",//必须有
            dataType: "json", //表示返回值类型，不必须
            data: "",//相当于 //data: "{'str1':'foovalue', 'str2':'barvalue'}",
            success: function (data) {              
                //获取数据ok
                if (data.status == 1) {
                $(btnObj).val("Downloaded");
                //是否提示，默认不提示
                if(isDialog == 1){
                    window.open(data.msg);
                }
            } else {
                dialog({title:'tips', content:data.msg, okValue:'OK', ok:function (){}}).showModal();
                $(btnObj).prop("disabled", false);
                $(btnObj).val("Again");
            }
            }
        });
    });
}
//切换验证码
function ToggleCode(obj, codeurl) {
    $(obj).children("img").eq(0).attr("src", codeurl + "?time=" + Math.random());
	return false;
}