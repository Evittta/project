function writeText(id, text, speed){
	let el = document.getElementById(id), txt = text.join("").split("");
    let interval = setInterval(function() {
    	if(!txt[0]) {
    		return clearInterval(interval);
    	};
		el.innerHTML += txt.shift();
    }, speed != undefined ? speed : 150);
    return false;
};
    
writeText("text-type", ["Student at SoftServe IT Academy"]);