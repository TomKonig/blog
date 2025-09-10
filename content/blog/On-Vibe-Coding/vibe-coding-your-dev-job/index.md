+++
title = "vibe coding probably is not coming for your dev job -- but the marketing department is screwed"
description = "agentic AI is unlikely to replace developers any time soon, but marketing departments might become a thing of the past"
date = "2025-08-15T15:02:55+02:00"
author = "Thomas Kønig"
categories = ['technology','AI']
tags = ['ai','web apps','replacing developers','vibe coding']
series = "On Vibe Coding"
parts = "0. Vibes and You"
weight = 2
draft = false
featured = true
recommended = true
+++

Alternatively, I could have titled this blog post “==how I tried to build an app with AI and really wish I hadn’t.==” I don't think I will ever work as a hands-on content marketer again. But at least I learned to code again; the one thing the arbiters of agentic coding AI promised me I wouldn't have to.
<!--more-->
## Disclaimer
I am currently establishing an entire startup on the back of agentic AI[^1] frameworks, using AI models both for the front- and back-end implementations, and as stand-ins for the team I cannot afford to hire in the actual DevOps-workflow. As I’ll get to later, that is only possible with a lot of handholding of the AI, and because I have enough software development experience to proofread the models’ work, but it is undeniable that I am working 25-30 times faster than I ever could on my own with this technology, and I barely have to touch any code myself. 
 
Hell, At this point I have built a self-optimizing workflow of agents reviewing and correcting one another, from development to maintenance to A/B testing to drafting (not yet publishing, but that would take a metaphorical flip of a switch) marketing material,  so I can walk away and check on it every rare now and then. Beyond that, that whole loop is largely autonomous. I am not a doomsayer. 
 
At the same time, I am deeply skeptical of AI. Both of the way global corporations are likely to embrace it as a means to reduce their reliance on the global workforce (to the detriment of all but the super-rich) and of the ways it is currently being packaged and sold by thousands of app developers, with new “apps” spawning seemingly every week, most of which seem to just be white-labeled chatbots collected directly from OpenAI’s API[^2] and sold at a 300x markup to consumers who don’t know any better.
 
For instance, a guy on Reddit recently released five different “AI” apps for identifying cats, identifying snakes, identifying plants, identifying trees … **on the same day**. All clearly just built around a reskinned API call directly to the cheapest possible model — or perhaps even a local open LLM[^3] or Google’s free tier, shamelessly sharing user data for training purposes — in a not-even-pretty packaging, monetized by exorbitant subscription fees hundreds of times more expensive than the few cents (if anything) he’s paying to the model providers. For something the users could do themselves on the free tier of ChatGPT. 

![A single developer’s App Library, showing the same app reskinned over and over again](vibe-coding-your-dev-job/5.jpeg "Seriously, at what point do you go *‘okay, time to come up with a new idea’*?")

The AI-implementation market is not great right now. Even otherwise reputable companies like Notion or, hell, your bank probably, seem to be releasing one white-labeled, barely passable “AI product” after the other, hoping to cash in on the zeitgeist or to replicate Lovable’s newly minted unicorn status. 
 
And with [RevenueCat’s recent 2025 State of Subscription Apps](https://www.revenuecat.com/state-of-subscription-apps-2025/) report making it clear just how profitable these AI-integrated apps can be, that torrent of enshittified[^4] apps is unlikely to end any time soon.
 
Nonetheless, AI is here now, and it isn’t going anywhere. The fad will end eventually, but only to make way for far more comprehensive and future-proof implementations. Eventually we all have to accept that. Which is a pretty recent development for me. And which is what this blog post is about. So let’s go back in time a little.
_____
## Introduction
I have been vehemently anti-AI for a very long time, and for very good reason. Most times in history, when technological advancement has promised to release humanity from its laborious existence and revel in a new, truly free civilization, it sold us snake oil. 
 
The capitalists realized, as capitalists are prone to do, that spiking productivity does not mean the rest of us should work fewer hours; it simply means that we can produce more during the hours we spend, thus making said capitalists even richer. Now and then the unions or some popular uprising will earn some incremental progress for the working population, but by and large wealth inequality tends to be the prime beneficiary of any technological revolution.
 
Add to that the host of very real, very pressing issues with the practical training and implementation of LLMs and the IP rights issues concerning training data and output, and the picture looks far bleaker than tech founders would like you to think it is.
 
Nonetheless, I have spent far longer looking for a new marketing job than I should have, and far and away the most frequently asked question lobbed at me from across the table has been “*what do you know about AI?*”
 
Initially, I gracefully tiptoed around the question, suggesting there is still some intrinsic value in human creativity and analysis, but eventually my inevitable conclusion was “*fuck it.*” I have kids to feed, after all, so if I cannot beat them, I may as well join them.
 
So I sat down at my computer, brushed off the software developer hat I haven’t worn for more than a decade since realizing I liked communications more than code, and I opened two tabs —- one for ChatGPT, and one for Google’s competing model, Gemini. And things got really crazy really quickly.
 
## The rumors of the incredible capabilities of AI are not exaggerated
Let’s start with the positive outlook, and I’ll get around to why I don’t think AI is going to replace any developers any time soon. I began in the shallow end of the pool, as I think most people getting into AI do.
 
I asked ChatGPT to brush up my resume. It did. And it did so pretty well, too. I still had to fix some strange turns of phrase or weird stylistic decisions here and there, but for the most part it output an impressive document —- an eerily human one —- and even proactively suggested it might generate it as a downloadable PDF if I was happy with the layout. I said “*yes*,” and it readily converted the HTML/CSS-markup it initially mocked up the resume in to a polished file fit for any hiring manager’s inbox anywhere.
 
Half amazed, half petrified, I went and signed up for the $20 monthly subscriptions for both ChatGPT and Gemini and decided to try and push these things to their absolute limits.
 
> “Before I knew it, I had a working, well-structured .apk ready to compile and upload to the Play Store. All in the span of probably two hours.”

Being still unfamiliar with the more technical aspects of using an AI chatbot such as prompt engineering, context windows[^5], and tool use, I went straight to Gemini and set up a pitifully basic Gem.[^6] I provided a system prompt suggesting it was now a full-stack digital product designer, and asked it to suggest —- and mock up —- an idea for a simple app, which could be sold to a high-paying niche interest market with a buy-once model. Immediately it came back with suggestions which, dare I say, seemed pretty viable.
 
One idea, which immediately caught my attention, was that of a beautifully designed coffee-brewing app for the aspiring James Hoffmanns of the world, complete with built in standard brewing recipes for every combination of bean roast and popular brewing device you could imagine. 
 
The user could then fully customize these recipes to their liking, or go incrementally day-by-day, rating their daily brews, in response to which the app would suggest minor tweaks accordingly, letting the user dial in on the exact recipe fit for them. Coffee a little bitter? “*Let’s try a slightly shorter brew time tomorrow,*” the app would suggest and update its timer the next day automatically. 

![This was the one-shot ideation Gemini came up with on a horrible prompt.](vibe-coding-your-dev-job/1.jpeg "Just … just like that.")

Okay, pretty cool suggestion, I figured, but I have not written a line of code outside of a little HTML markup in ten+ years, so this would remain in ideation. Maybe AI is simply a great tool for planning, but it is still on the user to execute, after all. Or so I thought, ==until Gemini asked whether I’d like it to begin development for me==. 
 
Excuse me, what?
 
## That’s when it started getting scary
I said “*sure,*” and immediately it did. And not just a wireframe of the front-end either, ==it built the entire thing==, complete with endpoints I could just plug in to whatever Postgres database of my choice and it was good to go. 
 
Hell, it even went and fetched standardized brewing recipes for all sorts of coffee setups. V60s, French presses, espresso machines; light-roasted Guatemalan beans, light-roasted Java beans, dark-roasted Peruvian beans, it came up with recipes for probably a couple hundred possible combinations of gear and powder. And - being a bit of a coffee nerd myself - the recipes seemed … **good**.
 
For my part, the most work I had to do was correct a color decision here, a typography there, ask it to move a certain button somewhere else, or tell it to “continue,” when it ran into its max permissible output in a single run. Before I knew it, I had a working, well-structured .apk ready to compile and upload to the Play Store (I didn’t, FYI, but it’s still on my computer somewhere). It even provided me a step-by-step guide for compiling the code, registering for Expo, and passing Google’s reviews. All in the span of probably two hours.

![A screenshot of the folder containing all the components of the .apk on my computer](vibe-coding-your-dev-job/4.jpeg "It even organized the individual files for me, so all I had to do was compile and run.")

I just about lost my marbles then. But this was still just a small, mostly streamlined app. All its functionality could be hardcoded ahead of time, and it required very little complex logic. Technically it didn’t even need the database integration, it could simply store the data (the user’s modifications and custom recipes, say) in local storage and be truly self-contained. 
 
So I figured it was time to push it even farther. And then something really profound happened —- but things also began falling apart.
 
## How AI designed a truly remarkable solution
I went back to the drawing board. I did a **lot** of reading up on how AI technically structures and performs its work, what agentic AI is, what context windows mean, how retrieval-augmented generation (or RAG)(fbmn( works, what system prompts are, how to properly instruct these models, the works.
 
And then I tried again. I redesigned my Gem, I optimized my initial prompt, I provided context files, and I asked for a web app this time, thinking I still had enough experience in that domain to be able to properly evaluate the model’s output code. And then it came up with a new idea based on some pretty well-reasoned market research. An intelligent gift-selection quiz. You get asked a series of questions, and on the basis of that, you’re suggested a tailored gift for whomever it is you’re purchasing one for, based on their exact profile. 
 
This time, however, rather than simply asking Gemini to develop the app and moving on, I began qualifying the idea. 
 
- How would you monetize it? Well, you could rely on affiliate marketing. If your recommendations are good, people are likely to purchase the product you recommend, and the kickback from that could finance the API calls for all of those who didn’t make a purchase —- and then some.
- Then you’d have to be extremely cost-effective, because you’re the one paying the upfront cost and taking a gamble that the percentage of users making the purchase through you will be enough to earn your costs back. So you’d probably have to develop extremely sophisticated client-side logic to narrow down a potentially infinite product catalogue to a reasonable selection before you even hand over to the AI.
- Additionally, to make qualitative suggestions you’d need a way to allow for discovery of incredibly niche products and interests which won’t be drowned out in the noise of far more universally applicable products, because they often pay far better affiliate rates and have much higher turnover than general market products. If you can identify that one guy who’s **obsessed** with all things Hario V60, you’ve struck gold. And that requires you to not default to common gift ideas which may be safer but less lucrative bets.
- But how do you realistically do that? How do you ever map out such a massive tree of branching answers, that you can confidently identify people’s niche interests without corrupting the data for a completely different customer profile who happens to provide similar initial surface-level answers? 
	 
I went back to Gemini with my thoughts, and we began iterating step by step. Until eventually something crazy happened. I decided to summarize our entire back-and-forth and start three brand new conversations with three different models (using Perplexity to access all three), and asked them to each —- via the deep research capability —- to propose a detailed solution to this. I got three very different solutions, each with its own strengths and pitfalls. I then went to a fourth model, and asked it to review and rank each of the proposed solutions by feasibility, mathematical soundness, and cost-effectiveness.
 
I brought the fourth model’s review back to the initial three, asking them to incorporate the feedback and adjust their solutions accordingly. Then back to the fourth with the revised solutions. This cycle I repeated probably a half dozen times. When it eventually felt like no more iteration was being done, or the returns had too diminished, I went back to Gemini, the OG. And I asked it to review the final three solutions and synthesize from them an implementation which built upon the best aspects of each and avoided the worst drawbacks. What I got back was mind-blowing, to say the least.
 
### Algorithm on algorithms on algorithms on …
Suddenly I had a white-paper-worthy multi-page report (which was itself later divided into two multi-page reports, one theoretical and one operational) on how we were going to solve one of the most famous problems with personalization in e-commerce, the *Multi-Armed Bandit*-problem. Before I set out on this weird and winding path, I would not have known what that was if you asked me, now I could talk your ears off about it. Anyway, technicalities are for another blog post.
 
The interesting thing was this: In a span of a few days, limited mostly by my own brain capacity, four AI models in unison had just developed an incredibly sophisticated solution, not only to my initial problem of reducing dependence on API calls in the final implementation of my relatively benign quiz, but to a potential multi-billion dollar global market which was previously inaccessible  —- complete with mathematical proofs and implementation strategies you’d need a PhD to even begin to comprehend.
 
I say “*inaccessible*” because for humans to implement the solution those machines just came up with (although we have, on a theoretical level, understood this to be a solution for decades) would require so much over-engineering, maintenance, and live interaction with the customer it would simply not be feasible. But if AI can do it in a fraction of the time, and at a fraction of the cost? ==And in real time==? Uncapped potential. 
 
> “AI is not forward-thinking. It does not consider the long-term implications of the structure of its code. It considers only whether something works right now.”

So now we’re building it, my agentic AIs and I. And the journey is full of incredibly complicated algorithms and theories with terrifying names like *Thompson Sampling*, *TF-IDF Scoring*, and *384-dimensional semantic tag embeddings*. 
 
The good news is I have to understand very little of that beyond a surface level, because highly complicated algorithmic math is where AI excels. It is, after all, itself a product of those exact things. For the most part I can worry about building out the auxiliary capabilities like developing self-optimizing AI workflows to handle testing, SEO, maintenance, expanding the product catalogue, you name it. All, of course, spanning various AI models, some locally hosted, some foundational models from companies like OpenAI and Google, each fine-tuned to do a single task but to do it exceedingly well. 

![A table showing an earlier version of the self-optimizing agentic workflow.](vibe-coding-your-dev-job/2.jpeg "This is a slightly earlier iteration of the self-optimizing workflow, but Gemini even organized this neat table for me.")

The bad news is I’ve had to learn to code again, because there is one thing AI just does not do very well. This is where we get to the thing I claimed this whole blog post was about from the get-go. 
 
## Why I don’t think AI will replace developers any time soon 
If there is one thing I cannot seem to make these machines do very well, it’s code. Even working with models that absolutely demolish their competition in the SWE Bench[^7] ([which itself is mostly a marketing gimmick](https://www.runloop.ai/blog/swe-bench-deep-dive-unmasking-the-limitations-of-a-popular-benchmark), if we’re being honest), they are so incredibly bad at it once your code base has any sort of complexity or interdependency.
 
There are too many moving (and fragile parts) for any AI to fully grasp the mechanisms it is working with, and if the human element (i.e. me) does not understand the code or how and why it works the way it does, there is no remedy and it becomes a death spiral.
 
AI is not forward-thinking. It does not consider the long-term implications of the structure of its code. It considers only whether something works right now. Because it does not actually think, but simply acts as a very complex “next word generator,” it does not adapt new code to whatever exists already. And this process becomes incrementally worse the longer you let the AI go on for. The problems pile up and their effects become multiplicative of one another until the whole thing just bricks and there is no road to recovery if you, the user, are not already a better coder than the AI is.
 
As a really simple example, if anything breaks on your front-end —- in your CSS, let’s say —- and you ask AI to fix it, it will often times create a brand new (duplicate) CSS class in your stylesheet just to handle this one specific attribute of whatever element broke. And if it works, great. 
 
But then the next time something breaks, and you again ask AI to fix it, it attempts to, but now no fix seems to work. Because somewhere in your stylesheet there’s a duplicate class with attributes totally overruling whatever it is the AI is trying to do in the newly generated class, and ==it just cannot grasp that==.

![A custom Gemini Gem realizing it was, in fact, not right](vibe-coding-your-dev-job/6.jpeg "There is a **lot** of this. It had, in fact, not found the actual bug that time either. I ended up finding it myself.")

### There’s a lot of necessary human oversight in complex tasks
Countless times have I tried to take the easy way out and fix some benign problem via the AI (such as “*hey, this button doesn’t change colors in dark mode,*”) and the AI will return and answer like: “*uh, yeah it does, the code is right there,*” and it isn’t until I go into my web inspector and point out the **exact** attribute which is overruling whatever code the AI checked against that it goes “*oh, you’re totally right, there’s a bug right here.*”
 
Yeah, no shit. But the AI does not think. And it does not see with eyes, and it has no cognition of user experience or what a human naturally “expects.” If the code for dark mode is there, that must mean there is dark mode. If the DOM never actually changes colors for the user, the AI cannot know that, and even if it could, it could not interpret what that meant.
 
The only way AI is an efficient development tool is if there is an equally capable operator setting the guardrails, reviewing its work, revising its errors and bad syntax, and proactively detecting and pointing out (down to the line number) inconsistencies which are liable to break things later. 
 
If the operator does not know what is going on, the AI has no way to step back and review whether its code actually produces the intended end-user result. If the code is there, that must mean it’s working.
 
Most of the time now I end up just fixing the code myself. It’s faster that way, and it lets me catch out small errors before they snowball into critical problems. 
 
What began as a curiosity and turned into a full-blown startup ended up forcing me to do the one thing these vibe coding models were supposed to offer me freedom from: I have had to learn to code again, just to fix the things the AI keeps breaking. Other than that it has been great. Without AI at all I would have been 1/300th of where I am now in terms of progress. And I wouldn’t have even begun, because the mathematical implementation goes so far above my head I could’ve never grasped it. Luckily math is where the AI excels.

![A small excerpt from a very long PDF containing the mathematical framework for my application.](vibe-coding-your-dev-job/3.jpeg "I have probably 80 pages worth of PDF containing dense theory like this, which I feed back into the AI loop every time I iterate.")

I think vibe coding is amazing. But if any complexity at all is introduced, it is only as amazing as the operator is qualified to make it.
 
However, there’s one specific implementation where I realized very quickly that vibe coding is going to replace entire departments, and that I am about to become wholly redundant as a marketing guy.
 
## Why marketing departments should be crapping their pants —- or immediately learn front-end code
You know what has literally zero technical complexity? Landing pages. Social media management. Writing press releases. Editorials. Creatives.
 
> “Suddenly a marketing department of 30 people can be sliced down to one or two people keeping the agents in check.”

AI can do all of that, and with very little fine-tuning it can do it completely autonomously. One of the first things I managed to successfully build, requiring zero human oversight, was the marketing loop. 
 
#### It works like this:
- Model 1 (optimized for content ideation) reviews last week’s feedback from Model 7, the past 30 days of content catalogue, and generates 5-6 topic ideas for the week to come. 
- Model 2 (optimized for web search and sentiment analysis) researches each topic across the internet, recent news and social media and qualifies each of the original topics with a more specific and relevant content idea (if big news just happened in the iPhone world, our content should be relevant to that, not generic iPhone blog spam)
- Model 3 (our creative writer) converts each of those ideas into a full-fledged piece of content for a blog, complete with follow-along social media posts for each platform, form-fitted to the platform’s requirements
- Model 4 (the data analyst) reviews our analytics going back however long for all tags and keywords related to our freshly generated content, synthesizing it into highly specific and actionable inputs on keyword usage, considerations, what has performed well in the past and why, etc.
- Model 5 (the editor and publisher) reviews the fresh content piece-by-piece, cross-referencing it with the summarized data points, making whatever changes necessary to optimize the final product for SEO and CTR. It then sends out a request to Model 6 to have creatives generated before it schedules everything to go live throughout the week.
- Model 6 (the visual generator) generates the creatives, whether image or video, according to Model 5’s specifications, self-reviewing and iterating through 3-4 generations of assets for each creative, then inputs them into the scheduled content.
- Model 7 rapidly simulates a few hundred readers, of vastly different personality types, projecting how well each piece of content is likely to perform. It also checks its projection from last week with the real performance, and uses any misalignments to optimize its future projections. It then produces a comprehensive report containing a synthesis of feedback and actionable suggestions for next week to be passed to Model 1, which then starts the cycle all over again.
	 
And there you go. ==What you’re left with is a fully autonomous social media department== —- which is self-optimizing and gets better at its job every single week —- at a fraction of the cost. Using state of the art models, the entire above cycle, all told, will cost less than $15 for the week. No social media manager is that cheap. 
 
### In conclusion
Initially the models will need a little hand-holding, but with the correct fine-tuning parameters, they will quickly be able to work fully independently. And things get even bleaker if we apply the same loops to less creative, less user-facing marketing functions like paid search, SEO, or performance metrics. Suddenly a marketing department of 30 people can be sliced down to one or two people keeping the agents in check.
 
**So to recap a very long story,** I think developers are safe for a while to come. Code is simply too fragile and too complicated (and requires far too large context windows) for AI to competently manage anything beyond landing pages or simple web applications. 
 
But if you’re in marketing, my single best piece of advice to you right now is ==learn to code, and learn it yesterday==, at least well enough that you can guide and manage agentic AI and review its output when it comes to —- for example —- landing pages, because in very short order that is about to become the only function left where you, the human, are not redundant. 
 
That’s my new answer in job interviews too, by the way: “*Yeah, I know how to work with AI. In fact, I know it well enough that if you give me a little time and a tiny budget, you won’t ever need someone like me for more than a couple hours a month again.”*
 
These days I do all sorts of crazy things with agentic AI outside of the application I’m building. I’ve managed to make it take completely autonomous control of my browser in the background, cross-referencing job postings with my resume, picking out the good fits, and staging e-mails (with tailored cover letters written in my style, attached PDFs and addressed to the exact right hiring managers) so all I have to do is press “send” on whichever of the daily list of jobs I’d like to apply for. 
 
I’ve deployed local open LLM models on my cloud-hosted server infrastructure (where I host my websites, web apps, analytics, everything I use online, basically), to run maintenance, updates, housekeeping, you name it.
 
I have a daily deep research agent running a scheduled cron task to 1) look for arbitrage opportunities across the digital second-hand market (this was just to see if I could, I have no interest in scalping the Facebook marketplace), and 2) keep me up to date on deals, discounts, trials across the software I use (or would like to use). I get those delivered to my email inbox at 9am and 10am respectively. 
 
The thing is, AI can do a lot of cool things. And then, inevitably, it will probably doom us all one day. But until then, I’ve given in, and I intend to make the most of it.
 
{{< about AUTHOR="Thomas Kønig" AVATAR="avatar.png" >}}

Hi. Thanks for sticking with me to the end of this blog post. It got a lot longer than I intended. To sum myself up. To give you a short introduction to me, if you don’t happen to know me personally:
 
I suppose I am a lot of things. A journalist, an AI developer, a slightly eccentric tinkerer.
 
In my spare time, I’m just "dad."

You’re welcome to get in touch if you’d like. You can find most of my socials and my e-mail and even a phone number[here](https://links.tomkonig.com "here").
 
{{< /about >}}

[^1]:	AI which have agency, i.e. is capable of independently acting upon other things in some way, such as posting to social media or even controlling your browser.

[^2]:	API calls are how apps engagement with AI models. They are basically hardcoded functions, which send some predetermined instruction (or variable in the case of user input being included) directly to the provider’s model. That model then processes the instruction and returns a response, which the app then uses for whatever purpose it is designed, such as outputting it in text for the user.

[^3]:	An open LLM is an open-source large language model. They are typically trained collaboratively and are free to use with their source code free to see (or download) for everyone. You can run these on your devices (even on phones through apps like Apollo) for free. They are, however, not yet quite as sophisticated as their proprietary counterparts.

[^4]:	"The enshittification of the internet," a term coined by Cory Doctorow, refers to the ways in which user-friendly, useful software (and most good things, really) inevitably becomes increasingly terrible as the balance shifts towards monetization from both software providers and - in the case of for example social media - an increasing saturation of middle-men trying to replicate early successes, until you have nothing but blog spam, ads, and user-experience ruining paywalls. 

[^5]:	A context window (very crudely), is the amount of information any given AI model can accurately “remember” at the same time. If a model has a context window of 32,000 tokens, and you feed it 40,000 tokens worth of context, 8,000 tokens worth of context will be “forgotten” in any given process. The model may have ways to search through and determine which 32,000 tokens to remember to best suit a given prompt, but it will never remember more than 32,000 at any one time.

[^6]:	Google Gemini’s version of a custom GPT, basically.

[^7]:	The SWE Bench (the software engineering benchmark) is a very popular benchmark for how well a given AI model performs at coding, measured by its ability to solve real-world coding problems in a predetermined list of GitHub repositories.
