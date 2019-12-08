var chapters = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
var randomChap;
var randomWord;
var total = 0;
var correct = 0;
var mac = true;
var currentPage = 0;
var list = [0,1,2,3];
var dark = true;

var words = [];
words[0] = [];
words[0][0] = ["u&#772;nus","u&#772;na, u&#772;unum","one","1","unify","unicycle"];
words[0][1] = ["duo","duae, duo","two","2","dual","duet"];
words[0][2] = ["tre&#772;s","tre&#772;s, tria","three","3","trio","triangle"];
words[0][3] = ["quattuor","","four","4","quadruped","quadrilateral"];
words[0][4] = ["qui&#772;nque","","five","5","quintuple","quintet"];
words[0][5] = ["sex","","six","6","sextet","sexennial"];
words[0][6] = ["septem","","seven","7","septuagenarian","September"];
words[0][7] = ["octo&#772;","","eight","8","October","octopus"];
words[0][8] = ["novem","","nine","9","novendial","November"];
words[0][9] = ["decem","","ten","10","December","decagon"];
words[0][10] = ["u&#772;ndecim","","eleven","11","",""];
words[0][11] = ["duodecim","","twelve","12","",""];
words[0][12] = ["tredecim","","thirteen","13","",""];
words[0][13] = ["quattuordecim","","fourteen","14","",""];
words[0][14] = ["qui&#772;ndecim","","fifteen","15","",""];
words[0][15] = ["se&#772;decim","","sixteen","16","",""];
words[0][16] = ["septendecim","","seventeen","17","",""];
words[0][17] = ["duode&#772;vi&#772;gint&#772;","","eighteen","18","",""];
words[0][18] = ["u&#772;de&#772;vi&#772;gint&#772;","","nineteen","19","",""];
words[0][19] = ["vi&#772;gint&#772;","","twenty","20","",""];
words[0][20] = ["pri&#772;mus","pri&#772;ma, pri&#772;mum","first","1st","primal","primary"];
words[0][21] = ["secundus","secunda, secundum","second","2nd","secondary","secondary"];
words[0][22] = ["tertius","tertia, tertim","third","3rd","tertiary","tertiary"];
words[0][23] = ["qua&#772;rtus","","fourth","4th","quarter","quarterly"];
words[0][24] = ["qui&#772;ntus","","fifth","5th","quintuple","quintet"];
words[0][25] = ["sextus","","sixth","6th","",""];
words[0][26] = ["septimus","","seventh","7th","",""];
words[0][27] = ["octa&#772;vus","","eighth","8th","",""];
words[0][28] = ["no&#772;nus","","ninth","9th","",""];
words[0][29] = ["decimus","","tenth","10th","",""];
words[1] = [];
words[1][0] = ["me&#772;","","me","myself","",""];
words[1][1] = ["quid","","what","what","quid pro quo","quiddity"];
words[1][2] = ["nihil","","nothing","nothing","nihilism","annihilate"];
words[1][3] = ["no&#772;n","","not","not","nonviolent","nonlinear"];
words[1][4] = ["saepe","","often","often","",""];
words[1][5] = ["si&#772;","","if","if","",""];
words[1][6] = ["amo&#772;","am&#772;re, am&#772;v&#772;, am&#772;tum","to love","to like","amiable","amorous"];
words[1][7] = ["ama&#772;bo&#772; te&#772;","","please","please","",""];
words[1][8] = ["co&#772;gito&#772;","co&#772;gita&#772;re, co&#772;gita&#772;vi&#772;, co&#772;gita&#772;tum","to think","to ponder","cogitate","cogitation"];
words[1][9] = ["de&#772;beo&#772;","de&#772;be&#772;re, de&#772;bui&#772;, de&#772;bitum","to owe","to ought","debt","debit"];
words[1][10] = ["do&#772;","dare, dedi&#772;, datum","to give","to offer","date","data"];
words[1][11] = ["erro&#772;","erra&#772;re, erra&#772;vi&#772;, erra&#772;tum","to wander","to err","erroneous","error"];
words[1][12] = ["laudo&#772;","lauda&#772;re, lauda&#772;vi&#772;, lauda&#772;tum","to praise","to praise","laud","laudable"];
words[1][13] = ["moneo&#772;","mone&#772;re, monui&#772;, monitum","to remind","to advise","admonish","monitor"];
words[1][14] = ["salveo&#772;","salve&#772;re","to be well","to be in good health","salvation","salver"];
words[1][15] = ["salve&#772;","salve&#772;te","hello","greetings","salvation","salver"];
words[1][16] = ["servo&#772;","serva&#772;re, serva&#772;vi&#772;, serva&#772;tum","to preserve","to save","preserve","reservoir"];
words[1][17] = ["co&#772;nservo&#772;","co&#772;nserva&#772;re, co&#772;nserva&#772;vi&#772;, co&#772;nserva&#772;tum","to preserve","to conserve","conservative","conservation"];
words[1][18] = ["terreo&#772;","terre&#772;re, terrui&#772;, territum","to frighten","to terrify","terrible","terrific"];
words[1][19] = ["valeo&#772;","vale&#772;re, valui&#772;, valitu&#772;rum","to be strong","to have power","valedictorian","valid"];
words[1][20] = ["vale&#772;","vale&#772;te","good-bye","fareweel","valedictorian","valid"];
words[1][21] = ["video&#772;","vide&#772;re, vi&#772;di&#772;, vi&#772;sum","to see","to observe","video","provide"];
words[1][22] = ["voco&#772;","voca&#772;re, voca&#772;vi&#772;, voca&#772;tum","to call","to summon","vocation","vocabulary"];
words[2] = [];
words[2][0] = ["fa&#772;ma","fa&#772;mae, f.","rumor","fame","defame","infamous"];
words[2][1] = ["fo&#772;rma","fo&#772;rmae, f.","form","shape","formal","formless"];
words[2][2] = ["fortu&#772;na","fortu&#772;nae, f.","fortune","luck","fortunate","unfortunate"];
words[2][3] = ["i&#772;ra","i&#772;rae, f.","ire","anger","irate","irascible"];
words[2][4] = ["nauta","nautae, m.","sailor","sailor","nautical","nautilus"];
words[2][5] = ["patria","patriae, f.","fatherland","naitve land","expatriate","repatriate"];
words[2][6] = ["pecu&#772;nia","pecu&#772;niae, f.","money","money","pecuniary","impecunious"];
words[2][7] = ["philosophia","philosophiae, f.","philosophy","philosophy","philosopher","philosophize"];
words[2][8] = ["poena","poenae, f.","penalty","punishment","penal","subpoena"];
words[2][9] = ["poena&#772;s dare","","to pay the penalty","to pay the penalty","",""];
words[2][10] = ["poe&#772;ta","poe&#772;tae, m.","poet","poet","poetry","poetic"];
words[2][11] = ["porta","portae, f.","gate","entrance","portal","portico"];
words[2][12] = ["puella","puellae, f.","girl","girl","",""];
words[2][13] = ["rosa","rosae, f.","rose","rose","rosary","rosette"];
words[2][14] = ["sententia","sententiae, f.","feeling","thought","sententious","sentencing"];
words[2][15] = ["vi&#772;ta","vi&#772;tae, f.","life","mode of life","vital","vitamin"];
words[2][16] = ["anti&#772;quus","anti&#772;qua, anti&#772;quum","ancient","old-time","antique","antiquated"];
words[2][17] = ["magnus","magna, magnum","large","great","magnify","magnificent"];
words[2][18] = ["meus","mea, meum","my","my","",""];
words[2][19] = ["multus","multa, multum","much","many","multitude","multiple"];
words[2][20] = ["tuus","tua, tuum","your","your","",""];
words[2][21] = ["et","","and","even","etc.","et cetera"];
words[2][22] = ["et...et","","both...and","both...and","",""];
words[2][23] = ["sed","","but","but","",""];
words[2][24] = ["O&#772;","","oh","oh!","",""];
words[2][25] = ["sine","(+abl.)","without","without","sans","sinecure"];
words[2][26] = ["est","","is","is","",""];
words[3] = [];
words[3][0] = ["ager","agri&#772;, m.","field","farm","agrarian","agriculture"];
words[3][1] = ["agricola","agricolae, m.","farmer","farmer","agrarian","agriculture"];
words[3][2] = ["ami&#772;ca","ami&#772;cae, f.","friend","friend","amicable","amiable"];
words[3][3] = ["ami&#772;cus (noun)","ami&#772;ci&#772;, m.","friend","friend","amicable","amiable"];
words[3][4] = ["fe&#772;mina","fe&#772;minae, f.","woman","woman","feminine","female"];
words[3][5] = ["fi&#772;lia","fi&#772;liae, f.","daughter","daughter","filial","affiliation"];
words[3][6] = ["fi&#772;lius","fi&#772;lii&#772;, m.","son","son","filial","affiliation"];
words[3][7] = ["numerus","numeri&#772;, m.","number","number","numeral","innumerable"];
words[3][8] = ["populus","populi&#772;, m.","people","nation","population","populus"];
words[3][9] = ["puer","pueri&#772;, m.","boy","child","puerile","puerilism"];
words[3][10] = ["sapientia","sapientiae, f.","wisdom","wisdom","sage","sapient"];
words[3][11] = ["vir","viri&#772;, m.","man","hero","virtue","virile"];
words[3][12] = ["ava&#772;rus","ava&#772;ra, ava&#772;rum","greedy","avaricious","avarice","avaricious"];
words[3][13] = ["pauci&#772;","paucae, pauca","few","a few","paucity","paucity"];
words[3][14] = ["Ro&#772;ma&#772;nus","Ro&#772;ma&#772;na, Ro&#772;ma&#772;num","Roman","Roman","romance","romantic"];
words[3][15] = ["de&#772;","(+abl.)","of","about","describe","decline"];
words[3][16] = ["in","(+abl.)","in","on","inscribe","inscription"];
words[3][17] = ["hodie&#772;","","today","today","hodiernal",""];
words[3][18] = ["semper","","always","always","sempiternal","sempiternal"];
words[3][19] = ["habeo&#772;","habe&#772;re, habui&#772;, habitum","to have","to hold","habit","habitat"];
words[3][20] = ["satiō","satia&#772;re, satia&#772;vi&#772;, satia&#772;tum","to satisfy","to sate","satisfaction","satiate"];
words[4] = [];
words[4][0] = ["ba&#772;sium","ba&#772;sii&#772;, n.","kiss","kiss","basiate","basiate"];
words[4][1] = ["bellum","belli&#772;, n.","war","war","rebel","belligerent"];
words[4][2] = ["co&#772;nsilium","co&#772;nsilii&#772;, n.","plan","purpose","counsel","reconcile"];
words[4][3] = ["cu&#772;ra","cu&#772;rae, f.","care","attention","cure","sinecure"];
words[4][4] = ["do&#772;num","do&#772;ni&#772;, n.","gift","present","donation","donate"];
words[4][5] = ["exitium","exitii&#772;, n.","destruction","ruin","exit","exit"];
words[4][6] = ["magister","magistri&#772;, m.","schoolmaster","teacher","magistrate","maestro"];
words[4][7] = ["magistra","magistrae, f.","schoolmaster","teacher","magistrate","maestro"];
words[4][8] = ["mora","morae, f.","delay","delay","moratorium","demur"];
words[4][9] = ["nihil","","nothing","nothing","annihilate","nihilism"];
words[4][10] = ["oculus","oculi&#772;, m.","eye","eye","ocular","ocular"];
words[4][11] = ["officium","officii&#772;, n.","duty","service","office","official"];
words[4][12] = ["o&#772;tium","o&#772;tii&#772;, n.","leisure","peace","negotiate","otiose"];
words[4][13] = ["peri&#772;culum","peri&#772;culi&#772;, n.","danger","risk","peril","perilous"];
words[4][14] = ["remedium","remedii&#772;, n.","cure","remedy","remedial","remedy"];
words[4][15] = ["bellus","bella, bellum","pretty","handsome","bella","beauty"];
words[4][16] = ["bonus","bona, bonum","good","kind","bonus","bonus"];
words[4][17] = ["hu&#772;ma&#772;nus","hu&#772;ma&#772;na, hu&#772;ma&#772;num","human","humane","human","humanity"];
words[4][18] = ["malus","mala, malum","bad","wicked","malice","malady"];
words[4][19] = ["parvus","parva, parvum","small","little","parvovirus","parvovirus"];
words[4][20] = ["stultus (adj.)","stulta, stultum","foolish","foolish","stultify","stultify"];
words[4][21] = ["stultus (noun)","stulti&#772;, m.","fool","a fool","stultify","stultify"];
words[4][22] = ["ve&#772;rus","ve&#772;ra, ve&#772;rum","true","real","verify","veracity"];
words[4][23] = ["iuvo&#772;","iuva&#772;re, iu&#772;vi&#772;, iu&#772;tum","to help","to aid","aid","adjuntant"];
words[4][24] = ["adiuvo&#772;","adiuva&#772;re, adiu&#772;vi&#772;, adiu&#772;tum","to help","to aid","aid","adjuntant"];
words[4][25] = ["sum","esse, fui&#772;, futu&#772;rum","to be","to exist","essence","future"];
words[5] = [];
words[5][0] = ["adule&#772;scentia","adule&#772;scentiae, f.","youth","young manhood","adolescent","adolescence"];
words[5][1] = ["animus","animi&#772;, m.","soul","spirit","animadversion","animosity"];
words[5][2] = ["animi&#772;","animo&#772;rum, m.","high spirits","courage","animadversion","animosity"];
words[5][3] = ["caelum","caeli&#772;, n.","sky","heaven","ceiling","ceilometer"];
words[5][4] = ["culpa","culpae, f.","fault","blame","culpable","culprit"];
words[5][5] = ["glo&#772;ria","glo&#772;riae, f.","glory","fame","glorify","glory"];
words[5][6] = ["verbum","verbi&#772;, n.","word","word","verbose","verb"];
words[5][7] = ["te&#772;","","you","yourself","",""];
words[5][8] = ["li&#772;ber","li&#772;bera, li&#772;berum","free","free","liberty","liberate"];
words[5][9] = ["noster","nostra, nostrum","our","ours","nostrum","mare nostrum"];
words[5][10] = ["pulcher","pulchra, pulchrum","beautiful","handsome","pulchritude","pulchritudinous"];
words[5][11] = ["sa&#772;nus","sa&#772;na, sa&#772;num","sound","healthy","sane","sanity"];
words[5][12] = ["igitur","","therefore","consequently","",""];
words[5][13] = ["-ne","","interrogative suffix","interrogative","",""];
words[5][14] = ["propter","(+acc.)","on account of","because of","",""];
words[5][15] = ["cra&#772;s","","tomorrow","tomorrow","procrastinate","procrastinatior"];
words[5][16] = ["heri","","yesterday","yesterday","",""];
words[5][17] = ["quando&#772;","","when","when","",""];
words[5][18] = ["si&#772; quando&#772;","","if when","if when","",""];
words[5][19] = ["satis","","enough","sufficient","satisfy","satiate"];
words[5][20] = ["tum","","then","at that time","",""];
words[5][21] = ["ce&#772;no&#772;","ce&#772;na&#772;re, ce&#772;na&#772;vi&#772;, ce&#772;na&#772;tum","to dine","to dine","cenacle","centation"];
words[5][22] = ["culpo&#772;","culpa&#772;re, culpa&#772;vi&#772;, culpa&#772;tum","to blame","to censure","culpable","culprit"];
words[5][23] = ["remaneo&#772;","remane&#772;re, rema&#772;nsi&#772;, rema&#772;nsum","to remain","to stay","remnant","remain"];
words[5][24] = ["maneo&#772;","mane&#772;re, ma&#772;nsi&#772;, ma&#772;nsum","to remain","to stay","remnant","remain"];
words[5][25] = ["supero&#772;","supera&#772;re, supera&#772;vi&#772;, supera&#772;tum","to overcome","to be above","superior","superable"];
words[6] = [];
words[6][0] = ["dea","deae, f.","goddess","goddess","deity","deify"];
words[6][1] = ["deus","dei&#772;, m.","god","god","deity","deify"];
words[6][2] = ["discipula","discipulae, f.","student","pupil","disciple","discipline"];
words[6][3] = ["discipulus","discipuli&#772;, m.","student","pupil","disciple","discipline"];
words[6][4] = ["i&#772;nsidiae","i&#772;nsidia&#772;rum, f.","plot","treachery","insidious","insidious"];
words[6][5] = ["liber","libri&#772;, m.","book","book","library","librarian"];
words[6][6] = ["tyrannus","tyranni&#772;, m.","tyrant","absolute ruler","tyrant","tyrannical"];
words[6][7] = ["vitium","vitii&#772;, n.","crime","vice","vice","vicious"];
words[6][8] = ["Graecus (adj.)","Graeca, Graecum","Greek","Greek","",""];
words[6][9] = ["Graecus (noun)","Graeci&#772;, m.","a Greek","Greek","",""];
words[6][10] = ["perpetuus","perpetua, perpetuum","perpetual","lasting","perpetual","perpetuity"];
words[6][11] = ["ple&#772;nus","ple&#772;na, ple&#772;num","full","abundant","plenty","plentiful"];
words[6][12] = ["salvus","salva, salvum","safe","sound","salvation","salver"];
words[6][13] = ["secundus","secunda, secundum","second","favorable","secondary","second"];
words[6][14] = ["vester","vestra, vestrum","you all's","your (pl.)","",""];
words[6][15] = ["-que","","and","and suffix","",""];
words[6][16] = ["ubi","","where","when","ubiquity","ubiquitous"];
words[6][17] = ["ibi","","there","there","ib.","ibidem"];
words[6][18] = ["nunc","","now","at present","quid nunc","quid nunc"];
words[6][19] = ["qua&#772;re&#772;","","because of which thing","why","",""];
words[6][20] = ["possum","posse, potui&#772;","to be able","to have power","possible","possibility"];
words[6][21] = ["tolero&#772;","tolera&#772;re, tolera&#772;vi&#772;, tolera&#772;tum","to bear","to endure","tolerate","tolerable"];
words[7] = [];
words[7][0] = ["amor","amo&#772;ris, m.","love","love","amorous","enamored"];
words[7][1] = ["carmen","carminis, n.","song","poem","charm","Carmen"];
words[7][2] = ["ci&#772;vita&#772;s","ci&#772;vita&#772;tis, f.","state","citizenship","citizen","citizenry"];
words[7][3] = ["corpus","corporis, n.","body","body","corpse","corps"];
words[7][4] = ["homo&#772;","hominis, m.","human being","man","homocide","homage"];
words[7][5] = ["labor","labo&#772;ris, m.","labor","work","belabor","laborious"];
words[7][6] = ["littera","litterae, f.","a letter of the alphabet","letter","literal","letters"];
words[7][7] = ["litterae","littera&#772;rum, f.","letter","literature","literal","letters"];
words[7][8] = ["mo&#772;s","mo&#772;ris, m.","habit","custom","moral","morale"];
words[7][9] = ["mo&#772;re&#772;s","mo&#772;rum, m.","morals","character","moral","morale"];
words[7][10] = ["no&#772;men","no&#772;minis, n.","name","name","nominate","noun"];
words[7][11] = ["pa&#772;x","pa&#772;cis, f.","peace","peace","pacify","pacific"];
words[7][12] = ["re&#772;gi&#772;na","re&#772;gi&#772;nae, f.","queen","queen","reginal","regal"];
words[7][13] = ["re&#772;x","re&#772;gis, m.","king","king","regal","regicide"];
words[7][14] = ["tempus","temporis, n.","time","occasion","tempo","temporal"];
words[7][15] = ["terra","terrae, f.","earth","ground","terrace","territory"];
words[7][16] = ["uxor","uxo&#772;ris, f.","wife","wife","uxorial","uxorious"];
words[7][17] = ["virgo&#772;","virginis, f.","maiden","virgin","Virginia","virgin"];
words[7][18] = ["virtu&#772;s","virtu&#772;tis, f.","manliness","courage","virtuoso","virtuosity"];
words[7][19] = ["novus","nova, novum","new","strange","novel","novice"];
words[7][20] = ["post","(+acc.)","after","behind","posterity","postscript"];
words[7][21] = ["sub (rest)","(+abl.)","under","close to","suburb","subterranean"];
words[7][22] = ["sub (motion)","(+acc.)","under","close to","suburb","subterranean"];
words[7][23] = ["audeo&#772;","aude&#772;re, ausus sum","to dare","to dare","audacity","audacious"];
words[7][24] = ["neco&#772;","neca&#772;re, neca&#772;vi&#772;, neca&#772;tum","to murder","to kill","innocent","internecine"];
words[8] = [];
words[8][0] = ["Cicero","Cicero&#772;nis, m.","Cicero","Cicero","Ciceronian","ciceronian"];
words[8][1] = ["co&#772;pia","co&#772;piae, f.","abundance","supply","copious","cornucopia"];
words[8][2] = ["co&#772;piae","co&#772;pia&#772;rum, f.","supplies","troops","copious","cornucopia"];
words[8][3] = ["fra&#772;ter","fra&#772;tris, m.","brother","brother","fraternity","fratricide"];
words[8][4] = ["laus","laudis, f.","praise","glory","laud","laudable"];
words[8][5] = ["li&#772;berta&#772;s","li&#772;berta&#772;tis, f.","liberty","liberty","liberty","liberate"];
words[8][6] = ["ratio&#772;","rati&#772;nis, f.","reckoning","account","ratio","rational"];
words[8][7] = ["scri&#772;ptor","scr&#772;pto&#772;ris, m.","writer","author","scripture","script"];
words[8][8] = ["soror","soro&#772;ris, f.","sister","sister","sorority","sororicide"];
words[8][9] = ["victo&#772;ria","victo&#772;riae, f.","victory","victory","victorious","Victoria"];
words[8][10] = ["dum","","while","as long as","",""];
words[8][11] = ["ad","(+acc.)","to","near to","",""]; //check
words[8][12] = ["ex, e&#772;","(+abl.)","out of","from","",""]; //check
words[8][13] = ["numquam","","never","never","",""]; 
words[8][14] = ["tamen","","nevertheless","still","",""]; 
words[8][15] = ["ago&#772;","agere, e&#772;gi&#772;, a&#772;ctum","to drive","to do","agent","agenda"]; 
words[8][16] = ["gra&#772;tia&#772;s agere","","to thank someone","to give thanks to","",""]; 
words[8][17] = ["de&#772;mo&#772;nstrō","de&#772;mo&#772;nstra&#772;re, de&#772;mo&#772;nstra&#772;vi&#772;, de&#772;mo&#772;nstra&#772;tum","to point out","to show","demonstrable","demonstration"]; 
words[8][18] = ["disco&#772;","discere, didici&#772;","to learn","to learn","disciple","disciplinary"]; 
words[8][19] = ["doceo&#772;","doce&#772;re, docui&#772;, doctum","to teach","to teach","docent","docile"]; 
words[8][20] = ["du&#772;co&#772;","du&#772;cere, du&#772;xi&#772;, ductum","to lead","to consider","ductile","abduct"]; 
words[8][21] = ["gero&#772;","gerere, gessi&#772;, gestum","to carry","to manage","gerund","gesture"]; 
words[8][22] = ["scri&#772;bo&#772;","scri&#772;bere, scri&#772;psi&#772;, scri&#772;ptum","to write","to compose","describe","inscribe"]; 
words[8][23] = ["traho&#772;","trahere, tra&#772;xi&#772;, tractum","to draw","to drag","attract","contract"]; 
words[8][24] = ["vinco&#772;","vincere, vi&#772;ci&#772;, victum","to conquer","overcome","convince","convict"]; 
words[9] = [];
words[9][0] = ["locus","loci&#772;, m.","place","passage in literature","location","locality"];
words[9][1] = ["loca","loco&#772;rum, n.","places","region","location","locality"];
words[9][2] = ["loci&#772;","loco&#772;rum, m.","passages in literature","passages","location","locality"];
words[9][3] = ["morbus","morbi&#772;, m.","disease","sickness","morbid","morbidity"];
words[9][4] = ["studium","studii&#772;, n.","eagerness","zeal","study","studious"];
words[9][5] = ["hic","haec, hoc","this","the latter","ad hoc","ad hoc"];
words[9][6] = ["ille","illa, illud","that","the former","",""];
words[9][7] = ["iste","ista, istud","that of yours","that","",""];
words[9][8] = ["alius","alia, aliud","other","another","alias","alibi"];
words[9][9] = ["alii&#772;...alii&#772;","","some...others","some...others","",""];
words[9][10] = ["alter","altera, alterum","the other (of two)","second","alter","alteration"];
words[9][11] = ["neuter","neutra, neutrum","not either","neither","neutral","neutrality"];
words[9][12] = ["nu&#772;llus","nu&#772;lla, nu&#772;llum","not any","none","null","nullify"];
words[9][13] = ["so&#772;lus","so&#772;la, so&#772;lum","alone","only","sole","solo"];
words[9][14] = ["no&#772;n s&#772;lum...sed etiam","","not only...but also","",""]; //check
words[9][15] = ["to&#772;tus","to&#772;ta, to&#772;tum","whole","entire","",""];
words[9][16] = ["u&#772;llus","u&#772;lla, u&#772;llum","any","any","",""];
words[9][17] = ["u&#772;nus","u&#772;na, u&#772;num","one","single","unit","union"];
words[9][18] = ["uter","utra, utrum","either","which (of two)","",""];
words[9][19] = ["enim","","for","in fact","",""];
words[9][20] = ["in (ch. 9)","(+acc.)","into","toward","",""];
words[9][21] = ["nimis","nimium","too","too much","nimiety","nimiety"];
words[10] = [];
words[10][0] = ["ami&#772;citia","ami&#772;citiae, f.","friendship","friendship","amicable","amiable"]; //check
words[10][1] = ["cupidita&#772;s","cupidita&#772;tis, f.","desire","longing","Cupid","cupidity"];
words[10][2] = ["ho&#772;ra","ho&#772;rae, f.","hour","time","hour","horoscope"];
words[10][3] = ["na&#772;tu&#772;ra","na&#772;tu&#772;rae, f.","nature","nature","natural","naturalize"];
words[10][4] = ["senectu&#772;s","senectu&#772;tis, f.","old age","old age","senescent","senescence"];
words[10][5] = ["timor","timo&#772;ris, m.","fear","fear","timid","timidity"];
words[10][6] = ["ve&#772;rita&#772;s","ve&#772;rita&#772;tis, f.","truth","truth","verify","veracity"];
words[10][7] = ["via","viae, f.","road","way","via","deviation"];
words[10][8] = ["volupta&#772;s","volupta&#772;tis, f.","pleasure","pleasure","voluptuary","voluptuous"];
words[10][9] = ["bea&#772;tus","bea&#772;ta, bea&#772;tum","happy","blessed","beatific","beatific"];
words[10][10] = ["quoniam","","since","inasmuch as","",""];
words[10][11] = ["cum","(+abl.)","with","with","",""]; //check
words[10][12] = ["audio&#772;","audi&#772;re, audi&#772;vi&#772;, audi&#772;tum","to hear","to listen to","audible","auditory"];
words[10][13] = ["capio&#772;","capere, ce&#772;pi&#772;, captum","to take","to capture","captive","captor"];
words[10][14] = ["di&#772;co&#772;","di&#772;cere, di&#772;xi&#772;, dictum","to say","to tell","dictate","dictation"];
words[10][15] = ["facio&#772;","facere, fe&#772;ci&#772;, factum","to make","to do","fact","factor"];
words[10][16] = ["fugio&#772;","fugere, fu&#772;gi&#772;, fugitu&#772;rum","to flee","to escape","fugitive","refugee"];
words[10][17] = ["venio&#772;","veni&#772;re, ve&#772;ni&#772;, ventum","to come","to come","adventure","avenue"];
words[10][18] = ["invenio&#772;","inveni&#772;re, inve&#772;ni&#772;, inventum","to find","to come upon","invention","inventor"];
words[10][19] = ["vi&#772;vo&#772;","vi&#772;vere, vi&#772;xi&#772;, vi&#772;ctum","to live","to live","vivid","convivial"];
words[11] = [];
words[11][0] = ["caput","capitis, n.","head","leader","capital","captain"];
words[11][1] = ["co&#772;nsul","co&#772;nsulis, m.","consul","consul","consular","consulate"];
words[11][2] = ["ne&#772;mo&#772;","nu&#772;lli&#772;us","no one","nobody","nemo","nullify"];
words[11][3] = ["ego","mei&#772;","I","I","ego","egotistical"];
words[11][4] = ["tu&#772;","tui&#772;","you","you","",""];
words[11][5] = ["is","ea, id","this","that","i.e.","id est"];
words[11][6] = ["i&#772;dem","eadem, idem","the same","the same","ib.","ibidem"];
words[11][7] = ["ami&#772;cus (adj.)","ami&#772;ca, ami&#772;cum","friendly","friendly","amicable","amiable"];
words[11][8] = ["ca&#772;rus","ca&#772;ra, ca&#772;rum","dear","dear","caress","charity"];
words[11][9] = ["quod","","because","because","",""];
words[11][10] = ["neque, nec","","and not","nor","",""];
words[11][11] = ["neque...neque","","neither...nor","neither...nor","",""];
words[11][12] = ["nec...nec","","neither...nor","neither...nor","",""];
words[11][13] = ["autem","","however","moreover","",""];
words[11][14] = ["bene","","well","quite","benefit","beneficial"];
words[11][15] = ["etiam","","even","also","",""];
words[11][16] = ["intellego&#772;","intellegere, intelle&#772;xi&#772;, intelle&#772;ctum","to understand","to understand","intellegent","intellegence"];
words[11][17] = ["mitto&#772;","mittere, mi&#772;si&#772;, missum","to send","to let go","permit","omit"];
words[11][18] = ["sentio&#772;","senti&#772;re, se&#772;nsi&#772;, se&#772;nsum","to feel","to perceive","sense","sensory"];
words[12] = [];
words[12][0] = ["adule&#772;sce&#772;ns","adule&#772;scentis, m. or f.","young man","young woman","adolescent","adolescence"];
words[12][1] = ["annus","anni&#772;, m.","year","year","annual","annuity"];
words[12][2] = ["Asia","Asiae, f.","Asia","Asia","asian","asiatic"];
words[12][3] = ["Caesar","Caesaris, m.","Caesar","Caesar","czar","tsar"];
words[12][4] = ["ma&#772;ter","ma&#772;tris, f.","mother","mother","maternal","maternity"];
words[12][5] = ["medicus","medici&#772;, m.","doctor","physician","medical","medicine"];
words[12][6] = ["medica","medicae, f.","doctor","physician","medical","medicine"];
words[12][7] = ["pater","patris, m.","father","father","paternal","patricide"];
words[12][8] = ["patientia","patientiae, f.","suffering","patience","patient","patience"];
words[12][9] = ["pri&#772;ncipium","pri&#772;ncipii&#772;, n.","beginning","beginning","principle","principle"];
words[12][10] = ["acerbus","acerba, acerbum","harsh","bitter","acerbic","acerbity"];
words[12][11] = ["pro&#772;","(+abl.)","in front of","before","",""]; //prove
words[12][12] = ["diu&#772;","","long","for a long time","",""];
words[12][13] = ["nu&#772;per","","recently","recently","",""];
words[12][14] = ["a&#772;mitto&#772;","a&#772;mittere, a&#772;mi&#772;si&#772;, a&#772;missum","to send away","to lose","admit","admission"];
words[12][15] = ["cado&#772;","cadere, cecidi&#772;, ca&#772;su&#772;rum","to fall","to fall","accident","chance"];
words[12][16] = ["creo&#772;","crea&#772;re, crea&#772;vi&#772;, crea&#772;tum","to create","to create","creation","creator"];
words[13] = [];
words[13][0] = ["di&#772;vitiae","di&#772;vitia&#772;rum, f.","riches","wealth","","none"];
words[13][1] = ["factum","facti&#772;, n.","deed","act","fact","factual"];
words[13][2] = ["signum","signi&#772;, n.","sign","signal","assign","design"];
words[13][3] = ["ipse","ipsa, ipsum","intensive pronoun","","ipso facto","solipsistic"];
words[13][4] = ["quisque","quidque","indefinite pronoun","each one","","none"];
words[13][5] = ["sui&#772;","","relexive of 3rd person","himself","suicide","per se"];
words[13][6] = ["doctus","docta, doctum","taught","learned","doctor","doctorate"];
words[13][7] = ["fortu&#772;na&#772;tus","fortu&#772;na&#772;ta, fortu&#772;na&#772;tum","lucky","fortunate","fortunate","fortune"];
words[13][8] = ["suus","sua, suum","reflextive possessive adj.","his own","sui generis","sui generis"];
words[13][9] = ["nam","","for","for","","none"];
words[13][10] = ["ante","(+acc.)","before","in front of","antebellum","A.M."];
words[13][11] = ["per","(+acc.)","through","through","perchance","perhaps"];
words[13][12] = ["o&#772;lium","","once","long ago","","none"];
words[13][13] = ["alo&#772;","alere, alui&#772;, altum","to nourish","to support","aliment","coalesce"];
words[13][14] = ["di&#772;ligo&#772;","di&#772;ligere, di&#772;le&#772;xi&#772;, di&#772;le&#772;ctum","to esteem","to love","dilgent","diligence"];
words[13][15] = ["iungo&#772;","iungere, iu&#772;nxi&#772;, iu&#772;nctum","to join","","join","joint"];
words[13][16] = ["sto&#772;","sta&#772;re, steti&#772;, statum","to stand","to stand still","stable","statue"];
words[14] = [];
words[14][0] = ["animal","anima&#772;lis, n.","a living creature","animal","animate","animation"];
words[14][1] = ["aqua","aquae, f.","water","water","aquatic","aquarium"];
words[14][2] = ["ars","artis, f.","skill","art","artisan","artifact"];
words[14][3] = ["auris","auris, f.","ear","ear","aural","auricle"];
words[14][4] = ["ci&#772;vis","ci&#772;vis, m. or f.","citizen","citizen","civic","civil"];
words[14][5] = ["iu&#772;s","iu&#772;ris, n.","justice","right","jury","jurisdiction"];
words[14][6] = ["mare","maris, n.","sea","sea","marine","mariner"];
words[14][7] = ["mors","mortis, f.","death","death","mortal","immortal"];
words[14][8] = ["nu&#772;be&#772;s","nu&#772;bis, f.","cloud","cloud","nubilous","nubilose"];
words[14][9] = ["o&#772;s","o&#772;ris, n.","face","mouth","oral","orifice"];
words[14][10] = ["pars","partis, f.","share","part","partial","party"];
words[14][11] = ["Ro&#772;ma","Ro&#772;mae, f.","Rome","Rome","romance","romantic"];
words[14][12] = ["turba","turbae, f.","disturbance","uproar","turbulence","turbid"];
words[14][13] = ["urbs","urbis, f.","city","city","urban","suburb"];
words[14][14] = ["vi&#772;s","vi&#772;s, f.","power","force","violate","vim"];
words[14][15] = ["a&#772; or ab","(+abl.)","from","away from","abject","abuse"];
words[14][16] = ["tra&#772;ns","(+acc.)","across","across","transport","transmit"];
words[14][17] = ["appello&#772;","appella&#772;re, appella&#772vi&#772;, appella&#772;tum","to address","to speak to","appeal","appellation"];
words[14][18] = ["curro&#772;","currere, cucurri&#772;, cursum","to rush","to run","current","cursive"];
words[14][19] = ["mu&#772;to&#772;","mu&#772;ta&#772;re, mu&#772;ta&#772;vi&#772;, mu&#772;ta&#772;tum","to alter","to change","mutate","commute"];
words[14][20] = ["teneo&#772;","tene&#772;re, tenui&#772;, tentum","to keep","to hold","tenable","tenacious"];
words[14][21] = ["vi&#772;to&#772;","vi&#772;ta&#772;re, vi&#772;ta&#772;vi&#772;, vi&#772;ta&#772;tum","to shun","to avoid","inevitable","inevitable"];
words[15] = [];
words[15][0] = ["Italia","Italiae, f.","Italy","Italy","italics","italicize"];
words[15][1] = ["memoria","memoriae, f.","recollection","memory","memoir","memorial"];
words[15][2] = ["tempesta&#772;s","tempesta&#772;tis, f.","season","period of time","tempest","tempestuous"];
words[15][3] = ["centum","","a hundred","a hundred","centimeter","centennial"];
words[15][4] = ["mi&#772;lle","","thousand","thousand","millimeter","millipede"];
words[15][5] = ["mi&#772;lia","mi&#772;lium, n.","thousands","thousands","millimeter","millipede"];
words[15][6] = ["miser","misera, miserum","miserable","wretched","misery","commiserate"];
words[15][7] = ["inter","(+acc.)","among","between","internal","intercept"];
words[15][8] = ["itaque","","therefore","and so","",""];
words[15][9] = ["committo&#772;","committere, commi&#772;si&#772;, commissum","to commit","to entrust","committee","commission"];
words[15][10] = ["exspecto&#772;","exspecta&#772;re, exspecta&#772;vi&#772;, exspecta&#772;tum","to expect","to look for","expectation","expectant"];
words[15][11] = ["iacio&#772;","iacere, ie&#772;ci&#772;, iactum","to hurl","to throw","eject","trajectory"];
words[15][12] = ["timeo&#772;","time&#772;re, timui&#772;","to be afraid","to fear","timid","timorous"];
words[16] = [];
words[16][0] = ["aeta&#772;s","aeta&#772;tis, f.","age","period of life","eternal","eternity"];
words[16][1] = ["audti&#772;tor","audi&#772;to&#772;ris, m.","listener","hearer","auditor","auditorium"];
words[16][2] = ["cle&#772;mentia","cle&#772;mentiae, f.","mercy","mildness","clement","clemency"];
words[16][3] = ["me&#772;ns","mentis, f.","thought","mind","mental","mentality"];
words[16][4] = ["satura","saturae, f.","satire","satire","satirical","satirist"];
words[16][5] = ["a&#772;cer","a&#772;cris, a&#772;cre","keen","sharp","acrid","acrimony"];
words[16][6] = ["brevis","breve","brief","short","brevity","abbreviate"];
words[16][7] = ["celer","celeris, celere","quick","swift","celerity","accelerate"];
words[16][8] = ["difficilis","difficile","difficult","hard","difficulty","difficulty"];
words[16][9] = ["dulcis","dulce","pleasant","sweet","dulcify","dulcet"];
words[16][10] = ["facilis","facile","agreeable","easy","facile","faciliate"];
words[16][11] = ["fortis","forte","brave","strong","fort","forte"];
words[16][12] = ["inge&#772;ns","ingentis","huge","huge","",""];
words[16][13] = ["iu&#772;cundus","iu&#772;cunda, iu&#772;cundum","delightful","pleasant","jocund","jocundity"];
words[16][14] = ["longus","longa, longum","long","long","oblong","longitude"];
words[16][15] = ["omnis","omne","all","every","omnipotent","omnibus"];
words[16][16] = ["pote&#772;ns","potentis","able","powerful","potent","potential"];
words[16][17] = ["senex","senis","aged","old","senate","senator"];
words[16][18] = ["quam","","how","how","",""];
words[16][19] = ["rego&#772;","regere, re&#772;xi&#772;, re&#772;ctum","to guide","to rule","regent","regime"];
words[17] = [];
words[17][0] = ["libellus","libelli&#772;, m.","little book","little book","libel","libelous"];
words[17][1] = ["qui&#772;","quae, quod","which","who","qui vive","quorum"];
words[17][2] = ["caecus","caeca, caecum","blind","blind","caecum","caecal"];
words[17][3] = ["levis","leve","easy","light","levity","lever"];
words[17][4] = ["aut","","or","or","",""];
words[17][5] = ["aut...aut","","either...or","either...or","",""];
words[17][6] = ["cito","","quickly","quickly","excite","incite"];
words[17][7] = ["quoque","","too","also","",""];
words[17][8] = ["admitto&#772;","admittere, admi&#772;si&#772;, admissum","to receive","to admit","admission","admisible"];
words[17][9] = ["coepi&#772;","coepisse, coeptum","began","began","",""];
words[17][10] = ["cupio&#772;","cupere, cupi&#772;vi&#772;, cupi&#772;tum","to wish","to desire","Cupid","cupidity"];
words[17][11] = ["de&#772;leo&#772;","de&#772;le&#772;re, de&#772;le&#772;vi&#772;, de&#772;le&#772;tum","to wipe out","to destroy","delete","indelible"];
words[17][12] = ["de&#772;si&#772;dero&#772;","de&#772;si&#772;dera&#772;re, de&#772;si&#772;dera&#772;vi&#772;, de&#772;si&#772;dera&#772;tum","to long for","to desire","desire","desiderate"];
words[17][13] = ["incipio&#772;","incipere, ince&#772;pi&#772;, inceptum","to begin","to begin","inception","incipient"];
words[17][14] = ["na&#772;vigo&#772;","na&#772;viga&#772;re, na&#772;viga&#772;vi&#772;, na&#772;viga&#772;tum","to navigate","to sail","navigation","navigable"];
words[17][15] = ["neglego&#772;","neglegere, negle&#772;xi&#772;, negle&#772;ctum","to disregard","to neglect","negligible","negligent"];
words[17][16] = ["recito&#772;","recita&#772;re, recita&#772;vi&#772;, recita&#772;tum","to recite","to read aloud","recital","recitation"];
words[18] = [];
words[18][0] = ["flu&#772;men","flu&#772;minis, n.","river","river","flume","affluence"];
words[18][1] = ["genus","generis, n.","origin","kind","generic","general"];
words[18][2] = ["hostis","hostis, m.","an enemy","an enemy","hostile","hostility"];
words[18][3] = ["hoste&#772;s","hostium, m.","the enemy","the enemy","hostile","hostility"];
words[18][4] = ["lu&#772;dus","lu&#772;di&#772;, m.","game","sport","ludicrous","ludic"];
words[18][5] = ["probita&#772;s","probit&#772;tis, f.","uprightness","honesty","probity","probity"];
words[18][6] = ["scientia","scientiae, f.","knowledge","knowledge","science","scientific"];
words[18][7] = ["cla&#772;rus","cla&#772;ra, cla&#772;rum","clear","bright","clarify","clarity"];
words[18][8] = ["morta&#772;lis","morta&#772;le","mortal","mortal","immortality","immortal"];
words[18][9] = ["cu&#772;r","","why","why","",""];
words[18][10] = ["deinde","","thereupon","next","",""];
words[18][11] = ["fluo&#772;","fluere, flu&#772;xi&#772;, flu&#772;xum","to flow","to flow","flux","affluence"];
words[18][12] = ["lego&#772;","legere, le&#772;gi&#772;, le&#772;ctum","to read","to choose","legible","legibility"];
words[18][13] = ["misceo&#772;","misce&#772;re, miscui&#772;, mixtum","to mix","to stir up","miscellaneous","mixture"];
words[18][14] = ["moveo&#772;","move&#772;re, mo&#772;vi&#772;, mo&#772;tum","to move","to arouse","motive","mutiny"];
words[18][15] = ["videor","vide&#772;ri&#772;, vi&#772;sus sum","to be seen","to seem","",""];


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

var q = 0;

function advance() {
	randomChap = Math.floor( Math.random() * chapters.length );
	//randomWord = Math.floor( Math.random() * words[chapters[randomChap]].length );
	randomWord = q;
	$("#fLexical").text($('<textarea />').html(words[chapters[randomChap]][randomWord][0]).text());
	q++;
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
	//var list = [];
	
	var fullLex = document.getElementsByClassName("y")[1];
	var defin = document.getElementsByClassName("y")[2];
	var deriv = document.getElementsByClassName("y")[3];
	
	var guess = document.getElementById("lex").value;
	var formedGuess = decodeEntities(guess).toLowerCase().replace(/\s/g, '');
	var withoutGuess = decodeEntities(guess).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s/g, '');;
	var answer = words[chapters[randomChap]][randomWord][1].toLowerCase().replace(/\s/g, '');
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
	console.log(right + " - " + correct);
	
	var defNum = 2;
	var derNum = 4;
	
	for (var d = 0; d < 2; d++) {
		if (document.getElementById("def").value.toLowerCase() == words[chapters[randomChap]][randomWord][d + 2].toLowerCase()) {
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
		console.log(right + " - " + correct);
	}
	
	for (var v = 0; v < 2; v++) {
		if (document.getElementById("der").value.toLowerCase() == words[chapters[randomChap]][randomWord][v + 4].toLowerCase()) {
			$(deriv).removeClass("wrong");
			$(deriv).addClass("right");
			correct++;
			derNum = v + 4;
			v = 10;
			list[3] = derNum;
		} else {
			$(deriv).removeClass("right");
			$(deriv).addClass("wrong");
		}
		if (v == 1) {
			right = false;
		}
		console.log(right + " - " + correct);
	}
	
	if (right == false) {
		streak = 0;
	} else {
		streak++;
	}
	
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
	
	fullLex.innerHTML = words[chapters[randomChap]][randomWord][1];
	defin.innerHTML = words[chapters[randomChap]][randomWord][defNum];
	deriv.innerHTML = words[chapters[randomChap]][randomWord][derNum];
	
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
