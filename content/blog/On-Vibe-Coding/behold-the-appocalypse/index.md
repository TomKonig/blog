+++
title = "the a(i)ppocalypse — ruminating on a dead App Store"
description = "AI isn't coming for humanity yet, but it's killing the hand-crafted app market built by developers who cared about their products."

date = "2025-08-21T15:51:55+01:00"
author = "Thomas Kønig"

categories = ['AI', 'Technology']
tags = ['AI', 'Enshittification', 'Development']
series = "On Vibe Coding"
parts = "1. Are The Vibe Coders Coming For Us?"
weight = 1

draft = false
featured = true
recommended = true
+++

Now, considering the sorry state of LLM[^1] benchmarks insofar as it concerns the probably only remotely reliable test for “generalized intelligence,” [Humanity’s Last Exam](https://agi.safe.ai), it is likely going to be a while before we have to contend with a globalized SkyNet coming to rapture us all to cyberspace. 

There seems, however, to be unfolding the demise of an early victim. It squeaks like a canary in the coal mine — if you will — of where unrelenting human greed and increasing automation is likely to drive us all eventually. I am, of course, talking about The App Store.

I briefly touched on this subject in the disclaimer preceding [my previous post](https://blog.tomkonig.com/vibe-coding-your-dev-job/). AI can do a lot of good in places where the labor required would previously be unviable. I am — as an example — building out a technical solution using AI-augmentation, which could potentially increase revenue in eCommerce-applications manyfold while being truly helpful to consumers, using very, very complex math. 

Interestingly, there’s nothing innovative about my solution, we’ve known about it — or at least the most relevant aspects of it — since the 1930s. The problem was that the labor required to implement it and execute it in a real-time, consumer-facing environment was not possible. But with agentic AI it is. 

Fortunately, there are a lot of really cool people with great ideas out there building similar things, implementing AI capabilities where humans alone just cannot meet the targets, not for lack of want but for lack of time and qualified labor.

So that’s the good. The bad, however, is … ==really bad.== Because most products and apps utilizing AI today are something very, very different. They’re built by the lowest common denominator, and usually as a very quick cash-grab. They are, in short, white-labeling sold at 100x the cost, misleading users and consumers from end to end. So let’s talk about it. And let’s start exactly there, to make sure we’re all up to speed:  

## what is white-labeling?
Very briefly, white-labeling is the practice of reselling someone else’s product, more or less “as is”, but with your packaging, branding and labels. It’s very common in certain consumer industries. Cosmetics comes to mind immediately. Another is Amazon Basics, a brand used exclusively by Amazon but sourced entirely from third party manufacturers.
  
It is also very common in IT, for a number of reasons. A lot of IT companies offer B2B2C[^2] solutions, and these are often sold as white-label products. If you run a SEO Agency, for example, but don’t want to develop and maintain the automated analysis technology yourself, you might go to a development company specialized in exactly that and buy a white-label license off of them, so you can offer automated SEO reviews as part of your product suite under your own brand name.

However, what we’re currently seeing unfold in the AI space is not white-labeled products being integrated into larger products or offerings. More so, it is a foundational AI model (such as OpenAI’s GPT models or Google’s Gemini) being effectively wrapped in new packaging, billed as something else entirely — ==something less useful== — and sold at a 100x markup to unwitting consumers.

## these developers are beyond shameless.
I used the image below in my previous post too, because it illustrates what I am saying all too well. I’d apologize to the developer for scapegoating them, but honestly I’m going to put the same effort into that as they’ve put into developing these apps: None.
![A treasure trove of garbage AI apps from a single developer](behold-the-appocalypse/1.jpeg)
Every single one of these apps — I will bet you — runs on the exact same API call to the OpenAI API. These are not fine-tuned[^3] models, carefully provided hundreds of millions of additional parameters within a specific niche to best suit the users’ needs. They are just a GPT model, unpacked then repackaged. Probably not GPT-5 either.

And here’s the kicker: The BuddySnake app above charges ==$10 a week!== That’s twice the monthly cost of ChatGPT Plus. For a boiled down version restricted to serving a single function as opposed to ChatGPT’s multitude of functionalities, from multimodal input/outputs to agentic browsing to coding to you name it.

*(In fairness, there is also an annual subscription plan to BuddySnake for $30, but again, how many snakes do you really need to identify in a given year?)*

### just use ChatGPT, that’s what the developers do anyway
To prove my point, I went to good ole’ regular ChatGPT and asked it to identify a picture of a snake (a _Vipera Belus_, the European adder, primarily found in the Nordics far from the US and most of ChatGPT’s training data set) and to give me extensive information about the species. The only tool I used was web search, which comes completely standard with the $20 ChatGPT Plus subscription.
![ChatGPT perfectly well answering questions about snakes.](behold-the-appocalypse/2.jpeg)
And there you go. Saved myself $10 this week. I guarantee you I could do the exact same thing with the gemstone identifier, the dog identifier, the fish identifier, the cat identifier, the … you get what I’m trying to say. 

Some of these developers are absolutely shameless. Yes, the big players like Lovable are too, but that probably requires a blog post unto itself, because at least they are making **some** effort to provide a service beyond the norm of the foundational models’ base offerings (even if it really is just compiling and hooking up the back-end for you as opposed to walking you through it step by step). But on the App Store? It’s utter mayhem. And I have to believe at least **some** people are falling for these tricks, because the repackaged AI apps just keep on coming.

## let’s break down the expense sheet from the developer side of things
Before I give you a list of some of the worst examples I have seen ==this week alone==, let’s actually review the economics of using AI in your apps to give you an understanding of just how much these developers are gouging you. 

For the example below, I am going to use very, very expensive models and assume the developer is paying for everything from hosting to model use out of pocket. Most likely this is not true, because if they are lazy enough to print apps this low quality, likely they are cutting corners elsewhere too — like sharing your data with Google or OpenAI without telling you to net millions of daily free tokens[^4] and pay $0 for their AI usage. But for the sake of argument.

### the math
Assume I am using `gpt-5-mini` for image analysis. OpenAI charges (on average, not distinguishing input/output and assuming no cache) [$1.125 per million tokens](https://platform.openai.com/docs/models/gpt-5-mini) of `gpt-5-mini` usage.

I’ve built my snake identifier app to scale down any image to 1024x1024 before sending it off to the API, since 1024^2px is more than enough to get an accurate reading of a snake for the most part. Using OpenAI’s [less than handy formula](https://platform.openai.com/docs/guides/images-vision?api-mode=responses#analyze-images), we can determine that having a 1024^2px image processed by `gpt-5-mini`will cost 1024*1.62 tokens. 1658 tokens. I’m unsure if the cap of 1536 tokens is pre- or post-model multiplier, so let’s just go with 1658. 

We add no further input tokens, since in my app the user can only upload an image, but we add a generous 1,000 output tokens (billed at $2/M) since we are giving the user a whole writeup on the snake once it’s identified. *(The math behind token/text-ratios depends on the individual provider and is a maze, but suffice to say a token is often roughly equal to 4-5 characters in a regular document, so we’re giving the AI roughly 4,000 characters to expand with here)*.

### the cost
That means your snake identification photo will cost me, as the developer, roughly: `((1.125/1000000)*1658)+((2/1000000)*4000) = $0.00987 `. ==Almost, but not quite, a dollarcent.==

You would have to identify ==10,000 snakes a week== before I would be losing money on you as a customer. If you live in a place where you need to identify 10,000 snakes a week, for the love of God, move out.

And, to hammer the point home: The above math is based on the developer taking absolutely no shortcuts or cost-saving measures to further increase profits and reduce costs. This is an unlikely scenario. Most likely they use cheaper models, rely heavily on caching, perhaps even share data with providers to get milions of free, daily tokens. And then they have the gall to charge you $10 a week. 

Just go give the $20 to OpenAI for a Plus subscription, I promise you it can identify both snakes, dogs, gemstones and probably that mole on your back, too. All for the same subscription.

To end this post, let’s take a look at some of the worst offenders I’ve seen just this past week (or thereabouts) alone. There will be no links to any of these, as I do not want to give these developers any traffic, but you can probably find them via a Google search if you’re feeling particularly wasteful with your money.

## the wall of shame
*(Note: I have excluded the plethora of “AI Girlfriend” and “AI Image editor” and “AI TikTok filter” apps or this list would go on literally forever.)*
![If Andrew Tate wasn’t so busy trying to stay out of prison, he’d probably sponsor something like this.](behold-the-appocalypse/3.webp "If Andrew Tate wasn’t so busy trying to stay out of prison, he’d probably sponsor something like this.")
### Plug AI: Texting Assistant
It stands to reason that the moment language-based AI became generally available, dudebros would immediately try and figure out how to implement it with the sole purpose of getting laid. And thus here we are. You can now, for all of ==$10 a **week**==, pick the brain of the sleaziest AI known to man.

Not only is this kind of silly, but you also still have to provide it with screenshots of your conversations for it to work, at which point save 50% and just use ChatGPT Plus. Preferably, though, don’t do this at all.
![#This #is #a #really #bad #idea](behold-the-appocalypse/4.webp "#This #is #a #really #bad #idea")
### Hashtag Expert: AI Captions
Okay, just trust me on this. You **do not** need to spend ==$300 a year== on picking out hashtags for your social media content. Not even if you run a business. Not only is it just incredibly stupid and contributes to spammy looking posts, hashtags are also massively deprioritized by every major social media platform (with speculation that some even penalize you for using too many) specifically because they could be gamed.
![Screw Grand Theft Auto, this is what the older generation should be panicking about in the digital age](behold-the-appocalypse/5.webp "Screw Grand Theft Auto, this is what the older generation should be panicking about in the digital age")
### Mushroom Identifier: Forage ID
I realize this isn’t too dissimilar to SnakeBuddy, but it is an exceptionally bad app. Not only is this app ==$11 for a week, $60 for a year or well over $100 for the lifetime plan==, there’s also, perhaps more critically, a non-zero chance that lifetime won’t be very long because the app may get you killed. Yes, there’s a brief, hardly emphasized disclaimer that the app should never be trusted insofar as eating mushrooms goes, but there is also a “confidence score” associated with every scan, and I suspect to some users that will justify overlooking the original disclaimer. And then it turns out the app was wrong.
![This is like trying to sell a phone app. Like an actual app that makes calls.](behold-the-appocalypse/7.webp "This is like trying to sell a phone app. Like an actual app that makes calls.")
### Photo Translator: Camera
Your phone can do this. Unless it’s like 10 years old, at which point the app probably is not compatible with this software anyway. Just. I don’t know why you’d spend ==$7 a week== for a feature your phone already has baked into its camera app. 

I guarantee you, it does not matter if you have an iPhone, a Google Pixel, a Samsung Galaxy, a OneNote, some obscure Motorola. Your phone can already do this. It is usually as simple as opening your native camera app, keeping the text in frame and tapping it. Unlike this app, which requires you to take a photo and load it into a wholly separate application from the camera. And you get to pay for the privilege too. 

Also, even if you have the one model of phone which somehow has no native OCR translation functionality, once again, just go to ChatGPT or Gemini and have that translate the text. It’s a cheaper subscription month-over-month and you get 100x the functionality. 
![As we all know, there is nowhere near enough autogenerated crap on social media.](behold-the-appocalypse/6.webp "As we all know, there is nowhere near enough autogenerated crap on social media.")
### AI Slide Generator - SlideFlow
A rare kudos here for doing something the foundational models don’t do out of the box; making slideshow content tailored to social media. An anti-kudos for charging $5/week for what is effectively just glorified text/image posts.

___

Okay. That’s it, I’m done ranting. That’s really all this post was. A eulogy for a dying App Store. The great, handcrafted products will drown in a sea of slop until there’s nothing left but AI girlfriends and we’re all slowly succumbing to mushroom neurotoxins. It was good while it lasted, though.

{{< about AUTHOR="Thomas Kønig" AVATAR="avatar.png" >}}

Hi. I'm Tom. I wrote this rant. Ranting is not all I do, though.
 
I suppose I am a lot of things. A journalist, an AI developer, a slightly eccentric tinkerer.
 
In my spare time, I’m just "dad."

You’re welcome to get in touch if you’d like. You can find most of my socials and my e-mail and even a phone number[here](https://links.tomkonig.com "here").
 
{{< /about >}}
{{< recommended TITLE="Recommended Posts" LIMIT="5" >}}

[^1]:	Large-Language Models, a technically more correct name for the things we colloquially refer to as AI today.

[^2]:	Business-to-Business-to-Consumer — I.e. selling products to other businesses with the intent that they resell them to consumers or end-users either under your brand or their own.

[^3]:	Fine-tuning is the practice of building upon a model for a particular use-case, usually by feeding it many, many datapoints of “good” and “bad” answers to a specific prompt, or by running evaluations on its output in real time and steering it towards answering within a given ruleset.

[^4]:	Tokens are how API costs are calculated across most development models. The math is a little tricky, and depends on exactly what you want the model to do, but for simple text it’s usually safe to assume one token is equal to something like 4 for 5 characters. Included in this is everything from system prompts to context to input/output to any prior conversation you have had with the AI which it needs to factor into its current response.