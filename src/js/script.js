$(document).ready(function(){

    function isTouchDevice(){
        return typeof window.ontouchstart !== 'undefined';
    }

    var dropdownTimer;
    if(isTouchDevice()) {
        $(".objectives a").click(function(){
            dropdownTimer=setTimeout(function() {
                $(this).next().slideDown(250);
            }.bind(this),150)
        });
    }
    else{
        $(".objectives").hover(function(){

            dropdownTimer=setTimeout(function() {
                $(this).children('.dropdown').slideDown(250);
            }.bind(this),150)
        
        }, function(){
        
            clearTimeout(dropdownTimer);
            $(this).children('.dropdown').slideUp(150);
        
        });
    }

    $(".objectives ul li").click(function() {

    	var e = $(this);
    	e.addClass('selected').siblings().removeClass('selected');
    	e.parents('li').find('span').first().html(e.text())
        window.setTimeout(function() {
            e.parents('.dropdown').slideUp(150);
        },150)
        
    });
    
});