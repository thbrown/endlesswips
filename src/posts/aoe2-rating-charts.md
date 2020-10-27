---
slug: "/aoe2-de-rating-charts"
title: "The Best Video Game of All Time"
subtitle: "Rating Distribution Charts for Age of Empires 2: DE"
firstposted: "2020-10-26"
lastupdated: "2020-10-26"
titleimage: "https://upload.wikimedia.org/wikipedia/uk/9/98/Age_of_Empires_2_gameplay.png"
titleimagetopmargin: -30
hidden: false
---

I might lose some people here, but the best video game of all time is Age of Empires 2, a real time strategy game which was originally released in 1999.

![gameplay](https://upload.wikimedia.org/wikipedia/uk/9/98/Age_of_Empires_2_gameplay.png)

The game has a lot of depth. When I was younger, I exclusively played the game with cheat codes so I could slowly mass up large army and roll some AI. Now I see it more of an optimization problem and a battle of wits. Both ways of playing are fun. My wife and I play together. Everybody seems to get something [different](https://www.reddit.com/r/aoe2/comments/gi57f2/i_like_to_play_sim_city_on_age_of_empires_lol/) out of it and it seems to have a pretty wide demographic.

### AoE:II Where Has This Game Been for the Last Two Decades?

Microsoft released an expansion to the game in 2000 and the title proved successful. It was my game of choice at LAN parties and every game offered exciting play and a lively post game debriefing session over pizza and soda.

13 years later in 2013 (easy math) the game was still fun and I was excited when I found out that there would be a new release of the same game - Age of Empires 2: HD edition. The game came out on Steam (no more losing the CD), with support for higher resolutions and MUCH easier networking.

Competitive multiplayer largely migrated over to a platform called [Voobly](https://www.voobly.com/), which I always thought looked sketchy and I never trusted it enough to set it up.

Over time, three additional expansion packs were released for the HD edition: The Forgotten, The African Kingdoms, and Rise of the Rajas.

<div className="rant">

#### Grey Box Tangent: The Ugly Expansions

Of the three HD expansions, I only purchased the first one and I was disappointed with it. The game play was fine, but the buildings and art added by the expansion looked... bad.

For example:

<div style="display:flex; flex-wrap: wrap;text-align:center; justify-content: space-around;">
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50281312002_da3619ae91_o.png" alt="Goths architecture" width="100%">
    <div>Goths - Appeared in the original game</div>
  </figure>
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50279857138_1b50997283_z.jpg" alt="Aztecs architecture" width="100%">
    <div>Aztecs - Added in the Conquers Expansion</div>
  </figure>
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50280702817_eec11b6528_z.jpg" alt="Italians architecture" width="100%">
    <div>Italians - Added in The Forgotten Expansion</div>
  </figure>
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50280702967_273a1733b7_z.jpg" alt="Slavs architecture" width="100%">
    <div>Slavs - Added in The Forgotten Expansion</div>
  </figure>
</div>

The Goth's and the Aztec's architectures are immaculate. There is consistent shadow and you can pick out little details like miss-aligned roof tiles or luminescence emanating from the inside of the structure, as if somebody actually used these buildings. Contrast these with the Slavs and Italians, which look block-like and lazily textured. The Italian building's shadows look like the sun is at two different heights. The Slav's tower doesn't even have a shadow.

The new content didn't fit in well with the rest of the game. It didn't look official at all and it ruined the experience for me, so I disabled it.

</div>

#### Resurgence

After much anticipation, in late 2019 Microsoft released another version of the game. Age of Empires 2: Definitive Edition. And it's beautiful. They fixed the artistic inconsistencies, merged all the expansions into a single game, added a matchmaking system, some quality of life improvements (farm auto reseed!), and sold it for \$20 (again on Steam). More than 20 years after its original release the game is still wildly fun for me, it remains accessible to new players, and it still has a solid community.

### Ratings

Anyways, along with the new matchmaking systems comes a Definitive Edition rating and ladder. You get points when you win, lose points when you don't, and move up or down the ladder respectively. Thanks to an awesome [3rd party site called aoe2.net](https://aoe2.net/#aoe2de-leaderboard-rm-1v1), any player with at least ten completed rated games can see where they stack up among other players on the competitive latter.

This works great if you're in the top 100 or so jockeying for position among names you recognize, but not great if you're part of the masses. My rating is 1262 and, at the moment, that's enough to be ranked 6213rd on the ladder. Is that good or nah?

<a href="https://aoe2.net/#aoe2de-leaderboard-rm-1v1" target="_blank" rel="noopener noreferrer">

![Ranked latter seen from aoe.net](https://live.staticflickr.com/65535/50283555127_1897b5714e_o.png)
</a>

### Reddit to the Rescue... Kinda

Fortunately, [aoe2.net provides a sweet API](https://aoe2.net/#api) for pulling leaderboard data. Some resourceful Redditors created and posted histograms of the distribution of ratings so you can roughly see where your rating put you with respect to all other players:

<a href="https://www.reddit.com/r/aoe2/comments/eq0ldm/age_of_empires_ii_de_elo_distribution_as_of/" target="_blank" rel="noopener noreferrer">
  <img src="https://live.staticflickr.com/65535/50284002243_6fe5001e65_o.png" alt="AoE2:DE ratings distribution" width="100%">
</a>

This is awesome, but I found myself squinting at the graph trying to guess how many standard deviations I was from the mean while in the back of my mind questioning whether the distribution was normal enough for it to matter. The other issue is that the distribution could be changing everyday as people play more games and the underlying data shifts.

### Enter Programing Skills

We needed a website with a chart that was updated consistently and that could show you exactly where any given player fit in with all the others ratings-wise. I figured I could do that.

I put together a Javascript (Node) script to pull the data from the api, feed it to [Google Charts](https://developers.google.com/chart) to created a histogram, and plopped it on a webpage.

Here's the thing about Google Charts, it looks just fine, but every time I use it I _very_ quickly run into limits on what I can customize. In this case, I wanted to be able to highlight specific histogram buckets that a player belonged to. That was a no-go with Google Charts. So, after so poking around various charting libraries I settled on [plot.ly](https://plotly.com/javascript/). The [documentation](https://plotly.com/javascript/plotlyjs-function-reference/#plotlyreact) seemed pretty good, and it looked like I'd be able to do what I wanted to do.

I hosted the site on [Github Pages](https://pages.github.com/), which is awesome because it works well and it's free for public repositories. I use this feature frequency. I also took advantage [Github Actions](https://github.com/features/actions) for the first time. With it I was able to use chron-like syntax to update the data daily. I thought for sure I'd have to pay for some cloud computing service for this updating, but open sourced repos get free build time. Woot!

### The Site

I originally published the site on my personal Github account. But after I did so, I discovered that there is an existing development collective around Age of Empires 2 called [Seige Engineers](https://aoe2.se/). After connecting with them on their Discord, they offered to put the site behind one of their subdomains. So it's now ratings.aoe2.se which is much easier to remember than a Github pages domain.

Check it out: https://ratings.aoe2.se/

Github Repository: https://github.com/SiegeEngineers/aoe2-de-rating-charts

More than a decade of playing puts me here:

<a href="https://ratings.aoe2.se/" target="_blank">
  <img src="https://live.staticflickr.com/65535/50276461253_dd0eace964_o.png" alt="Histogram of aoe2 players ratings, I'm in the 83.5% percentile!" width="100%">
</a>

### What About Unranked?

Of course you can play aoe2 in a non-competitive context. Many people do. Any multiplayer lobby game that isn't part of the ranked match is called and an 'unranked' match. Surprisingly, there are still ratings attached to these games. Just like in ranked play, you gain or lose points for every win or loss respectively.

People occasionally request that I add charts for 'unranked'. There are two issues with this:

1. There are a lot more unranked players. This means that it takes longer to fetch the data from the api, longer for the web page to load, and the browser lags a bit with all that data. I'd have to redesign some things to get this working well.
2. The data doesn't look all that clean anyways. First of all, a ton of people just have a rating of 1000 and it makes the chart look like it's flipping the us the bird. I've been told this is because people play against AIs with their friends and these matches count toward total games played but they do not influence a player's 'unranked' rating.

   But that's not all, there is a whole slice of the distribution (about 1000 +/- 50) that looks like it just doesn't belong because the values abnormally high. It's possible it's because the play-vs-AI effect spreads out, but it ends so abruptly about 50 points out on each end. I think there must be something else going on there.

Now, that doesn't mean I can't show you the distributions:

<blockquote class="imgur-embed-pub" lang="en" data-id="l3YHWiN" data-context="false" ><a href="//imgur.com/l3YHWiN">Aoe2:DE Unranked Ratings Distribution</a></blockquote>

Here it the same chart with all the 1000 rated players removed:

<blockquote class="imgur-embed-pub" lang="en" data-id="nb3rGqH" data-context="false" ><a href="//imgur.com/nb3rGqH">Aoe2:DE Unranked Rating Distribution (Excluding rating 1000)</a></blockquote>

### Promotion?

I didn't make the site for any reason other than that I thought it was cool and useful. Since it's free for me to operate, that works out great. However, now that I've put a bit a work into it, it's really satisfying when other people think it's useful too. So, without trying to be too insufferable, I [shared it on Reddit](https://www.reddit.com/r/aoe2/comments/fwpjcy/searchable_aoe2de_rating_histograms_and/) and mentioned it in chat on a few Twitch channels when I thought it was relevant.

I started to see other people link it on forums or Reddit or other Age of Empires sites I didn't even know existed. Which is neat.

Here is Hera, one of the game's best players. I got enough stream points on his Twitch to have him shoutout one of my medias (called Potato points on his channel) and, of course, I picked this.

<div class="iframe-container">
  <iframe
    class="iframe"
      src="https://clips.twitch.tv/embed?clip=DeliciousCrackyDuckAMPTropPunch&parent=endlesswips.com&parent=localhost&autoplay=false"
      frameborder="false"
      scrolling="false">
  </iframe>
</div>

The site averages about 100 users per day. Which makes me happy :)

<div className="rant">

### Grey Box Tangent: Rating vs Elo, ELO?

Elo is a system for determining relative ratings originally used to evaluate chess players. Elo is not an abbreviation (it's often seen written as ELO, I'm assuming this is because of the band) rather it is named after the system's creator. That I can see, none of the official Microsoft sources for Age of Empires 2 ever mention 'Elo'. The number that determines your place on the ladder is always referred to as 'rating' which implies a unique implementation. The only place I reference it in my tool is in the description. The idea being that some people will search for the term "ELO" anyways even if it isn't strictly correct.

</div>

### Next Steps

As far as WIPs go, this one is pretty close to complete. But, of course, there are areas that can be improved:

1. Performance - Page load times are longer than I'd like. There is also a noticeable delay when selecting a player. The delay is painfully obvious when Hera selects TheViper in the twitch clip above. I've made some improvements since, but I still need to look into webworkers for some processing. Perhaps I can do plot.ly stuff in a webworker w/ some kind of virtual DOM. Maybe move some more processing to build-time without adding too much network overhead.

2. Annotation Layout - I had to write the algorithm that positions the annotations for player names myself and it's not that great. If you add a lot of players you'll see what I mean.
