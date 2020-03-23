"use strict";$(function(){for(var i=void 0!==GLOBAL_CONFIG.Snackbar,t=0<$("#sidebar .sidebar-toc__content").children().length,s=$("#page-header"),n=$("#rightside"),e=$("body"),a=void 0!==$("#search_button").outerWidth()?$("#search_button").outerWidth():0,o=$("#blog_name").width(),r=0,c=s.find(".menus_item"),d=0;d<c.length;d++)r+=c.eq(d).outerWidth();function l(e){var t;1===e?t=o+a+r>s.width()-300:2===e&&(t=o+a+r>s.width()),t?u():(s.find(".toggle-menu").removeClass("is_visible"),s.find(".menus").removeClass("is_invisible"),s.find("#search_button span").removeClass("is_invisible"))}function h(){window.innerWidth<768?u():l(2)}function u(){s.find(".toggle-menu").addClass("is_visible"),s.find(".menus").addClass("is_invisible"),s.find("#search_button span").addClass("is_invisible")}h(),$(window).on("resize",function(){s.hasClass("open-sidebar")||h()}),GLOBAL_CONFIG_SITE.isHome&&(/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||!isDesktop()||$("#nav").css("background-attachment","fixed"));var m=$("#toggle-sidebar").hasClass("on")&&t,f=!1;function p(){f=!1,s.removeClass("open-sidebar"),$("#sidebar").removeClass("tocOpenPc"),$("#body-wrap").animate({paddingLeft:0},400),$("#sidebar").animate({left:"-300px"},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout(function(){l(2)},400)}function g(){f=!0,s.addClass("open-sidebar"),$("#sidebar").addClass("tocOpenPc"),$("#body-wrap").animate({paddingLeft:300},400),$("#sidebar").animate({left:0},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});var e=window.setInterval(function(){l(1)},100);setTimeout(function(){clearInterval(e)},400)}1024<window.innerWidth&&m&&setTimeout(function(){g()},400),t?$("#toggle-sidebar").css("opacity","1"):($("#toggle-sidebar").css("display","none"),$("#mobile-toc-button").css("display","none")),$("#toggle-sidebar").on("click",function(){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on"),(e?p:g)()});var v=$(".toggle-menu"),b=$("#mobile-sidebar-menus"),C=$("#mobile-toc-button"),w=$("#menu_mask");function _(e){if(sidebarPaddingR(),$("body").css("overflow","hidden"),w.fadeIn(),"menu"===e){v.removeClass("close").addClass("open"),b.css("transform","translate3d(-100%,0,0)");var t=b.children();for(d=0;d<=t.length;d++){var i=d/5+.2;t.eq(d).css("animation","sidebarItem "+i+"s")}}"toc"===e&&(C.removeClass("close").addClass("open"),$("#sidebar").addClass("tocOpenMobile"),$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""}))}function y(e){$("body").css({overflow:"","padding-right":""}),w.fadeOut(),"menu"===e&&(v.removeClass("open").addClass("close"),b.css("transform",""),$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")),"toc"===e&&(C.removeClass("open").addClass("close"),$("#sidebar").removeClass("tocOpenMobile"),$("#sidebar").css({transform:""}))}v.on("click",function(){_("menu")}),C.on("click",function(){_("toc")}),w.on("click touchstart",function(e){v.hasClass("open")&&y("menu"),C.hasClass("open")&&y("toc")}),$(window).on("resize",function(e){v.is(":visible")||v.hasClass("open")&&y("menu")}),window.matchMedia("(max-width: 1024px)").addListener(function(e){e.matches?!0===f&&p():($("#toggle-sidebar").hasClass("on")&&t&&g(),C.hasClass("open")&&y("toc"))}),$("#scroll_down").on("click",function(){scrollTo("#content-inner")}),$("#bookmark-it").on("click",function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;if(i){var e=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".";snackbarShow(e)}else alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}});var k=GLOBAL_CONFIG.highlightCopy,L=GLOBAL_CONFIG.highlightLang,O=GLOBAL_CONFIG.highlightShrink,G=$("figure.highlight");(k||L||"none"!==O)&&G.wrap('<div class="code-area-wrap"></div>').before('<div class="highlight-tools"></div>');var x,A=$(".highlight-tools");!0===O?A.append('<i class="fa fa-angle-down code-expand code-closed" aria-hidden="true"></i>'):!1===O&&A.append('<i class="fa fa-angle-down code-expand" aria-hidden="true"></i>'),$(document).on("click",".highlight-tools >.code-expand",function(){var e=$(this).parent().next();$(this).hasClass("code-closed")?(e.css("display",""),$(this).removeClass("code-closed")):(e.css("display","none"),$(this).addClass("code-closed"))}),L&&G.each(function(){"plain"===(x=$(this).attr("class").split(" ")[1])&&(x="Code"),$(this).prev().append('<div class="code-lang">'+x+"</div>")});if(k){A.append('<div class="copy-notice"></div><i class="fa fa-clipboard" aria-hidden="true"></i>');$(document).on("click",".highlight-tools>.fa-clipboard",function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents($(this).parent().next().find(".code pre")[0]),e.removeAllRanges(),e.addRange(t);e.toString();!function(t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),i?snackbarShow(GLOBAL_CONFIG.copy.success):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1,right:30},450,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)})}catch(e){if(!i)return $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1,right:30},650,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0,right:0},650)},400)});snackbarShow(GLOBAL_CONFIG.copy.success)}else i?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(this),e.removeAllRanges()})}var I=$(".justified-gallery");if(I.length){var F=I.find("img");F.unwrap(),F.length&&F.each(function(e,t){$(t).attr("data-src")&&$(t).attr("src",$(t).attr("data-src")),$(t).wrap("<div></div>")}),$("head").append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/justifiedGallery/dist/css/justifiedGallery.min.css">'),loadScript("https://cdn.jsdelivr.net/npm/justifiedGallery/dist/js/jquery.justifiedGallery.min.js",function(){I.not($(".hide-content .justified-gallery")).justifiedGallery({rowHeight:220,margins:4})})}var S=GLOBAL_CONFIG.medium_zoom;if(GLOBAL_CONFIG.fancybox)$("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(e,t){var i=$(t).attr("data-src")?$(t).attr("data-src"):$(t).attr("src");$(t).wrap('<a href="'+i+'" data-fancybox="group" data-caption="'+$(t).attr("alt")+'" class="fancybox"></a>')}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]});else if(S){var N=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));N.on("open",function(e){var t="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";N.update({background:t})})}var B=0;if($(window).scroll(function(e){var t,i,a=$(this).scrollTop(),o=(i=B<(t=a),B=t,i);56<a?(o?s.hasClass("visible")&&s.removeClass("visible"):s.hasClass("visible")||s.addClass("visible"),s.addClass("fixed"),"0"===n.css("opacity")&&n.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&s.removeClass("fixed").removeClass("visible"),n.css({opacity:"",transform:""}))}),$("#go-up").on("click",function(){scrollTo("body")}),GLOBAL_CONFIG_SITE.isPost&&t){$(".toc-child").hide(),$(window).scroll(throttle(function(e){var t=$(this).scrollTop();T(t),D(t),j(t)},100)),$(".toc-link").on("click",function(e){window.innerWidth<=1024?y("toc"):(e.preventDefault(),scrollTo($(this).attr("href")))});var T=function(e){var t=$("#article-container").height(),i=$(window).height(),a=e/(i<t?t-i:$(document).height()-i),o=Math.round(100*a),s=100<o?100:o<=0?0:o;$(".progress-num").text(s),$(".sidebar-toc__progress-bar").animate({width:s+"%"},100)},D=function(t){if(0===$(".toc-link").length)return!1;var e=$("#article-container").find("h1,h2,h3,h4,h5,h6"),i="";e.each(function(){var e=$(this);t>e.offset().top-25&&(i="#"+$(this).attr("id"))}),""===i&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a,o,s=$(".toc-link.active");if(i&&s.attr("href")!==i){o=i,window.history.replaceState&&o!==window.location.hash&&window.history.replaceState(void 0,void 0,o),$(".toc-link").removeClass("active");var n=$('.toc-link[href="'+i+'"]');n.addClass("active");var r=n.parents(".toc-child"),c=0<r.length?r.last():n;(a=c.closest(".toc-item").find(".toc-child")).is(":visible")||a.fadeIn(400),c.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}},j=function(e){if($(".toc-link").hasClass("active")){var t=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop();t>e+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),t<e+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100)}}}$("#readmode").click(function(){$("body").toggleClass("read-mode")}),$("#font_plus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))+1)}),$("#font_minus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))-1)}),$("#mobile-sidebar-menus .menus-expand").on("click",function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))}),$(window).on("touchmove",function(e){var t=$("#page-header .menus_item_child");t.is(":visible")&&t.css("display","none")}),$("#rightside_config").on("click",function(){$("#rightside-config-hide").hasClass("rightside-in")?$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out"):$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")});var z=GLOBAL_CONFIG.copyright;void 0!==z&&(document.body.oncopy=function(e){e.preventDefault();var t=void 0,i=window.getSelection(0).toString();return t=45<i.length?i+"\n\n\n"+z.languages.author+"\n"+z.languages.link+"\n"+z.languages.source+"\n"+z.languages.info:i,e.clipboardData?e.clipboardData.setData("text",t):window.clipboardData.setData("text",t)});var M=GLOBAL_CONFIG.isFontAwesomeV5,E=$("#darkmode");function P(){M?E.removeClass("fa-moon").addClass("fa-sun"):E.removeClass("fa-moon-o").addClass("fa-sun-o")}function R(){M?E.removeClass("fa-sun").addClass("fa-moon"):E.removeClass("fa-sun-o").addClass("fa-moon-o")}if("undefined"!=typeof autoChangeMode&&("dark"===Cookies.get("theme")?P:R)(),E.click(function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(P(),activateDarkMode(),Cookies.set("theme","dark",{expires:2}),i&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(R(),activateLightMode(),Cookies.set("theme","light",{expires:2}),i&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day));try{utterancesTheme()}catch(e){return!1}}),GLOBAL_CONFIG.runtime){var q,W=$("#webinfo-runtime-count"),H=W.attr("start_date"),Z=function(){var e=new Date(H),t=(new Date).getTime()-e.getTime(),i=Math.floor(t/864e5);W.text(i+" "+GLOBAL_CONFIG.runtime_unit)};Z(),clearInterval(q),q=setInterval(Z,1e4)}GLOBAL_CONFIG.baiduPush&&function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)}(),$(".hide-button").on("click",function(e){e.preventDefault(),$(this).hide();var t=$(this).next(".hide-content");t.show(),t.find(".justified-gallery").justifiedGallery({rowHeight:220,margins:4})})});