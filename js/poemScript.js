
var poemText = "Bright lemon day makes our eyes water, Dad takes us to the pier to fish. I don’t know where he found the rods and without really showing us how, we cast off into silty sea where humpback rocks congregate.          I don’t want to catch anything, imagine something slimy will take the bait. A tug; Dad shouts instructions, I reel in the line. The fish’s mouth plucked above the surface blows desperate kisses into air.          Tangled, the dogfish pants, smacks the swell, swims around itself. Dad says it’s not worth it, so we cut and snap – the fish escapes back into black. We watch it go, white-bellied, bitter & hooked.          At dinner, I squeeze a segment over fish I will not eat, squint my eyes at splattering juice. The hook in my heart judders, it is all at sea, we will both carry it, piercing, into ever deeper water. . . . . . ."
var poemArray = poemText.split(" ");
var playPoem = false;  // TODO: change to false when go-live
function play(){
	playPoem = true;
	if(playPoem){
		var i = 0;
		var playPoem = setInterval(function(){
			if (i < poemArray.length - 1 && playPoem){
				$("#first").html(poemArray[i]).fadeIn();
				if(i > 0){
					$("#second").html(poemArray[i - 1]).fadeIn(); 
					};
				if(i > 1){
					$("#third").html(poemArray[i - 2]).fadeIn();
					};
				if(i > 2){
					$("#fourth").html(poemArray[i - 3]).fadeIn();
					};
				if(i > 3){
					$("#fifth").html(poemArray[i - 4]).fadeIn();
					}
				
			} else {
				clearInterval(playPoem);
				}
			if (checkStop()) {
				playPoem = false;
			}
			i++;
		}, 650);
	}
}
function checkStop(){
	return playPoem;
}
function stop(){
	return playPoem = false;
	console.log("stop");
}
function playTwo(){
	$(".poemWide").html(poemText);
	var div = $("poemWide");
	poemWide.animate({left: '800px'}, "slow");
}

