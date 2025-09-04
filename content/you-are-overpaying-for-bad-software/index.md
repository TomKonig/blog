+++
title = "You are probably overpaying for bad software"
description = "There are a million supposed vibecoding apps out there to choose from and compare. From the Lovables to the JetBrains. But are they any good? Can they even be compared?"

date = "2025-09-04T20:33:00+01:00"
author = "Thomas Kønig"

categories = ['AI', 'Technology']
tags = ['Vibecoding', 'No-Code', 'Agentic Coding', 'IDEs']

draft = false

featured = true
recommended = true
+++

#### You're being milked, and it is only partially your own fault. Every "AI coding " app under the sun seems intent on making it as opaque and utterly confusing as possible to find out exactly what you're paying, and what you're even paying for. Worse still, the most expensive services seem to also be the worst, the least secure, and the ones with the most predatory lock-ins. But at least they have ✨aesthetics✨, I guess. 
\<!--more--\>

*(**PS**: This post was written in a single session targeting vibecoding newbies with little to no code experience on a subreddit dedicated to vibecoding. Experienced developers will probably find no new information here. You're welcome to read anyway, of course.

***PPPPS (Post-writing)**: This got a lot longer than I anticipated it would. I hope it's helpful to the three people who will actually read it end to end. There's a takeaways/TL;DR in the bottom, which you can skip to to decide if the rest of it is worth reading, or so you can pretend you've read it all, whatever works for you. If you ask your AI chrome extension to summarize this for you, I will secretly hate you for turning one of the last remaining actually knowledge-producing human-to-human communication methods on the internet, long-form post, into yet another 70% accurate generic keyword list.)*

## There are exactly four models worth talking about in agentic coding

Every other model is significantly inferior for coding tasks to those four. So we will not bother with addressing them. Considering one of the big four is free to use (*via OpenRouter, some training data sharing probably happening*), you should not bother with them either. Yes, sometimes you'll get frustrated with the top four. That speaks to a limitation of the field as a whole. Going to a shittier but different model will not help you. 

Those models are:
- ==GPT-5 by OpenAI== (*API only, Codex kind of acceptable, ChatGPT-5 a non-starter*)
- ==Claude Opus== (Sonnet sometimes used for writing, Opus for planning) by Anthropic (*API and Claude Code only, API\>Claude Code*)
- ==Gemini 2.5 Pro== (*Vertex/API, CLI or MCP only*)
- ==Qwen3-Coder-480B-A35B== (*This is the free one via OpenRouter. You could technically also self-host it for free but you'd need an insane machine*)

Every other model is worse. Any "AI-powered software," which is not in and of itself a model, is either software integrating one or more of those four models, or it is a wrapper built around them. No exceptions. That is all they are. 

That is fine, too, by the way. There's a reason GUIs exist in the Linux world too. People hate terminals, because terminals kind of suck sometimes. I'm not knocking productivity tools that convert ugly, raw formats into something workable. Just know that's what they are. 

That new video generation AI tool is not some AI breakthrough. It is ==Yet Another Veo3 Wrapper==, maybe with slightly different system instructions than the other 300 ==Yet Another Veo3 Wrappers==, maybe with different pricing, but the model remains unchanged. That is all they are.

With that said, there are a few different categories of wrappers and integrations, some making more sense than others. If you want to get into agentic coding, it is probably worthwhile to have at least a cursory understanding of their differences and which ones are worth paying attention to. So that's what we'll do here, walk through them category by category. 

For our purposes today, I'll categorize them as follows (*kind of ordered by **closest to source***):

### ==The IDE integrations==
These are simply IDEs integrating one or more AIs into the development environment most software engineers prefer to work within anyway. Other than the Terminal die-hards, almost everything gets written in an IDE these days. These very closely resemble terminals, just with some quality of life features on top, like file browsers, text formatting, syntax control, shortcuts, etc.

Working in an IDE usually requires at least a modicum of code knowledge. There is (*with a few hit-and-miss exceptions*) usually no "preview" button for you to see your app live without using some other tool to compile, build or host it first, so you have to be able to parse the code on at least a basic level if you want to do anything in an IDE, even with agentic AI at your disposal. 

The upside is that you are not locked to anything within this software. There are no secret system prompts you can't see, you are not restrained to opaque credit and billing systems, it's all very raw. And you can see **all of the code**. Back-end, front-end, file structure, you name it. Which means you can understand how your code works, if you care to. You also usually have ways to integrate any AI model you want and BYOK (*Bring Your Own [API] Key*) as an alternative to some native subscription offering the IDE sells.

Their subscription offer usually passes on the API access to the foundational models to you at a slight markup. Or a massive markup, if we're being real. **==GitHub Copilot==, the native AI integration in VScode, charges $10 a month for 300 "premium requests" and $40 for 1,500.** It currently supports `GPT-5`, `Sonnet-4.1`, and `GPT-4o` (for some insane reason). 

ChatGPT Plus, OpenAI's own subscription, conversely, offers from **25-ish and up to 160 per 5 hours** (*depending on whether you want to compare to `ChatGPT-5` requests or just `Codex CLI` requests*), which on the low end means **3,650 requests a month for $20**. That makes GitHub Copilot in VSCode 4-6 times more expensive than using the native `Codex CLI`. On the upside, you're getting a lot of quality of life improvements. You get easier file management, and you get a built-in solution which can access the in-environment terminal, file system, git, you name it. 

I'll level with you and say I pay $20 a month for ChatGPT Plus, but I **also** pay for Github Copilot even knowing I'm paying a significant markup, because I just really like working in an IDE where integrations and added functionality is "click to install" flow, not "brew install random-ass-package-from-random-ass-source" and staring at a terminal and raw text config files. I never use my ChatGPT Plus subscription for coding. Ever. I use Copilot.

(*Yes, I know there's technically a Codex MCP integration in VSCode made by OpenAI so you can use your Plus subscription inside VScode, but I have not tried it, so I do not know how it compares. Since it uses your subscription and not the API, I am **assuming** it has guardrails on it making it less effective than Copilot, but I don't know for sure, could be that GitHub themselves since that's also a subscription are also dumbing down their API responses.*)

If you're building anything intended to be used by other people, which has any kind of sensitive back-end (API keys, databases, authentication, admin controls, billing, you name it), this is the minimum complexity tool – if you take yourself and your responsibility to other people at all seriously – you should target feeling comfortable with and being capable enough to use. Because that means you have at least a rudimentary understanding of code and DevOps and are **trying** to take it seriously. As a bonus, because nothing in an IDE holds your hand, you are forced to gradually learn the things you do not know. You will actually improve as you go unless you try very hard not to. 

There are really only two tools worth mentioning in this category, because they more or less dominate the market: ==VS Code== (*or Visual Studio Code*) and ==IntelliJ IDEA== (*usually just referred to as JetBrains, though that is the company name*). Both of them support both a native AI solution and integrating whatever other model you want to via BYOK.

Other IDEs exist, but the good ones are usually built for niche use cases, such as Phpstorm (*coincidentally also a JetBrains product*), and let's face it, we are talking about vibecoding. Let's be real. So for our intents and purposes there are two.

### ==The IDE layer-2 solutions==: 
I remain skeptical of these, but I know developers who swear by them, so I will grant them the benefit of the doubt that for some people these are preferable to the base IDEs. Usually these solutions are built with the intention of being better or easier to use than the base IDE frameworks they're built on top of (*usually always VS Code*). They may have preset settings, pre-integrated MCPs, fine-tuned versions of the foundational models for certain use cases, guardrails on the AI to prevent or remediate its most common errors, etc.

I said above that you **must** target being comfortable in one of the base IDEs if you'd like to publish to other people and have a back-end. These are also totally acceptable. They work almost the same way, with the optimizations usually happening in menus and UI. Or in a wonky "debug"/"preview" button which you'll just have to accept almost never works if your application is the least bit complex, because there are just too many dependencies and particularities of each unique computer. They have one of those in VScode too, by the way. Nobody I know uses them.

(*On that topic, NEVER, whatever you do, style your applications within the preview windows, because whatever browser engine it is they run, it does **not** correspond – for many reasons, from viewport size to functionality – to how the product will look in an actual browser. Load your html files into an actual browser. Preferably on a localhost server or on some free hosting offer, because once you're working with back-ends, things will break if you just try to open the file within your file system.*)

Note that a downside of these integrations can often be that you have to work very hard to make the AI not use them, if you'd prefer different solutions. If your IDE comes with Supabase baked in, and you'd prefer to use Convex, you will many a time run into the wall of "no, I would not like you to deploy it to Supabase, please use the existing Convex integration". 

Here, there are three applications worth talking about, though one of them is currently experiencing a user exodus and a hard hit to their reputation:

==Cursor== (*well-established, YMMV*), ==Replit== (*Core only, but also RIP*), and ==Windsurf== (*up-and-comer, incredibly misleading, bordering on predatory pricing*). 

This is where it starts getting really expensive too, however. For the slight supposed bonus to functionality, you are being veritably gouged. For example, **Cursor gives you 500 requests per month for $20**. So you're paying a good 20% premium or so over GitHub Copilot. And Cursor is the most reasonable of the above three. They even often give you bonus credits "just cause." 

**Replit, on the other hand, also charge you $20 a month for 500 requests, but do not offer SotA (State of the Art) models.** Right now they are on parity with Cursor on offering `Sonnet-4`, but they only offer `GPT-4o`, not `GPT-5`. They do, however, if that's your jam, offer a bunch of auxiliary services like immediate deployment to a hosting instance, a built-in database solution (which kind of sucks compared to open source alternatives), etc.. 

They also lock you in completely, however. Exporting your Replit Database when you've been live for a few months and have important data you'd like to keep, because you'd like to migrate, is not outright impossible, but you're going to have a very bad time. That is by design. They hope the effort won't be worth it to you.

**Windsurf is out here just robbing you in broad daylight.** At first glance they seem cheaper than Cursor and Replit, offering 500 credits for just $15 a month, but that is only until you open their documentation and realize that both `GPT-5` and `Sonnet-4` require **two credits per request**. **So in actuality, you're paying $15 for 250 requests a month**. That's $5 more than Github Copilot for 50 fewer requests. (Windsurf **does** support BYOK for Claude, however, so you do have that option)

### ==The web-app GUIs== (the No-Code builders):
##### (*Speaking of, no-code builder is a really bad term because it was already in use by software which decidedly does not integrate AI but simply uses blocks and similar visual representations of functions such as Google AppSheets, but whatever*)

(*You completely forgot we were still doing a list of software categories, didn't you? Sorry for the verbosity, I want to make sure this is actually informative to those who want more than surface level information.*)

==This is where you start getting scammed==, producing really shitty and insecure code, learning absolutely nothing, but getting to experience the euphoria of shipping fast because you can see the app **right there.** 

{{\< status\_card TITLE="NOTE" TYPE="info" \>}}
Up-front, I am going to say there is a **single** exception in this category (*two if you count v0 in this category, I suppose*), based on my own personal experience, and I am sure some people will yell at me for my heresy. That is Chef by Convex (*I promise you this is not an ad, I am a regular paying customer and not about to give you a referral link, I have nothing to gain*). 

First of all, it supports BYOK, so you're not necessarily locked into subscribing to their own agent. Secondly, Convex the company was initially built on providing really solid, reputable, widely regarded auth and reactive DB solutions. They are not an AI-first company. The understand developers first and foremost. And for an added bonus, they have baked Convex auth and DB into Chef, severely limiting how badly the agent can fuck up sensitive functions, because it is not jerry-rigging its own auth flow. 

Chef has a pretty reasonable pricing structure. **You can either PAYG** (*Pay As You Go*) **on the free tier with 85,000 monthly free credits** (*these are not the same as the 500 credits from the IDEs above, these are measured in actual tokens in/out not in requests, which has its up- and down-sides – if you don't mind your token consumption it can get a LOT more expensive than a subscription*) **and beyond the 85,000 free credits a flat $11 per 1,000,000 credits**, or you can **subscribe to the broader Convex Pro subscription** (*useful if you are not self-hosting*) **for $25/mo to get 500,000 credits and a cost of $10 per additional 1,000,000 credits**. This is still massively expensive compared to using the IDEs, but if you **really** for whatever reason just cannot live without a live preview pane when vibecoding, this is probably your most secure and somewhat cost-effective bet. 

That's enough shilling. Beyond Chef it's all downhill. 
{{\< /status\_card \>}}

What the GUI web-app no-code app builder effectively is, is a horrible wrapper built onto a wrapper built onto a foundational model. It is white-labeling and up-charging through opaque practices taken to its extreme. There's no better example than the supposed "unicorn" company ==Lovable==. It is in fact not very lovable at all. Here you're paying **$25 for just 100 requests per month** with an additional 5 daily credits per day which will not roll over and must be used on that day, meaning **at most** you are getting 250 credits per month even if you follow their gamification loop. **That is 2,5x the price of Github Copilot for 50 fewer requests.** Take a few days off and those numbers look even worse.

And to make matters worse, the Lovable AI has a ton of opaque system instructions you cannot access, evidently set to reduce its token consumption for the company, meaning you are getting an inferior, dumber version of the model for two and a half times the price. **And** you are in all likelihood getting an older model to begin with. Lovable does not disclose exactly what models it uses and when, but six months ago, just two months before `Sonnet-4` came out, and 6 months after `Sonnet-3.7`'s release, Lovable announced that now, finally, all users were on `Sonnet-3.7`. They have not said anything else since, so it's fair to assume that is probably still the case.

That means you are: 
- **Paying 2,5x as much ...**
- **… for an older, inferior model ...**
- **... being dumbed down further by the company.**

And all you're getting is what? A preview button? The privilege of not having to ever look at code and therefore 1) not learning anything, 2) having no clue how your software actually works, 3) having no way to catch errors and vulnerabilities, 4) having no external MCP or tool integration? It's snake oil.

And they are **all** at least this bad. Many of them are even worse. 

==Bubble==, for example, charges you out the ass on a PROJECT level, meaning you'll have to pay two separate subscriptions to run two separate apps, **and** they try their darnedest to make exporting your code nigh impossible, so you are stuck with them. 

==Bolt== to my knowledge, **charges you an equal subscription price to their competitors, but uses `Claude 3.5 Sonnet`**. A two generations older, more than a year old model. 

==Glide== must be marketed exclusively at Saudi sheikhs with more money than sense, because they **start at $20 a month for a plan so absolutely underwhelming it is usually what their competitors have for a free tier.** 

Finally, ==Base44== is so disastrously bad, it makes all the previous examples look good. You're charged ridiculous prices, you're not allowed to export your code, the models perform terribly, they don't tell you which models they use (*last we heard it was `Sonnet-3.5` and `Gemini-2.5`, no GPT*) or how they switch between them. **They won't even let you use a custom domain until you're paying a minimum of $40 a month – domain not included**.

If you are using any of the above, stop. Right now. Do not pass go. Do not collect a massive lawsuit for criminal negligence when your shitty Lovable app gets broken into via an exposed API key and now you caused millions of dollars of damages for your B2B customers because they got hit by ransomware.

Yes, it feels easy and the instant feedback is a rush. Yes it is really cool that they can mock up semi-working MVPs right there on the page. Yes, it **feels** like they're being really clever. They are not. They are dumbed down to the power of three, wrapped around another wrapper which in turn is wrapped around a foundational model, and at every layer of that spring roll, there are opaque restrictions, guardrails, cost considerations, whatnot being put in place to make sure that you, the user, get as little bang for your buck as they can get away with. Because you do not become a unicorn company by not milking your customers for either data or money, and at least Lovable is not sharing your data for model training ... **if you pay them at least $50 a month, that is.**

## To wrap up a far too long post
Thanks for sticking with it by the way. If you're a newbie, I hope you learned at least a little bit. If you're a progressively angrier developer, worry not, it will be over in a second and then you can go yell at me.

==You are almost certainly overpaying for an inferior product.== And you need to consider if the tradeoffs are worth it to you. To me, **GitHub Copilot** is worth being up-charged compared to Codex. And it is largely a necessary up-charge, because OpenAI is actively losing money on most subscribers, but because it's their model they can do that, and GitHub can't, they need to actually make some revenue because they in turn have to pay OpenAI.

Hell, I'll even occasionally mock up some simple app idea in Chef, especially if it's just for myself or a way to visualize an idea I have before I go into planning mode. But I only do this because I happen to have a Convex Pro subscription to use their other services anyway. I would probably not pay the subscription cost if it was just to use Chef alone.

I would sooner die than be ripped off by Lovable and their peers, only to get insecure, boilerplate, dumbed down, opaque, locked in and environment specific code I could then get massively overcharged for having deployed on their servers, just because *the aesthetics of a preview are nice* or whatever.

If you cannot stand to look at code, and you are so stubborn as to be completely unwilling to learn, to challenge yourself, to try and know just a little bit about the products you are trying to sell, you have no business being in a development vertical. 

You just do not. You do not have to know software engineer level code. You do not need to be able to code yourself. Hell, I use agentic coding because it's been ten years since I did full-time development, and my coding muscle memory is bust while best practices, frameworks and syntaxes have also changed significantly since then. 

I understand most of it conceptually and can read code perfectly fine, but I waste ungodly amounts of time trying to remember commands, language-specific peculiarities, syntax, dependencies, the works. So I offload that to the AI. And then I carefully review its output. And what I don't understand I ask it about, and then I run a quick keyword search on Google to verify that what it told me is at least mostly true. And in the beginning it took a long time, because I was rusty and had a lot of questions. Over time, I feel the "riding a bike" effect, slowly getting back into the domain knowledge, refreshing concepts, relearning syntax, having to ask fewer and fewer questions and catching more and more errors early on.

It will take you a very short time to get to a place where you can read code well enough to work in an IDE instead of a GUI. From there, it will take a long road to mastery, but that is fine. You're already ahead of the curve by then, and you are learning as you go. As it should be. And once you are in the IDE environment, you can integrate **so many third party tools to fill the gaps the AI cannot, like doing actually useful, legitimate code and security reviews on your codebase**. Tools like **Snyk** are used every single day by traditional developers, because they are just that good, and within an IDE you can simply hook up the Snyk MCP and your agent can integrate it, work with it, run analysis, receive feedback. And you can **force** the AI to keep iterating and iterating and iterating until that "CRITICAL" flag goes away. **And** Snyk will provide you with a handy, human-written short-form writeup on why your vulnerability is a vulnerability, how it could be leveraged against you, show you open source repositories where the vulnerability has previously been detected, show you multiple ways of how people solved it and why their solutions worked. 

**It will actually begin teaching you AppSec**. No more blindly trusting the black box to "pls make my code non-hackable pls pls". Which results in you **producing better software**, which **you actually understand** (*at least somewhat*), and **makes you a better developer, code or not, over time**. 

## The takeaways/TL;DR:

- There are exactly four models worth your time. `GPT-5`, `Claude-4.1`, `Gemini-2.5` and `Qwen3-Coder`. Everything else is a layer built onto those four. If a SaaS proposes to have a better model, they are lying to you. If they purport to generate creatives like image or video, they're using `Veo3` by Google or `Sora` by OpenAI (*or an inferior model*) (*Anthropic does not have a corresponding video-gen AI for Claude*). It's probably cheaper for you to just use the base models then. Unless they're using an inferior model, but then why bother giving them money?

- You (*almost*) always pay a markup if you use AI within an IDE, but the benefit is that you'll get access to the API-versions of the foundational models, which are often far more performant as well as all of the quality of life benefits of ditching the terminal for an editor with file browsing and language-aware formatting.

- Anything simpler than an IDE for agentic coding should be assumed to be insecure, dumbed down, wasteful, and massively overpriced. ==The assumption of insecurity must be maintained unless it can be proven that it is not== by, for example, giving you access to the full codebase and you having an actually valid way to evaluate it. Because ==all AI models, even the SotA ones, produce insecure code by default.== No matter how you prompt them ahead of time, they **will** create vulnerabilities. **Every time**. No exceptions. They are just not capable enough yet to not do so. That is why an IDE is a great option, because you have full access to the code, **and**, if security is not your forte, a host of third-party integrations such as Snyk, which can massively reduce your risk by implementing real, human-reviewed-and-approved best practices where the AI fails.

- You do not need to be an expert coder to be somewhat responsible even if deploying apps for users and customers. But you need to have a baseline knowledge which is not that difficult to acquire, and you need to think hard and not rush shipping, and you need to be willing to learn and improve as you go, accepting that you will be slow at first, taking your time to understand a lot of concepts, and over time become faster, more efficient, and more confident.

- If you do not wish to learn code, the option is not going to Lovable. The option is one of the following two: 
	- A) Resign yourself to only ever building apps and prototypes for yourself, which you by no means distribute to other people unless they contain no back-end **at all**, no logins, no databases, no billing, **nothing**. 
	- Or B) do something else, because you are neither responsible nor mature enough to build a product, much less a business. If you refuse to do either, and you build a deeply insecure product on Lovable and sell it to unsuspecting customers, I sincerely hope you will encounter option C) be bankrupted by a well-deserved class action lawsuit for your criminal negligence when the laziest fourteen year old hacker imaginable uploads a malicious file to your server and manages to deploy ransomware onto all your customers' machines. Were it up to me, you'd spend some time in prison too, because you are a fraud on par with faking your pilot certification and bringing people onto a passenger airplane. You are gambling with others' lives, data and assets for a quick buck. Fuck you.

{{\< about AUTHOR="Thomas Kønig" AVATAR="avatar.png" \>}}

Hi. Thanks for sticking with me to the end of this blog post. It got a lot longer than I intended. Sorry about that. I hope you learned something.

To give you a short introduction to me, if you don’t happen to know me personally:
 
I suppose I am a lot of things. A journalist, an AI developer, a slightly eccentric tinkerer.
 
In my spare time, I’m just "dad.”

You’re welcome to get in touch if you’d like. You can find most of my socials and my e-mail and even a phone number[here](https://links.tomkonig.com "here").
 
{{\< /about \>}}

{{\< recent TITLE="other posts you may enjoy" LIMIT="3" \>}} 