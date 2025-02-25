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
