---
slug: "/python-is-terrible"
title: "Python is Terrible"
subtitle: "Unless you think your time is more important than everybody elses"
firstposted: "2020-08-27"
lastupdated: "2019-06-20"
hidden: true
---

Fair warning: I'm going to relax my editorial standards for this post. Really, I'm just trying to blow off some steam here. Everytime I have issues with software I come here to pour out my frustrations, it makes me feel better. It's a good alternative to smashing my keoyboard on my chair and throwing my monitor out my window. Turns out most of the time my issues are with Python. So it's earned my ire.
And because emotions are irrational sometimes, some of this is going to be irrational.

During a interview for a software developer internship in college I was asked this simple question:

Please rank the following attributes of code from most important to least important and justify your decisions:

- Performance
- Re-usability
- Testability
- Brevity (as opposed to verbosity)

It's a pretty darn good question as far as I'm concerned and it's grown on me even more from the time when it was first asked.

I don't remember what I said (I didn't end up getting the internship). But there really is no right answer, you can make a case for almost any of these to be the most important depending on what you are writing.

Mission critical software: Testability is Key
Project where every millisecond saves you millions of dollars: Performance #1
Most software: reusability

Except brevity:

Hobby Project/Job Security/Can only store code on a floppy disk/Doing a code golf competition/js13k: Brevity

Yes, not having to type out boilerplate is nice sometimes if you know it serves exactly what you want to do but It's lousy for anybody that has to read your code, particularly for people who aren't as familiar with the language or application. It's really not that much more work considering you are probably copying and pasting most of it anyways.

_maybe_ you get a pass on embeded system

"Salesforce migrates from Python to go"

Hmmm... I bet it's because of the lack of a type system and issues with dependency resolution

- Reads the article \*

Yep, it's because of the lack of a type system and issues with dependency resolution.

## Java

Yes, it's owned by Oracle, that's not sexy. Yes it's several decades old, that's not sexy. Yes, you have to make classes but SO \*\*\*\* WHAT!?!?!? it takes less than 30 seconds and can save somebody else hours. It's a pretty darn good language.

Btw, here is a big secret that many of you already know but just in case you don't PYTHON IS ALMOST AS OLD AS JAVA!

## React Hooks

Why!!!! Brevity does not = readability!

The closest I've ever come to taking a sledgehammer to my computer was whem trying to untangle a stupid, dumb, idiotic, infuriating, tangled web of **\*\*\*** garbage dependencies when trying to get somebody's old Tensor Flow project working.

## It's not easy to learn

It's easier to get something working, which, admittedly has value, but it's a short sugar high that will be met with gobs of frustration when sme real works needs to get done.

Going from this:

() -> {1+1}

addOne(int A, int B) {

}

To this, is pretty intuitive:

But from this:

To this is a lot more confuzing:

## Mathamatisions and Physicists

This isn't a problem with Python, more with some people who use it: Why oh why does every variable need to be a single letter! It's always some ingenious algorithm that takes hours to conceptiualize because I can't rember what 'i' 'x' 'j' and 'k' are supposed to be representing.

One of my favorite programming Jokes by TODO:

The best thing about Pearl, is that it's the only language that looks the same both before and after encryption.

## Global installs by default

This is really a pip problem. Python without pip is like : mostly useless

I don't want to have to install a bunch of different things globally on my computer to get a small project to work

### Dependency issues

### Trash software issues

WHy do I have numpy

###

Why do I have to go out of my way to install seperate software to make sure pything projects keep to themselves.

When I do npm install - it puts my libs in node_modules in the root directory of my project
When I add a dependency to maven/gradle - it also downloads the appropriate jars to a local project directory
When I do pip install it installs the whole freaking library globally.

When I install new software I'm not sure I want I don't want it available everywhere!

Why is this such a pain? Two reasons:

### It makes a mess of my computer

I don't want a bunch of software polluting my global path. I want to install the LEAST POSSIBLE amount of software with the least amount of impact on my system. This is why javascript gets a pass even though it suffers from the same dynamic typing issues as Python: it runs in the browser. That is huge. I already have chrome/firefox/edge installed. All I need to do is type in a url. The whole application is sandboxed in the browser so it's way more secure and I know nearly impossible for it to leak out of the browser and mess with my system.

Setting up an evironment is the dumbest, most annoying bit of being a software developer. It's boring, never goes smoothly, mostly just involves googleing error messages, doesn't involve any artistic design or creativity and is the main reason why this blog article exists.

### It prevents you from building other Python projects

Once you instal numpy version 2.3.2.3.3.4.5.6.7 or whatever for one project and then you `git clone` a completely unrelated project and it requires 2.3.2.3.3.4.5.6.8 then one of them is going to be broken. OBVIOUSLY I didn't buy this computer just to work on a ONE SINGLE Python project.

How do you fix this problem? by INSTALLING MORE JUNK! You install Conda, or some IDE that does virtualization. Virtualization is another fancy word I distane. I propose we call installing things globally as "Globilization" and call installing things in their local scope as "Normal". When I think of "virtuaization" I think of slow VMs, virtual box, OS licencing issues, docker container, and enabling HyperV on my windows machine which causes crashes. Needless to say this does nothing to improve my already sour mood.

Most of the time this 'virtualization' aspect is left off READMEs or medium tutorials or what have you. I think this makes it increadably confuzing for people (even technical people coming from sane languages) who don't know exactly what's going on.

It feeds into the same theme. If your in your perfect prestine local evvironment and import the things you need and run your pretty little machine learning python script it's amazing! The world is candy and rainbows. OMG did you guys know you can do `let i = [1..6]` instead of for `int[] = {1,2,3,4,5,6}`. Pything is AMAAAAAAZZING!!! I imported 1023712803 libs and all I had to do was write half a line of code!

Good freaking luck getting anybody else to get value out of your code. Maybe if you are a data scientest all you care about is reporting the programs output to your boss or some journal/publication (in which case your compute is pretty much designated for running one pything applicaiton) then maybe it's fine.

But for those of use that are trying to write collaborative software for other people's consumption. It's a wood tier language.

## Readibility

Umm... Python does not read like english, it read's like text that's been fed through an natural language processing version of gzip.

While we are on the subject... react hooks:

In what universe is this "CLEANER, EASIER, BETTER" (quote from the article) than using a componet version of. I'm down with the benefits of functional programming but lets be real about the drawbacks here: react hooks can be vexing and less intuitive than class components.

##

Why does someting invisible determine the behavior of the language?
