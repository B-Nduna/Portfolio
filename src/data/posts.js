export const posts = [
  {
    slug: "building-my-foundation",
    title: "Building my Foundation",
    category: "Genesis",
    img: "img/blog1.webp",
    excerpt: "A journey of mastering web development through HTML, CSS and JavaScript.",
    date: "2024",
    content: `
Every developer remembers the first time a browser actually rendered what they typed. Mine was a lopsided heading and a paragraph with the wrong font — and I was hooked anyway.

## Starting with structure

I began with HTML, because everything else needed something to hang off of. Headings, lists, forms, semantic tags — it felt less like "coding" and more like organizing a room before you decorate it. That framing stuck with me: structure first, style second, behavior third.

## Making it mine with CSS

CSS is where a page stops looking like a document and starts looking like *something*. Flexbox and Grid were the two tools that changed how I think about layout entirely — instead of nudging boxes into place with margins and guesswork, I could describe the relationship between elements and let the browser do the arithmetic.

## Bringing it to life with JavaScript

JavaScript was the intimidating one. Variables and functions were fine, but the DOM — actually reaching into a live page and changing it — felt like a different skill entirely. It clicked once I stopped trying to memorize syntax and started building small, dumb things: a button that changes color, a form that validates itself, a menu that opens and closes. Small wins compound fast.

## Where that leaves me

None of this made me an expert overnight, and I don't think "foundation" is something you finish building — it's something you keep reinforcing every time you ship something new. But HTML, CSS, and JavaScript are still the three things I come back to whenever a framework's abstractions stop making sense. Everything else is just a more convenient way of writing the same three languages.
    `.trim(),
  },
  {
    slug: "lessons-learned",
    title: "Lessons Learned",
    category: "Web Design",
    img: "img/blog2.webp",
    excerpt: "A personal reflection on lessons learned from a tattoo parlor website project.",
    date: "2024",
    content: `
Not every project goes the way you plan it, and honestly, those are usually the ones you learn the most from. Building a site for a tattoo studio taught me more about *listening* than it did about code.

## The brief wasn't the brief

The client asked for "something dark and edgy." What they actually needed, once we talked it through, was a site that made booking a consultation feel less intimidating for first-time clients — the edge was already covered by the artwork itself. I'd designed three versions before I understood that the real problem wasn't visual style, it was trust.

## Content is a design constraint too

I underestimated how much a gallery-heavy site depends on the images actually being good, consistently sized, and fast to load. No amount of clever CSS fixes a hero section built around a photo that was never meant to be a hero image. Now I ask for real content — or at least real *dimensions* — before I start laying anything out.

## Small businesses move differently

This wasn't a corporate client with a marketing team. Feedback came in voice notes between appointments, sometimes days apart. I learned to build in a way that let me hand off small, reviewable pieces instead of disappearing for two weeks and presenting a finished product — fewer surprises for both of us.

## What I carried forward

Every client project since has started with more questions and fewer assumptions. "Dark and edgy" taught me that the words a client uses aren't always the words for what they actually need — and that figuring out the difference is part of the job, not a detour from it.
    `.trim(),
  },
  {
    slug: "sim-racing-and-fitness",
    title: "Sim Racing and Fitness",
    category: "Exercise",
    img: "img/blog3.webp",
    excerpt: "Sim racing and fitness enhance my discipline and focus as a developer.",
    date: "2024",
    content: `
People are usually surprised that sim racing and gym time are part of my "developer routine," but they've ended up doing more for my focus than any productivity app I've tried.

## Precision is precision

Sim racing punishes sloppiness immediately — brake a fraction too late and you're in the wall, no warning, no partial credit. Debugging has the same texture: a misplaced condition or an off-by-one error doesn't care how good the rest of your code is. Both taught me to slow down at the exact moment I want to rush, which is usually when I'm closest to getting something right.

## Training the reset

What I actually got better at wasn't lap times, it was recovering from mistakes without spiraling. Spin the car, breathe, get back on line. Break the build, breathe, read the actual error message instead of panic-editing five files at once. That's a trainable skill, and I trained it on a track before I noticed I was using it at a keyboard.

## Fitness as maintenance, not motivation

I don't go to the gym because I feel inspired — most days I don't. I go because sitting at a desk all day quietly wrecks posture, energy, and sleep, and none of those show up as a "bug" until they're already a problem. Treating fitness as maintenance, the same way I'd treat dependency updates or refactoring, made it something I actually stick to.

## The throughline

Discipline doesn't care what domain you practice it in. Whatever builds your ability to stay calm, stay precise, and keep showing up — on a track, in a gym, or in a codebase — ends up making you better at all three.
    `.trim(),
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
