---
slug: "/softball-app"
title: "I'm Sick of Coach Batting Me Last"
subtitle: "Automated Softball Lineup Optimizer Using Historical Hitting Data"
firstposted: "2020-10-26"
lastupdated: "2020-10-26"
titleimage: "https://live.staticflickr.com/65535/50333837223_f54f7c014c_o.jpg"
titleimagetopmargin: -127
hidden: false
---

At the most basic level this project is a web site that collects offensive metrics from a softball/baseball/kickball game and runs that data through an algorithm that attempts to tell the manager the optimal lineup for the next game.

This project was created to solve two issues:

1. Finding the best lineup for my softball team using an objective process with no guess work.
2. So that I can defer criticism of my lineup choices to the "algorithm" when somebody complains.

![Rockies vs Nationals -- Maybe the teams would do better if they used the softball.app lineup optimizer :)](https://live.staticflickr.com/65535/50333837223_f54f7c014c_o.jpg)

## Welcome to Softball.app!

Softball.app is a [Progressive web app](https://en.wikipedia.org/wiki/Progressive_web_application) for optimizing softball/baseball/kickball lineups via Monte Carlo simulations.

Watch the video to find out more or just try it out here [https://softball.app](https://softball.app).

<iframe
  width="560"
  height="370"
  src="https://www.youtube.com/embed/XzFc3eDHfk4"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Current Features:

- **Batting lineup optimization** using an open source optimization algorithm (https://github.com/thbrown/softball-sim) (requires a free account)
- **Cloud backup and cross-device sync** (requires a free account)
- **YouTube video walkup songs**
- **Data export** as a json file
- **Collect game data offline**

# The Optimization

While using softball.app to score a game, the scorer enters information about the result of plate appearance for players in the lineup. Each plate appearance will result in one of the following outcomes (Out, SAC, E, BB, 1B, 2B, 3B, HRi, HRo). These outcomes are mapped to a number between 0 and 4 representing the number bases the player was awarded for the result of their plate appearance:

| Result           | Bases |
| ---------------- | ----- |
| Out, SAC\*, E, K | 0     |
| 1B, BB\*         | 1     |
| 2B               | 2     |
| 3B               | 3     |
| HRi, HRo         | 4     |

The simulation then runs simulated games on every possible lineup. During simulated games, the historical result data collected during scoring is used to determine probabilities of any given player getting any given number of bases as the result of a simulated plate appearance.

By default, one million games are simulated for each lineup. The number of runs scored in each simulated game is averaged and recorded. After all simulated games have completed for every possible lineup, the best scoring lineup and its corresponding estimated score are delivered to the user.

![Optimized co-ed batting lineup](https://i.imgur.com/PrghHEl.png "Optimized co-ed batting lineup")

Things that are not accounted for in the simulation:

- Double/triple plays
- Stolen bases
- Players who were on base advancing more bases than the hitter

_\*We can debate about how walks or sacrifices should be counted. It probably depends on what flavor of the sport you are playing. IMHO sacrifices should be counted as outs in slowpitch softball and kickball, but not baseball or fastpitch. In any event, these mapping are configurable (or will be configurable soon). So you are welcome to impose your own philosophy._
