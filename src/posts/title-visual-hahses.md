---
slug: "/title-visual-hahses"
title: "Auto Pretty Picture"
subtitle: "Visual Hashing of Post Titles"
firstposted: "2017-10-23"
lastupdated: "2019-08-22"
titleimage: "https://live.staticflickr.com/65535/50414927621_d6fceeb114_o.png"
titleimagetopmargin: -60
hidden: false
---

After loading any post on this site, the first you'll probably notice is that title of the post is backed by a satisfying array of geometric elements slowly drifting around the title box. These are all auto-generated effects based on the title of the post so that I don't have to go find pretty but potentially unrelated pictures to spruce up the page.

#### But How?

For the particle graphics, the site uses the [particle.js javascript library](https://vincentgarreau.com/particles.js/). The library takes a series of parameters (such as colors, shapes, sizes, etc...) and generates an animation. You can experiment with various parameters on that site.

To get the set of partical.js parameters for a specific post, the page takes the MD5 hash of the title. If your not familiar, for our purposes a 'hash' is just a mathematical function that can turn text of any length into an 128 bit number. For clarity, that number can written in hexadecimal characters. For example, applying the md5 function to

    "Science can purify religion from error and superstition. Religion can purify science from idolatry and false absolutes."

turns it into

    be99a8d46c8f351619e6d3b17fb5b13a

We can then partition that string of characters into parts. Each of these parts corresponds to a partical.js parameters. In some cases, we'll apply arbitrary math for aesthetic purposes.

Breaking down our character string:

    be99a8 d 46c8f3 5 1 6 1 9e6d3b17fb5b13a

<br>

- **be99a8** - particles.color, <span style="background-color: #be99a8;">#be99a8</span>
- **d** - particles.stroke.width (0-15), stroke width 'd' in hex is '13' in decimal
- **46c8f3** - particles.stroke.color <span style="background-color: #46c8f3;">#46c8f3</span>
- **5** - particles.size.value (10-55), **5** \* 3 + 10 = 25
- **1** - unused :(
- **6** - particles.opacity.value (0-100%), opacity **6** / 15 = .4 = 40%,
- **1** - particles.shape.type (0, 3-9) (# of sides) For us, **1** % 8 + 3 = 4 = square (10 sides is hardcoded to be a circle)
- **96d3b17fb5b13a** - unused :(

Put those parts together and you get:

<div id="demo-particles"></div>
<particle-effect targetid="demo-particles" particlestring="Science can purify religion from error and superstition. Religion can purify science from idolatry and false absolutes."> </particle-effect>

If you'd like to see random patterns, [check out this page](/hash-test). It's surprisingly fun to mash the refresh button and see what comes up.

#### What's next?

1. I've applied a lot of restrictions to the configuration so that patterns always look somewhat decent (e.g. no enormous shapes are allowed) and not boring (e.g. no casual observer can tell the difference between 99% opaque and 98% opaque). That said, I think there is room to loosen some restrictions to allow a greater variety of patterns.

2. Since colors are random, some color combos are ugly. I'd like to add a restriction that forces complementary colors (by any scheme).
