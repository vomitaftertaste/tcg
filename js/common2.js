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
			reply("Yes my lord <a href='#'>@vomitaftertaste</a>! We will give you back what you have teach us!");
			reply("<a href='#'>@vomitaftertaste</a>, <span class='obj'>#Cambium</span> is layer of actively dividing cells between xylem (wood) and phloem (bast) tissues that is responsible for the secondary growth of stems and roots");
			reply("<a href='#'>@vomitaftertaste</a>, The <span class='obj'>#cambium</span> provides undifferentiated cells for plant growth");
		}
    });
});