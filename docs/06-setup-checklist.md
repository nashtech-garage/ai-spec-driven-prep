# Setup Checklist

**Estimated time:** 30 to 60 minutes, depending on your machine and network.

Complete this checklist before the hands-on part of the workshop. The organizers may send additional instructions, such as the demo project and access details. Follow those instructions if they differ from this page.

## Required software

- [ ] **Node.js LTS** (version 24 or the current LTS line recommended by the organizers). Check with `node -v`.
- [ ] **Git**. Check with `git --version`.
- [ ] **Visual Studio Code**.
- [ ] **GitHub Copilot** and **GitHub Copilot Chat** extensions. Sign in and confirm you can send a message to a model.
- [ ] **Python 3.11 or newer** and **uv**, needed for the Spec Kit command-line tool. Expo alone does not need Python. Install uv from the [official guide](https://docs.astral.sh/uv/getting-started/installation/).

## Optional, for viewing the app

- [ ] **Expo Go** on a phone. Check that your phone's Expo Go version supports the SDK used by the demo.
- [ ] A browser, for running the Expo web version. This is the main route for the workshop.

No Android Studio or Xcode is required for the Expo web route or Expo Go. Native simulators and native builds have their own requirements.

## Confirm your tools work

Open a terminal and run:

```powershell
node -v
npm -v
git --version
uv --version
```

Then open VS Code, open Copilot Chat, and send a simple message such as *"Explain what a JavaScript array is in one sentence."*

## Before the session

- [ ] Read sections 1 to 5 of this guide.
- [ ] Complete the [self-check](/07-self-check-and-exercise).
- [ ] Make sure you can access the demo project, or know how to ask the organizers for it.
- [ ] Make a backup or use Git before experimenting with any project.
- [ ] Close unrelated apps and notifications so the live demo is easier to follow.

## Troubleshooting

- **`node` or `uv` not found:** restart the terminal, then VS Code. If it still fails, check the PATH setting.
- **Copilot does not respond:** confirm you are signed in and have access to a model. Check your organization's Copilot policy if needed.
- **Slash commands do not appear:** open the project folder itself in VS Code, then reload the window.
- **Network or firewall blocks installation:** tell the organizers before the session. Do not promise that a live generation will work offline.

## Security reminder

Never store or paste API keys, passwords, tokens or personal data into an AI prompt, project file or screenshot. If you accidentally expose a secret, revoke it and create a new one.
