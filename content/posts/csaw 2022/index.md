---
weight: 1
title: "csaw 2022"
date: 2022-09-09
lastmod: 2022-09-11
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "Writeup for the challenges in csaw 2022"

tags: ["web"]
categories: ["Writeups"]

lightgallery: true

toc:
  enable: true
---


- [https://ctftime.org/event/1613](https://ctftime.org/event/1613)
- Sep 9 to Sep 11
- Played with wackers
- Ranking: 372/884 with 243 points

# My Solves/Writeups

## Web

| Challenge Name | Difficulty | Points | Writeup |
|---|---|---|---|
| web/World Wide Web | Easy | 54 | [jump](#webworld-wide-web) |

## Writeups

### web/world-wide-web

## Description
Isn't the Word Wide Web a fascinating place to be in? Words.. so many words.. all linked... NOTE: The flag doesn't have a wrapper. It needs to be wrapped with curly brackets and please put CTF in front of the curly brackets.

Attachments:
http://web.chal.csaw.io:5010

## Solution
Going to the website and clicking stuff brings us to a page full of "links".

![image](https://user-images.githubusercontent.com/46347858/189507075-8850a3df-0970-4184-8898-bca813ac7dab.png)

Inspecting the source code of this page we see that only one of these "links" is actually a real link. (This can be done through Ctrl + f for href)

![image](https://user-images.githubusercontent.com/46347858/189507177-708117d3-3edc-49da-8e57-d8c20ea2088e.png)

It seems that the flag would be at the end of this chain of links, but clicking these links manually is tiring.

Since we are lazy people we write programs to do these things for us!

```py
import requests
from bs4 import BeautifulSoup

def get_next_url(url):

    reqs = requests.get(url)
    soup = BeautifulSoup(reqs.text, 'html.parser')

    urls = []
    for link in soup.find_all('a'):
        if link.get('href') != None:
            urls.append(link.get('href'))

    if len(urls) < 1:
        return "flag page"
    else:
        return urls[0]

url = ""
base_url = 'http://web.chal.csaw.io:5010'
while True:

    print(url)
    url = get_next_url(base_url + url)
    if url == "flag page":
        print(f"Flag page: {base_url + url}")
        exit()
```

This script just uses python requests and beautifulsoup to grab the only valid link from the page and does the same thing to the grabbed page until there are no more valid pages. This is supposedly going to give us the flag page because the flag page should have no more links as hinted by the challenge description.

But when trying to run the script:
```
python3 world_wide_web_solve2.py

/stuff
/author
Flag page: http://web.chal.csaw.io:5010flag page
```
It ends in failure.

Only two links come up each time, the first link and what link is after.

It seems that when trying to request the third page, there is a filter or something else that we still need to do. We figure this out by navigating to the page manually and see the result Boooo! everytime.

![image](https://user-images.githubusercontent.com/46347858/189507439-afc7d2ea-882f-492c-8766-62a5695ad85c.png)

Taking a look around the other web properties that websites usually have, we come across a cookie "solChain" which has the value of each link that we pressed in a chain.

So now we need to update our script to grab the cookie from the page each time and return that cookie back to the page when making a request.

```py
import requests
from bs4 import BeautifulSoup

def get_next_url(url, cookies):

    reqs = requests.get(url, cookies=cookies)
    soup = BeautifulSoup(reqs.text, 'html.parser')

    urls = []
    for link in soup.find_all('a'):
        if link.get('href') != None:
            urls.append(link.get('href'))

    if urls != []:
        return [urls[0], reqs.cookies]
    else:
        return [url, reqs.cookies]

url = ""
base_url = 'http://web.chal.csaw.io:5010'
cookies = {'solChain': ''}
while True:

    print(url, cookies)
    sus = get_next_url((base_url + url), cookies)

    url, cookies = sus[0], sus[1]

    if "http://" in url:
        reqs = requests.get(url, cookies=cookies)
        print(f"I hate this: {reqs.content}")
        exit()
```

Now running this script, we can see that it is actually navigating to a lot more pages.

![image](https://user-images.githubusercontent.com/46347858/189507525-a8dc1c75-a2d0-4f3e-8d24-bff449043456.png)

In the end we get the "I hate this: Booooo!" message since the last request I'm making doesn't include the last cookie.
```Note that there is probably a way to do this. I just didn't know how during the ctf and didn't want to waste 10 more hours on it```

We can now navigate to the last page it found before the Booo! message on a web browser and change the cookie to add the page name.

We get the flag page!

![image](https://user-images.githubusercontent.com/46347858/189507599-24443134-52a7-4af6-a516-3b6539c5ab6b.png)

flag: ```CTF{w0rdS_4R3_4mAz1nG_r1ght}```
