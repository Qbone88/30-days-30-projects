// Edit this file as you build each project.
// When you finish a project, set `live: true` and add the `url`.
// The site updates automatically — no other file needs to change.

const GITHUB_USERNAME = "Qbone88"; // ← change this

const PROJECTS = [
  {
    day: 1,
    title: "The Portfolio Hub",
    desc: "This site. The mothership. A directory of all 30 projects, built first because I needed somewhere to put the others.",
    tags: ["html", "css", "js"],
    live: true,
    current: true,
    url: "./",
    repo: "30-days-30-projects"
  },
  {
    day: 2,
    title: "Procrastination Stopwatch",
    desc: "Tracks how long you've been avoiding the thing. Gets progressively more judgmental.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 3,
    title: "Cat Fact Terminal",
    desc: "A fake Linux terminal that only knows one command: meow. Outputs cat facts. Has tab completion. For cats.",
    tags: ["frontend", "api"],
    live: false
  },
  {
    day: 4,
    title: "Arch Linux Link Shortener",
    desc: "Shortens any URL, but every link redirects through a page that proudly announces I use Arch Linux. Btw.",
    tags: ["full-stack", "api"],
    live: false
  },
  {
    day: 5,
    hidden: true,
    title: "Decision Coin",
    desc: "A coin flipper that always lands on the option you secretly didn't want.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 6,
    hidden: true,
    title: "Webcam Mood Ring",
    desc: "Reads the dominant color from your webcam and assigns you a mood. Mostly tells you that you're 'beige'.",
    tags: ["frontend", "webcam"],
    live: false
  },
  {
    day: 7,
    hidden: true,
    title: "Multiplayer Cursor Chaos",
    desc: "See every other visitor's cursor in real time. Doodle on a shared canvas. Pure anarchy.",
    tags: ["full-stack", "websockets"],
    live: false
  },
  {
    day: 8,
    hidden: true,
    title: "Regex Crossword",
    desc: "Procedurally generated regex puzzles. For when you want to suffer recreationally.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 9,
    hidden: true,
    title: "Useless Password Generator",
    desc: "Generates extremely secure passwords that no website on Earth will actually accept. hunter2🦄💀",
    tags: ["frontend"],
    live: false
  },
  {
    day: 10,
    hidden: true,
    title: "Tab Hoarders Anonymous",
    desc: "A support group for people with 80+ open browser tabs. Supportive AI counselor included.",
    tags: ["full-stack", "ai"],
    live: false
  },
  {
    day: 11,
    hidden: true,
    title: "The Excuse Machine",
    desc: "Generates increasingly absurd excuses for being late. From traffic to time-traveling raccoons.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 12,
    hidden: true,
    title: "Favicon Pixel Pet",
    desc: "A Tamagotchi that lives inside your browser tab's favicon. You can only see it when the tab is small.",
    tags: ["frontend", "canvas"],
    live: false
  },
  {
    day: 13,
    hidden: true,
    title: "Conspiracy Generator",
    desc: "Markov-chain conspiracy theories with fabricated evidence and citations to publications that don't exist.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 14,
    hidden: true,
    title: "Tic-Tac-Toe (50×50)",
    desc: "Multiplayer tic-tac-toe with a fifty by fifty board. Games last for weeks. Friendships do not.",
    tags: ["full-stack", "websockets"],
    live: false
  },
  {
    day: 15,
    hidden: true,
    title: "CSS Boxing Match",
    desc: "Two divs fight to the death. You control one. The CSS is the combat engine.",
    tags: ["frontend", "css"],
    live: false
  },
  {
    day: 16,
    hidden: true,
    title: "Compliment Roulette",
    desc: "Click for a compliment. Sometimes it's sweet. Sometimes it's a roast. You don't get to choose.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 17,
    hidden: true,
    title: "Is It Tuesday?",
    desc: "Single-purpose website. Tells you if it's Tuesday. That's the whole product.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 18,
    hidden: true,
    title: "Keyboard Symphony",
    desc: "Every key on your keyboard plays a different instrument. The result is always horrible.",
    tags: ["frontend", "audio"],
    live: false
  },
  {
    day: 19,
    hidden: true,
    title: "Pirate Lorem Ipsum",
    desc: "Filler text generator, but make it nautical. Yarr ipsum dolor sit amet, ye scurvy dog.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 20,
    hidden: true,
    title: "Useless Voting Booth",
    desc: "Cast your ballot on questions that don't matter. Cereal first or milk first? The world deserves to know.",
    tags: ["full-stack", "db"],
    live: false
  },
  {
    day: 21,
    hidden: true,
    title: "Infinite Cloud Generator",
    desc: "An endless procedurally-generated sky. Just clouds. Forever. Calming, mostly.",
    tags: ["frontend", "canvas"],
    live: false
  },
  {
    day: 22,
    hidden: true,
    title: "Wikipedia Rabbit Hole Race",
    desc: "Multiplayer game: race from one Wikipedia article to another using only internal links. Pure chaos.",
    tags: ["full-stack", "websockets"],
    live: false
  },
  {
    day: 23,
    hidden: true,
    title: "Yelling Into the Void",
    desc: "Type anything. Hit send. It goes nowhere. It's not stored. Nobody reads it. It's free now.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 24,
    hidden: true,
    title: "The Sentient Snake",
    desc: "Classic Snake, but the snake has opinions. Refuses to eat certain foods. Judges your high score.",
    tags: ["frontend", "canvas"],
    live: false
  },
  {
    day: 25,
    hidden: true,
    title: "Bug Therapist",
    desc: "Paste a stack trace. Get emotional support. Sometimes a fix. Mostly just validation.",
    tags: ["full-stack", "ai"],
    live: false
  },
  {
    day: 26,
    hidden: true,
    title: "The Most Annoying Form",
    desc: "A signup form that judges your every input. Your password is bad. Your name is suspicious. Your email looks fake.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 27,
    hidden: true,
    title: "Browser Drum Machine",
    desc: "808-style step sequencer in the browser. Make beats. Annoy your roommates.",
    tags: ["frontend", "audio"],
    live: false
  },
  {
    day: 28,
    hidden: true,
    title: "Collaborative Doodle",
    desc: "A real-time shared whiteboard. Everyone draws on the same canvas. There are no rules.",
    tags: ["full-stack", "websockets"],
    live: false
  },
  {
    day: 29,
    hidden: true,
    title: "Procedural Resume Generator",
    desc: "Generates increasingly impressive (and increasingly fake) resumes. Includes references to Cthulhu.",
    tags: ["frontend"],
    live: false
  },
  {
    day: 30,
    hidden: true,
    title: "A Eulogy",
    desc: "Final reflection. Stats from the past 29 days. Commits made. Coffee consumed. Lessons learned. Friends lost.",
    tags: ["frontend"],
    live: false
  }
];
