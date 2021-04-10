---
slug: "/aoe2-guess-the-elo"
title: "The Guessing Game"
subtitle: "Randomer match selection for the Age of Empires 2: DE"
firstposted: "2021-04-08"
lastupdated: "2021-04-08"
titleimage: "https://live.staticflickr.com/65535/51105179861_c4c7ff4cb9_o.png"
titleimagetopmargin: -30
hidden: false
---

If you aren't familiar with Age of Empires, check out the my [other aoe2 project](/aoe2-de-rating-charts) where I provide a bit more of an into.
Otherwise, read on.

Watching people do things and guessing their skill level is a fun game.

Imagine if you could somehow disguise baseball athletes at all levels and just watch them play. Would you you be able to guess whether they were little leaguers, High-A Asheville, or the Boston Red Sox?

![Little Leaguer? Minor Leaguer? Major Leaguer?](https://live.staticflickr.com/65535/51105179861_c4c7ff4cb9_o.png)

The fame and the physiological qualities of the baseball players make this pretty much impossible, not just for baseball but for most classical sports. However, for e-sports, it's a whole different ball game.

Computers and networks can hide identity. In these cases, looking at the start of a game you really can't tell how good somebody is until they start playing.

<div style="display:flex; flex-wrap: wrap;text-align:center; justify-content: space-around;">
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/51106448340_e42b02868e_o.png" alt="AoE2:DE Screenshot of a 1v1" width="100%">
    <div><i>Unless we actually watch the game, we must assume that goprogambler and FORASTERO are in a superposition of being high skill and low skill at the same time.</i></div>
  </figure>
</div>
<br>

I've seen at least a couple streamers try to play this "Guess the Skill level" game for Age of Empires II.

From what I've seen, people playing this game have gone about selecting a "random" match to spectate and guess in one of two ways:

1. They go to [the list of ongoing matches](https://aoe2.net/#aoe2de-matches-ongoing) and pick one but, of course, there are a few problems:

   - You might accidentally see the ratings
   - You probably want the same chance of selection a game with highly skilled players as you have of selecting a match with low skill players or medium skill players. Since the skill levels of the players currently playing aren't uniformly distributed, getting your desired distribution of skill levels is unlikely.

2. They get somebody else to select a match for them, which results in another set of problems:

   - You have to bother another person
   - Humans are generally really bad at being random

      <div class="rant">
   Pro Tip: The digits of Pi are approximately uniformly distributed. So if you are ever in a situation where you need to spout off "random" numbers, just spit out all the digits of Pi that you know. It might be a better bet that saying whatever numbers pop into your head.
   </div>

   - They might have an agenda (want you to watch a particular player) or bias their picks in some other way
   - You can't compete against them to see who's guess was better because they have seen the player's ratings

## Fix It

Fortunately, these are very solvable problems. Using the [aoe2.net API](https://aoe2.net/#api), in about a weekend, my wife and I WIPed this up:

<a href="https://thbrown.github.io/aoe2-de-random-elo/" target="_blank" rel="noopener noreferrer">
  <img src="https://live.staticflickr.com/65535/51054104906_c44b81f6a5_o.png" alt="Screenshot of the 'Guess the Elo' tool" width="100%">
</a>

https://thbrown.github.io/aoe2-de-random-elo/

Just like the site says, this tool:

1. Selects a random rating between two values.
2. Then selects the closest ongoing game to that rating.

In doing so it ensures that you are in for spectating variety of different skill levels, instead of getting more of the skill levels that play more games. It'll keep you on your toes so you can't just keep guessing the rating "1000" over and over and expect to be right.

## Hera's "Guess the Elo" series

The best example I know of a Streamer playing this game is Hera's Guess the Elo series:

<iframe width="560" height="315" src="https://www.youtube.com/embed/90sRCACD7gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I shared this tool on his Discord and his mods were nice enough to pass it on to Hera:

<div class="iframe-container">
  <iframe
    class="iframe"
      src="https://clips.twitch.tv/embed?clip=BenevolentBrightCheeseDoggo&parent=endlesswips.com&parent=localhost&autoplay=false"
      frameborder="false"
      scrolling="false">
  </iframe>
</div>

Cool, looks like it's valuable.

## Tech

This is a React app. It's hosted on GitHub pages. Since aoe2.net doesn't allow CORS, there is a small backend system: It's a GCP cloud function that proxies the "get all ongoing matches" request from your browser to the aoe2.net API. There is also a caching mechanism that stores the most recent API result in a storage bucket for a few minutes. This is good because:

1. It protects the aoe2.net API from excessive calls if somebody mashes the "Get Matches" button. This API is free and awesome and I'd like to keep it that way as long as possible.
2. Aoe2.net seems to do some of its own throttling if you make requests too quickly, so returning cached data speeds up the results when one user clicks the "get matches" button multiple times in quick succession, or if there are multiple different users clicking the button at around the same time.

It doesn't cost very much to operate (<\$1 per month), so far even less because of the Google Cloud Platform free tier.

### Next Steps

I don't currently have any plans to make changes to this tool. But if I had to think of some ideas, maybe we can add more options for filtering the matches? Or make the max and min limits strict (instead of just using them as bounds for selecting the random rating -- since the nearest game to any particular rating might be outside the min/max bounds).

### Also See

My other aoe2:DE project [AoE2:DE rating charts](/aoe2-de-rating-charts)

### If You Fancy

<buy-me-pizza></buy-me-pizza>
