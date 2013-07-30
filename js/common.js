// JavaScript Document

var bPlaceHolderEdited = false;

$(document).ready(function(e) {
    $("#compose").click(function(e) {
		if (!bPlaceHolderEdited) $(this).html("");
		bPlaceHolderEdited = true;
    });
	
	$("#compose").keypress(function(e) {
        if (e.charCode == 13) {
			console.log('asd');
			var li = document.createElement('li');
			
			var p = document.createElement('p');
			p.innerHTML = $(this).html();
			
			var span = document.createElement('span');
			span.className = "ago";
			span.innerHTML = "just now";
			
			li.appendChild(p);
			li.appendChild(span);
			
			$("#event-list").prepend(li);
			
			$(this).html("<span id=\"placeholder\">Compose new Tweet...</span>");
			$(this).blur();
			bPlaceHolderEdited = false;
			
			$(li).hide();
			$(li).fadeIn();
			
		}
    });
});