---
date: 2021-07-11 00:00:00
title: Making a markdown editor
author: Robbie Cook
publish: true
tags: 
  - "Development" 
  - "Blog Updates"
---

While writing my blog posts, I have been quite unsatisfied with some of the editors that exist. Contentful's editing experience is not full page or rich enough for my needs, Sanity looks quite ugly, CloudCannon's editor's great, but I don't need Jekyll, and with TinaCMS I need to use a starter (I'm sure I am wrong with some of these assumptions).


So, I've decided to have a crack at making my own editor -- here's a screenshot of me typing this right now:


![](https://editor161350-dev.s3.us-east-1.amazonaws.com/protected/us-east-1%3A796ecdb8-f221-456a-a0b4-02b683ebd3ae/Markdown%20Editor%20-%20By%20Robbie%202021-07-11%2018-35-44.png)


Rich text + images in -> markdown out. There's _so_ much more I have to do before it's usable. However, if you want to have a look, it is on [https://editor.robbie.digital](https://editor.robbie.digital).


Please let me know if you have any non-obvious features you'd like. You can sign up, but for you, this won't do anything yet. I'm hesitant to expose image uploading to public users. I may end up requiring mobile numbers for user signup, along with automated scanning of images, before I let authenticated users upload images.


### Image upload 🎉


![](https://editor161350-dev.s3.us-east-1.amazonaws.com/protected/us-east-1%3A796ecdb8-f221-456a-a0b4-02b683ebd3ae/giphy.gif)


Finally, at long last, images are now easy to insert into my blog!


My previous setup had me drawing from public/ in my Next.js site, which is not a great solution.


Now, images are hucked to s3 public storage, where I can upload them in the editor, and then copy-and-paste the output to my git repo. My favourite part of this is being able to preview the images in editor too.


Get ready for some serious me-mes to annoy you.


![](https://editor161350-dev.s3.us-east-1.amazonaws.com/protected/us-east-1%3A796ecdb8-f221-456a-a0b4-02b683ebd3ae/giphy%20%281%29.gif)


Best,

Robbie