# Tyler — getting set up to edit the EyePro site

This is a step-by-step guide. **You don't need to be a developer.** You'll be asking Claude (an AI assistant) to make changes for you in plain English, then pushing them to live.

You have full autonomy to ship changes — you don't need to wait for Brett. The site has guardrails so a mistake never breaks things permanently:

- Builds with errors won't deploy. Vercel only ships green builds.
- Every push is reversible. If you ship something wrong, just make the correct change and push again — each push replaces the previous deployment in ~1 minute.
- Locally previewing first (`localhost:3000`) catches almost everything before it ever reaches the live site.

The whole flow once you're set up:

1. Start Claude Code in the project folder
2. Tell it what you want changed ("update Haymarket Saturday hours to 10am–2pm")
3. Eyeball the change at `localhost:3000`
4. Push it — either to a preview URL (if you want to look at it on a real URL first) or straight to live

**Setup time:** ~30–45 min, one-time. After that, making a change takes under 5 minutes.

---

## Phase 1 — Accounts (10 min)

You need three accounts:

### 1.1 — GitHub account

- Go to [github.com/signup](https://github.com/signup)
- Use your work email
- Pick a username (e.g. `tyler-eyepro` or your name)
- **Send Brett your GitHub username** — he needs to add you as a collaborator on the repo before you can push changes

### 1.2 — Anthropic account (for Claude Code)

- Go to [claude.com](https://www.claude.com) and sign up
- Subscribe to **Claude Pro** ($20/month) — includes Claude Code usage with reasonable limits
- Without Pro, Claude Code uses pay-per-use API billing which can be unpredictable; Pro is simpler

### 1.3 — Wait for Brett to confirm

Brett needs to:
- Add you as a collaborator on `studiobrett/eyeprowebsite` (GitHub will email you an invite — accept it)
- That's it on his end

---

## Phase 2 — Install the tools (15 min)

This is one-time. Pick the section for your operating system.

### macOS

Open the **Terminal** app (Cmd+Space → type "terminal" → enter). Paste each line below, press Enter, wait for it to finish before pasting the next.

```bash
# 1. Install Homebrew (the Mac package manager) — if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. Install Node.js (the JavaScript runtime that runs the website)
brew install node

# 3. Install Git (for version control) and the GitHub CLI
brew install git gh

# 4. Install Claude Code
npm install -g @anthropic-ai/claude-code
```

### Windows

Use **PowerShell** (Start → type "powershell" → Run as Administrator). Easiest path is to install via **winget**:

```powershell
winget install OpenJS.NodeJS
winget install Git.Git
winget install GitHub.cli
npm install -g @anthropic-ai/claude-code
```

Close and reopen PowerShell after each install.

---

## Phase 3 — Sign in to your tools (5 min)

In your terminal:

```bash
# Tell Git who you are (use your GitHub username and email)
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"

# Sign in to GitHub through the CLI
gh auth login
# Choose: GitHub.com → HTTPS → Yes (auth Git) → Login with web browser
# It will show a code, hit Enter, paste the code in your browser, approve
```

When `gh auth status` says "Logged in as ...", you're good.

---

## Phase 4 — Get the project (5 min)

```bash
# Move into a folder where you keep projects
cd ~
mkdir -p Projects
cd Projects

# Clone the repo
gh repo clone studiobrett/eyeprowebsite
cd eyeprowebsite

# Install all the website's dependencies
npm install
```

That last step takes ~30 seconds.

---

## Phase 5 — See it running locally (2 min)

```bash
npm run dev
```

This starts the site running on your computer. Open [http://localhost:3000](http://localhost:3000) in a browser. You should see the EyePro site exactly as it looks live.

While `npm run dev` is running, any change you make to the code shows up in the browser within a second. **Leave that terminal window open.** If you want to stop the server, hit Ctrl+C in that terminal.

---

## Phase 6 — Make your first change with Claude Code (10 min)

Open a **second terminal** (the first one is busy running the dev server). Navigate to the project folder and start Claude Code:

```bash
cd ~/Projects/eyeprowebsite
claude
```

The first time you run `claude`, it'll ask you to log in via your Anthropic account in a browser. Approve it. After that, you'll see a chat prompt.

### Two ways to push: preview URL or straight to live

You have full push access — you can deploy to live whenever you want, no approval needed. The choice you'll make every time you push is **preview vs. live**:

| Use a **preview branch** when... | Push **straight to live** (`main`) when... |
|---|---|
| You want to see how a layout/design change looks on a real URL before going live | A factual update is confirmed correct (phone number, hours, address) |
| The change is big enough you want to sit on it overnight before shipping | You're fixing a typo |
| It's experimental — "I'm trying out a new homepage" | Adding/removing an accepted insurance |
| The change touches a lot of files at once | A holiday hours change that needs to go live now |
| You want to share it with someone (Brett, family, a friend) before publishing | A small, obvious correction |

**A preview URL is for *your* peace of mind, not for review by Brett** — you don't need permission to push to live. It's a tool for sanity-checking your own work on a real-world URL before the public sees it.

**Default to preview** when you're not 100% sure. Live takes ~1 minute to deploy. A wrong push briefly puts a wrong phone number on the live site until you fix it — annoying but not catastrophic. Just push the correction.

### Always test in localhost first

Whether you're about to push live or to a preview branch, **look at localhost:3000 first**. The change shows up in your browser within a second of Claude finishing the edit. If it looks broken or wrong locally, it'll be broken or wrong live.

### Talk to Claude in plain English

In the Claude Code chat, just describe what you want:

```
Change the Haymarket Saturday hours from "9:00 AM - 3:00 PM" to "10:00 AM - 2:00 PM"
```

Claude will find the right file, make the change, and tell you what it did. Look at your browser at localhost:3000 to verify.

### Pushing to a preview branch

For experiments and changes you want to look at on a real URL first:

```bash
git checkout -b tyler-some-experiment
git add .
git commit -m "Trying a different homepage hero"
git push -u origin tyler-some-experiment
```

A Vercel preview URL is generated within seconds. Open it, eyeball it, share it with anyone you want feedback from. When you're ready to ship it to live:

```bash
git checkout main
git merge tyler-some-experiment
git push origin main
```

That merges your branch into main and pushes — your change is live within ~1 minute.

(If you change your mind and never want to ship the experiment, just leave the branch alone. It costs nothing to keep around.)

### Pushing straight to live

For confirmed factual updates:

```bash
git add .
git commit -m "Update Haymarket Saturday hours"
git push origin main
```

Vercel rebuilds and deploys to **eyeprova.com** within ~1 minute. Refresh the live site to confirm.

If you ever pushed something wrong to main, don't panic — just make the corrected change and push again. Each push fully replaces the deployed site.

---

## Common things you might want to do

Just describe these to Claude — it'll handle the technical part.

| What you want | Plain English to Claude |
|---|---|
| Change a phone number | "Change the Winchester phone to 540-555-1234" |
| Update hours | "Make Haymarket open Sundays 12pm to 4pm" |
| Edit a service description | "Rewrite the LASIK section to mention we partner with Inova" |
| Add a new accepted insurance | "Add Aetna to the insurance list" |
| Change a page title | "Change the team page heading from 'Our Team' to 'Meet Our Doctors'" |
| Tweak text on the home page | "On the homepage hero, change the subheading to 'Trusted vision care for your whole family'" |

---

## Troubleshooting

**`command not found: claude`** — close and reopen your terminal. If still broken, run `npm install -g @anthropic-ai/claude-code` again.

**`fatal: Authentication failed` when pushing** — run `gh auth login` again.

**`npm install` fails** — try `npm install --legacy-peer-deps`.

**Localhost:3000 shows nothing / "site can't be reached"** — your `npm run dev` terminal probably crashed. Go back to it, hit the up arrow, press Enter.

**Claude made a change you don't want** — in the terminal: `git checkout .` (this throws away unsaved changes). Or open the file and undo manually.

**You're stuck** — text Brett a screenshot of what you're seeing.

---

## What NOT to do

- ❌ Don't share secrets, API keys, or patient info in your prompts to Claude
- ❌ Don't run any commands that delete files or "force push" without thinking twice — these can rewrite history in ways that are hard to recover from
- ❌ Don't commit changes to dependency files (`package-lock.json`) unless Claude tells you it's intentional — usually it isn't

If you're ever unsure whether something is safe to do, ask Claude: *"is this command destructive? what does it actually do?"* — it'll explain.

---

## How edits get to the live site

```
Push to main → Vercel rebuilds → live at eyeprova.com (~1 minute)

OR

Push to a branch → Vercel preview URL → look at it → merge to main when ready → live
```

You don't need to touch Vercel directly — pushing to GitHub is enough. Vercel watches the GitHub repo and deploys automatically.

If a build fails (because of a code error), Vercel won't deploy it — the previous version stays live. You'll get an email saying the build failed. Fix the issue and push again.

---

Questions? Text Brett.
