# Deployment Guide

How to get this site (and every future project) live on GitHub Pages, for free, in about 3 minutes.

---

## One-time setup

1. **Create a GitHub account** if you don't have one: https://github.com/signup
2. **Install Git** if it isn't already: https://git-scm.com/downloads
3. Open `projects.js` and `README.md` and replace `YOUR-USERNAME` / `your-github-username` with your actual GitHub username.

---

## Deploying THIS site (Day 1 — the hub)

### Step 1: Create the repo

Go to https://github.com/new and create a new public repo named exactly:

```
30-days-30-projects
```

Don't initialize it with a README — leave it empty.

### Step 2: Push the code

In your terminal, from the folder containing these files:

```bash
git init
git add .
git commit -m "Day 1: portfolio hub"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/30-days-30-projects.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under "Source", select **Deploy from a branch**.
4. Set Branch to **main** and folder to **/ (root)**. Save.
5. Wait ~30 seconds. The site will be live at:

```
https://YOUR-USERNAME.github.io/30-days-30-projects/
```

That's it. Bookmark that URL — it's the link you give to interviewers.

---

## Deploying each new project (Days 2–30)

For every project, repeat this exact pattern:

### Step 1: Create a new repo per project

Name it something like `day-02-arch-link-shortener` or whatever fits. Make it public.

### Step 2: Push the project

```bash
cd day-02-arch-link-shortener
git init
git add .
git commit -m "Day 2: arch link shortener"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/day-02-arch-link-shortener.git
git push -u origin main
```

### Step 3: Enable Pages

Settings → Pages → deploy from `main` / root. Live at:

```
https://YOUR-USERNAME.github.io/day-02-arch-link-shortener/
```

### Step 4: Update the hub

Back in the `30-days-30-projects` repo, edit `projects.js`. Find day 2, change:

```js
{
  day: 2,
  ...
  live: false
}
```

to:

```js
{
  day: 2,
  ...
  live: true,
  url: "https://YOUR-USERNAME.github.io/day-02-arch-link-shortener/"
}
```

Commit and push. The hub updates itself.

---

## What about projects that need a backend?

GitHub Pages is static-only. For full-stack projects (websockets, APIs, databases), you have free options:

- **[Vercel](https://vercel.com)** — best for Node.js/Next.js backends. Free tier is generous. Deploys from GitHub automatically.
- **[Render](https://render.com)** — free tier supports background workers and websockets.
- **[Cloudflare Workers](https://workers.cloudflare.com)** — free tier handles 100k requests/day. Great for serverless.
- **[Fly.io](https://fly.io)** — small free tier, supports any Docker container.

When you build a full-stack project, you can put the **frontend on GitHub Pages** and the **backend on Vercel/Render**, then have the frontend call the backend API. The hub link still points to the GitHub Pages URL — interviewers don't need to know where the API lives.

---

## Custom domain (optional, not free but cheap)

If you want a real domain like `yourname.dev` instead of `yourname.github.io`:

1. Buy one from Namecheap (~$10–15/yr) or Porkbun (often cheaper).
2. In your repo: Settings → Pages → Custom domain → enter the domain.
3. In your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`.

Totally optional. The default GitHub URL is fine for interviews.

---

## Tips for staying alive over 30 days

- **Push early.** Even if the project is broken, get something on Pages. Iterate later.
- **Don't perfect.** "Shipped and ugly" beats "polished and never finished."
- **Reuse the hub's CSS.** Many projects can crib the same color palette and fonts.
- **Document as you go.** Each project's README should explain what it does and why (mostly: why not).
- **Tweet/post your progress.** External accountability is free fuel.

Good luck. Try to have fun before it stops being fun.
