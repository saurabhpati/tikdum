# Welcome to tikdum

tikdum(तिकड़म) is a [hindi](https://en.wikipedia.org/wiki/Hindi) (हिन्दी) slang which loosely translates to Gimmick, Trick, Tactic or basically a street smart way to do something. There is a joke I share with a friend which is the inspiration behind this name.

## Why name it tikdum

Once we were trying to fix an issue over chat where I basically typed in[hinglish](https://en.wikipedia.org/wiki/Hinglish) : We need to apply some **tikdum** here. Since the chat was happening over an English keyboard from both ends, my unsuspecting friend got anxious about this very strange and new technology **tikdum** which could fix the issue in question. It was only when he googled the term that he found out what was I up to. It may not sound funny now, but it was damn funny then.

## Installation

    npm install tikdum -g

## Use

	tikdum translate --jp "<json_file_path>" --rp "<resx_file_path>"

This will replace the values in `resx` files from those found in `json` files, if any key is not found, it will create one.

## Input and output structure

### Input json folder
-ar-sa.json
-en.json
-ja.json
...

### Output resx folder
-ResourceService.ar-SA.resx
-ResourceService.resx
-ResourceService.ja.resx
...

## Help
`tikdum help` or `tikdum --help` or `tikdum -h`
