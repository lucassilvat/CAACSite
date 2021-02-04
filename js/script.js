var resizeContent = function(){
	var screenWidth = window.innerWidth;
	var angle = Math.atan(90/(0.1*screenWidth));
	var turn = (angle*0.5/Math.PI).toFixed(5);
	var percent1 = ((55*screenWidth/120 + 90)/(55/120 + 900/screenWidth))*100/screenWidth-0.25;
	var percent2 = percent1 + 0.5;

	var percentBottom = (0.1 + 55*screenWidth/(120*900))*100;
	console.log(percentBottom);

	$(".carousel-item img").css("mask-image","linear-gradient("+turn+"turn, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) " + percent1.toFixed(2) +"%, rgba(0,0,0,1) "+percent2.toFixed(2)+"%)");
	$("#contato .contact-form").css("width",percentBottom.toFixed(2) + "%");
	$("#contato .apresentacao").css("width",(100-percentBottom).toFixed(2) + "%");

}

resizeContent();

$(function () {
	$(window).resize(function(){
		resizeContent();
	});
});

