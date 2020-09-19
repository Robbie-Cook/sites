---
date: 2020-09-17 00:00:00
title: Website Updates
author: Robbie Cook
publish: true
---

## Website Updates

Recently, I have had some problems with React Context. My website is split up between two main packages – the main site, and my react components library (you can see these on GitHub [here](https://github.com/Robbie-Cook/gatsby-sites)). Gatsby is not building the site when I call useContext -- I get a hooks error (321), but develop works fine.

I have my suspicions about what is causing the problem (looking at you, \`gatsby-browser.js\`), but for now, I have disabled light mode on my components in react-components. Heartbreaking. But I am confident I will find the source of the problem before long.

## CC

This is probably the first Gatsby blog on CloudCannon. I believe this is a great example to show the rest of the team, and to iron out some of the major problems of hosting an active Gatsby site on CloudCannon.

Prebuild scripts are the main method we use at the moment to publish non-Jekyll products on our system, and a full blog post and docs will be forthcoming soon\!<br>If you are impatient, I recommend checking out the source code for this website (https://github.com/Robbie-Cook/gatsby-sites), and you won't have to look very hard to find the super-secret sauce behind prebuild scripts.

Unfortunately prebuild script failures do not fail the build. I am sure this will be resolved soon. Occasional downtime of this site and other non-Jekylll sites are (almost) inevitable until then.

## Final Thoughts

In my mind, content management is definitely a hot-button industry at this moment. It is more important than ever, but hardly anyone does it right. Although WordPress remains one of the most popular systems, I personally see some insurmountable limitations of the system that cause fatal flaws. If you are thinking of using it, I simply say "don't." WordPress is a system you don't want on your C.V.

Sanity, Contentful, and Gatsby Cloud are systems closer to my heart, and I will be starting to research and use these too soon in the future.&nbsp;

Until next time,<br>Robbie