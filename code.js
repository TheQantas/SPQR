var chapters = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var chapNum;
var wordNum;
var total = 0;
var correct = 0;
var mac = true;
var currentPage = 0;
var list = [0,1,2,4];
var ranMode = true;
var dark = true;
var flagged = [];
var redo = false;
var currRedo = 0;
var mich = false;

function changeChap() {
	var xChap = chapters;
	chapters = [];
	var chapList = document.getElementsByClassName("chapCheck");
	var chapLength = chapList.length;
	for (var i = 0; i < chapLength; i++) {
		if (chapList[i].checked == true) {
			chapters.push(i);
		}
	}
	if (arraysEqual(xChap,chapters) == false) {
		advance()
	}
}

function michigan() {
	if (mich == false) {
		mich = true;
		$(".setRow").addClass("setRowmich");
		$(".setRowsel").removeClass("setRowsel").addClass("setRowselMich");
		$("#rightSet").addClass("rightSetmich");
		$(".rate").addClass("rateMich");
		$("#check, #closeSet, #startbut").addClass("checkMich");
		$("#closeSet").addClass("closeSetmich");
		$(".altClose").addClass("altClosemich");
		$("#z").removeClass("pale").addClass("maize");
		$("#bottom").css('backgroundColor','#00274c');
		$("#check").addClass("checkMich2");
		$("#impera, #gear").css('fill','#ffcb05');
		$("#rate").addClass("rateMich");
		$(".toggle").addClass("toggleMich");
		$(".slider").addClass("sliderMich");
		$(".rad").addClass("radMich");
		$(".checkmark").addClass("checkmarkMich");
		$(".startText").addClass("startTextmich");
	} else {
		mich = false;
		$(".setRow").removeClass("setRowmich");
		$(".setRowsel").addClass("setRowsel").removeClass("setRowselMich");
		$("#rightSet").removeClass("rightSetmich");
		$(".rate").removeClass("rateMich");
		$("#check, #closeSet, #startbut").removeClass("checkMich");
		$("#closeSet").removeClass("closeSetmich");
		$(".altClose").removeClass("altClosemich");
		$("#z").addClass("pale").removeClass("maize");
		$("#bottom").css('backgroundColor','#a22');
		$("#check").removeClass("checkMich2");
		$("#impera, #gear").css('fill','#d2b76e');
		$("#rate").removeClass("rateMich");
		$(".toggle").removeClass("toggleMich");
		$(".slider").removeClass("sliderMich");
		$(".rad").removeClass("radMich");
		$(".checkmark").removeClass("checkmarkMich");
		$(".startText").removeClass("startTextmich");
	}
}

function override() {
	var index = flagged.indexOf(addZero(chapNum) + addZero(wordNum));
	if (index > -1) {
		flagged.splice(index, 1);
	}
	mess('This word has been marked as correct');
	console.log(addZero(chapNum) + addZero(wordNum));
}

function addZero(x) {
	if (x < 9) {
		return "0" + String(x);
	} else {
		return String(x)
	}
}

function chapGroup(start,end) {
	var all = document.getElementsByClassName("chapCheck");
	var tot = all.length;
	for (var i = 0; i < tot; i++) {
		all[i].checked = false;
	}
	for (var j = start; j <= end; j++) {
		all[j].checked = true;
	}
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function disMode() {
	if (dark == true) {
		$("span, .setRow, .cell, input, .swiTont").addClass("darkText");
		$("#univ, #setAct").addClass("lightbk");
		$("#forehead").addClass("lFore");
		$(".row, #botSet, input, #closeSet").addClass("lContr");
		$(".miniRow").addClass("lMini");
		$("#closeSet").addClass("altClose");
		$("#settings").addClass("altSett");
		$(".checkmark").addClass("dCheck");
		dark = false;
	} else {
		$("span, .setRow, .cell, input, .swiTont").removeClass("darkText");
		$("#univ, #setAct").removeClass("lightbk");
		$("#forehead").removeClass("lFore");
		$(".row, #botSet, input, #closeSet").removeClass("lContr");
		$(".miniRow").removeClass("lMini");
		$("#closeSet").removeClass("altClose");
		$("#settings").removeClass("altSett");
		$(".checkmark").removeClass("dCheck");
		dark = true;
	}
}

function togMac() {
	if (mac == true) {
		mac = false;
	} else {
		mac = true;
	}
}

function ranAdvance() {
	chapNum = Math.floor( Math.random() * chapters.length );
	wordNum = Math.floor( Math.random() * words[chapters[chapNum]].length );
	$("#fLexical").text(decodeEntities(words[chapters[chapNum]][wordNum][0]));
}

function toFlag() {
	if (ranMode == true) {
		chapNum = 0;
		wordNum = 0;
		ranMode = false;
		flagged = [];
		$("#manual, #bandera").show();
		$("#fLexical").text(decodeEntities(words[chapters[chapNum]][0][0]));
		redo = false;
		currRedo = 0;
	} else {
		ranMode = true;
		$("#manual, #bandera").hide();
		$("#fLexical").text(decodeEntities(words[chapters[chapNum]][0][0]));
		advance()
	}
}

var nextWord = 0;

function flagAdvance() {
	if (redo == false) {
		wordNum++;
		if (wordNum >= words[chapters[chapNum]].length) {
			chapNum++;
			wordNum = 0;
		}
		if (chapNum >= chapters.length) {
			redo = true;
		}
	} else {
		if (currRedo >= flagged.length) {
			currRedo = 0;
		}
		nextWord = flagged[currRedo];
		var nextChap = Number(nextWord.substring(0,2));
		var nextWord = Number(nextWord.substring(2,4));
		for (var i = 0; i < chapters.length; i++) {
			if (nextChap = chapters[i]) {
				nextChap = i;
			}
		}
		chapNum = nextChap;
		wordNum = nextWord;
		currRedo++;
	}
	$("#fLexical").text(decodeEntities(words[chapters[chapNum]][wordNum][0]));
}

function advance() {
	if (ranMode == true) {
		ranAdvance()
	} else {
		flagAdvance()
	}
}

function action() {
	var vali = document.getElementById("z");
	var use = vali.innerHTML;
	if (use == "Next") {
		document.getElementById("lex").value = "";
		document.getElementById("lex").focus();
		document.getElementById("def").value = "";
		document.getElementById("der").value = "";
		for (var i = 1; i < 4; i++) {
			document.getElementsByClassName("y")[i].innerHTML = "";
		}
		vali.innerHTML = "Check Answer";
		advance()
	} else {
		vali.innerHTML = "Next";
		checkAns()
	}
}

function mess(x) {
	var bubble = document.getElementById("message");
	bubble.style.display = "inline-block";
	bubble.innerHTML = x;
	setTimeout(function() {
		bubble.style.display = "none";
	}, 3000);
}

function flag() {
	var elem = document.getElementById("impera");
	elem.style.fill = "#a22";
	mess('This word has been flagged.');
	flagged.push(addZero(chapters[chapNum]) + addZero(wordNum));
}

var streak = 0;

function toPage(x) {
	document.getElementsByClassName("setPage")[currentPage].style.display = "none";
	document.getElementsByClassName("setPage")[x].style.display = "block";
	if (mich == false) {
		$(".setRow:eq(" + currentPage + ")").removeClass("setRowsel");
		$(".setRow:eq(" + x + ")").addClass("setRowsel");
	} else {
		$(".setRow:eq(" + currentPage + ")").removeClass("setRowselMich");
		$(".setRow:eq(" + x + ")").addClass("setRowselMich");
	}
	currentPage = x;
}

function checkAns() {
	total += 3;
	var right = true;
	//var list = [];
	
	var fullLex = document.getElementsByClassName("y")[1];
	var defin = document.getElementsByClassName("y")[2];
	var deriv = document.getElementsByClassName("y")[3];
	
	var guess = document.getElementById("lex").value;
	var formedGuess = decodeEntities(guess).toLowerCase().replace(/\s/g, '');
	var withoutGuess = decodeEntities(guess).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s/g, '');;
	var answer = words[chapters[chapNum]][wordNum][1].toLowerCase().replace(/\s/g, '');
	var formedAnswer = decodeEntities(answer).replace(/\s/g, '');
	var withoutAnswer = decodeEntities(answer).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '');
	
	if ((formedGuess == formedAnswer && mac == true) || (withoutGuess == withoutAnswer && mac == false)) {
		$(fullLex).removeClass("wrong").removeClass("almost");
		$(fullLex).addClass("right");
		correct++;
	} else if ((withoutGuess == withoutAnswer && mac == true)) {
		$(fullLex).removeClass("wrong").removeClass("right");
		$(fullLex).addClass("almost");
		correct++;
	} else {
		$(fullLex).removeClass("right").removeClass("almost");
		$(fullLex).addClass("wrong");
		right = false;
	}
	
	var defNum = 2;
	var derNum = 4;
	
	for (var d = 0; d < 2; d++) {
		if (document.getElementById("def").value.toLowerCase() == words[chapters[chapNum]][wordNum][d + 2].toLowerCase()) {
			$(defin).removeClass("wrong");
			$(defin).addClass("right");
			correct++;
			defNum = d + 2;
			d = 10;
			list[2] = defNum;
		} else {
			$(defin).removeClass("right");
			$(defin).addClass("wrong");
		}
		if (d == 1) {
			right = false;
		}
	}
	
	for (var v = 0; v < 2; v++) {
		if (document.getElementById("der").value.toLowerCase() == words[chapters[chapNum]][wordNum][v + 4].toLowerCase()) {
			$(deriv).removeClass("wrong");
			$(deriv).addClass("right");
			correct++;
			derNum = v + 4;
			v = 10;
			list[3] = derNum;
		} else {
			$(deriv).removeClass("right");
			$(deriv).addClass("wrong");
			list[3] = 4;
		}
		if (v == 1) {
			right = false;
		}
	}
	
	if (right == false) {
		streak = 0;
	} else {
		streak++;
	}
	
	if (right == false && ranMode == false && redo == false) {
		flagged.push(addZero(chapNum) + addZero(wordNum));
	}
	
	if (right == true && ranMode == false && redo == true) {
		var index = flagged.indexOf(addZero(chapNum) + addZero(wordNum));
		if (index > -1) {
			flagged.splice(index, 1);
		}
	}
	
	var newRow = document.createElement("div");
	$(newRow).addClass("miniRow");
	newRow.style.marginBottom = "10px";
	for (var i = 0; i < 4; i++) {
		var newCell = document.createElement("div");
		newRow.appendChild(newCell);
		$(newCell).addClass("cell").addClass("y");
		newCell.innerHTML = words[chapters[chapNum]][wordNum][list[i]];
		if (i == 0) {
			newCell.style.width = "20%";
		} else if (i == 1) {
			newCell.style.width = "30%";
		}
	}
	document.getElementById("history").appendChild(newRow);
	
	fullLex.innerHTML = words[chapters[chapNum]][wordNum][1];
	defin.innerHTML = words[chapters[chapNum]][wordNum][defNum];
	deriv.innerHTML = words[chapters[chapNum]][wordNum][derNum];
	
	document.getElementById("z").innerHTML = "Next";
	document.getElementById("rate").innerHTML = correct + " / " + total + " | " + (correct / total * 100).toFixed(1) + "% | Streak: " + streak;
}

window.onkeydown = function(event) {
	var box = document.getElementById("lex");
	if (event.keyCode == 192 && mac == 1 && document.activeElement === box) {
		var x = box.value;
		var pos = box.selectionStart;
		var ante = x.substring(0,pos);
		var post = x.substring(pos,x.length);
		var last = ante.substring(ante.length - 1, ante.length);
		var vowels = ["a","e","i","o","u"];
		if (vowels.includes(last) == true) {
			setTimeout(function() {
				box.value = decodeEntities(ante + '&#772;' + post);
				box.selectionStart = pos;
				box.selectionEnd = pos;
			}, 50);
		}
    }
	if (event.keyCode == 13) {
		action()
    }
}

var decodeEntities = (function() {
  var element = document.createElement('div');
  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }
    return str;
  }
  return decodeHTMLEntities;
})();
