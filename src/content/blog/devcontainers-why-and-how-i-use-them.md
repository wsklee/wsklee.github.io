---
author: Wonseok Lee
pubDatetime: 2025-04-12T09:27:28.605Z
modDatetime: 2025-04-12T09:27:28.605Z
title: Devcontainers - Why and How I use them
slug: devcontainers-why-and-how-i-use-them
featured: false
draft: false
tags:
  - configuration
  - environment
  - containers
description: Simplify dev environment setup.
ogImage: "/assets/devcontainer.webp"
---

![Devcontainer Image](../../assets/images/devcontainer.webp)

## TL;DR

I use **Devcontainers** to spin up consistent and convenient dev environments for projects including for this blog in **Astro**. This guide walks through my setup using a `Dockerfile` and `devcontainer.json`, including project structure, config files, and gotchas I ran into. If you’re looking to make your dev setup portable and painless, this post is for you.

---

## 🤔 What Are Devcontainers and Why Should You Use Them?

### The Problem

As a CS undergrad, I work on a lot of group projects — and standardizing the development environment across teammates is always a hassle.

You’ll often have:
- A mix of operating systems (Windows, macOS, Linux)
- Different terminal shells (PowerShell, bash, zsh)
- Different VS Code extensions or IDE setups

And inevitably, someone runs into the dreaded:

	“It works on my machine 😅”

This problem can stem from countless subtle differences: Python versions, missing dependencies, mismatched config files, or tools installed globally vs locally. Even following detailed setup instructions doesn’t guarantee success. Furthermore, tweaking your environment mid-project can break everything.

Using GitHub helps with code, but it doesn’t solve environment parity. Everyone still has to manually replicate the right runtime, packages, and tools.

---

### The Solution: Devcontainers

**Devcontainers** (short for [Development Containers](https://containers.dev/)) let you define the entire development environment — including language runtimes, tools, extensions, and settings — using `Docker` and `VS Code`.

Instead of running your editor on your local system, your project runs inside a containerized environment. VS Code just connects to it.

This means:
- Everyone on your team works in the same environment
- No more environment-specific bugs or config issues
- Setup becomes as simple as: “Open in Container”

---

### ✨ Why Devcontainers Are a Game-Changer
- No more “works on my machine” issues
- Instant onboarding — new team members are up and running in minutes
- Effortless context switching — jump between projects with completely isolated environments
- Cross-platform consistency — works the same on Windows, macOS, or Linux

---

## 🗂️ How Should You Structure a Project with Devcontainers?

Here’s the folder layout I used for this Astro blog:

```bash
.
├── .devcontainer/
│   ├── devcontainer.json
│   └── Dockerfile
├── src/
├── package.json
```

> Tip: Use `.devcontainer` as the standard folder name. VS Code recognizes it automatically.

---

## ⚙️ What Should `devcontainer.json` Look Like?

This is the main config file for your dev container. Here’s an example for an **Astro** project:

```jsonc
{
  "name": "Astro Development",
  "dockerFile": "Dockerfile", // Use a custom Dockerfile to build the container
  "forwardPorts": [4321],
  "customizations": {
    "vscode": {
      "extensions": [
        "astro-build.astro-vscode",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "bradlc.vscode-tailwindcss"
      ]
    }
  },
  "postCreateCommand": "npm install", // Automatically run after the container is built
  "remoteUser": "node",
  "mounts": [
    // Create a persistent Docker volume for node_modules 
    // so they don’t get overwritten on rebuild
    "source=astro-paper-node-modules,target=/workspace/node_modules,type=volume"
  ],
  // Mount the local project folder into the container at /workspace
  "workspaceMount": "source=${localWorkspaceFolder},target=/workspace,type=bind,consistency=cached",
  "workspaceFolder": "/workspace"
}
```

## 🐋 What Does a Minimal Dockerfile Look Like?

### Astro (Node.js)
```bash
FROM node:20-bullseye

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `SHELL` so it'll be easier to run commands
ENV SHELL=/bin/bash

WORKDIR /workspace

# Set ownership of workspace directory
RUN chown -R node:node /workspace

USER node
```

## So... What can I do with this?

By building on the official node:20 image, I get all the necessary Node.js tooling out of the box. Adding basic dev tools like less, man, and sudo makes the container feel more familiar. 

Granting the node user sudo access and ensuring proper directory permissions means I can safely run commands or install things on the fly without switching users or hitting permission errors. 

Combined with the devcontainer.json, this Dockerfile gives me a lightweight but fully-featured dev environment that works seamlessly across devices and team setups. In any machine, I would just need Docker and VSCode to open the project repository in Devcontainer, and I would have all the dependencies settled out to run the application. Version control through git could also be configured.


---

## Common Problems (And How to Fix Them)

1. Why can’t I access my dev server?

You likely need expose your devcontainer to the host machine
Use
```bash
npm run dev -- --host
```

2. Why aren’t my extensions working?

Make sure "extensions" are listed inside your devcontainer.json. VS Code installs these per-container.


## ✅ Conclusion: Why You Should Try Devcontainers

If you work across different stacks like I do (e.g., frontend with Astro, backend with FastAPI), Devcontainers are a no-brainer. You get consistent, isolated environments with zero setup pain — and you can version control everything.

### 🚀 Ready to Try It?

I highly recommend trying out with [Devcontainer with Python](https://github.com/microsoft/vscode-remote-try-python) provided by Microsoft

Click on the `Dev Containers` button in github and you will try out a ready-made python devcontainer example

###  🔗 Useful Links
- [Devcontainers Docs](https://containers.dev/overview)
- [VSCode with Devcontainers](https://code.visualstudio.com/docs/devcontainers/containers)
- [Docker Docs](https://docs.docker.com/)
- [VSCode Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
