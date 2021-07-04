---
date: 2021-07-05 00:00:00
title: Next JS
author: Robbie Cook
publish: true
tags:
  - "Development"
  - "Blog Updates"
---

## Next JS

I recently converted my website and blog to Next JS, and brought my lighthouse performance up from 60% to 97% -- while still using an external component library. Fantastic gains.

I have also started using Vercel as my primary CI/CD for websites. It provides so much for free, and is optimised for Next websites, although it can host much more.

### Pain points

There are always pain points, especially with a new library. The only irk I have found is that when using node 14, on my machine, Next keeps throwing memory exceptions intermittently. With node 16, this error disappears completely. It worries me a bit, as node 14 is still lts, and great in most cases.

I'll try and trace the issues down.

Maintaining a website for years is always a big problem. I have found that Next websites seem to show their age quite a lot slower than Gatsby sites, in the one example I have (my personal site).

Let me know what you think!

Till next time
Robbie
