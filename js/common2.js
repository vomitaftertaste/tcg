// JavaScript Document

var bPlaceHolderEdited = false;

function addEventList(content) {
	var li = document.createElement('li');
			
	var p = document.createElement('p');
	p.innerHTML = content;
	
	var span = document.createElement('span');
	span.className = "ago";
	span.innerHTML = "just now";
	
	li.appendChild(p);
	li.appendChild(span);
	
	$("#event-list").prepend(li);
	
	$("#compose").html("<span id=\"placeholder\">Compose new Tweet...</span>");
	$("#compose").blur();
	bPlaceHolderEdited = false;
	
	$(li).hide();
	$(li).fadeIn();
	return li;
}

$(document).ready(function(e) {
    $("#compose").click(function(e) {
		if (!bPlaceHolderEdited) $(this).html("");
		bPlaceHolderEdited = true;
    });
	
	$("#compose").keypress(function(e) {
        if (e.charCode == 13) {
			addEventList($(this).html());
			var newli = addEventList("Here's <a href=\"#\">Notebook</a>");
			$(newli).hide();
			$(newli).delay(1750).fadeIn();
		}
    });
});