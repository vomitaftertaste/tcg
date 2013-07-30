// JavaScript Document

// Configuration
var bPlaceHolderEdited = false;
var fReplyDelay = 1750; // ms
var iReplyQueue = 0;

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

function reply(content) {
	iReplyQueue++;
	var newli = addEventList(content);
	$(newli).hide();
	$(newli).delay(iReplyQueue*fReplyDelay).fadeIn();
	
	setTimeout(function() {
		iReplyQueue--;
	}, iReplyQueue*fReplyDelay);
}

$(document).ready(function(e) {
    $("#compose").click(function(e) {
		if (!bPlaceHolderEdited) $(this).html("");
		bPlaceHolderEdited = true;
    });
	
	$("#compose").keypress(function(e) {
        if (e.charCode == 13) {
			addEventList($(this).html());
			reply("Here's <a href=\"#\">Notebook</a>, first reply");
			reply("Here's <a href=\"#\">Notebook</a>, second reply");
		}
    });
});