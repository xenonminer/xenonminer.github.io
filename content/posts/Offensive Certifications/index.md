---
weight: 1
title: "Offensive Certifications Part 1"
date: 2025-01-27
lastmod: 2025-01-29
draft: false
author: "Xenonminer"
authorLink: "https://xenonminer.github.io"
description: "My experience with 3 different Offensive Security Certifications"

tags: ["HackTheBox", "Zero-Point Security", "Offensive Security"]
categories: ["Posts"]

lightgallery: true

toc:
  enable: true
---


# Introduction
In the past 6 months, I have been working on and achieved 3 certifications related to offensive security. The 3 certifications are Certified Penetration Testing Specialist (CPTS), Certified Bug Bounty Hunter (CBBH), and Certified Red Team Operator (CRTO) from HackTheBox and Zero-Point Security. This blog post will be detailing my experiences through these certifications and as a comparison between the certifications.

## CPTS

The Certified Penetration Testing Specialist (CPTS) certification was the first certification I achieved. The certification was a great introduction to pentesting Web Applications, Networks, Active Directory, and privilege escalation.

Several months prior to beginning to study for this certification, I was really hooked on the idea that the OSCP certification from OffSec was the "best" and most highly-recognized certification. However, as I have been told by many people in the HackTheBox community and my friends I have networked with, the OSCP certification was too expensive to be worth, and it would be better to get it compensated for while I work. Another reason was because I have been working on HackTheBox related materials for a while now (Machines, CTFs, Pro Labs), and comparing to the OffSec materials of the same kind, the HackTheBox ones seemed to be much more insightful rather than just simple information I needed to memorize.
On that note, the experience and the security-related events shared by the authors of the certification and HackTheBox Academy made CPTS stand out much more to me and made me start learning it.

The process of studying for this certification took me ~3-4 months as I had other obligations like school and clubs alongside it. From my perspective, if someone were a total beginner and spent ~8-10 hours a day studying for the exam, ~3-4 months is definitely doable. For someone who already has prior security experience, especially in Offensive Security, putting in ~8-10 hours would take them ~1-2 months to study for the exam.
There are many modules such as Port Forwarding or Active Directory that include many topics and will take a much longer time to study than others, but pushing through the topics feels insanely rewarding.

For the exam itself, CPTS spans 10 days long, where the participant needed to exploit several machines in multiple networks to obtain flags, and write a commercial-grade report alongside to prove they have truly understood what it takes to become a pentester.
When I took the exam, the passing grade for the exam was 12/14 flags, but make sure to check the current information from HackTheBox when you are taking the exam.

For the pentesting part, it is wise to brush up skills, knowledge, and tools in categories like web application pentesting, network pentesting along with pivoting and lateral movement, Active Directory pentesting, and Privileged Escalation.
The exam will feel long, especially if you struggle to find one important piece that leads to all the others. However, it is important to persevere through the process as the exam isn't a simple one.

> [!TIP]
> One useful tip is to keep good notes during the pentest.
> This can be done with tools like Obsidian, CherryTree, Notion. (I personally used Obsidian)
> Also take many screenshots of command inputs, command outputs, scripts and everything else you think would be useful when writing the report.

For the report writing, using a software like Microsoft Word would work, but you would have to template everything and fill in the same information in multiple places yourself.
Instead, I and many others from HackTheBox recommend using [SysReptor](https://portal.sysreptor.com) as it provides good templates for all the HackTheBox and OffSec exams, and is just a nice reporting template to use.
For the actual report writing, I would recommend being concise with your wording, but trying to provide as much information as possible when showing scripts and commands.

> [!TIP]
> The last HackTheBox Academy section will go over reporting, but some important sections you might want to include for each vulnerability is the overview of the vulnerability (like name and cvss), how you exploited the vulnerability, the impact of the vulnerability, and how the company can remediate the vulnerability (in order from highest priority to least).
> Also, if you are almost out of time from doing the actual pentest, focus your reporting on the main vulnerabilities that you think would be most critical towards the company, then work your way to the smaller vulnerabilities, even reporting on something like application versions being shown.
> Remember, you are doing the entire pentest + report for the company, not for yourself.

After studying all the material for the exam, you may want some extra preparation. The HackTheBox Dante ProLab is a great test of abilities that is similar to the exam, along with some HackTheBox easy/medium machines you can find from [Ippsec's CPTS Prep list](https://www.youtube.com/playlist?list=PLidcsTyj9JXItWpbRtTg6aDEj10_F17x5).

What is really nice about CPTS and all the HackTheBox exams is that the with one voucher, you will get two attempts.
> [!TIP]
> I didn't take this opportunity as I was busy with school after, but I know some people took the second attempt to get the perfect score and to practice writing the perfect report.

## CBBH



## CRTO
