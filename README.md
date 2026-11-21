<h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/public/logos/u-alright-m8-logo-white.svg">
    <img src="assets/public/logos/u-alright-m8-logo-black.svg" alt="u alright m8" width="420">
  </picture>
</h1>
https://536738waes.github.io/u-alright-m8/

A one-page, Y2K-era social profile page built with HTML, CSS and Bootstrap (+0.9% sneaky JavaScript for the media player ONLY due to there being no ActionScript/Flash widget equivalent in 2026.)

## Contents

- [Purpose](#purpose)
- [Colour and UI stories](#colour-and-ui-stories)
- [User stories](#user-stories)
- [Features](#features)
- [How the code works](#how-the-code-works)
- [Wireframes](#wireframes)
- [Design process](#design-process)
- [Testing](#testing)
- [Bugs](#bugs-and-fixes)
- [Deployment](#deployment)
- [AI reflection](#ai-reflection)
- [Credits](#credits)

## Purpose

Ahh.. lovely lovely MySpace.<br>
Before influencer culture, dance challenges and AI generated slop.<br>
Your friend count didn't matter but who were the top 8 friends in your grid was priority<br>
Discovering a great band you've never heard of on someone's profile<br>
Exploring the newtro trend x Y2K nostalgia trends on TikTok:<br> 
I made this because it made me nostalgic:<br> 
MySpace was the pillar of my youth: music was my life (still is), emo girl profiles' shaped how I did my hair, dressed, listened to<br>
All the things that we loved and loved together were laid out on a simple page alongside music as a common vein alongside it<br>
Music on social media was never supposed to be background music to a post;<br>
Music is integral to your self identity just as your profile photo shows your face.<br> 
This is my sincere tribute in 2026; a 2000 me built with 2026 code and AI tooling<br>
Deliberate bare-bones HTML5 to reflect the era of social media during this time<br>
Giving it genuine charm; relatable to those who was part of the MySpace days<br>
I give you u alright m8 - because I can't use MySpace legally, Justin Timberlake has the rights I believe<br>
Also: SpaceHey is restricted to US only so I'm building this for the UK folks.<br>
Here's your hit of nostalgia during a time where we're sick of Meta and TikTok sometimes.<br>


## User value

The "Y2K" trend has always been a popular aesthetic / social media trend.<br>
It's a verstile light-weight site to repurpose for creative music marketing campaign(s) (e.g. a band/artist create their u alright m8 page as an addition to their marketing campaign.):<br>
Due to:<br>
- it's wholly customisable
- the music player is interactive and mp3 files can be directly uploaded in
- it's as close to an authentic MySpace page as a 2026 code offering can muster
- I'm sure there are many artists you can think of who has used the y2k trend in their music, social media - this will be a welcome addition to their marketing campaign; shared across modern social networks (like their Instagram, TikTok, YouTube)

## Colour and UI stories

Each friend in PT's Top 8 has their own palette, background, cursor and track, and each style card set out that look before the page was built. PT comes first, with her real photos from 2002 to 2008, then JET and the rest of her Top 8; her friends are fictional, with AI-assisted artwork. Full-size cards are in `docs/cards/`.

<table>
<tr><th>Style card</th><th>Cursor and pointer</th><th>Background</th><th>Colours</th></tr>
<tr>
<td width="260"><img src="docs/cards/web/pt.jpg" alt="PT style card" width="260"></td>
<td align="center"><img src="assets/images/cursor.png" alt="PT cursor" width="32"> <img src="assets/images/cursor-pointer.png" alt="PT pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/pt.jpg" alt="PT background" width="120"></td>
<td><b>PT</b><br>`#0b0b0b` `#ffffff` and greys<br><sub>Tiled background</sub></td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/jet.jpg" alt="JET style card" width="200"></td>
<td align="center"><img src="assets/images/jet/cursor.png" alt="JET cursor" width="32"> <img src="assets/images/jet/pointer.png" alt="JET pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/jet.jpg" alt="JET background" width="120"></td>
<td><b>JET</b><br>`#09090b` `#27272a` `#ffffff` `#d4d4d8`<br><sub>Centred NOSFERA2 logo, not tiled</sub></td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/glitter-jelly-princess.jpg" alt="glitter jelly princess style card" width="200"></td>
<td align="center"><img src="assets/images/glitter-jelly-princess/cursor.png" alt="glitter jelly princess cursor" width="32"> <img src="assets/images/glitter-jelly-princess/pointer.png" alt="glitter jelly princess pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/glitter-jelly-princess.jpg" alt="glitter jelly princess background" width="120"></td>
<td><b>glitter jelly princess</b><br>`#cfe8fa` `#ffffff` `#2d0036` `#f9c5dc`</td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/peppy.jpg" alt="PEPPY style card" width="200"></td>
<td align="center"><img src="assets/images/peppy/cursor.png" alt="PEPPY cursor" width="32"> <img src="assets/images/peppy/pointer.png" alt="PEPPY pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/peppy.jpg" alt="PEPPY background" width="120"></td>
<td><b>PEPPY</b><br>`#0d140e` `#1a2412` `#ecfccb` `#84cc16`</td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/i-dont-wanna-be-me.jpg" alt="I Don't Wanna Be Me style card" width="200"></td>
<td align="center"><img src="assets/images/i-dont-wanna-be-me/cursor.png" alt="I Don't Wanna Be Me cursor" width="32"> <img src="assets/images/i-dont-wanna-be-me/pointer.png" alt="I Don't Wanna Be Me pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/i-dont-wanna-be-me.jpg" alt="I Don't Wanna Be Me background" width="120"></td>
<td><b>I Don't Wanna Be Me</b><br>`#030712` `#111827` `#f8fafc` `#22c55e`</td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/dj-meowmixx.jpg" alt="DJ Meowmixx style card" width="200"></td>
<td align="center"><img src="assets/images/dj-meowmixx/cursor.png" alt="DJ Meowmixx cursor" width="32"> <img src="assets/images/dj-meowmixx/pointer.png" alt="DJ Meowmixx pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/dj-meowmixx.jpg" alt="DJ Meowmixx background" width="120"></td>
<td><b>DJ Meowmixx</b><br>`#8b5cf6` `#ffffff` `#2e1065` `#06b6d4`</td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/im-just-a-girl-x-unicorn.jpg" alt="I'm Just A Girl x Unicorn style card" width="200"></td>
<td align="center"><img src="assets/images/im-just-a-girl-x-unicorn/cursor.png" alt="I'm Just A Girl x Unicorn cursor" width="32"> <img src="assets/images/im-just-a-girl-x-unicorn/pointer.png" alt="I'm Just A Girl x Unicorn pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/im-just-a-girl-x-unicorn.jpg" alt="I'm Just A Girl x Unicorn background" width="120"></td>
<td><b>I'm Just A Girl x Unicorn</b><br>`#000000` `#0e3a40` `#ffffff` `#00e5ff`</td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/sakurawr.jpg" alt="SakuRAWR! style card" width="200"></td>
<td align="center"><img src="assets/images/sakurawr/cursor.png" alt="SakuRAWR! cursor" width="32"> <img src="assets/images/sakurawr/pointer.png" alt="SakuRAWR! pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/sakurawr.jpg" alt="SakuRAWR! background" width="120"></td>
<td><b>SakuRAWR!</b><br>`#120317` `#2a0a33` `#ffffff` `#ec4899`</td>
</tr>
<tr>
<td width="200"><img src="docs/cards/web/the-velvet-kettles.jpg" alt="The Velvet Kettles style card" width="200"></td>
<td align="center"><img src="assets/images/the-velvet-kettles/cursor.png" alt="The Velvet Kettles cursor" width="32"> <img src="assets/images/the-velvet-kettles/pointer.png" alt="The Velvet Kettles pointer" width="32"></td>
<td align="center"><img src="docs/cards/tiles/the-velvet-kettles.jpg" alt="The Velvet Kettles background" width="120"></td>
<td><b>The Velvet Kettles</b><br>`#121212` `#1f1f1f` `#e5e5e5` `#d97706`<br><sub>Tile drawn with code by Claude</sub></td>
</tr>
</table>

### The band: NOSFERA2

JET's band, and the deepest corner of the universe. NOSFERA2 [OFFICIAL] and the other band members appear in JET's friend space.

<p align="center"><img src="docs/cards/web/nosfera2.jpg" alt="NOSFERA2 band profile card" width="640"></p>

<table>
<tr>
<td align="center" width="20%"><img src="assets/images/nosfera2.jpg" alt="NOSFERA2 [OFFICIAL]" width="130"><br><sub>NOSFERA2 [OFFICIAL]</sub></td>
<td align="center" width="20%"><img src="assets/images/friend-1.jpg" alt="JET" width="130"><br><sub>JET</sub></td>
<td align="center" width="20%"><img src="assets/images/dove.jpg" alt="Dove" width="130"><br><sub>Dove</sub></td>
<td align="center" width="20%"><img src="assets/images/tyson.jpg" alt="Tyson" width="130"><br><sub>Tyson</sub></td>
<td align="center" width="20%"><img src="assets/images/alice.jpg" alt="(mm)Alice" width="130"><br><sub>(mm)Alice</sub></td>
</tr>
</table>

## User stories
Tracked on the [GitHub Projects board](https://github.com/users/536738WAES/projects/), prioritised with MoSCoW (must-have, should-have, could-have, won't-have).

| # | User story | Priority | Status |
|---|---|---|---|
| 1 | As a **visitor**, I want to see who PT is at a glance (photo, name, age, location) so that I know whose profile I'm on. | Must-have | Done |
| 2 | As a **visitor**, I want a clear navigation bar on every page so that I can move between the profile, pics and mail pages. | Must-have | Done |
| 3 | As a **mobile visitor**, I want the layout to fit my screen so that I can use the site on my phone. | Must-have | Done |
| 4 | As a **visitor**, I want to send PT a private message with a mood so that I can say hello like I would have in 2005. | Must-have | Done |
| 5 | As a **music fan**, I want to play, pause, skip through and switch tracks so that I can hear PT's music. | Must-have | Done |
| 6 | As a **visitor**, I want to see PT's Top 8 and friends' comments so that the profile feels lived-in and social. | Should-have | Done |
| 7 | As a **visitor**, I want to open PT's photos full size so that I can see them properly. | Should-have | Done |
| 8 | As a **screen reader user**, I want fancy-text names read out as plain text and every control usable by keyboard so that I can use the site too. | Should-have | Done |
| 9 | As a **nostalgic visitor**, I want little 2000s touches (custom cursor, favourites star, joke pop-ups) so that it feels like the real thing. | Could-have | Done |
| 10 | As a **visitor**, I want to click a Top 8 friend and visit their profile so that I can explore their world. | Could-have | Parked (future update) |
| 11 | As a **visitor**, I want to post a public comment so that everyone can see it. | Won't-have (needs a server) | Not planned |

## Features

### Header (all pages)
- **Logo:** clicks back to the profile from any page.
- **Search box:** sends what you type to a Google search, like the original site's search bar.
- **Navigation bar:** Home, Mail, Friends, Music and Sign Out. Sign Out opens a joke pop-up instead of logging anyone out.

### Profile page (index.html)
- **Profile box:** PT's photo, fancy-text display name (with a plain version for screen readers), gender, age, city and country, plus View my: Pics | Playlists links.
- **Contacting PT:** six links, all clickable:
  - Send Message and Instant Message open the messenger pop-up.
  - Add to Friends goes to PT's LinkedIn.
  - Add to Favourites is a star that fills in black when clicked and empties when clicked again (Bootstrap toggle, no JavaScript).
  - Forward to Friend and Block User open in-character pop-ups.
- **u alright m8 URL:** the site's own address as a clickable link.
- **Media player:** a retro silver player with a play button, scrolling track title, running time and a fold-out list of four tracks (Demo 1 to 4). The one script on the site, `player.js`, runs it.
- **Interests:** General and Music lists. The long band list scrolls inside its box so the left column ends level with the comments.
- **Extended network box:** "PT is in your extended network".
- **Blurbs:** an About me section.
- **Friend space (Top 8):** eight original characters with fancy-text names, each with a plain name for screen readers.
- **Friends comments:** "Displaying 7 of 6066 comments", seven comments from the Top 8 with 2006 timestamps, room for stickers, and a View all comments link. Add Comment opens a "only PT's friends can comment" pop-up that offers the messenger instead.

### Friend profile pages (friend-1.html to friend-8.html)

- **Photo carousel on the Pics pages:** PT's and JET's Pics pages open with a Bootstrap carousel, starting with the profile photo, with previous and next arrows, swipe on phones and each caption under its photo. It never auto-plays, and the sliding animation is switched off in the CSS so photos change instantly, which is easier on visitors who find motion jarring. The grid of thumbnails below jumps the carousel to that photo. All of this uses Bootstrap's own script, so no extra JavaScript.
- **Clickable profile photos:** clicking the main photo opens that person's pics. PT, JET and glitter jelly princess go to their own Pics page; friends with one photo open it in a Bootstrap pop-up (modal) showing "Displaying 1 of 1 pics", so no extra JavaScript is needed.
- **One per Top 8 friend:** click any friend in PT's Top 8 to visit their profile.
- **Same frame, eight colour stories:** the u alright m8 header, navigation and footer stay black and white on every page; each friend's profile area uses their own palette, set with the same five CSS variables (`--f-bg`, `--f-surface`, `--f-text`, `--f-accent`, `--f-on-accent`) on a class for that page.
- **Their own music:** each friend's media player plays their own reimagining of the Bach piece. PT's player plays all eight as the Top 8 album.
- **Their own world:** tagline, details, interests, blurbs, their own Top 4 or Top 8, and friends comments, all written in character.
- **Pics pages:** every friend's View my: Pics link opens their own pics page in the same click-to-enlarge style. JET's is the fullest; the others are lighter, with one or two photos each, so every link on every profile works.
- **Working Contacting box:** the same six links and pop-ups as PT's profile.
- **JET's page goes further:** JET is the lead guitarist of NOSFERA2, a fictional Tokyo rock band from PT's own wider creative project, so his page has extras:
  - **His own pics page** (jet-pics.html): seven photos in the same click-to-enlarge grid as PT's, with captions in his voice.
  - **A fixed band-logo background:** a plain black page with the NOSFERA2 logo pinned in the centre while the page scrolls over it (`background: ... no-repeat center center fixed`).
  - **His bandmates in his friend space:** the NOSFERA2 logo plus Dove, Tyson and (mm)Alice.
  - **His own cursors:** a sword, with a skull over links and buttons, set only for his page through the `.friend-1` class.
  - **Real versus engineered:** PT's photos are real, taken 2002 to 2008; JET's world is fully AI-generated. The contrast is deliberate.
- **Fictional URLs:** friend profile URLs (for example ualrightm8.com/JET) are fictional vanity addresses for the homage and are plain text, not links.

### Messenger (pop-up on index.html, full page on mail.html)
- **Mood strip:** six emoji moods (Happy, Loved up, Cool, Cheeky, Confused, Angry) to pick before writing.
- **Message form:** name, email and message, all required. Messages are sent through Formspree; after sending, the visitor sees Formspree's confirmation page.

### Pics page (pics.html)
- Four portraits in a square grid. Click any one to open it full size in a pop-up with a caption.

### Look and layout
- **Y2K styling:** black-and-white boxes with heavy borders, Abril Fatface headings and a tiled background behind a fixed-width, centred page.
- **Colour palette:** black and white with silver greys for the media player. Every colour is a CSS variable in `styles.css`.

  ![Colour palette: ink black, paper white and four greys](docs/palette.png)

- **Responsive layout:**
  - One centred container (`container-fluid`, max-width 1200px), like the fixed-width profiles of the 2000s, with the tiled background showing either side.
  - One row, two columns: left (`col-lg-5`) holds the profile, contact links, URL, media player and interests; right (`col-lg-7`) holds the network box, blurbs, Top 8 and comments.
  - Below 992px (`lg`) both columns become full width and stack, left column first. The breakpoint was moved up from `md` (768px) because tablets squashed the media player.
  - Top 8 grid: `row-cols-2 row-cols-sm-4`, 2 across on phones and 4 across from 576px.
  - Custom media query: the media player's side buttons hide under 400px.
- **Custom cursors:** a Y2K heart-and-arrow cursor, with a winged heart over links and buttons, like the cursor sites everyone used in the 2000s. The normal typing cursor stays in text boxes.

  <img src="docs/cursor-heart-arrow.png" width="64" alt="Cursor: pink heart with a yellow arrow through it"> <img src="docs/cursor-heart-wings.png" width="64" alt="Link pointer: pink heart with white wings">
- **Accessibility:** alt text on every image, plain-text versions of all fancy-text names, keyboard-usable pop-ups and a reduced-motion setting for the scrolling track title.

- **Colour and UI stories:** every page's palette, cursor and background is shown in [Colour and UI stories](#colour-and-ui-stories).

## How the code works

This section explains the ideas behind the code, so the site can be read and rebuilt by someone learning HTML, CSS and Bootstrap. Each part says what the code does, then why it was done that way.

### 1. HTML: structure and meaning

- **Semantic elements.** The page is built from elements that describe their job: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` (each comment), `<figure>` and `<figcaption>` (each photo and caption) and `<footer>`. Browsers, search engines and screen readers use these to understand the page, so the layout is meaningful even with no CSS.
- **One `<h1>` per page, then `<h2>` and `<h3>` in order.** Screen-reader users jump between headings like a contents list, so headings never skip a level. On the profile, the site logo is the `<h1>`; each box is an `<h2>`; each comment's friend name is an `<h3>`.
- **Description lists.** The interests box uses `<dl>`, `<dt>` (the label, such as Music) and `<dd>` (the value). Screen readers announce them as pairs.
- **`width` and `height` on every image.** The browser reserves the right space before the picture loads, so the page doesn't jump around. Lighthouse checks for this.
- **`loading="lazy"`.** Pictures lower down the page only load when the visitor scrolls near them, which makes the first load faster.
- **Special characters.** `<` starts a tag in HTML, so a heart written as `<3` confuses the browser. It's written `&lt;3`, an *entity* that displays as `<` without being read as code.

### 2. Bootstrap: the grid and breakpoints

Bootstrap is a ready-made library of CSS and a small script. It's loaded from a CDN (a public server) in the `<head>`, before `styles.css`, so the site's own rules can override it.

- **The grid.** A `row` holds columns, and each row is 12 units wide. `col-12` takes all 12 (full width); `col-lg-5` and `col-lg-7` split the page 5 to 7 on large screens.
- **Breakpoints.** The part in the middle of a class name says from which screen width it applies: `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px. Bootstrap is *mobile first*: a class with no breakpoint applies everywhere, and a class with one applies from that width upwards. So `col-12 col-lg-5` means "one full-width column on phones and tablets, then 5 of 12 from 992px".
- **Gutters.** `gx-3 gx-lg-5` sets the gap between columns: small on phones, wide from 992px. `gy-4` sets the gap between rows when columns stack.
- **`container-fluid page-wrap`.** A full-width container, capped at 1200px by the site's own `.page-wrap` rule, so lines of text never get uncomfortably long on big screens.
- **Utility classes.** Small one-job classes, such as `mb-0` (no bottom margin), `fw-bold` (bold), `fs-6` (smaller text), `text-white`, `d-block` (display as a block) and `visually-hidden` (hidden on screen, still read aloud by screen readers).

### 3. Bootstrap components with no custom JavaScript

Several features look interactive but have no JavaScript of their own. Bootstrap's bundled script reads `data-bs-*` attributes in the HTML and does the work.

- **Cards.** Every box on the profile is a `card`, with a `card-header` and `card-body`. Borders and corners are adjusted with utilities (`border-3`, `rounded-0`).
- **Modals (pop-ups).** A button with `data-bs-toggle="modal"` and `data-bs-target="#sign-out-modal"` opens the element with that `id`. Bootstrap also moves keyboard focus into the pop-up, closes it with Escape, and returns focus to the button afterwards. `role="dialog"` and `aria-labelledby` tell screen readers it's a dialog and what it's called.
- **Toggle buttons (`btn-check`).** The Favourites star and the mood strip on the message form are real checkboxes and radio buttons, styled to look like buttons. Clicking the label ticks the hidden input, and CSS changes the look based on whether it's ticked. Because they're real form controls, they work with a keyboard and screen reader for free.
- **Carousel.** The Pics pages use a Bootstrap carousel. `data-bs-slide="prev"` and `"next"` drive the arrows; each thumbnail button has `data-bs-target="#pics-carousel"` and `data-bs-slide-to="3"`, which jumps to slide 3 (counting from 0, where 0 is the profile photo). There's no `data-bs-ride` attribute, so it never moves on its own.

### 4. CSS: the site's own styles

- **The cascade and specificity.** When two rules style the same thing, the more *specific* one wins: an `id` beats a class, a class beats an element name, and a longer selector beats a shorter one. If they're equal, the one written later wins. This is why `styles.css` loads after Bootstrap, and why some fixes use a more specific selector rather than `!important`.
- **CSS variables (custom properties).** Every colour is named once at the top of `styles.css`, inside `:root`, such as `--ink: #0b0b0b;`, and used with `var(--ink)`. Changing a colour in one place changes it across the whole site.
- **Scoped variables for the friend pages.** Each friend page has `<body class="friend-page friend-3">`. The rule `.friend-3 { --f-bg: #0d140e; ... }` sets five variables only inside that page, and shared rules like `.friend-page main .card { background: var(--f-surface); }` use them. One set of rules, nine different colour schemes.
- **Bootstrap's own variables.** Bootstrap components read variables too, such as `--bs-card-bg`. Setting those on `.friend-page main .card` recolours every card without rewriting Bootstrap.
- **Media queries.** `@media (max-width: 991.98px) { ... }` applies its rules only below 992px, which is how the interests list gets a scrolling cap on phones and tablets. `.98` avoids a 1px overlap with Bootstrap's `lg` breakpoint at exactly 992px.
- **`aspect-ratio` and `object-fit`.** `aspect-ratio: 1 / 1` keeps friend pictures square at any width; `object-fit: cover` fills the square by cropping the edges instead of squashing the picture. The Pics carousel uses `object-fit: contain`, which shows the whole photo with dark space around it.
- **`max-width` on the profile photo.** `max-width: 240px` lets the photo shrink on small screens but stops it growing past 240px when the column goes full width on tablets.
- **Backgrounds.** `background: var(--f-bg) url("../images/peppy/background.jpg") repeat;` paints a fallback colour, then repeats the tile over it in both directions. `../` means "go up one folder", from `css/` to `assets/`, then into `images/`. JET's page uses `no-repeat center center fixed` for one centred logo that stays still while the page scrolls.
- **Custom cursors.** `cursor: url("cursor.png") 1 1, auto;` sets an image as the mouse pointer. The two numbers are the *hotspot*: the pixel that actually clicks (top left for an arrow, the middle for a pointer). `auto` is the fallback if the image fails. Browsers ignore cursor images that are too big, which is why every cursor is 32px.
- **Transitions.** A `transition` animates a change from one style to another. Bootstrap's carousel slides because of a transition on `.carousel-item`; setting `transition: none` on it makes the photo change instantly.

### 5. Accessibility

- **Alt text.** Every meaningful image has `alt` text describing it. Decorative images and images inside a button that already has a label use `alt=""`, so screen readers skip them rather than reading them twice.
- **`aria-label`.** Gives a control a spoken name when its visible content isn't enough, such as a photo link labelled "View Peppy's pics", or the carousel arrows labelled "Previous pic" and "Next pic".
- **Fancy text.** Names like 丂ﾑズひ尺ﾑW尺! are wrapped in `aria-hidden="true"`, so screen readers skip them, with a plain-text copy in a `visually-hidden` span read out instead.
- **Reduced motion.** `@media (prefers-reduced-motion: reduce)` switches off animations for anyone whose device is set to reduce motion. The carousel goes further and never slides for anyone.
- **Colour contrast.** Text and background pairs were checked to meet WCAG AA: 4.5 to 1 for normal text, 3 to 1 for large text.

### 6. The forms

- **Formspree.** A plain HTML `<form>` has `action="https://formspree.io/f/..."` and `method="post"`. On submit, the browser sends the fields to Formspree, which emails them to PT. No server code or JavaScript is needed.
- **`required` and `type="email"`.** The browser itself refuses to send the form until required fields are filled and the email looks valid.
- **The search box** is a form with `action="https://www.google.com/search"` and an input named `q`, the name Google expects.

### 7. The one script: `player.js`

**Why there is a script at all.** The original 2000s profile players were built in Adobe Flash, programmed in ActionScript, with the playlist loaded from an XML file. Adobe ended Flash on 31 December 2020 and browsers have since removed it, so no modern browser can run one. An old profile screenshot used in the design references still shows the leftover error, "Error Loading XML Document". A faithful copy of the original player is no longer possible; it has to be rebuilt with today's web standards.

**The first plan: the browser's own player.** The first version used HTML's built-in `<audio controls>`: four tracks in a Bootstrap fold-out list, each with the browser's standard controls, and no JavaScript. It worked, but fell short in three ways:

- **It can't be styled.** Each browser draws its own controls (Chrome, Firefox and Safari all look different), and CSS can barely change them, so they could never match the Y2K player design.
- **No shared display.** There was no single read-out showing the track name and time, which the design (based on a Google Stitch player and a period reference) needed.
- **Switching tracks didn't stop the last one.** Opening another track left the previous one playing, and only a script can stop it.

User story 5, a must-have, asks to play, pause, skip through and switch tracks from one player. Meeting that, in the intended design, needed a small custom script. To keep the project an HTML, CSS and Bootstrap build, the script was capped at about 80 lines and limited to the player. Every other interactive feature uses Bootstrap.

**How it works.** The script does not replace the browser's audio engine. It keeps one `<audio>` element on the page with no `controls` attribute, so the browser draws nothing, and wires the custom buttons to it:

- **Finding elements.** `document.getElementById("player-audio")` and `querySelectorAll(".player-track-btn")` grab the parts of the page the script controls.
- **Events.** `addEventListener("click", ...)` runs code when something happens. The `<audio>` element fires its own events: `play`, `pause`, `timeupdate` (several times a second while playing) and `loadedmetadata` (once the track's length is known). The script listens for these to keep the button icon, time read-out and progress bar in step.
- **`data-src`.** Each track button stores its file path in a `data-src` attribute; the script reads it with `button.dataset.src` and loads it into the player.
- **The progress bar** is an `<input type="range">`. Its `max` is set to the track's length in seconds, its `value` follows the playing position, and dragging it sets `audio.currentTime`.
- **`aria-current`.** The playing track button gets `aria-current="true"`, so screen readers announce which track is selected.
- **`readyState`.** If the browser has already read the track details before the script runs, the `loadedmetadata` event has already happened and won't fire again. Checking `audio.readyState > 0` at the end catches that case.
- **Encoded file names.** Track files keep their original names, which contain spaces and accented letters. In the HTML, these are *URL-encoded* (a space becomes `%20`, `ü` becomes `%C3%BC`) so every browser and server reads the path the same way.

### 8. Images and performance

- **Right size for the job.** A picture shown 200px wide doesn't need to be 2000px wide. Images were resized to roughly the size they're displayed at, then compressed.
- **JPG or PNG.** JPG suits photos and textures (much smaller files); PNG suits images that need see-through areas, such as cursors and logos.
- **Background tiles** were cut from 1 to 1.6 MB PNGs down to 400px JPGs of 2 to 39 KB, which keeps the Lighthouse performance score high.
- **Favicons.** A small icon in the browser tab. With none, the browser asks for one anyway and logs a 404 error, which Lighthouse counts against Best Practices.

### 9. Git, GitHub and deployment

- **Commit** saves a snapshot of the project with a message; **push** (Sync Changes in VS Code) copies the commits to GitHub.
- **GitHub Pages** publishes the `main` branch as a website. A few minutes after each push, the live site updates.
- **`.gitignore`** lists files and folders Git should never upload, such as `_originals/`, where full-size working files are kept.
- **File names are case-sensitive on the live site.** Windows treats `Background.jpg` and `background.jpg` as the same file; GitHub Pages doesn't. Every file name is lower case for this reason.

## Wireframes

### Wireframe 1: initial plan

Hand-drawn by PT before the build ([full PDF](assets/docs/wireframe.pdf)). Page 1 is the profile layout; page 2 is the friends comments box.

<img src="docs/wireframe-1.jpg" width="350" alt="Hand-drawn wireframe page 1: profile box, media player, contact links, URL, interests, blurbs and friend space"> <img src="docs/wireframe-2.jpg" width="300" alt="Hand-drawn wireframe page 2: the friends comments box">

Changes from the wireframe during the build:

- Upcoming Shows and Blog Entry were dropped to keep the scope tight.
- General Info became the Interests box (General and Music).
- The media player moved to the left column, under the URL box.
- Add to Group and Rank User were removed from Contacting PT.

### Wireframe 2: final layout

Redrawn by PT to match the finished site, one sketch per page. Green boxes are sections, pink boxes are headings and content. Full PDFs: [profile](assets/docs/wireframe-2-index.pdf), [pics](assets/docs/wireframe-2-pics.pdf), [mail](assets/docs/wireframe-2-mail.pdf).

<img src="docs/wireframe2-index-1.jpg" width="300" alt="Wireframe 2, profile page part 1: header, navigation, profile box, contact links, URL, extended network, blurbs and Top 8"> <img src="docs/wireframe2-index-2.jpg" width="300" alt="Wireframe 2, profile page part 2: media player, interests and friends comments">

<img src="docs/wireframe2-pics.jpg" width="250" alt="Wireframe 2, pics page: header, four photos, back to profile link"> <img src="docs/wireframe2-mail.jpg" width="250" alt="Wireframe 2, mail page: message centre with mood strip and form, plus how it works box">

## Design process

The friend universe was planned visually before any of it was coded. This section shows the tools, what they were used for, and where they went wrong.

### References

Real mid-2000s profiles and a present-day revival were the starting point for layout, density and decoration.

<p><img src="docs/process/ref-lily-allen.jpg" alt="A 2006 music profile with polka-dot background" width="180"> <img src="docs/process/ref-pink-profile.jpg" alt="A pink and black 2000s profile layout" width="180"> <img src="docs/process/ref-rock-profile.jpg" alt="A rock collage profile layout" width="260"> <img src="docs/process/ref-spacehey.jpg" alt="A present-day SpaceHey profile" width="200"></p>

### Style tiles in Google Stitch

Each Top 8 friend got a **style tile** made in Google Stitch: a one-page card that pins down a profile's look before it is built. Each tile has the avatar, name, tagline and basic details, a row of **colour swatches**, and a vibe line. The swatches are the page's **design tokens**: the five values each friend page sets as CSS variables (`--f-bg`, `--f-surface`, `--f-text`, `--f-accent`, `--f-on-accent`).

Stitch was used heavily and iteratively. The first pass of every tile was a busier "profile card" with an archetype, user story and design rationale, and Stitch filled the gaps with its own names (Tangerine, Luna, Raven, Roxy, Sakura). Those were drafts: each tile was then redone with PT's real friend names, taglines and details, the swatches labelled with the CSS variable names, and the extra text stripped back. Some went through several rounds; glitter jelly princess moved from bubblegum pink to a pastel lolita palette over three versions.

<table><tr>
<td><img src="docs/process/stitch-peppy.jpg" alt="PEPPY: first draft and final style tile" width="300"></td>
<td><img src="docs/process/stitch-glitter-jelly-princess.jpg" alt="glitter jelly princess: three versions of the style tile" width="300"></td>
<td><img src="docs/process/stitch-velvet-kettles.jpg" alt="The Velvet Kettles: draft and final style tile" width="300"></td>
</tr><tr>
<td><img src="docs/process/stitch-djmeowmixx.jpg" alt="DJ Meowmixx: draft and final style tile" width="300"></td>
<td><img src="docs/process/stitch-unicorn.jpg" alt="I'm Just A Girl x Unicorn: draft and final style tile" width="300"></td>
<td><img src="docs/process/stitch-sakurawr.jpg" alt="SakuRAWR!: draft and final style tile" width="300"></td>
</tr></table>

JET and NOSFERA2 went further. JET's Stitch canvas holds his style tile, several editorial layouts and the reference images; the band card was generated from PT's own member facts, then checked line by line.

<p><img src="docs/process/stitch-jet-canvas.jpg" alt="JET's Google Stitch canvas" width="480"> <img src="docs/process/stitch-nosfera2.jpg" alt="NOSFERA2 band card on the Stitch canvas" width="480"></p>

### Images: Google Flow (Nano Banana) and ChatGPT

Band portraits were made in Google Flow with Nano Banana, and JET's logo in ChatGPT, refined over several rounds (bevelled pewter, crosses kept, then chrome in `#27272a`).

<p><img src="docs/process/nano-dove.jpg" alt="Dove, live, in Google Flow" width="360"> <img src="docs/process/nano-alice.jpg" alt="(mm)Alice, backstage, in Google Flow" width="360"> <img src="docs/process/jet-logo-chatgpt.jpg" alt="JET logo refined in ChatGPT" width="300"></p>

### What went wrong: bias in image generation

The image tools did not hold the characters steady. Nano Banana aged the whole band up, when they are 20 to 25 with JET at 23. Asked to separate the band shot into individual profile photos, ChatGPT drifted away from the reference and lightened the members, losing that they are East Asian. Part of that came from the prompt too: an early prompt described the band as Southeast Asian when they are Japanese, and a vague prompt leaves the model to fall back on its defaults. The fixes were to name ethnicity, age and features exactly, attach the reference every time, and compare outputs side by side before accepting any of them.

<p><img src="docs/process/chatgpt-whitewash.jpg" alt="ChatGPT output drifting from the reference" width="300"> <img src="docs/process/dove-nano-vs-chatgpt.jpg" alt="Dove: Nano Banana and ChatGPT compared" width="340"> <img src="docs/process/alice-nano-vs-chatgpt.jpg" alt="(mm)Alice: Nano Banana and ChatGPT compared" width="340"></p>

## Tools and technologies

### Languages and frameworks
- HTML5 and CSS3
- [Bootstrap 5.3.8](https://getbootstrap.com/): grid, cards, pop-ups (modals), the fold-out track list and the favourites toggle
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/): the icons in Contacting PT and the messenger mood strip
- JavaScript: one small script, `player.js`, for the media player only
- [Google Fonts](https://fonts.google.com/): Abril Fatface and UnifrakturMaguntia

### Services
- [Formspree](https://formspree.io/): sends messages from the messenger to PT's inbox
- [GitHub](https://github.com/) and GitHub Pages: version control and hosting

### Build and design tools
- Visual Studio Code with Live Server: writing and previewing the code
- Google Stitch: generated the media player prototype
- Claude Opus 5.5: build partner for code, debugging, prompt writing and the logo
- Google Flow Studio (Nano Banana Pro): the Top 8 friend pictures
- ElevenLabs Music: producing PT's Bach arrangements for the media player
- Sweezy Cursors: the heart cursors

### Screenshots

| Page | Desktop | Mobile |
|---|---|---|
| index.html | <img src="docs/screen-index-desktop.png" width="400" alt="Profile page on desktop"> | <img src="docs/screen-index-mobile.png" width="180" alt="Profile page on mobile"> |
| pics.html | <img src="docs/screen-pics-desktop.png" width="400" alt="Pics page on desktop"> | <img src="docs/screen-pics-mobile.png" width="180" alt="Pics page on mobile"> |
| mail.html | <img src="docs/screen-mail-desktop.png" width="400" alt="Mail page on desktop"> | <img src="docs/screen-mail-mobile.png" width="180" alt="Mail page on mobile"> |

## Testing

All checks were run on the live site on 17 November 2026.

| Test | Tool | Result |
|---|---|---|
| HTML, index.html | [W3C Nu HTML Checker](https://validator.w3.org/nu/) | No errors or warnings |
| HTML, pics.html and mail.html | W3C Nu HTML Checker | No errors or warnings |
| CSS | [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) | No errors |
| JavaScript, player.js | [JSHint](https://jshint.com/) | No warnings |
| Messenger form | Test message sent to PT | Received by email with mood, name, email and message |
| Accessibility, index.html | [WAVE](https://wave.webaim.org/) | 0 errors, 0 contrast errors, AIM score 9.6 out of 10 |
| Lighthouse, all pages, desktop and mobile | [Lighthouse](https://developer.chrome.com/docs/lighthouse/) | 98 to 100 Performance, 100 Accessibility, 96 Best Practices, 100 SEO (see below) |

### HTML
![W3C HTML checker: no errors or warnings on index.html](docs/test-html-clean.png)

![W3C HTML checker: no errors or warnings on pics.html](docs/test-html-pics.png)

![W3C HTML checker: no errors or warnings on mail.html](docs/test-html-mail.png)

### CSS
![W3C CSS validator: no errors found](docs/test-css-clean.png)

The CSS validator also lists warnings. These come from the CSS variables and from Bootstrap's own stylesheet, which the validator cannot check; they are not errors in the site's CSS.

### JavaScript
![JSHint: player.js with no warnings](docs/test-jshint-clean.png)

### Accessibility
![WAVE report: 0 errors and 0 contrast errors, AIM score 9.6 out of 10](docs/test-wave.png)

WAVE also lists 23 alerts. These are prompts to check by hand, not failures: for example, bold lines it thinks might be headings, and the long description on the profile photo, which is kept on purpose.

### Lighthouse

| Page | View | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|---|
| index.html | Desktop | 98 | 100 | 96 | 100 |
| index.html | Mobile | 98 | 100 | 96 | 100 |
| pics.html | Desktop | 98 | 100 | 96 | 100 |
| pics.html | Mobile | 99 | 100 | 96 | 100 |
| mail.html | Desktop | 100 | 100 | 96 | 100 |
| mail.html | Mobile | 100 | 100 | 96 | 100 |

Best Practices was 96 on every page because of a missing favicon and two stickers without a set size (see Bugs and fixes).

![Lighthouse scores for index.html on desktop](docs/lighthouse-index-desktop.png)

![Lighthouse scores for index.html on mobile](docs/lighthouse-index-mobile.png)

![Lighthouse scores for pics.html on desktop](docs/lighthouse-pics-desktop.png)

![Lighthouse scores for pics.html on mobile](docs/lighthouse-pics-mobile.png)

![Lighthouse scores for mail.html on desktop](docs/lighthouse-mail-desktop.png)

![Lighthouse scores for mail.html on mobile](docs/lighthouse-mail-mobile.png)


### Final checks, 21 November

After the last features were added (clickable photos, the Pics carousel, friend backgrounds and cursors), the changed pages were re-checked on the live site.

| Check | Page | Result |
|---|---|---|
| W3C HTML | index.html | No errors or warnings |
| W3C HTML | pics.html, jet-pics.html | 1 error each (carousel label); fixed, now no errors or warnings |
| W3C HTML | friend pages | 1 warning each (two `h1` headings); fixed, now no errors or warnings |
| W3C HTML | friend-2-pics.html, mail.html | No errors or warnings |
| Jigsaw CSS | styles.css | No errors |
| WAVE | friend-3.html | First run: 0 errors, 6 contrast errors, AIM 7.7. After the fixes: 0 errors, 0 contrast errors, AIM 9.6 |
| WAVE | pics.html (with the carousel) | First run: 0 errors, 2 contrast errors (hidden arrow labels), AIM 9.1. After the fix: 0 errors, 0 contrast errors, AIM 10 out of 10 |
| Lighthouse (PageSpeed Insights) | friend-3.html | Desktop: 100, 100, 100, 100. Mobile: Performance 76, Accessibility 100, Best Practices 100, SEO 100 |
| Lighthouse (PageSpeed Insights) | friend-1.html (JET, the most image-heavy page) | Desktop: Performance 98, Accessibility 100, Best Practices 100, SEO 100. Mobile: Performance 75, others 100 |

<p><img src="docs/test-html-index-final.jpg" alt="HTML checker: no errors on index.html" width="200"> <img src="docs/test-html-pics-final.jpg" alt="HTML checker: no errors on pics.html" width="300"> <img src="docs/test-html-jetpics-final.jpg" alt="HTML checker: no errors on jet-pics.html" width="300"> <img src="docs/test-html-friend-final.jpg" alt="HTML checker: no errors on friend-3.html" width="300"> <img src="docs/test-css-final.jpg" alt="CSS validator: no error found" width="200"> <img src="docs/test-wave-pics-final.jpg" alt="WAVE on pics.html: 0 errors, 0 contrast errors, AIM score 10" width="400"> <img src="docs/test-html-friend2pics-final.jpg" alt="HTML checker: no errors on friend-2-pics.html" width="300"> <img src="docs/test-html-mail-final.jpg" alt="HTML checker: no errors on mail.html" width="300"> <img src="docs/test-wave-friend-final.jpg" alt="WAVE: 0 errors and 0 contrast errors on friend-3.html, AIM score 9.6" width="400"> <img src="docs/lighthouse-friend-desktop.jpg" alt="Lighthouse desktop: 100 in all four categories on friend-3.html" width="400"> <img src="docs/lighthouse-friend-mobile.jpg" alt="Lighthouse mobile on friend-3.html: Performance 76, others 100" width="400"> <img src="docs/lighthouse-jet-desktop.jpg" alt="Lighthouse desktop on JET's page: Performance 98, others 100" width="400"> <img src="docs/lighthouse-jet-mobile.jpg" alt="Lighthouse mobile on JET's page: Performance 75, others 100" width="400"></p>

**Mobile performance on friend pages (76).** Lighthouse tests mobile on a simulated slow 4G connection. The friend pages load more than the main pages: a background tile, two cursors, the Top 8 pictures and the profile photo, and the largest image takes 6.6 seconds to appear on that connection (7.3 seconds on JET's page, which has the most images). Desktop scores 98 to 100. Planned fix: serve smaller, modern-format images (WebP) to phones and give the profile photo loading priority.

### Real-device testing (iPhone 14 Pro)

Automated checkers can't see everything, so the live site was also used on a real phone: every profile page scrolled top to bottom, tracks played, photos tapped and the carousel swiped. This found three problems that no validator flagged, all now fixed (details in [Bugs and fixes](#bugs-and-fixes)):

- Track titles wrapped and were cut off in the player when the phone's Reduce Motion setting was on.
- The playlist button disappeared on PT's page, because a rule for screens under 400px wide hid it.
- The header looked oversized and the menu wrapped onto two lines.

### Messenger
![Formspree email showing a test message with the mood, name, email and message fields](docs/test-formspree.png)

## Bugs and fixes

| Bug | Cause | Fix |
|---|---|---|
| HTML checker showed 9 errors and 8 warnings on index.html | `<3` hearts read as tags, an `autocomplete` setting on the favourites tick box, pop-ups labelled without saying they were dialogs, unnormalised fancy text, comments without headings | `<3` written as `&lt;3`, setting removed, `role="dialog"` added to every pop-up, text normalised, friend names made into small headings |
| JSHint showed 9 warnings on player.js | JSHint checks against old JavaScript by default | Added `/* jshint esversion: 6 */` to the top of the file |
| Logo and footer unreadable on the background tile | Black text on a black-and-silver tile | White panels behind the header and footer |
| Custom cursors not showing | Cursor images were 128px, too big for most browsers | Resized to 32px |
| Lighthouse Best Practices 96: a 404 error and two unsized images | No favicon, and the heart and skull stickers had no width and height | Added a heart favicon to every page, and width and height to both stickers |
| Navigation links stayed blue instead of white | Bootstrap's link colour variable overrode the custom colour | A direct `.main-nav .nav-link` colour rule in styles.css |
| Pop-up headings were invisible | The global black `h2` colour beat the white header background | Added Bootstrap's `text-white` class to each pop-up heading |
| Add Comment opened the private messenger, which made visitors think their comment would appear publicly | No server to store public comments | Add Comment now opens a "only PT's friends can comment" pop-up that offers the messenger instead |
| New features missing from the live site after pushing | Later changes had been saved but not committed | Committed the remaining files, pushed, and hard-refreshed the live page |
| Interests box made the page far longer than the comments column | Long band list | The box now ends level with the comments and the list scrolls inside it (CSS only) |
| Media player could not be skipped through | No progress bar | Added a range slider wired into player.js |
| Page scrolled sideways on phones (13px) | The wide column gap (`gx-5`) was bigger than the page edge on small screens | Gap is now small on phones and wide only on laptops (`gx-3 gx-lg-5`) |
| Tablets (768px) squeezed two columns, so the media player display was only 69px wide and the Top 8 pictures 74px | The two-column layout started at Bootstrap's `md` breakpoint | Two columns now start at `lg` (992px); tablets get one full-width column |
| Profile page was 7,700px long on phones | The full band list showed at full height | On phones and tablets the interests list is capped and scrolls inside its box, cutting the page to 4,700px |
| Profile photo grew too large on tablets | Below 992px the column goes full width, and the photo filled half of it (about 350px) | `max-width: 240px` on the photo, so it can shrink on phones but never grows past its desktop size |
| Homepage tab title was long and didn't match the other pages | Written before the friend pages had a naming pattern | Every page now follows "Page name &#124; u alright m8?" |
| One friend page came out broken after being generated | The script that copied the skeleton into each page had a search pattern that matched too much | Rebuilt that page from a working one; the broken copy is kept in `_originals` |
| Velvet Kettles' cursor and pointer showed as the normal arrow | New cursor images were 128px, and browsers ignore oversized cursor images | Resized to 32px, like every other cursor |
| Friend background tiles were up to 1.6 MB each | Saved as large PNGs straight from the image tool | Resized to 400px and saved as JPG (2 to 39 KB); the browser repeats the small tile to fill the page |
| Photo carousel slid between photos, which can be jarring for visitors sensitive to motion | Bootstrap animates each change with a CSS transition on `.carousel-item` | `transition: none` on `.pics-carousel .carousel-item`: photos now change instantly, with the arrows, swipe and thumbnails still working |
| Two Contents links went nowhere | The links pointed at headings that had since been renamed | Links updated to the real headings ("Bugs and fixes", "AI reflection") |
| Pics pages failed the HTML checker after the carousel was added: `aria-label` not allowed on a `div` | A plain `div` has no role, so the checker doesn't allow a label on it | Added `role="region"`, which marks the carousel as a named area of the page, so the label is valid and still read out |
| Friend pages showed a checker warning: two `h1` headings | The site logo and the friend's name were both `h1`, and screen readers treat every `h1` as the page title | The friend's name is now a paragraph styled the same way, leaving the logo as the only `h1` |
| WAVE found 6 contrast errors on friend pages | Friends' names in the comments used the general text colour on a cell that didn't match the page palette, so they were almost invisible | Comment name cells now use each friend's own surface and text colours, the same pair already proven readable in their cards |
| WAVE then found 3 contrast errors that weren't visible on screen | They were screen-reader-only headings ("Profile", "Network"): hidden visually, but still black text on the dark friend palettes, and WAVE checks hidden text too | Screen-reader-only text on friend pages now uses each friend's text colour. WAVE kept reading an old cached copy of the stylesheet, so the link now ends in `styles.css?v=2`: a changed address makes browsers and checkers fetch the new file (cache busting) |
| WAVE found 2 contrast errors on the Pics pages | The carousel arrows' hidden "Previous pic" and "Next pic" labels inherited Bootstrap's white control colour, and WAVE measured them against the white panel | Gave those screen-reader-only labels dark text, and bumped the stylesheet link to `?v=3` so checkers load the new CSS |
| On an iPhone 14 Pro, track titles wrapped onto three lines and were cut off in the player display | With the phone's Reduce Motion setting on, the scrolling title is switched off and the text was allowed to wrap inside a fixed-height display | A one-line ellipsis (…) was tried first, but it hid most of the title. Final fix: with motion reduced, the title wraps and the display grows to fit it (`height: auto`), so the full title shows with no movement. For everyone else the title still scrolls, slowed from 18 to 25 seconds per loop. The read-out text is now terminal green (`#39ff14`), like the old desktop media players |
| The playlist button disappeared on PT's page on phones | A media query hid all the player's square buttons below 400px wide, including the real playlist toggle (an iPhone 14 Pro is 393px) | Only the two decorative buttons are hidden on narrow phones; the playlist toggle stays |
| On phones the header looked oversized and Sign Out dropped onto a second line | The logo and menu spacing were sized for desktop | Below 576px the logo is smaller and the menu links are closer together, so all five fit on one line |


### Why the fixes work

- **Sideways scroll:** Bootstrap rows use negative margins to line up the column gaps. A big gap (`gx-5`) makes those margins wider than the space at the edge of a phone screen, so the page pokes out sideways. A smaller gap on phones keeps it inside.
- **Tablet squash:** a breakpoint is the width at which a layout changes. Moving the two-column layout from `md` (768px) to `lg` (992px) means tablets get one roomy column instead of two cramped ones.
- **Link and heading colours:** this is specificity. Bootstrap sets link colours through its own variables, and a general `h2` rule was more specific than the pop-up header colour. A more specific selector, or a Bootstrap utility such as `text-white`, wins.
- **Oversized cursors:** browsers protect visitors by refusing cursor images over a size limit and falling back to the normal pointer. 32px is a safe size everywhere.
- **Unsized images:** without `width` and `height`, the browser can't reserve space, so the page jumps as images load. Lighthouse flags this as layout shift.
- **`<3` errors:** `<` starts an HTML tag. The entity `&lt;` displays the character without the browser reading it as code.
- **The carousel:** Bootstrap's script only swaps which slide has the `active` class. The movement comes entirely from CSS, so CSS can switch it off without touching the script.
- **Large files:** file size is about pixels and format. A tile is repeated by the browser, so it only needs to be big enough to look sharp once; JPG compresses textures far more than PNG.

HTML checker before the fixes:

![W3C HTML checker showing the errors before the fixes](docs/test-html-before.png)

## Deployment

The site is deployed with GitHub Pages:

1. The code is stored in the GitHub repository [536738WAES/u-alright-m8](https://github.com/536738WAES/u-alright-m8).
2. In the repository, go to **Settings**, then **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**.
4. Set Branch to **main** and the folder to **/ (root)**, then click **Save**.
5. GitHub builds the site and publishes it at https://536738waes.github.io/u-alright-m8/
6. Every push to the main branch updates the live site automatically, usually within a minute or two.

The live site matches the main branch: every check in Testing was run on the deployed version.

To run it locally: clone the repository, open the folder in VS Code and open `index.html` with the Live Server extension.

## AI reflection

### Code creation

I used Claude as a build partner throughout. It wrote the page skeletons, the Bootstrap grid and the CSS variable system that themes all nine pages from five colour names. I made the design and scope calls: the three main pages, the friend universe, the original track titles, and a firm stop on JavaScript at around 80 lines so the project stayed an HTML, CSS and Bootstrap build. When Claude's output didn't match my intent, I redirected it rather than accepting it, for example keeping my friends' real track names instead of tidied-up versions.

### Debugging

Most bugs were found by testing rather than by AI spotting them. The W3C validator, Jigsaw, JSHint, WAVE and Lighthouse showed what was wrong, and Claude helped me understand and fix it. Examples: a sideways scroll on phones caused by Bootstrap's `gx-5` gutter, tablet layouts squashing until I moved to the `lg` breakpoint, an audio player bug fixed with a `readyState` check, and a friend page broken by a generator script that had to be rebuilt. My tutor's feedback on breakpoints pushed me to test far more carefully across devices.

### Performance and user experience

AI helped me raise the Lighthouse scores, mainly by compressing images, giving GIFs fixed sizes and adding a favicon, which took Best Practices to 96. Accessibility was built in rather than added later: screen-reader labels, proper heading order, alt text and a reduced-motion setting, giving 0 errors in WAVE. After external feedback, I shortened the browser-tab titles and capped the profile photo size so it no longer grows too large on tablets.

### Workflow

The biggest change was how I managed the project. Claude kept a versioned build checklist that worked as my project manager, and I planned each friend's look as a style tile in Google Stitch before coding it. AI also fell short in ways I had to catch: Stitch invented placeholder names, image tools aged up my band and drifted from my references on ethnicity, and at one point I was working from an out-of-date checklist. The lesson was to give precise prompts, check every output against my own source material, and treat AI as a collaborator I direct rather than an authority I trust.

## Planned future updates

Kept out of this version on purpose, so the project stays focused on HTML, CSS and Bootstrap:

- **Friend profile pages:** a page for each of the Top 8, each with its own arrangement of the Bach piece in the media player. Templates are already drafted.
- **Real comments:** letting visitors post to the friends comments wall, which would need a server or database.
- **Staying on the page after sending a message:** would need more JavaScript or a paid Formspree plan.
- **Add to playlist:** the media player's **+** button would open an "add to playlist" menu, so visitors could build their own playlists while browsing profiles, like the original site's 2010 music player ([reference](https://www.jblogg.com/2010how-to-make-playlists-on-myspace-music/)). This needs more JavaScript than this project allows, so the **+** button is cosmetic for now.

## Credits

### Media player

- Reference: the original early-2000s profile screenshot from [Digital Native](https://www.digitalnative.tech/p/myspace-tumblr-and-the-long-lost), used as the visual brief for the player.
- Made with: Google Stitch, which generated the player's Bootstrap HTML, CSS and play controls from that reference.
- Merged by: PT Cheung, who brought the Stitch code into this site and fitted it to the layout, with the play controls in `player.js`.

![Google Stitch prototype of the media player next to the reference image](docs/media-player-google-stitch.png)

### Asset log

Every image, sound and logo file in the site.

| File | What it is | Tool used or source | Date made | Terms checked |
|---|---|---|---|---|
| profile.jpg | PT's profile photo | Own photo | 2002 to 2008 | n/a |
| pic-3.jpeg to pic-6.jpeg | Four portraits on the Pics page | Own photo | 2002 to 2008 | n/a |
| friend-1.jpg to friend-8.jpg | Top 8 friend pictures (compressed 16 Nov 2026) | Prompts written with Claude Opus 5.5, images generated in Google Flow Studio (Nano Banana Pro), see screenshot below | 15 Nov 2026 | Partly |
| heart.gif | Sticker in the friends comments | Sourced from [Pinterest](https://in.pinterest.com/pin/993606736530510096/) | Nov 2026 | No: third-party Pinterest pin, original creator unknown |
| skull.gif | Sticker in the friends comments | Sourced from [Pinterest](https://uk.pinterest.com/ideas/gothic-myspace-layouts/893841263308/) | Nov 2026 | No: third-party Pinterest pin, original creator unknown |
| tile.jpg | Page background tile | Sourced from [Pinterest](https://in.pinterest.com/pin/684899055808782604/) | Nov 2026 | No: third-party Pinterest pin, original creator unknown |
| pt/variation1.mp3 to pt/variation4.mp3 | Demo 1 to 4 in the media player: PT Cheung's arrangements of J. S. Bach, BWV 478, from the public domain [IMSLP](https://clara.imslp.org/work/265053) edition | PT Cheung, produced with ElevenLabs Music | 12 Nov 2026 | Partly |
| One mp3 in each friend's folder in assets/audio (all eight Top 8 friends) | The Top 8 album: one reimagining of Bach's BWV 478 per friend, each in that friend's style, played on each friend's page and as a playlist on PT's profile | PT Cheung, produced with ElevenLabs Music | 18 Nov 2026 | Partly |
| artwork.jpg | Media player artwork | Sourced from [Digital Native](https://www.digitalnative.tech/p/myspace-tumblr-and-the-long-lost) | Nov 2026 | No: third-party image from an article |
| u-alright-m8-logo (black, white, primary) | Site logo, text only so it does not copy any existing logo | Made with Claude Opus 5.5 | 14 Nov 2026 | Partly |
| m8-mark (black, white, silver), m8-favicon (SVG, 32px, 180px), u-alright-m8-social-preview.png | The m8 brand mark used as the favicon on every page, plus the GitHub social preview image | Cut from the u alright m8 wordmark with Claude Opus 5.5; preview built on tile.jpg | 20 Nov 2026 | Yes |
| nosfera2.jpg | NOSFERA2 band logo in JET's friend space, reformatted to a square thumbnail | PT Cheung's own artwork (from a separate personal project) | 20 Nov 2026 | n/a |
| dove.jpg, tyson.jpg, alice.jpg | NOSFERA2 band members' profile pictures in JET's friend space (Dove also in JET's comments) | Generated by PT from her own NOSFERA2 artwork (Nano Banana Pro / ChatGPT); compressed 20 Nov | 20 Nov 2026 | Partly |
| jet/ folder: jet-guitar, ysl, photoshoot, thewhisky, jet, gyaruo, backstage (.jpg) | The seven photos on JET's pics page (jet-pics.html) | PT Cheung's own NOSFERA2 artwork from a separate personal project; resized and compressed 20 Nov | 20 Nov 2026 | Partly |
| jet/cursor.png, jet/pointer.png | JET's page only: sword cursor and skull link pointer (resized to 32px) | Sweezy Cursors | 20 Nov 2026 | ? |
| glitter-jelly-princess/pic-1.jpg | The photo on glitter jelly princess's pics page (friend-2-pics.html) | PT Cheung, AI-generated character artwork | 20 Nov 2026 | Partly |
| cursor.png, cursor-pointer.png | Custom 2000s-style cursor and link pointer | [Cute Y2K Heart, Sweezy Cursors](https://sweezy-cursors.com/cursor/cute-y2k-heart/) | 17 Nov 2026 | ? |

Friend pictures being generated in Google Flow Studio, 15 November 2026:

![Google Flow Studio library showing the friend pictures generated with Nano Banana Pro](docs/friend-pictures-google-flow.png)
