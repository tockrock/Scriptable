// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: envelope; share-sheet-inputs: plain-text;
// Editable from below.
// copied from sample code


let input_string = args.plainTexts[0]

let alert = new Alert();
careco_handler(alert, input_string)
await alert.presentAlert();

function careco_handler(alert, email_content) {

	alert.title = "Shared";
	alert.message = email_content;
	alert.addCancelAction("OK");

}

