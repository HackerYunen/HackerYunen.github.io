"use strict";$(function(){var e=!1;$("a.social-icon.search").on("click",function(){var t;$("body").css({width:"100%",overflow:"hidden"}),$(".search-dialog").css("display","block"),$("#local-search-input input").focus(),$(".search-mask").fadeIn(),e||(t=GLOBAL_CONFIG.localSearch.path,$.ajax({url:GLOBAL_CONFIG.root+t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),a=$("#local-search-input input")[0],s=$("#local-hits")[0];a.addEventListener("input",function(){var o='<div class="search-result-list">',r=this.value.trim().toLowerCase().split(/[\s]+/);if(s.innerHTML="",this.value.trim().length<=0)$(".local-search-stats__hr").hide();else{var l=0;e.forEach(function(t){var a=!0,s=t.title.trim().toLowerCase(),c=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),e=t.url,i=-1,n=-1;""!==s&&""!==c&&r.forEach(function(t,e){i=s.indexOf(t),n=c.indexOf(t),i<0&&n<0?a=!1:n<0&&(n=0)}),a&&(o+='<div class="local-search__hit-item"><a href="'+e+'" class="search-result-title">'+s+"</a></div>",l+=1,$(".local-search-stats__hr").show())}),0===l&&(o+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),s.innerHTML=o}})}}),e=!0),document.addEventListener("keydown",function t(e){"Escape"===e.code&&(a(),document.removeEventListener("keydown",t))})});var a=function(){$("body").css("width",""),$("body").css("overflow",""),$(".search-dialog").css({animation:"search_close .5s"}),$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)}),$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click touchstart",a)});