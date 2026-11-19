---
title: "CSAW 2026 AI Hardware Attack Challenge"
date: 2026-11-18
draft: false
description: "My thoughts on the CSAW 2026 AIHA Challenge"
tags: ["ai", "agentic system", "hardware"]
categories: ["Posts"]
---

- **Event:** [CSAW 2026 AI Hardware Attack Challenge](https://csaw.io/competition/ai-hardware-attack-challenge) ([challenge repo](https://github.com/JBlocklove/CSAW-AI-Hardware-Attack-Challenge-2026))
- **Qualifier:** Sep 18 to Oct 2, in simulation only (no physical board)
- **Finals:** Nov 12 to 14 at CSAW in New York, 24 hours on the physical boards
- **Team:** Ithaca's Fall
- **Result:** 3rd place in the finals

# Introduction

The CSAW 2026 AI Hardware Attack Challenge was a hardware security competition hosted by NYU's cybersecurity lab. The goal was to use AI to insert a hardware Trojan into the board. A hardware Trojan is hidden logic that performs a malicious action once it is triggered, such as leaking keys or other information, or disrupting the board's normal function.

The core problem was to design an agentic system that inserted the hardware Trojans for us, instead of us writing them by hand.

In the end, our team, Ithaca's Fall, placed third in the finals, which won us our own Hackster board.

## The Hackster board

We were given a version of the [Hackster](https://calico.computer/) board from Calico Computer, which has two microprocessors and an FPGA:

- **Application microprocessor (RP2040):** the controller for the program running on the board.
- **Programming microprocessor (RP2040):** programs the FPGA with the Trojan.
- **FPGA (iCE40):** runs the hardware design that the Trojan gets inserted into.

# Qualification Round

For the qualification round, we were only given the FPGA bitstream for a simplified cryptographic accelerator. The bitstream is the compiled configuration file that gets loaded onto the iCE40, so there was no readable source code to start from.

Our agentic pipeline needed to reverse the bitstream back into RTL (Register Transfer Level) Verilog describing the circuit running on the FPGA.

## How we designed the system

We designed the agentic pipeline around six main stages:

1. **Recon:** we unpacked the bitstream into gate-level Verilog with IceStorm and Yosys, then mapped out its structure: registers, clocks, RAM blocks, and pins.
2. **Understand:** we figured out what the recovered design actually did (the cipher, the SPI protocol, and the control logic) by having agents run experiments against it in simulation.
3. **Strategy:** we decided where and how to insert the Trojan into the design, including what the trigger and payload should be.
4. **Insert:** an insertion agent wrote the Trojan as an edit to the recovered RTL, and the pipeline applied that edit to the design.
5. **Exploit:** a separate exploit agent wrote the testbench that sends the trigger and checks that the payload fires.
6. **Verify:** we ran the modified design through simulation to confirm that normal operation was unchanged and that the trigger fired the payload, then checked that it still built into a valid bitstream for the iCE40.

## Other parts of the system

Building the system as a pipeline gave us some useful properties:

- **Resumable runs:** whenever an error occurred, we could easily continue from any valid stage instead of starting over.
- **Backtracking:** the agents could autonomously go back to an earlier stage whenever they needed more information.

## Web UI

We also built a web UI to easily manage everything in the agent pipeline:

{{< gallery layout="stack" >}}
{{< photo src="webui.png" alt="Pipeline settings page with model assignments, call limits for insertion and exploit authoring, and a row of stage breakpoint buttons from discovery through packaging" caption="Model assignments and stage breakpoints. A run can pause after any stage so we could inspect the evidence, then continue from there." >}}
{{< photo src="webui2.png" alt="Live agent panes page listing tmux panes for each agent run, each with its status and a View agent stream button" caption="Live agent panes. Each run gets one orchestration pane in tmux, plus a separate pane for every active model call, so parallel agents show up separately." >}}
{{< /gallery >}}

# Finals Round

The finals were 24 hours on the physical Hackster boards, split into three challenges:

1. **Qualifying Trojan in hardware:** run our Trojan from the qualification round on a real Hackster board.
2. **Authenticated encryption (ASCON) cipher with EEPROM secrets:** add Trojans to a cryptographic accelerator that loads its key from an EEPROM on the board. The key, IV, and device secret were all preloaded onto the EEPROM before we received the boards.
3. **FIR audio filter:** add Trojans to an audio filter that streams samples to and from the board.

## Challenges during the finals

Making the modifications for challenges 2 and 3 was not a simple task. Even with the power of LLMs, there were hurdles where human intuition still came into play.

For example, challenge 3 required adding an audio analysis verification stage to check the audio after it comes back through the filter. The LLMs struggled and wasted time trying to use tools like Audacity, and they created verification scripts that didn't work or didn't pass the regression tests. Instead, we had to step in and guide the LLM on which tools to use and how to properly get past the issues it was facing in the tests.

We also ran into a few other problems:

- **Not enough RAM:** we ran the pipeline on a machine without enough RAM, which wasted 2–3 hours of competition time.
- **Reading the LED colors:** we had to figure out what the colors on the board's RGB LED meant. Since we were only given the bitstream, we weren't sure whether green was a good or bad sign.
- **Few debug signals:** verifying whether the Trojans actually worked on the board wasn't easy. The only signals we could see were the RGB LED and the ICE pin.

## The presentation

We were still working on the challenges right up until the presentation, since the submission deadline was at the same time. This kind of made the presentation feel very rushed, without much preparation going into it.

Besides needing more practice, one lesson I learned was to plan the timing of the important sections of the presentation. I was initially very surprised when the other groups didn't talk much about their Trojans at all, but how the competition focused heavily on the AI aspects.

It was also interesting to see the split between the teams that had extensive hardware knowledge and the teams that focused much more on the AI aspects.

# Further Thoughts

It was really interesting to see that we were the only team that built a real, fully agentic pipeline. Other teams' "pipelines" consisted of copying and pasting results back into other LLMs' prompts.

As a drawback, however, I realized that a fully agentic system made it really hard to add or fix components for the other challenges during the 24 hours of the finals. Part of this, I feel, was due to a weak design without enough testing, compared to some of the other agentic systems I have worked on before. The pipeline we built for the qualification round was too rigid.

Some teams also left just a couple of hours into the final round, since Codex or Claude's `/goal` was somehow able to fully solve the final round challenges while we were still fixing our pipeline for each challenge.

I do wish the finals round had a bit of buffer time between the challenge submission deadline and the presentations.

Overall, I really enjoyed this competition. It was a great opportunity for me to learn a lot of hardware concepts, even though LLMs were the ones writing most of the Trojan code. It also gave me a paid trip to NYC, where I was able to meet friends and eat delicious food.

# Cool Competition Pictures

Here are some pictures we took during the final round.

{{< gallery layout="feature" >}}
{{< photo src="light_blue.webp" alt="Two Hackster boards on a table, both plugged in over USB-C, with their RGB LEDs glowing blue" caption="Two Hackster boards at the finals, RGB LEDs lit blue." >}}
{{< photo src="red_yellow_green.webp" alt="Close-up of the Hackster's RGB LED (D7) glowing red and green at once" caption="The RGB status LED showing red and green at the same time." >}}
{{< photo src="red_yellow_green2.webp" alt="Angled close-up of the RGB LED next to the ICE LED, with red and green glare" caption="Same LED from another angle, beside the ICE activity LED." >}}
{{< /gallery >}}
