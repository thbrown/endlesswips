---
slug: "/aoe2-de-rating-charts"
title: "The Greatest and Best Video Game in the World?"
subtitle: "Rating Distribution Charts for Age of Empires 2: DE"
firstposted: "2020-10-26"
lastupdated: "2021-01-03"
titleimage: "https://live.staticflickr.com/65535/50544759632_83d8c1033b_o.png"
titleimagetopmargin: -30
hidden: false
---

My favorite video game ever is Age of Empires 2, a real time strategy game which was originally released in 1999.

![Age Of Empires 2 Screenshot](https://live.staticflickr.com/65535/50544759632_83d8c1033b_o.png)

The game has a lot of depth. When I was younger, I exclusively played the game with cheat codes so I could mass up large army and roll some computer player. Now I see it more of an optimization problem and a battle of decision making. Both ways of playing are fun. You don't have to have to be able to do a million actions per minute to have a good time. My wife and I play together. Everybody seems to get something [different](https://www.reddit.com/r/aoe2/comments/gi57f2/i_like_to_play_sim_city_on_age_of_empires_lol/) out of it and it seems to have a pretty wide demographic.

### Where Has This Game Been for the Last Two Decades?

Microsoft released an expansion to the game in 2000 and the title proved successful. It was my game of choice at LAN parties and every game offered exciting play and a lively post game debriefing session over pizza and soda.

13 years later in 2013 (easy math) the game was still fun and I was excited when I found out that there would be a new release of the same game - Age of Empires 2: HD edition. The game came out on Steam (no more losing the CD), with support for higher resolutions and MUCH easier networking.

Competitive multiplayer largely migrated over to a platform called [Voobly](https://www.voobly.com/), which I always thought looked sketchy and I never trusted it enough to set it up.

Over time, three additional expansion packs were released for the HD edition: The Forgotten, The African Kingdoms, and Rise of the Rajas.

<div className="rant">

#### Tangent: The Ugly Expansions

Of the three HD expansions, I only purchased the first one and I was disappointed with it. The game play was fine, but the buildings and art added by the expansion looked... bad.

For example:

<div style="display:flex; flex-wrap: wrap;text-align:center; justify-content: space-around;">
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50281312002_da3619ae91_o.png" alt="Goths architecture" width="100%">
    <div><b>Goths - Appeared in the original game</b></div>
  </figure>
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50279857138_1b50997283_z.jpg" alt="Aztecs architecture" width="100%">
    <div><b>Aztecs - Added in the Conquers Expansion</b></div>
  </figure>
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50280702817_eec11b6528_z.jpg" alt="Italians architecture" width="100%">
    <div><b>Italians - Added in The Forgotten Expansion</b></div>
  </figure>
  <figure style="width: 48%">
    <img class="space" src="https://live.staticflickr.com/65535/50280702967_273a1733b7_z.jpg" alt="Slavs architecture" width="100%">
    <div><b>Slavs - Added in The Forgotten Expansion</b></div>
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

Fortunately, [aoe2.net provides an API](https://aoe2.net/#api) for pulling leaderboard data. Some resourceful Redditors created and posted histograms of the distribution of ratings so you can roughly see where your rating put you with respect to all other players:

<a href="https://www.reddit.com/r/aoe2/comments/eq0ldm/age_of_empires_ii_de_elo_distribution_as_of/" target="_blank" rel="noopener noreferrer">
  <img src="https://live.staticflickr.com/65535/50284002243_6fe5001e65_o.png" alt="AoE2:DE ratings distribution" width="100%">
</a>

This is awesome, but I found myself squinting at the graph trying to guess how many standard deviations I was from the mean while in the back of my mind questioning whether the distribution was normal enough for it to matter. The other issue is that the distribution could be changing everyday as people play more games and the underlying data shifts.

### Enter Programing Skills

We needed a website with a chart that was updated consistently and that could show you exactly where any given player fit in with all the others ratings-wise. I figured I could do that.

I put together a Javascript (Node) script to pull the data from the api, feed it to [Google Charts](https://developers.google.com/chart) to created a histogram, and plopped it on a webpage.

Here's the thing about Google Charts, it looks just fine, but every time I use it I _very_ quickly run into limits on what I can customize. In this case, I wanted to be able to highlight specific histogram buckets that a player belonged to. That was a no-go with Google Charts. So, after so poking around various charting libraries I settled on [plot.ly](https://plotly.com/javascript/). The [documentation](https://plotly.com/javascript/plotlyjs-function-reference/#plotlyreact) seemed pretty good, and it looked like I'd be able to do what I wanted to do.

I hosted the site on [Github Pages](https://pages.github.com/), which is great because it works well and it's free for public repositories. I use this feature frequency. I also took advantage [Github Actions](https://github.com/features/actions) for the first time. With it I was able to use chron-like syntax to update the data daily. I thought for sure I'd have to pay for some cloud computing service for this updating, but open sourced repositories get free build time. Woot!

### The Site

I originally published the site on my personal Github account. But after I did so, I discovered that there is an existing development collective around Age of Empires 2 called [Seige Engineers](https://aoe2.se/). After connecting with them on their Discord, they offered to put the site behind one of their subdomains. So it's now ratings.aoe2.se which is much easier to remember than a Github pages domain.

Check it out: https://ratings.aoe2.se/

Github repository: https://github.com/SiegeEngineers/aoe2-de-rating-charts

More than a decade of playing puts me here:

<a href="https://ratings.aoe2.se/" target="_blank">
  <img src="https://live.staticflickr.com/65535/50276461253_dd0eace964_o.png" alt="Histogram of aoe2 players ratings, I'm in the 83.5% percentile!" width="100%">
</a>

### What About Unranked?

Of course you can play aoe2 in a non-competitive context. Many people do. Any multiplayer lobby game that isn't part of the ranked match is called and an 'unranked' match. Surprisingly, there are still ratings attached to these games. Just like in ranked play, you gain or lose points for every win or loss respectively.

People occasionally request that I add charts for 'unranked'. There are two issues with this:

1. There are a lot more unranked players. This means that it takes longer to fetch the data from the api, longer for the web page to load, and the browser lags a bit with all that data. I'd have to redesign some things to get this working well.
2. The data doesn't look all that clean anyways. First of all, a ton of people just have a rating of 1000 and it makes the chart look like it's flipping the us the bird: ![Histogram of unranked players](https://live.staticflickr.com/65535/50545749056_6eb484666c_o.png) I've been told this is because people play against AIs with their friends and these matches count toward total games played but they do not influence a player's 'unranked' rating.

   But that's not all, there is a whole slice of the distribution (about 1000 +/- 50) that looks like it just doesn't belong because the values are abnormally high. Here is the same chart with all the 1000 rated players removed: ![Histogram of unranked players. Excluding bucket with the rating '1000'](https://live.staticflickr.com/65535/50545889182_c1aa0774db_o.png) It's possible the abnormality can also be explained by the play-multiplyer-game-vs-AI effect, but it ends so abruptly about 50 points out on each end. I think there might be something else going on there.

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

<br>

<div className="rant">

### Tangent: Rating vs Elo, ELO?

Elo is a system for determining relative ratings originally used to evaluate chess players. Elo is not an abbreviation (it's often seen written as ELO, I'm assuming this is because of the band) rather it is named after the system's creator. That I can see, none of the official Microsoft sources for Age of Empires 2 ever mention 'Elo'. The number that determines your place on the ladder is always referred to as 'rating' which implies a different implementation. The only place I reference it in my tool is in the description. The idea being that some people will search for the term "ELO" anyways even if it isn't strictly correct.

</div>

### Addendum: Aoe2.net Bookmarklet

I wanted an easy way to see the ratings distribution for any given match listed on Aoe2.net. So I made a bookmarklet.

If you want to use it too, you can click and drag the red bookmarklet link below and add it to your bookmark bar. Then click the bookmarklet while on the aoe2.net "My Match History" page or a player's profile. This will linkify the match title to take you to ratings.aoe2.se. Like so:

![Age Of Empires 2 Screenshot](https://live.staticflickr.com/65535/50937428227_36fb20c789_o.gif)

<div className="rant">

### Tangent: Self XSS

Be careful with bookmarklet links like this! There is a security vulnerability called Self XSS (cross-site scripting). If a user runs a malicious bookmarklet, an attacker can get access to all that user's information on a given site. This can include session information, which may allow the attacker to impersonate the victim on the site (do anything the user could do while logged in). Running a bookmarklet is equivalent to pasting javascript code into your browser's console window and running it.

If you would like to see the source code used to create the bookmarklet link below it's here: https://gist.github.com/thbrown/ded5bf8f7b7cac62ed96dc15bf8e8128

I generated the one below by pasting that code into the bookmarklet generator here: https://codepen.io/myf/pen/lfuHx

</div>

That being said, here is the link:

<div style="display: flex; margin-bottom: 18px;">
<div style="background-color: #980500;
    border: 2px solid #111111;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 20px;
    border-radius: 5px;    
    width: 190px;
">
<a id="lnk" style="color: white" title="Hello" href="javascript:(function(){let isMyMatchesPage = window.location.href.includes( &quot;aoe2de-matches-my-recent-matches&quot; ); let isProfilePage = window.location.href.includes(&quot;profile-&quot;); let COL_INDEX = undefined; let LINK_LOCATION_PREFIX = undefined; let LINK_LOCATION_POSTFIX = undefined; let TABLE = undefined; if (isMyMatchesPage) { COL_INDEX = 3; LINK_LOCATION_PREFIX = &quot;#aoe2de-matches-table > tbody > tr:nth-child(&quot;; LINK_LOCATION_POSTFIX = &quot;) > td:nth-child(1)&quot;; TABLE = &quot;#aoe2de-matches-table&quot;; } else if (isProfilePage) { COL_INDEX = 1; LINK_LOCATION_PREFIX = &quot;#profile-matches-table > tbody > tr:nth-child(&quot;; LINK_LOCATION_POSTFIX = &quot;) > td:nth-child(1) > h5&quot;; TABLE = &quot;#profile-matches-table&quot;; } else { throw new Error( &quot;Unrecognized page, doing nothing...&quot; + isMyMatchesPage + &quot; &quot; + isProfilePage ); } for ( let i = 0; i < document.querySelectorAll(TABLE + &quot; > tbody > tr&quot;).length; i++ ) { let teamOne = []; let teamTwo = []; for ( let j = 0; j < document.querySelectorAll( `${TABLE} > tbody > tr:nth-child(${ i + 1 }) > td:nth-child(${COL_INDEX}) > table > tbody > tr` ).length; j++ ) { let players = document.querySelectorAll( `${TABLE} > tbody > tr:nth-child(${ i + 1 }) > td:nth-child(${COL_INDEX}) > table > tbody > tr:nth-child(${ j + 1 }) > td.player-name` ); let teamOnePlayer = players[0]; let teamTwoPlayer = players[1]; if (teamOnePlayer) { let profileId = teamOnePlayer.innerHTML.split(&quot;'&quot;)[5]; teamOne.push(profileId); } if (teamTwoPlayer) { let profileId = teamTwoPlayer.innerHTML.split(&quot;'&quot;)[5]; teamTwo.push(profileId); } } let link = `https://ratings.aoe2.se/?team_one=${teamOne.join( &quot;-&quot; )}&amp;team_two=${teamTwo.join(&quot;-&quot;)}`; let type = document.querySelector( LINK_LOCATION_PREFIX + (i + 1) + LINK_LOCATION_POSTFIX ); type.innerHTML = `<a title=&quot;&quot; href=&quot;${link}&quot;>${type.innerText}</a>`; (&quot;done&quot;); }})();">Linkify Aoe2.net</a>
</div>
<div style="margin-left: 10px;
    font-style: italic;">
  <-- Click and drag me to your bookmarks bar (you may have to make the bookmark bar visible using your browser's settings)
</div>
</div>

Keep in mind that this is fairly brittle and can break if the aoe2.net UI changes. I will try to keep the bookmarklet up to date with any changes.

### Next Steps

As far as WIPs go, this one is n a pretty good state. But, of course, there are areas that can be improved:

1. Performance - Page load times are longer than I'd like. There is also a noticeable delay when selecting a player. The delay is painfully obvious when Hera selects TheViper in the twitch clip above. I've made some improvements since, but I still need to look into webworkers for some processing. Perhaps I can do plot.ly stuff in a webworker w/ some kind of virtual DOM. Maybe move some more processing to build-time without adding too much network overhead.

2. Annotation Layout - I had to write the algorithm that positions the annotations for player names myself and it's not that great. If you add a lot of players you'll see what I mean. This is mostly challenging because of changing screen sizes (e.g. mobile vs desktop).

3. Twitch Extension - I'm working on incorporating this into a Twitch Extension. The idea is that lots of aoe2 streamers put their ratings in the description for their channel, but it's often out of date because they inevitably get better at the game over time. It's also useful for casual viewers to see what skill level the streamer has. In other words, having a rating of "1000" might not mean anything to a lot of people, but a graphic showing the streamer is in the 50th percentile does. Also, I think it might be fun to allow viewers to add their names to the histogram for a small amount of Twitch bits. Will update here as this WIP develops.

### Also See

I have one other, smaller, AoE2:DE project: a helper for playing "Guess the Elo". [Check it out here](/aoe2-guess-the-elo).

### If You Fancy

<buy-me-pizza></buy-me-pizza>
