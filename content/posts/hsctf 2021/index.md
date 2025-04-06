---
weight: 1
title: "hsctf 2021"
date: 2021-06-14
lastmod: 2021-06-19
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "writeup for challenges in hsctf 2021"

tags: ["misc", "web"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/1264](https://ctftime.org/event/1264)
- Jun 14 to Jun 19
- Played with wackers
- Ranking: 254/1164 with 3500 points

# My Solves/Writeups

## Misc

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| misc/LSBlue | Medium | 220 | [jump](#misclsblue) |

## Web

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| web/NRC | Easy | 107 | [jump](#webnrc) |

## Writeups
### misc/LSBlue

Orca watching is an awesome pastime of mine!

Attachments: [https://github.com/wackersCTF/hsctf-8/blob/main/misc/LSBlue/lsblue.png?raw=true](https://github.com/wackersCTF/hsctf-8/blob/main/misc/LSBlue/lsblue.png?raw=true)

### Solution
First, you will obtain the file they gave.

Since the title name of the challenge is LSBlue you will know that it has something to do with LSB.

The tool you will want to use for this challenge is zsteg.
Zsteg is a Ruby tool that detects hidden data in PNG and BMP images.

Once you use zsteg on the original image file they gave, you will see many lines.

```
imagedata           .. text: "Uhv4BR$.<!(2#(0\"(2#*4*4@;L\\l"
b1,b,lsb,xy         .. text: "flag{0rc45_4r3nt_6lu3_s1lly_4895131}"
b2,r,lsb,xy         .. text: "UUTFUUUW"
b2,g,lsb,xy         .. file: PGP Secret Key -
b2,g,msb,xy         .. text: "iiUueUUu"
b2,b,msb,xy         .. text: "TUUUEUTAUE"
b2,bgr,msb,xy       .. text: "VU_UUUUeY"
b4,r,lsb,xy         .. text: "UEUffufffgUfffeeEfUVVuVeUUfVffUUVfvvDffVfUUWeFfVfUfeeUeVffUeWffwffeVffeffVfefffvfUEeffffeUgUUUffVeVeUUVfffUfUfeUWvffVefefUfvfgUUVffgeUvfUUfgffeVeVgfffUUUUUUUUUUUVehveUfUVfegeUUUUVgeUVggeUUUUUUUUUUUeVgvVUUUvUEUVvVuUUUfeUUUVvfVffffVfffeVfgeUUUUUUUVffeUUUUVeV"
b4,r,msb,xy         .. text: "jfnn\"ffjf"
b4,g,lsb,xy         .. text: "\"\"\"\"\"\"\"2"
b4,g,msb,xy         .. text: "DHDDDDDDDL"
b4,b,msb,xy         .. text: "7swwwww73sw337s73swww7swwww7w7773www77sww7swwww7swwwwwwwwswwsw7swwwsw7s7ww77sswwwww7wwwww7sww7333s333swww7333s7s"
```

Most of these lines are pretty unimportant, but in the second line you will get the flag. ```flag{0rc45_4r3nt_6lu3_s1lly_4895131}```

### web/NRC

Find the flag :)

Attachments: [https://no-right-click.hsc.tf](https://no-right-click.hsc.tf)

### Solution
Press Ctrl + Shift + I to open the developer console

Go to sources, then go to the CSS file

Look in the comments :)

Flag: ```flag{keyboard_shortcuts_or_taskbar}```
