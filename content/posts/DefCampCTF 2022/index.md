---
weight: 1
title: "DefCamp CTF 2022"
date: 2022-02-11
lastmod: 2022-02-13
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the challenges in DefCamp CTF 2022"

tags: ["forensics", "misc", "web"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/1560](https://ctftime.org/event/1560)
- Feb 11 to Feb 13
- Played with wackers
- Ranking: 73/1035 with 736 points

# My Solves/Writeups

## Forensics

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| forensics/this-file-hides-something | Medium | 50 | [jump](#forensicsthis-file-hides-something) |

## Misc

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| misc/catch-me-if-you-can | Medium | 186/772 | [jump](#misccatch-me-if-you-can) |

## Web

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| web/para-code | Easy | 50 | [jump](#webpara-code) |

## Writeups
### forensics/this-file-hides-something

There is an emergency regarding this file. We need to extract the password ASAP. It's a crash dump, but our tools are not working. Please help us, time is not on our side.

PS: Flag format is not standard.

Attachments: https://api.cyberedu.ro/v1/contest/dctf21/challenge/bf7cde20-89b7-11ec-b6ba-fdc8d6daa06e/download/2001

### Solution
We are given a crashdump.zip file that we can extract into a crashdump.elf.

From the description, it is hinting us that this challenge is something to do with memory and memory that gets rid of itself or deletes itself.
Also, the name of the file is crashdump, so the tool we need for this challenge stands out.

We will be using the tool ```volatility```, which is a tool that is good for memory forensics challenges.
The download to the tool can be found at https://github.com/volatilityfoundation/volatility

After the tool is setup, we can run the vo.py file using any version of python2 and use the -f option to supply our memory file.

First, we want to use the ```imageinfo``` option to find the correct profile.

![imageinfo](https://user-images.githubusercontent.com/46347858/153773080-2e1d1268-14b4-4ce7-80af-e2cd67aded5d.PNG)

We will choose the first profile in the list and use that for our next tests. (Win7SP1x64)

We can extract the lsa secrets now using the ```lsadump``` option.

![password](https://user-images.githubusercontent.com/46347858/153773086-cd374023-2f2b-4e74-941b-84dca2e931e0.PNG)

We get the password: ```Str0ngAsAR0ck!```

### misc/catch-me-if-you-can

We need your technical expertise to analyze this Android project. We tried to compile it, no success, we tried to open it, no success, but we know for sure that the final product had to scope to deliver hidden messages to different attackers worldwide in a form of a mobile game.

Flag format: not standard

Attachments: https://api.cyberedu.ro/v1/contest/dctf21/challenge/bd772bd0-8a4c-11ec-84f7-4917e4d507f7/download/2006

### Solution

I just went straight to the 4th question, since the competition was almost over and it seemed the most understandable and easiest to do.

The question was ```Something is wrong with the SharedPreferences file. We didn't manage to understand the string value. Please share it with us.```

The question asks us to look at the SharedPreferences file and taking a look at the options, it was clear it was talking about the SharedPreferences.java file.

![stringthing](https://user-images.githubusercontent.com/46347858/153781418-66be7fdc-b7f5-491e-8a21-497a2ea8ab16.PNG)

Looking at the file we see the string value that looks cryptic and not understandable that the question was talking about.
I knew that we had to somehow decrypt this into a normal string, so I started looking for options.

I couldn't think of any ciphers that looked like this, so I took a look at the SharedPreferences.java file again.

Right about the cryptic string, I saw that it said '1337'.
I thought about this for a while and got nothing, but then I searched 1337 code on google and it brought me to ```Leet Speak```

I found a decoder for it by dcode.fr: https://www.dcode.fr/leet-speak-1337

Putting the text in and decrypting, we get a more recognizable word, but some parts of it are still not as understable.

But looking at the text, we can deduce the rest of the words and make the decoded string.

```
Flags:
1. Not solved
2. Not solved
3. Not solved
4. DOYOUTHINKYOUHAVEIT
```

### web/para-code

I do not think that this API needs any sort of security testing as it only executes and retrieves the output of ID and PS commands.

Flag format: CTF{sha256}

Attachments: 34.159.7.96:32210

### Solution
Taking a look at the website given, we see some php code

```php
<?php
require __DIR__ . '/flag.php';
if (!isset($_GET['start'])){
    show_source(__FILE__);
    exit;
}

$blackList = array(
  'ss','sc','aa','od','pr','pw','pf','ps','pa','pd','pp','po','pc','pz','pq','pt','pu','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','pf','pz','pv','pw','px','py','pq','pk','pj','pl','pm','pn','pq','ls','dd','nl','nk','df','wc', 'du'
);

$valid = true;
foreach($blackList as $blackItem)
{
    if(strpos($_GET['start'], $blackItem) !== false)
    {
         $valid = false;
         break;
    }
}

if(!$valid)
{
  show_source(__FILE__);
  exit;
}

// This will return output only for id and ps.
if (strlen($_GET['start']) < 5){
  echo shell_exec($_GET['start']);
} else {
  echo "Please enter a valid command";
}

if (False) {
  echo $flag;
}

?>
```
Reading through this php code, we can see that this is a command injection challenge where we can put commands into the the start query.
Also we can see that if we somehow trigger False, the flag variable will appear in the source code.

Reading the input part of the code, we see that there is a blacklist preventing us from typing any of those letters inside our commands and that our command must be less that 5 characters long.

With this knowledge, I tried out some basic command injection stuff like l\s or l's' and it printed out that there was a flag.php and a index.php.
With only 4 letters to type for our command, I knew that opening the flag.php file was an impossibility.

Next, I went to try to exploit the if (False) part to get the $flag variable to show in the source code.
I knew that the input could only be 4 characters max, so I would have to have at max a 2 character command followed by a space and an asterisk after.

This part wasn't very fun for me, because I had to "bruteforce" through all the 2 characters commands until I found a correct one.
By bruteforce, I meant go through the commands that seemed valid in https://www.davekb.com/browse_computer_tips:linux_two_letter_commands:txt

Eventually I got to the command m4 which when doing ```?start=m4 *``` showed the $flag variable in the source code.

Note: Sadly I didn't know what m4 actually did to trigger the if statement to a False and print the flag in the source code, but the m4 command processes macros in files.
Read more at: https://www.commandlinux.com/man-page/man1/m4.1.html

Wrapping the flag with CTF{} we get: ```CTF{791b21ee6421993a8e25564227a816ee52e48edb437909cba7e1e80c0579b6be}```

### Takeaways

- I learned about some new commands in linux that are able to print stuff to stdout like nl or m4.
- I learned that 1337 means leet speak
- I learned a new tool ```volatility``` that is able to analyze memory files for forensic challenges
