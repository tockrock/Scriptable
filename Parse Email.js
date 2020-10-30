// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: envelope; share-sheet-inputs: plain-text;
// copied from sample code

let summary = args.plainTexts.length
  + " texts\n"
  + args.images.length
  + " images\n"
  + args.urls.length
  + " URLs\n"
  + args.fileURLs.length
  + " file URLs"
let input_string = args.plainTexts[0]
let alert = new Alert()
alert.title = "Shared"
alert.message = input
alert.addCancelAction("OK")
await alert.presentAlert()