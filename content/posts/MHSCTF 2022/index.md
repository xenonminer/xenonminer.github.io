---
weight: 1
title: "MHSCTF 2022"
date: 2022-02-18
lastmod: 2022-02-25
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the challenges in MHSCTF 2022"

tags: ["crypto", "forensics", "rev", "web"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/1564](https://ctftime.org/event/1564)
- Feb 18 to Feb 25
- Played with wackers
- Ranking: 106/739 with 630 points

# My Solves/Writeups

## Crypto

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| crypto/Em-Dee | Easy | 10 | [jump](#cryptoem-dee) |
| crypto/Whats-Cooking | Easy | 10 | [jump](#cryptowhats-cooking) |
| crypto/Peanuts | Easy | 10 | [jump](#cryptopeanuts) |
| crypto/Crash-Hacker | Easy | 10 | [jump](#cryptocrash-hacker) |
| crypto/Whats-Cooking-2 | Easy | 10 | [jump](#cryptowhats-cooking-2) |
| crypto/IPv11 | Easy | 15 | [jump](#cryptoipv11) |

## Forensics

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| forensics/Blank-Slate | Easy | 20 | [jump](#forensicsblank-slate) |
| forensics/In-Plain-Sight | Easy | 20 | [jump](#forensicsin-plain-sight) |
| forensics/Blank-Slate-2 | Easy | 25 | [jump](#forensicsblank-slate-2) |
| forensics/Chimera | Easy | 25 | [jump](#forensicschimera) |
| forensics/Blank-Slate-3 | Easy | 30 | [jump](#forensicsblank-slate-3) |
| forensics/Blatant-Corruption | Medium | 40 | [jump](#forensicsblatant-corruption) |

## General

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| general/Sanity-Check | Easy | 2 | [jump](#generalsanity-check) |
| general/Discord | Easy | 3 | [jump](#generaldiscord) |
| general/Binned | Easy | 5 | [jump](#generalbinned) |
| general/Where-the-Wild-Cards-Are | Easy | 10 | [jump](#generalwhere-the-wild-cards-are) |
| general/Reconstruction | Medium | 35 | [jump](#generalreconstruction) |

## Rev

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| rev/Lemme-In | Easy | 30 | [jump](#revlemme-in) |

## Web

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| web/James-Harold-Japp | Easy | 10 | [jump](#webjames-harold-japp) |
| web/new-site-who-dis | Easy | 20 | [jump](#webnew-site-who-dis) |
| web/Bend | Easy | 25 | [jump](#webbend) |
| web/Piece-It-Together | Easy | 25 | [jump](#webpiece-it-together) |
| web/Cuppa-Joe | Easy | 30 | [jump](#webcuppa-joe) |
| web/Erlenmeyer-Biscuits | Easy | 40 | [jump](#weberlenmeyer-biscuits) |

## Writeups
### crypto/Em-Dee

I have a good friend named Em. She loves secret codes, so when she challenged me this time, I was well up for it! She told me that she encoded the word "happy" as "56ab24c15b72a457069c5ea42fcfc640" and "sad" as "49f0bad299687c62334182178bfd75d8" (without the quotes) and challenged me to encode "mhsctf" using her method! I can't figure it out! What would it be? Enter your answer in flag format: "flag{...}"

### Solution
Just search up "md5 encode" on your web browser and click any link and paste "mhsctf" in there

Flag: ```flag{fc3e3c405a66f8fe7cb7f17a838ea88c}```

### crypto/Whats-Cooking

65 141 40 66 144 40 67 70 40 66 70 40 65 141 40 63 63 40 67 64 40 67 64 40 66 62 40 65 67 40 63 61 40 66 66 40 66 63 40 64 65 40 64 61 40 66 142 40 66 64 40 64 67 40 64 66 40 63 71

### Solution
Go to [cyberchef](https://gchq.github.io/CyberChef/) and paste in the text and click the magic wand to get the flag.

Flag: ```flag{mmm_p@$ta}```

### crypto/Peanuts

Charlie Brown received this message from his good friend Pig-Pen, but it appears to be nonsense. What could it be? Remember to enter your answer in the "flag{...}" format; it's all lowercase.

Attachments: [https://mhsctf2022.ctfd.io/files/74da0cdef1761cf9a67e7be690cc2faa/3fa7aeee79c660ea86111702f0d4953f.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6Mjd9.YhHcjQ.0E2RytMTn-Kq7M1EJsGT_BcvoEQ](https://mhsctf2022.ctfd.io/files/74da0cdef1761cf9a67e7be690cc2faa/3fa7aeee79c660ea86111702f0d4953f.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6Mjd9.YhHcjQ.0E2RytMTn-Kq7M1EJsGT_BcvoEQ)

### Solution
I just searched up pigpen cipher and found an image for it on google and manually decoded the text in the image.

Flag: ```flag{goodgriefcharliebrown}```

### crypto/Crash-Hacker

Another super-secret message from Em! What does this one mean? b4b11af47f3086ce1293df4908d026d4 Remember to enter your answer in the "flag{...}" format! Hint: If at first you don't succeed, try, try again.

### Solution
Search up md5 decrypt and click any website. I used https://www.md5online.org/md5-decrypt.html. Get the flag.

Flag: ```zero_cool```

### crypto/Whats-Cooking-2

More layers of encryption! (Hint: there are 5 layers)

Attachments: [https://mhsctf2022.ctfd.io/files/76237482cdd1bf13fd83c012d4ff3b8c/7732348dab3df4cf51cc5f6443aa6e38.txt?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6Mjh9.YhHc9w.P3u0FTcL0IBmcdZhYrUwXluYGwY](https://mhsctf2022.ctfd.io/files/76237482cdd1bf13fd83c012d4ff3b8c/7732348dab3df4cf51cc5f6443aa6e38.txt?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6Mjh9.YhHc9w.P3u0FTcL0IBmcdZhYrUwXluYGwY)

### Solution
I tried this for a bit and got stuck on the last text which had weird J's in it, so I just threw the entire file into ciphey with ```ciphey -f file``` and it gave the flag. I wasn't sure how the last one was octal but ciphey said it was.

![ciphey](https://user-images.githubusercontent.com/46347858/155826882-17b16f2f-85c3-479c-9097-1c27cd2a9072.PNG)

Flag: ```flag{m3$sy}```

### crypto/IPv11

I asked my friend for the IP addresss of their website and this is what they gave me. I'm sure they're misunderstanding, but I should really decode this before deciding that. Remember to enter your answer in the "flag{...}" format! 1.9.100.51.110.116.105.102.105.51.100

### Solution
The text looked like ascii to me since most of the numbers were between the a-z range in the ascii table so I just replaced the dots with spaces and put the text into an ascii to text and got the flag. I got ```d3ntifi3d``` as the output and it looked close to identified so I just added a 1 in front.

Flag: ```flag{1d3ntifi3d}```

### forensics/Blank-Slate

My friend sent me this picture, and I'm not sure what to do with it! It seems a little... blank?

Attachments: [https://mhsctf2022.ctfd.io/files/eb554a89e9c7ea0cf3e399f2f9c0c688/8b04fe3a04c641931247c4a912a39213.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzB9.YhHdRA.aTG6IAOuzpZHWf7ynuc8DTunrTg](https://mhsctf2022.ctfd.io/files/eb554a89e9c7ea0cf3e399f2f9c0c688/8b04fe3a04c641931247c4a912a39213.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzB9.YhHdRA.aTG6IAOuzpZHWf7ynuc8DTunrTg)

### Solution
Download the file and run ```strings``` on it. Get the flag.

Flag: ```flag{get_grepped}```

### forensics/In-Plain-Sight

Did you know that the Imagineers who helped build the Disney parks incorporated hidden images into their structures and designs? Many of their designs were in the shape of Mickey Mouse like the one in this image. What else might be hiding in plain sight?

Attachments: [https://mhsctf2022.ctfd.io/files/7cba480053e397bd4a5048d0a1c1d9da/c420629a20ab083202fddd39f722b41f.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzF9.YhHddQ.6Et8tBDLvQHae1S8IgYc-iK_UBY](https://mhsctf2022.ctfd.io/files/7cba480053e397bd4a5048d0a1c1d9da/c420629a20ab083202fddd39f722b41f.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzF9.YhHddQ.6Et8tBDLvQHae1S8IgYc-iK_UBY)

### Solution
Download the file and run ```zsteg``` on it. Get the flag.

Flag: ```flag{H1dd3nM1ck3y}```

### forensics/Blank-Slate-2

My friend is, once again, up to no good. They sent me this local git repository and it seems completely empty. Can you help me out here?

Attachments: [https://mhsctf2022.ctfd.io/files/0c6a7d71f2e66309955ccce155127c02/957d69fa3cc9895ac8fa70cb5e75b698.zip?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzJ9.YhHdlA.4olJzib6ztGJpT70sssqHhlEo0E](https://mhsctf2022.ctfd.io/files/0c6a7d71f2e66309955ccce155127c02/957d69fa3cc9895ac8fa70cb5e75b698.zip?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzJ9.YhHdlA.4olJzib6ztGJpT70sssqHhlEo0E)

### Solution
Knowing that this was a git challenge, I would use GitTools's extractor https://github.com/internetwache/GitTools to extract the flag from the commit history.

Flag: ```flag{w4tch_0ut_f0r_g17_h15t0ry}```

### forensics/Chimera

It's just one inside another...

Attachments: [https://mhsctf2022.ctfd.io/files/ee88e402b919e225443047e0cbe90e9d/87122c397ac8b10d53057a2c9ec1834e.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzN9.YhHdtg.gc76uG3CiDtO_s2jAd3ww__Oj6c](https://mhsctf2022.ctfd.io/files/ee88e402b919e225443047e0cbe90e9d/87122c397ac8b10d53057a2c9ec1834e.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzN9.YhHdtg.gc76uG3CiDtO_s2jAd3ww__Oj6c)

### Solution
The description mentioned that there was a file inside the original png file so I used ```foremost``` to extract the other file out and in the new png file was the flag.

Flag:```flag{4bs0rb3d}```

### forensics/Blank-Slate-3

My friend sent me another picture... It still looks blank!

Attachments: [https://mhsctf2022.ctfd.io/files/a864b5e615a110c4560e717d4ce057eb/87dda8317f800936d245ed709350bd3d.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzZ9.YhHd0w.O5ypOHelAKBi-6II64RjElAlSm8](https://mhsctf2022.ctfd.io/files/a864b5e615a110c4560e717d4ce057eb/87dda8317f800936d245ed709350bd3d.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzZ9.YhHd0w.O5ypOHelAKBi-6II64RjElAlSm8)

### Solution
Easy steg challenge. Just turn it to Superimposed or green field then get the flag. A good online tool for this challenge or for any steg challenge is https://aperisolve.fr/.

Flag: ```flag{1t$_n0t_3mpty}```

### forensics/Blatant-Corruption

Something's wrong with this picture. Can you fix it for me?

Attachments: [https://mhsctf2022.ctfd.io/files/72191be33b0560f3f45fdbdbb218fdc5/5d9af84cfad20e4cf005210e32e38899.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6NDN9.YhHd7A.D3TaYvWRQixfjsVwRG2GSlUgAks](https://mhsctf2022.ctfd.io/files/72191be33b0560f3f45fdbdbb218fdc5/5d9af84cfad20e4cf005210e32e38899.png?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6NDN9.YhHd7A.D3TaYvWRQixfjsVwRG2GSlUgAks)

### Solution
Simple magic bytes challenge, the image is originially corrupted because there were 4 bytes missing that are needed to identify that its a png image.

So just find the correct file header from a website like https://en.wikipedia.org/wiki/List_of_file_signatures and use https://hexed.it/ to add the 4 bytes of ```89 50 4E 47``` to the beginning then export the file.

After opening the file, you see the flag.

Flag: ```flag{str@ight_n_narr0w}```

### general/Sanity-Check

Let's have a quick sanity check. Enter the flag "flag{1_am_$@n3}" to make sure the platform's working! If you have any issues, be sure to contact mhsctf@gmail.com, DM @0xmmalik on Twitter, or DM 0xmmalik#7959 on Discord.

### Solution
The flag is in the description.

Flag: ```flag{1_am_$@n3}```

### general/Discord

Please join our discord for updates and other information! You'll find a special flag in #announcements. [https://discord.gg/XPk6xTDtFV](https://discord.gg/XPk6xTDtFV) Also, please follow @mhsctf and @0xmmalik on Twitter for more information as the competition progresses.

### Solution
Click the discord link and join their discord. Go to the #announcements channel and scroll up a little. Get the flag.

Flag: ```flag{1_h4s_th3_d15c0rd}```

### general/Binned

If you have the number 1001000 in binary, what number is that in decimal? Enter your answer in the flag format: "flag{###}"

### Solution
Go to any binary to decimal converter or just do it in your head.

Flag: ```flag{72}```

### general/Where-the-Wild-Cards-Are

\[a-z,0-9,{,},_](?=[0-D][T-Z]{7,14})

Attachments: [https://mhsctf2022.ctfd.io/files/22c68e36282c7298eccdc6901700c880/3920d9a1f126c1ae8c6e559234e62e7d.txt?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MjR9.YhHe0g.gmtOJ5JqevqLjc-9Z4JvOUEGqKg](https://mhsctf2022.ctfd.io/files/22c68e36282c7298eccdc6901700c880/3920d9a1f126c1ae8c6e559234e62e7d.txt?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MjR9.YhHe0g.gmtOJ5JqevqLjc-9Z4JvOUEGqKg)

### Solution
We are given a lot of weird looking text and the description looks like regex so go to a website like https://regexr.com/ and put the text in the file in and put the regex from the description in.

The characters that make up the flag will be highlighted from the regex.

Flag: ```flag{0ut_1n_7he_wild}```

### general/Reconstruction

I received an interesting file that's supposed to create a picture, but I'm not exactly sure how. Wanna give it a shot?

Attachments: [https://mhsctf2022.ctfd.io/files/3ad6ac23eb7d0a4dd765a179a7f9a7b2/9712a0c4e51eae4c229538d050ae0d38.txt?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6NDl9.YhQ8cw._R8jGPFUxlfDgUOgKgCAg2Bijyw](https://mhsctf2022.ctfd.io/files/3ad6ac23eb7d0a4dd765a179a7f9a7b2/9712a0c4e51eae4c229538d050ae0d38.txt?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6NDl9.YhQ8cw._R8jGPFUxlfDgUOgKgCAg2Bijyw)

### Solution
We are given a file that looks like the RGB pixels that make up an image.

We see that that there are also semicolons around the file, probably separating each row of the image as an image is like a matrix, with rows and columns.

Converting back from RGB pixels to the image could be done with the python module PIL (Pillow).

The problem is usually these files of RGB bytes, are given without the semicolons that separate each row, so the first task I had was to remove the semicolons.

After removing the semicolons with python and making a new list that had all the correct bytes, we could make the image with the PIL module now.

First thing to do would be to turn the list of pixels into bytes first.

Then, we would use Image.frombytes with "RGB" and the image pixels.

We also need to specify the length and width of the image we want to create, but we can play around with that later.

Then we can use show() to show the image with an image editor.

Here is what that part of the code looks like.

```python
img_bytes = bytes(actual_pixel_list)

img = Image.frombytes("RGB", (number, number), img_bytes)
img.show()
```

Now, we just need to fix the length and width of the image we want to show.

After playing around with the numbers a bit a testing the boundaries, I found out the maxes for the length and widt were 360, 3560 respectively.

Here is the final code:

```python
from PIL import Image

pixel_list = []
actual_pixel_list = []
with open("9712a0c4e51eae4c229538d050ae0d38.txt") as p:
        pixel_list = (p.read().split(";"))

for broken in pixel_list:
        if broken != "":
                broken = broken.split(",")
                for value in broken:
                        if value != "":
                                actual_pixel_list.append(int(value))

img_bytes = bytes(actual_pixel_list)

img = Image.frombytes("RGB", (360, 2560), img_bytes)
img.show()
```

Now running this file in my kali linux, it got opened with Image Magick, which was great because I could change the layout and orientation of the image itself.

The first output after running the file is this:

![1](https://user-images.githubusercontent.com/46347858/155826862-ad79ea5a-577a-431d-bb87-bb52a3eeda3a.PNG)

Looks horrible right. We can kind of see that the flag message is there but its really stripped and weird, lets try to maximize Image Magick.

![2](https://user-images.githubusercontent.com/46347858/155826863-9e499bdc-22b4-4bd5-965c-11862d940aff.PNG)

Looks a little better, but doesn't look like the entire flag and it looks like it is flipped and turned sideways.

Lets fix those things by going to ImageMagick's settings by clicking on the image then going to "Transform", then pressing "Flip", then "Rotate Left" twice.

![3](https://user-images.githubusercontent.com/46347858/155826866-3a32d898-2eed-41e3-a333-cdb46196a0fe.PNG)

Now the flag is more clear and we can get most of the get the characters by reading what the phrase says.

We get the flag!

Flag: ```flag{411_7h3_king5_h0rs3s_and_a11_th3_kings_m3n}```

```Note that this was probably a really innieficient way to do this challenge. There was probably some better ways that built the image by row without having to remove the semicolons, but I didn't know how and just went with my way.```

### rev/Lemme-In

I want to join this secret club, but they have the weirdest passwords! I've managed to intercept the program they use to authenticate the passwords, but I don't know how to figure it out. Can you figure out the password for me?

Attachments: [https://mhsctf2022.ctfd.io/files/c36599beaf8c45a69b8d6172e46fe4fd/d17d3daad85fb5fd1fb849c5e4d63d9e.py?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzV9.YhHfeA.6m7VPyyE4Mv47kDnLYaFru7lM6w](https://mhsctf2022.ctfd.io/files/c36599beaf8c45a69b8d6172e46fe4fd/d17d3daad85fb5fd1fb849c5e4d63d9e.py?token=eyJ1c2VyX2lkIjo3NDQsInRlYW1faWQiOjIxMywiZmlsZV9pZCI6MzV9.YhHfeA.6m7VPyyE4Mv47kDnLYaFru7lM6w)

### Solution
I was very braindead wasn't thinking when starting this challenge. But, after a small break I realized that it was pretty simple.

We are given the code:
```python
def roll(text):
        return text[::-1]

def swoop(text):
        text = list(text)
        for i in range(len(text)):
                text[i] = chr(ord(text[i]) + (i % 5))
        return ''.join(text)

password = input("Enter the password: ")
if swoop(roll(password)) == "}12u7#dvl{$`fos_4jwchb}jelg":
        print("Welcome in!")
else:
        print("Sorry, wrong password.")
```

We can see that the roll() function just reverses the text and the swoop() function just goes up the ascii table a certain amount of characters.

To solve, we can just reverse the order of those two functions and reverse what the swoop() function does.

My reversed code is here:

```python
ct = "}12u7#dvl{$`fos_4jwchb}jelg"
ct = list(ct)
for i in range(len(ct)):
        ct[i] = chr(ord(ct[i]) - (i % 5))
print(''.join(ct)[::-1])

```

We get the flag!

Flag: ```flag{ah_th3_old_$witc#3r00}```

### web/James-Harold-Japp

I need to be able to log in to this website. Can you tell me how to do it? mhsctf-jamesharoldjapp.0xmmalik.repl.co (you may need to wait for the site to wake up)

### Solution
Going to the website, we see that it asks for a Password and there is a Submit button.

Looking in the source code of the website, we see that if we set the password to ```this_is_a_really_secure_password```, we would get sent to another page that should have the flag.

But when we get sent to the new page, it doesn't have the flag. Even worse, it says that the requested resource isn't there.

Luckily, taking a look at the page itself, we can see that this is not a standard php file not found error, but a css that just makes the page look like it.

So, going to the source code of that page, we find the flag!

Flag: ```flag{1n$p3ct0r_g3n3r@l}```

### web/new-site-who-dis

I just started making my new website. Can you pen-test it and see if you can get the super-secret flag mhsctf-newsitewhodis.0xmmalik.repl.co (you may need to wait for the site to wake up)

### Solution
Going to the website, we see there is a link to a new page that says ```Admins, get your flag here!```

From this message it already seems clear as to what this challenge is.

Entering the new page we see that it says ```Sorry, only admins can see the super-secret flag!```.

We now know that it is a cookie value changing challenge.

Inspecting the page and going to the cookie section we see that there is a cookie named ```user``` with the value of ```basic```.

Changing the value from ```basic``` to ```admin``` and refreshignr the page, we get the flag!

Flag: ```flag{1t3-@_m3_Mari0}```

Notes: ```I was really confused  when doing this challenge because I thought they had some setting that blocked cookie value changing or something similar. But it turns out, it was just a Chrome setting that you could change somehow. I just opened the firefox browser instead and it worked perfectly fine.```

### web/Bend

I found this weird website that says it can give me a cool flag, but I can't seem to get it! What am I doing wrong? mhsctf-bend.0xmmalik.repl.co (you may need to wait for the site to wake up)

### Solution
Going to the website, we see the message ```Welcome! Click here to get your flag!``` where the here is a link pointing to a new page.

Sadly, when we click the link, we don't get sent to a page that has the flag, we get redirected to a rickroll :rage:. Bad ctf smh.

Sadly, when we go to the link, we can't even view the source code because it automatically redirects us.

So another way to view the source code would to use curl.

Using the command ```curl https://mhsctf-bend.0xmmalik.repl.co/flag/```, We see that there is a flag.

Flag: ```flag{g3t_cur1ed}```

### web/Piece-It-Together

My friend dared me to find the secret password to their website, but their code is so messy! It's impossible to see what's what! Can you help me? mhsctf-pieceittogether.0xmmalik.repl.co (you may need to wait for the site to wake up)

### Solution
Taking a look at the soure code of the website, there isn't really anything readable and all looks encoded in some really weird thing.

But when taking a look with inspect at the source code, we see that some parts are still readable and we find a function called checkpwd().

The checkpwd() function contained a still "unreadable" code but, this time it was more obvious as to what this was.

Deobfuscating this code using a website like http://jsnice.org/, we get a better looking code.

```javascript
'use strict';
/** @type {!Array} */
var _0xa8fe = ["4w", "d}", "g{", "j", "}", "1g", "w0", "r", "al", "s", "h7", "ag{", "fl", "m3t", "value", "pwd", "getElementById", "Yep, that's the flag!", "Sorry, that's not the flag!"];
/**
 * @return {undefined}
 */
function checkpwd() {
  if (document[_0xa8fe[16]](_0xa8fe[15])[_0xa8fe[14]] == _0xa8fe[12] + _0xa8fe[11] + _0xa8fe[3] + _0xa8fe[5] + _0xa8fe[9] + _0xa8fe[0] + _0xa8fe[4]) {
    alert(_0xa8fe[17]);
  } else {
    alert(_0xa8fe[18]);
  }
}
;
```

Now getting the flag was pretty obvious as we could just follow what indexes were added up from the list to make up the flag. We get the flag!

Flag: ```flag{j1gs4w}```

### web/Cuppa-Joe

A new coffee shop is opening up in my neihborhood! It's called Cuppa Joe and I can't wait to check it out! It would ahem be a real shame if someone were to ahem hack their website and, hypothetically, get their secret flag. mhsctf-cuppajoe.0xmmalik.repl.co (you may need to wait for the site to wake up)

### Solution
Taking a look at the website we see that there are three pages in the entire site of "index.php", "flag.php", and "message.php".

Now at first thought we think this challenge might be to do some command injection in the message box they gave us to get to flag.php, but realizing that we aren't able to click the flag.php link as it redirects to nowhere, there is a better idea.

We know that pressing the "Submit" button makes a POST request to the message.php file but what happens if we change the link from message.php to flag.php in the source code.

After changing the message.php link to flag.php in the source code, we see that after pressing the "Submit" button, we are redirected to the flag page.

We get the flag!

Flag: ```flag{c0ff33_be4nz}```

### web/Erlenmeyer-Biscuits

You remember that coffee shop that just opened up, Cuppa Joe? Well there's now a competitor shop that's opening up across from them! It's called Erlenmeyer Biscuits, and here is their website. I really don't want Cuppa Joe to go out of business, so do you think you could dig up some dirt on Erlenmeyer Biscuits to stop them from opening? mhsctf-erlenmeyer-biscuits.0xmmalik.repl.co (you may need to wait for the site to wake up)

### Solution
Reading the title of the challenge, I realized that Erlenmeyer meant "Erlenmeyer Flask" and Buscuits was talking about "cookies" so checking the cookies in the page and decoding the flask session cookie from base64, we get the flag.

Flag: ```flag{fl45k_s35510n_c00k13s_4r3_1n53cure}```

### Takeaways

- I learned how to do git forensics challenges.
- I learned that there is a type of octal that has J's in it???
- Check the source code with developer tools instead of Ctrl + U sometimes because it might have better information
