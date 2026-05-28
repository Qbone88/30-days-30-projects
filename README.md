# 30 Days · 30 Projects

A 30-day challenge to build 30 quirky, mostly useless, occasionally delightful web projects. Each one lives in its own repo and ships to its own GitHub Pages URL.

**Live site:** https://Qbone88.github.io/30-days-30-projects/

## The rules

1. One project per day. No exceptions.
2. Each project gets its own repo + its own GitHub Pages deployment.
3. Every project must be quirky, weird, or have no real reason to exist.
4. If it's useful, it's a bug.
5. Ship before midnight or live with the shame.

## The manifest

| Day | Project | Status |
|----:|---------|--------|
| 01 | The Portfolio Hub | ✅ live |
| 02 | Procrastination Stopwatch | ◌ pending |
| 03 | Cat Fact Terminal | ◌ pending |
| 04 | Arch Linux Link Shortener | ◌ pending |

## How to update this hub when you ship a new project

Open `projects.js` and find the project you just finished. Change:

```js
live: false
```

to:

```js
live: true,
url: "https://YOUR-USERNAME.github.io/day-XX-project-name/"
```

Commit, push, and the hub will automatically update the stats, progress bar, and unlock the card.

## Tech

Plain HTML + CSS + vanilla JS. No build step. Deploys instantly to GitHub Pages.

## License

MIT. Take what you want, but the bad ideas are mine.
