/**
 * Created by hustg on 2018/7/28.
 */

$(function () {
    $(".fullpage").fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        navigation: true,
        scrollingSpeed: 1000,
        verticalCentered:false,
        afterRender: function () {
            $("a.more").on("click", function () {
                $.fn.fullpage.moveSectionDown();
            });
            $(".screen4 .cart_sofa").on("transitionend",function () {
                $('.screen4 .address').show().find('img:last').fadeIn(1000);
                $('.screen4 .text').addClass('show');
            });
            $(".screen8").on("mousemove",function (e) {
                $('.screen8 .hand').css({
                    left:e.clientX+15,
                    top:e.clientY-35
                })
            });
            $(".screen8 .again").on("click",function () {
                $(".section").removeClass("leave").removeClass("catch").removeClass("now");
                $(".box").removeAttr("style");
                $.fn.fullpage.moveTo(1);
            })

        },
        afterLoad:function (link,index) {
            $(".section").eq(index-1).addClass("now");
        },
        onLeave:function(index,nextIndex,direction){
            if(index==2&&nextIndex==3){
                $(".section").eq(index-1).addClass("leave");
            }
            else if(index==3&&nextIndex==4){
                $(".section").eq(index-1).addClass("leave");
            }
            else if(index==5&&nextIndex==6){
                $(".section").eq(index-1).addClass("leave");
                $(".section").eq(index).addClass("catch");
            }
            else if(index==6&&nextIndex==7){
                $(".screen7 .star img").each(function (i,item) {
                    $(this).css("transition-delay",0.5*i+"s");
                })
            }
        }
    });
    
});

