---
author: Wonseok Lee
pubDatetime: 2025-04-13T14:10:28.605Z
modDatetime: 2025-04-13T14:10:28.605Z
title: Why I chose Astro for this blog
slug: why-i-chose-astro-for-this-blog
featured: false
draft: false
tags:
  - framework
  - frontend
description: Astro is good for static websites
ogImage: "https://github.com/wsklee/wsklee.github.io/blob/main/src/assets/images/astrojs.png?raw=true"
---

![Devcontainer Image](../../assets/images/astrojs.png)

## TL;DR

I used **Astro** for this blog because it was content-driven and easy to use. I believe more websites could use Astro!

---

Like many CS students and early-career developers, I dreamed of having my own clean, personal website - something to showcase projects, write blogs, and reflect my growth. I spent quite a bit of time exploring the options out there. By sometime in 2023, I narrowed it down to two contenders: **Next.js** and **Astro**.

I did consider classics like **Jekyll** and **Hugo**, but ultimately ruled them out. While they're great static site generators (and still used by many), I found their their ecosystems a bit dated, and the developer experience not as smooth.

So, how did I choose? Here's why I ended up building this site with Astro.


## Next.js

> Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
> — [Next.js Documentation](https://nextjs.org/docs)

Next.js has been the go-to React framework for a while now. Its widespread adoption in the industry and personal projects make it a reliable choice.

It's also widely used in my university's software engineering projects, and it's often the default choice when someone says they're "building a React web app."

There are also plenty of high-quality starter templates and example repos to kick off a blog or portfolio. One example that caught my eye (and inspired this blog's initial layout) was [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog). It's a cleanly organized setup that combines Tailwind CSS with Markdown blogging.


## Astro

> Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks. If you need a website that loads fast and has great SEO, then Astro is for you.
> — [Astro Documentation](https://docs.astro.build)

Back in 2023, Astro was still a relatively new player in the web dev space. I first came across it through [Fireship's video](https://www.youtube.com/watch?v=gxBkghlglTg), and it instantly caught my attention. The idea of shipping near-zero JavaScript by default and using React (or other frameworks) only when needed was refreshing.

At the time, there weren't a ton of resources or starter templates out there. But one of the early ones that stood out was [AstroPaper](https://github.com/satnaing/astro-paper), a clean and minimalist blog template that aligned well with what I had in mind.

So why did I choose Astro?

## Advantages of Astro

So why did I ultimately go with Astro? Here are a few key reasons that made it the better fit for this blog:

### 1. Content-Driven by Design

> Astro was designed for building content-rich websites. This includes marketing sites, publishing sites, documentation sites, blogs, portfolios, landing pages, community sites, and e-commerce sites. If you have content to show, it needs to reach your reader quickly.
> — [Astro Design Principle](https://docs.astro.build/en/concepts/why-astro/#content-driven)

Astro is built with content in mind. Writing Markdown and rendering it feels natural. You don't need to wrestle with complex strategies just to render a blog post. That makes Astro especially great for blogs, documentation, and portfolios. Astro mentioning this in their design principle is reassuring.

### 2. My Blog is Mostly Static

My blog doesn't need complex client-side interactions or heavy state management. It's mostly just text, images, and a sprinkle of interactivity here and there.

### 3. Avoiding Next.js App Complexity

Next.js is incredibly powerful, but sometimes that power comes with overhead. Features like routing, API routes, dynamic imports, server/client boundaries (especially with the new App Router) can be overkill for a simple blog.

With Astro (so far), I didn't have to think about server vs. client components, or optimizing page loading. The complexity just melts away.

### 4. Learning Curve Was Okay

Even though Astro was relatively new to me with templating and `.astro` extensions, the learning curve felt manageable. They provide a [tutorial](https://docs.astro.build/en/tutorial/0-introduction/) to build a simple blog, which was very helpful in understanding the framework.

And since it supports React and other frameworks, I could bring in components I already knew how to build.

---

## Caveat: When Not to Use Astro

Astro's core focus is not full-blown applications with complex client-side logic, authentication flows, or real-time interactions. If you're building a dashboard, e-commerce site, or SaaS platform, frameworks like **Next.js**, **Remix**, or even **Vite + React** might serve you better.

While Astro's ecosystem is growing rapidly, it's still relatively young compared to Next.js. Libraries and enterprise-ready patterns would be more supported in the React/Next.js world.

--- 

## Conclusion

So... Those were the reasons I went with Astro for this blog.

At the end of the day, building this blog wasn't just about picking the trendiest tech - it was about choosing the **right tool for the job**.

Next.js is powerful and popular. But for a simple, mostly static blog that focuses on writing and showcasing content, Astro just made more sense.

If you're a student or a developer thinking about spinning up content showing site, I'd strongly recommend giving Astro a try. It's also picking up more popularity now in 2025 as the framework is more matured.


Thanks for reading! 🚀 If you want to see more dev posts like this, feel free to stick around.