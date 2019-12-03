var chapters = [13,14,15,16,17];
var supported = [13,14,15,16,17];
var randomChap;
var randomWord;
var total = 0;
var correct = 0;
var mac = 1;
var currentPage = 0;
var list = [0,1,3,4];
var dark = true;

var words = [];
words[13] = [];
words[13][0] = ["di&#772;vitiae","di&#772;vitia&#772;rum, f.","divitiarum, f.","riches",""];
words[13][1] = ["factum","facti&#772;, n.","facti, n.","deed","fact"];
words[13][2] = ["signum","signi&#772;, n.","signi, n.","sign","assign"];
words[13][3] = ["ipse","ipsa, ipsum","ipsa, ipsum","intensive pronoun","ipso facto"];
words[13][4] = ["quisque","quidque","quidque","indefinite pronoun",""];
words[13][5] = ["sui&#772;","","","relexive of 3rd person","suicide"];
words[13][6] = ["doctus","docta, doctum","docta, doctum","taught","doctor"];
words[13][7] = ["fortu&#772;na&#772;tus","fortu&#772;na&#772;ta, fortu&#772;na&#772;tum","fortunata, fortunatum","lucky","fortunate"];
words[13][8] = ["suus","sua, suum","sua, suum","reflextive possessive adj.","sui generis"];
words[13][9] = ["nam","","","for",""];
words[13][10] = ["ante","(+acc.)","(+acc.)","before","antebellum"];
words[13][11] = ["per","(+acc.)","(+acc.)","through","perchance"];
words[13][12] = ["o&#772;lium","","","once",""];
words[13][13] = ["alo&#772;","alere, alui&#772;, altum","alere, alui, altum","to nourish","aliment"];
words[13][14] = ["di&#772;ligo&#772;","di&#772;ligere, di&#772;le&#772;xi&#772;, di&#772;le&#772;ctum","diligere, dilexi, dilectum","to esteem","dilgent"];
words[13][15] = ["iungo&#772;","iungere, iu&#772;nxi&#772;, iu&#772;nctum","iungere, iunxi, iunctum","to join","join"];
words[13][16] = ["sto&#772;","sta&#772;re, steti&#772;, statum","stare, steti, statum","to stand","stable"];
words[14] = [];
words[14][0] = ["animal","anima&#772;lis, n.","animalis, n.","animal","animate"];
words[14][1] = ["aqua","aquae, f.","aquae, f.","water","aquatic"];
words[14][2] = ["ars","artis, f.","artis, f.","art","artisan"];
words[14][3] = ["auris","auris, f.","auris, f.","ear","aural"];
words[14][4] = ["ci&#772;vis","ci&#772;vis, m. and f.","civis, m. and f.","citizen","civic"];
words[14][5] = ["iu&#772;s","iu&#772;ris, n.","iuris, n.","right","jury"];
words[14][6] = ["mare","maris, n.","maris, n.","sea","marine"];
words[14][7] = ["mors","mortis, f.","mortis, f.","death","mortal"];
words[14][8] = ["nu&#772;be&#772;s","nu&#772;bis, f.","nubis, f.","cloud","nubilous"];
words[14][9] = ["o&#772;s","o&#772;ris, n.","oris, n.","mouth","oral"];
words[14][10] = ["pars","partis, f.","partis, f.","part","partial"];
words[14][11] = ["Ro&#772;ma","Ro&#772;mae, f.","Romae, f.","Rome","romance"];
words[14][12] = ["turba","turbae, f.","turbae, f.","uproar","turbulence"];
words[14][13] = ["urbs","urbis, f.","urbis, f.","city","urban"];
words[14][14] = ["vi&#772;s","vi&#772;s, f.","vis, f.","force","violate"];
words[14][15] = ["a&#772; or ab","(+abl.)","(+abl.)","away from","abject"];
words[14][16] = ["tra&#772;ns","(+acc.)","(+acc.)","across","transport"];
words[14][17] = ["appello&#772;","appella&#772;re, appella&#772vi&#772;, appella&#772;tum","appellare, appellavi, appellatum","to speak to","appeal"];
words[14][18] = ["curro&#772;","currere, cucurri&#772;, cursum","currere, cucurri, cursum","to run","current"];
words[14][19] = ["mu&#772;to&#772;","mu&#772;ta&#772;re, mu&#772;ta&#772;vi&#772;, mu&#772;ta&#772;tum","mutare, mutavi, mutatum","to change","mutate"];
words[14][20] = ["teneo&#772;","tene&#772;re, tenui&#772;, tentum","tenere, tenui, tentum","to hold","tenable"];
words[14][21] = ["vi&#772;to&#772;","vi&#772;ta&#772;re, vi&#772;ta&#772;vi&#772;, vi&#772;ta&#772;tum","vitare, vitavi, vitatum","to live","vivid"];
words[15] = [];
words[15][0] = ["Italia","Italiae, f.","Italiae, f.","Italy","italics"];
words[15][1] = ["memoria","memoriae, f.","memoriae, f.","memory","memoir"];
words[15][2] = ["tempesta&#772;s","tempesta&#772;tis, f.","tempestatis, f.","period of time","tempest"];
words[15][3] = ["centum","","","a hundred","centimeter"];
words[15][4] = ["mi&#772;lle","","","thousand","millimeter"];
words[15][5] = ["mi&#772;lia","mi&#772;lium, n.","milium, n.","thousands","millimeter"];
words[15][6] = ["miser","misera, miserum","misera, miserum","wretched","misery"];
words[15][7] = ["inter","(+acc.)","(+acc.)","between","internal"];
words[15][8] = ["itaque","","","and so",""];
words[15][9] = ["committo&#772;","committere, commi&#772;si&#772;, commissum","committere, commisi, commissum","to entrust","committee"];
words[15][10] = ["exspecto&#772;","exspecta&#772;re, exspecta&#772;vi&#772;, exspecta&#772;tum","exspectare, exspectavi, exspectatum","to look for","expectation"];
words[15][11] = ["iacio&#772;","iacere, ie&#772;ci&#772;, iactum","iacere, ieci, iactum","to throw","eject"];
words[15][12] = ["timeo&#772;","time&#772;re, timui&#772;","timere, timui","to fear","timid"];
words[16] = [];
words[16][0] = ["aeta&#772;s","aeta&#772;tis, f.","aetatis, f.","period of life","eternal"];
words[16][1] = ["audti&#772;tor","audi&#772;to&#772;ris, m.","auditoris, m.","hearer","auditor"];
words[16][2] = ["cle&#772;mentia","cle&#772;mentiae, f.","clementiae, f.","mildness","clement"];
words[16][3] = ["me&#772;ns","mentis, f.","mentis, f.","mind","mental"];
words[16][4] = ["satura","saturae, f.","saturae, f.","satire","satirical"];
words[16][5] = ["a&#772;cer","a&#772;cris, a&#772;cre","acris, acre","sharp","acrid"];
words[16][6] = ["brevis","breve","breve","short","brevity"];
words[16][7] = ["celer","celeris, celere","celeris, celere","swift","celerity"];
words[16][8] = ["difficilis","difficile","difficile","hard","difficulty"];
words[16][9] = ["dulcis","dulce","dulce","sweet","dulcify"];
words[16][10] = ["facilis","facile","facile","easy","facile"];
words[16][11] = ["fortis","forte","forte","strong","fort"];
words[16][12] = ["inge&#772;ns","ingentis","ingentis","huge",""];
words[16][13] = ["iu&#772;cundus","iu&#772;cunda, iu&#772;cundum","iucunda, iucundum","pleasant","jocund"];
words[16][14] = ["longus","longa, longum","longa, longum","long","oblong"];
words[16][15] = ["omnis","omne","omne","every","omnipotent"];
words[16][16] = ["pote&#772;ns","potentis","potentis","powerful","potent"];
words[16][17] = ["senex","senis","senis","old","senate"];
words[16][18] = ["quam","","","how",""];
words[16][19] = ["rego&#772;","regere, re&#772;xi&#772;, re&#772;ctum","regere, rexi, rectum","to rule","regent"];
words[17] = [];
words[17][0] = ["libellus","libelli&#772;, m.","libelli, m.","little book","libel"];
words[17][1] = ["qui&#772;","quae, quod","quae, quod","who","qui vive"];
words[17][2] = ["caecus","caeca, caecum","caeca, caecum","blind","caecum"];
words[17][3] = ["levis","leve","leve","light","levity"];
words[17][4] = ["aut","","","or",""];
words[17][5] = ["aut...aut","","","either...or",""];
words[17][6] = ["cito","","","quickly","excite"];
words[17][7] = ["quoque","","","also",""];
words[17][8] = ["admitto&#772;","admittere, admi&#772;si&#772;, admissum","admittere, admisi, admissum","to admit","admission"];
words[17][9] = ["coepi&#772;","coepisse, coeptum","coepisse, coeptum","began",""];
words[17][10] = ["cupio&#772;","cupere, cupi&#772;vi&#772;, cupi&#772;tum","cupere, cupivi, cupitum","to desire","Cupid"];
words[17][11] = ["de&#772;leo&#772;","de&#772;le&#772;re, de&#772;le&#772;vi&#772;, de&#772;le&#772;tum","delere, delevi, deletum","to destroy","delete"];
words[17][12] = ["de&#772;si&#772;dero&#772;","de&#772;si&#772;dera&#772;re, de&#772;si&#772;dera&#772;vi&#772;, de&#772;si&#772;dera&#772;tum","desiderare, desideravi, desideratum","to desire","desire"];
words[17][13] = ["incipio&#772;","incipere, ince&#772;pi&#772;, inceptum","incipere, incepi, inceptum","to begin","inception"];
words[17][14] = ["na&#772;vigo&#772;","na&#772;viga&#772;re, na&#772;viga&#772;vi&#772;, na&#772;viga&#772;tum","navigare, navigavi, navigatum","to sail","navigation"];
words[17][15] = ["neglego&#772;","neglegere, negle&#772;xi&#772;, negle&#772;ctum","neglegere, neglexi, neglestum","to neglect","negligible"];
words[17][16] = ["recito&#772;","recita&#772;re, recita&#772;vi&#772;, recita&#772;tum","recitare, recitavi, recitatum","to read aloud","recital"];

function changeChap() {
	var xChap = chapters;
	chapters = [];
	var chapList = document.getElementsByClassName("chapCheck");
	var chapLength = chapList.length;
	for (var i = 1; i < chapLength + 1; i++) {
		if (chapList[i - 1].checked == true && supported.includes(i)) {
			chapters.push(i);
		}
	}
	if (arraysEqual(xChap,chapters) == false) {
		advance()
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
	if (mac == 1) {
		mac = 2;
		list[1] = 2;
	} else {
		mac = 1;
		list[1] = 1;
	}
}

function advance() {
	randomChap = Math.floor( Math.random() * chapters.length );
	randomWord = Math.floor( Math.random() * words[chapters[randomChap]].length );
	$("#fLexical").text($('<textarea />').html(words[chapters[randomChap]][randomWord][0]).text());
}

function action() {
	var vali = document.getElementById("z");
	var use = vali.innerHTML;
	if (use == "Next") {
		document.getElementById("lex").value = "";
		document.getElementById("lex").focus();
		document.getElementById("def").value = "";
		document.getElementById("der").value = "";
		for (var i = 0; i < 4; i++) {
			document.getElementsByClassName("y")[i].innerHTML = "";
		}
		vali.innerHTML = "Check Answer";
		advance()
	} else {
		vali.innerHTML = "Next";
		checkAns()
	}
}

function togSet() {
	$("#setCont").toggle();
}

var streak = 0;

function toPage(x) {
	document.getElementsByClassName("setPage")[currentPage].style.display = "none";
	document.getElementsByClassName("setPage")[x].style.display = "block";
	$(".setRow:eq(" + currentPage + ")").removeClass("setRowsel");
	$(".setRow:eq(" + x + ")").addClass("setRowsel");
	currentPage = x;
}

function checkAns() {
	total += 3;
	var right = true;
	var newRow = document.createElement("div");
	$(newRow).addClass("miniRow");
	newRow.style.marginBottom = "10px";
	for (var i = 0; i < 4; i++) {
		var newCell = document.createElement("div");
		newRow.appendChild(newCell);
		$(newCell).addClass("cell").addClass("y");
		newCell.innerHTML = words[chapters[randomChap]][randomWord][list[i]];
		if (i == 0) {
			newCell.style.width = "20%";
		} else if (i == 1) {
			newCell.style.width = "30%";
		}
	}
	document.getElementById("history").appendChild(newRow);
	
	var fullLex = document.getElementsByClassName("y")[1];
	var defin = document.getElementsByClassName("y")[2];
	var deriv = document.getElementsByClassName("y")[3];
	fullLex.innerHTML = words[chapters[randomChap]][randomWord][mac];
	defin.innerHTML = words[chapters[randomChap]][randomWord][3];
	deriv.innerHTML = words[chapters[randomChap]][randomWord][4];
	
	if (document.getElementById("lex").value.toLowerCase() == decodeEntities(words[chapters[randomChap]][randomWord][mac]).toLowerCase()) {
		$(fullLex).removeClass("wrong").removeClass("almost");
		$(fullLex).addClass("right");
		correct++;
	} else {
		var lexical = document.getElementById("lex").value.toLowerCase();
		lexical = lexical.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		if (lexical == words[chapters[randomChap]][randomWord][2].toLowerCase()) {
			$(fullLex).removeClass("right").removeClass("wrong");
			$(fullLex).addClass("almost");
		} else {
			$(fullLex).removeClass("right").removeClass("almost");
			$(fullLex).addClass("wrong");
			right = false;
		}
	}
	
	if (document.getElementById("def").value.toLowerCase() == words[chapters[randomChap]][randomWord][3].toLowerCase()) {
		$(defin).removeClass("wrong");
		$(defin).addClass("right");
		correct++;
	} else {
		$(defin).removeClass("right");
		$(defin).addClass("wrong");
		right = false;
	}
	
	if (document.getElementById("der").value.toLowerCase() == words[chapters[randomChap]][randomWord][4].toLowerCase()) {
		$(deriv).removeClass("wrong");
		$(deriv).addClass("right");
		correct++;
	} else {
		$(deriv).removeClass("right");
		$(deriv).addClass("wrong");
		right = false;
	}
	
	if (right == false) {
		streak = 0;
	} else {
		streak++;
	}
	
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
