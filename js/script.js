$(function(){var e=["https://web.whatsapp.com/send?phone=917016964352","https://api.whatsapp.com/send?phone=917016964352"];function t(){var t=767.98>$(window).width();$(".set-url-target").attr("href",e[t?1:0])}$(window).on("resize",function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(t,200)}).trigger("resize")});


document.querySelector(".year").innerHTML= new Date().getFullYear()

