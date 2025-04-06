---
weight: 1
title: "WRECKCTF 2022"
date: 2022-09-30
lastmod: 2021-10-02
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the challenges in WRECKCTF 2022"

tags: ["rev"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/1775](https://ctftime.org/event/1775)
- Sep 30 to Oct 02
- Played with wackers
- Ranking: 74/524 with 3275 points

# My Solves/Writeups

## Rev

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| rev/flag-checker | easy | 235 | [jump](#revflag-checker) |
| rev/advanced-flag-checker | easy | 343 | [jump](#revadvanced-flag-checker) |
| rev/reverser | easy | 374 | [jump](#revreverser) |

## Writeups

### rev/flag-checker

I implemented this simple flag checker—can you decompile it and get the right flag?

Attachments: [chal](https://wreckctf.com/uploads/306b6533129a06b81530c043da7bea6125979565776123cf7dcecb31afad1a0f/chal)

### Solution

Open in ida and follow the ida variable indexes in order and get the flag

![image](https://user-images.githubusercontent.com/46347858/194734590-c374ab9e-18e3-4f3f-aacb-39b2e6bd03ef.png)

```Flag: flag{gdb_1s_y0ur_b35t_fr13nd_6d94620fa6}```

### rev/advanced-flag-checker

Okay, maybe the last one was a little too easy. This time I've added some secret encryption techniques so that you can't find out my flag!

Attachments: [chal](https://wreckctf.com/uploads/306b6533129a06b81530c043da7bea6125979565776123cf7dcecb31afad1a0f/chal)

### Solution

Looking at the code through dogbolt's binary ninja decompiler, we can see that it is xoring different hex values together

![image](https://user-images.githubusercontent.com/46347858/194734627-29913bff-20cd-43e7-ba02-ed7eb9e0844c.png)

Xor is directly reversible by performing xor again, so xor each value back together to probably get the hex of the flag

I did this using a small python script
```py
ct = [0x6239a8ba, 0x17f64e0, 0xa14442bb, 0x415c0789, 0xf6e1eb2b, 0xde2c6878, 0x669d2f08, 0xc8d2ae51, 0x6c12677f, 0x3c3cfba3]
bruh = [0x558C4DC, 0x71100C9B, 0xCE3D1DDE, 0x322958FC, 0x8CBE8F4E, 0xB14A374B, 0xEE9707A, 0xF98DDD38, 0x5D715F4D, 0x410B9F90]

flag = ""

for i in range(len(ct)):
    flag += hex(ct[i] ^ bruh[i])

print(flag)
```
The result looks like weird backward hex so it might be something to do with endianess

Plug the resulting hex into cyberchef, swap endianess, and go from hex

![image](https://user-images.githubusercontent.com/46347858/194734686-5fa4616a-6a88-43e9-97ae-b6371a23681a.png)

```Flag: flag{hope_you_used_z3_for_this_128c13d7}```

### rev/reverser

reverse your strings, free of charge!

```
nc challs.wreckctf.com 31706
```

Attachments: [program.py](https://wreckctf.com/uploads/cae6302ebfb0c136da02abd232f1b08f0556fbb2344f72eee1963269dbfe3a51/program.py)

### Solution

I tried doing the chall the intended way at first by reversing target back to the license key, but that didn't go so well so I moved to bruteforcing.

Remaking the check_license function to instead just return the value instead of returning if the value is equal to the target we can bruteforce character by character until the target is met.

```py
def check_license(license):
    s = [9]
    for c in license:
        s.append((s[-1] + int(c, 16)) % 16)
    return ''.join(f'{c:x}' for c in s[1:])

bruh = '0123456789abcdef'
target = '51c49a1a00647b037f5f3d5c878eb656'
license = ""

for x in range(len(target)):
    for char in bruh:
        ihatethis = check_license(license + char)
        if ihatethis[x] == target[x]:
            license += char
            break

print(license)
```

License key: ccb85179606e3453486a4a87cf16dbf1

put the license key into the nc server with and input after and you will get the flag!

![image](https://user-images.githubusercontent.com/46347858/194734761-48bf4946-4108-4c04-9fcd-b24492ca8ba2.png)

```Flag: flag{clock_math_too_hard}```
