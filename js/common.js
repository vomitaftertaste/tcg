// JavaScript Document

// Configuration
var bPlaceHolderEdited = false;
var sDefaultPlaceHolder = "<span id=\"placeholder\">Compose new Tweet...</span>";
var fReplyDelay = 2000; // ms
var iReplyQueue = 0;
var sReplacedHasTag = /(#\w*)/ig;
var sReplacingHasTag = "<span class='obj'>$1</span>";
var sReplacedAt = /(@\w*)/ig;
var sReplacingAt = "<a href='#'>$1</a>";

function tweetRegExp(content) {
	content = content.replace(sReplacedHasTag, sReplacingHasTag);
	content = content.replace(sReplacedAt, sReplacingAt);
	
	return content;
}

function addEventList(content) {
	var li = document.createElement('li');
			
	var p = document.createElement('p');
	p.innerHTML = tweetRegExp(content);
	
	var span = document.createElement('span');
	span.className = "ago";
	span.innerHTML = "just now";
	
	li.appendChild(p);
	li.appendChild(span);
	
	$("#event-list").prepend(li);
	$("#compose").html(sDefaultPlaceHolder);
	$("#compose").blur();
	bPlaceHolderEdited = false;
	
	$(li).hide();
	$(li).fadeIn();
	return li;
}

function reply(content) {
	iReplyQueue++;
	
	setTimeout(function() {
		addEventList(content);
		iReplyQueue--;
	}, iReplyQueue*fReplyDelay);
}

$(document).ready(function(e) {
    $("#compose").click(function(e) {
		if (!bPlaceHolderEdited) {
			sDefaultPlaceHolder = $(this).html();
			$(this).html("");
		}
		bPlaceHolderEdited = true;
    });
	
	$("#compose").keypress(function(e) {
        if (e.charCode == 13) {
			addEventList($(this).html());
		}
    });
});