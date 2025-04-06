---
weight: 1
title: "RITSEC CTF 2025"
date: 2025-03-21
lastmod: 2025-03-23
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the challenges in RITSEC CTF 2025"

tags: ["forensics", "web", "pwn", "jail"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/2673](https://ctftime.org/event/2673)
- March 21 - March 23

# My Solves/Writeups

## Forensics

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| forensics/banksman | medium | 471 | [jump](#forensicsbanksman) |

## Web

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| web/virtual-mayhem | easy | 419 | [jump](#webvirtual-mayhem) |
| web/upload-issues | medium | 483 | [jump](#webupload-issues) |

## Pwn

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| pwn/bit-burger | easy | 467 | [jump](#pwnbit-burger) |
| pwn/hashmatch | medium | 499 | [jump](#pwnhashmatch) |

## Jail

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| jail/shrimple | easy | 494 | [jump](#jailshrimple) |
| jail/seti | easy | 496 | [jump](#jailseti) |

## Writeups
### forensics/banksman

Our professor received a report from an unfamiliar student. With his experience, the professor realized that this report was abnormal. He immediately used this file for our research assignment. Let's analyze whether there is anything mysterious embedded in it!

(This challenge was written by MetaCTF. The flag format is MetaCTF{})

Attachments: [report.pdf](https://ctfd.ritsec.club/files/acce4da559bf8d367c25d85374095f15/report.pdf?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6MjB9.Z-B9wQ.i-1b83cuGvfTZ0ftqqbXRR87C0o)

### Solution



```Flag: DUCTF{C_is_n0t_s0_f0r31gn_f0r_incr3d1bl3_pwn3rs}```

### web/virtual-mayhem

This application uses a virtual machine to sandbox user templates and filters potentially harmful input. However, every lock has its key. Can you figure out how to escape the virtual machine and retrieve the flag?

host5.metaproblems.com:7585

(This challenge was written by MetaCTF. The flag format is MetaCTF{})

Attachments: [virtual_mayhem.zip](https://ctfd.ritsec.club/files/6e87b37374f323335aff8977a297bfab/virtual_mayhem.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6MjV9.Z-B-Jg.1W0IXuC7B-qiAa6I6WEV7CCAFJQ)

### Solution



### web/upload-issues

This site lets you look at cpio archives. If only we had an admin account, we could look at the flag...

web-upload-issues.ctf.ritsec.club

(This challenge was written by ICR.)

Attachments: [upload_issues.zip](https://ctfd.ritsec.club/files/84e7abaa156f638e60e0e780fc15cb30/upload_issues.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NDB9.Z-B-1Q.6UTm9Z0hKBpLO7HF5X-MG3WDAqI)

### Solution


Flag: ```abuse@telstra.net```

### pwn/bit-burger

Welcome to BitBurger, home of the world-famous Bit Burger! 🍔

Put in an order here: nc binex-bitburger.ctf.ritsec.club 32200

Only grilled or fried at the moment though, the other machines are broken, sorry!

(This challenge was written by MetaCTF.)

Attachments: [bit_burger.zip](https://ctfd.ritsec.club/files/0c89e0a38527c92bf27972fd41422f6b/bit_burger.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6MzB9.Z-B_Iw.X1IvBkP67LkqSFi2Vpo4WfpO1Jk)

### Solution


```Flag: pTCNp5p6LP0d7qA77yvb4SHf40```

### pwn/hashmatch

This server is asking me to reverse a hash for a flag, but brute forcing MD5 sounds tedious. Maybe there's something more... fun we can do to find the flag.

nc hashmatch.ctf.ritsec.club 30898

When you connect, type your input and it will be handled by the challenge.

(This challenge was written by ICR.)

Attachments: [hashmatch.zip](https://ctfd.ritsec.club/files/67524143b8aa8bae3bfbaff845e09347/hashmatch.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NTJ9.Z-B_XA.zBZo6IPQg71dIx3iQ-ZWwHN-SZU)

### Solution


```Flag: nuclei```

### jail/shrimple

As shrimple as that :p

nc shrimple.ctf.ritsec.club 32195

Attachments: [shrimple.py](https://ctfd.ritsec.club/files/1dca913b2e6e8ffc19dfc1fd1164dfc6/shrimple.py?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NDZ9.Z-B_gA.q6QKBzoDeEEQIopttb2b_ymfifU)

### Solution


```Flag: ozzieozzieozzie```

### jail/seti

Come join our search for alien life

nc seti.ctf.ritsec.club 31793

Attachments: [seti.zip](https://ctfd.ritsec.club/files/fa22e106dfa5538a985b2fb282edc4a0/seti.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NDV9.Z-B_xA.dZ9pU6kxOysjF--ANSYzv8NGKd0)

### Solution


``
