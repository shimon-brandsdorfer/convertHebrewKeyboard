function map(char, toHeb) {
	if(char === " ") return char;
	var hebrewKB = "/'קראטוןםפשדגכעיחלךף,זסבהנמצתץ.";
	var englishKB = "qwertyuiopasdfghjkl;'zxcvbnm,./";
	return toHeb ? hebrewKB[englishKB.indexOf(char)] : englishKB[hebrewKB.indexOf(char)];
};

function mapStr(str, toHeb) {
	var res = "";
	var string = str.split("");
	string.forEach(function(c) {
		res += map(c, toHeb);
	});
	return res;
};

function convert(str) {
	var toHeb = deterLang(str);
	return mapStr(str, toHeb);
}
