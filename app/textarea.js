var module = module || {};

var submit = document.getElementById("submit");
var textarea = document.getElementById("text");



function verifyAlphaNumeric (textarea) {
	// var textarea = document.getElementById("text").value;
	if (/[^a-zA-Z0-9]/.test(textarea)) {
       return false;
    }
    return true;
}

function checkWordCount (textarea) {
	var wordsArray = textarea.split(" ");
	if (wordsArray.length > 100) {
		return false;
	}
	return true;
}

function duplicateCheck (textarea) {
	var wordsArray = textarea.split(" ").sort();
	for (var i = 0; i < wordsArray.length; i++) {
		if (wordsArray[i] === wordsArray[i + 1]) {
			return false;
		}
	} return true;

}


// submit.addEventListener("click", function () {
// 	var text = textarea.value;
// 	verifyAlphaNumeric(text);
// 	checkWordCount(text);
// 	duplicateCheck(text);
// });

module.exports = { verifyAlphaNumeric, checkWordCount, duplicateCheck };