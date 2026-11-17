# u alright m8

A one-page, Y2K-era social profile page built with HTML, CSS and Bootstrap (+3% sneaky JavaScript for the media player ONLY due to there being no ActionScript/Flash widget equivalent in 2026.)

## Purpose

Ahh.. lovely lovely MySpace.<br>
Before influencer culture, dance challenges and the age of AI generated slop.<br>
Remember when it wasn't worrying about how many friends you got but who deserved the top 8 friends in your grid?<br>
Or you discovered a great band you've never heard of on there because you saw/heard from someone's profile?<br>
With zero shred of icky gen-Z/alpha Y2K nostalgia you've seen on TikTok:<br> 
made by someone who lived and breathed this scene in my youth, here is my recreation of my MySpace page in 2000s using 2026 code;<br> 
a tribute to more innocent times of when we used social media the right way.<br>
Deliberately bare-bones HTML5 to reflect the era of social media during this time<br>
Also: SpaceHey is restricted to US only so I'm building this for the UK folks.<br>


## User value

The "Y2K" trend has always been a popular aesthetic / social media trend.<br>
It's a verstile light-weight site to repurpose for creative music marketing campaign(s) (e.g. a band/artist create their u alright m8 page as an addition to their marketing campaign.):<br>
Due to:<br>
- it's wholly customisable
- the music player is interactive and mp3 files can be directly uploaded in
- it's as close to an authentic MySpace page as a 2026 code offering can muster
- I'm sure there are many artists you can think of who has used the y2k trend in their music, social media - this will be a welcome addition to their marketing campaign; shared across modern social networks (like their Instagram, TikTok, YouTube)

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

### Messenger (pop-up on index.html, full page on mail.html)
- **Mood strip:** six emoji moods (Happy, Loved up, Cool, Cheeky, Confused, Angry) to pick before writing.
- **Message form:** name, email and message, all required. Messages are sent through Formspree; after sending, the visitor sees Formspree's confirmation page.

### Pics page (pics.html)
- Four portraits in a square grid. Click any one to open it full size in a pop-up with a caption.

### Look and layout
- **Y2K styling:** black-and-white boxes with heavy borders, Abril Fatface headings and a tiled background behind a fixed-width, centred page.
- **Responsive:** two columns on laptops, stacking into one column on phones. The media player's side buttons hide on very small screens.
- **Accessibility:** alt text on every image, plain-text versions of all fancy-text names, keyboard-usable pop-ups and a reduced-motion setting for the scrolling track title.

## Wireframes

## Testing

## Deployment

## AI reflection

### Code creation

### Debugging

### Performance and user experience

### Workflow

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
| profile.jpg | PT's profile photo | Own photo | 2019 to 2023 | n/a |
| pic-3.jpeg to pic-6.jpeg | Four portraits on the Pics page | Own photo | 2019 to 2023 | n/a |
| friend-1.jpg to friend-8.jpg | Top 8 friend pictures (compressed 16 Nov 2026) | Prompts written with Claude Opus 5.5, images generated in Google Flow Studio (Nano Banana Pro), see screenshot below | 15 Nov 2026 | Partly |
| heart.gif | Sticker in the friends comments | Sourced from [Pinterest](https://in.pinterest.com/pin/993606736530510096/) | Nov 2026 | No: third-party Pinterest pin, original creator unknown |
| skull.gif | Sticker in the friends comments | Sourced from [Pinterest](https://uk.pinterest.com/ideas/gothic-myspace-layouts/893841263308/) | Nov 2026 | No: third-party Pinterest pin, original creator unknown |
| tile.jpg | Page background tile | Sourced from [Pinterest](https://in.pinterest.com/pin/684899055808782604/) | Nov 2026 | No: third-party Pinterest pin, original creator unknown |
| variation1.mp3 to variation4.mp3 | Demo 1 to 4 in the media player: PT Cheung's arrangements of J. S. Bach, BWV 478, from the public domain [IMSLP](https://clara.imslp.org/work/265053) edition | PT Cheung, produced with ElevenLabs Music | 12 Nov 2026 | Partly |
| artwork.jpg | Media player artwork | Sourced from [Digital Native](https://www.digitalnative.tech/p/myspace-tumblr-and-the-long-lost) | Nov 2026 | No: third-party image from an article |
| u-alright-m8-logo (black, white, primary) | Site logo, text only so it does not copy any existing logo | Made with Claude Opus 5.5 | 14 Nov 2026 | Partly |

Friend pictures being generated in Google Flow Studio, 15 November 2026:

![Google Flow Studio library showing the friend pictures generated with Nano Banana Pro](docs/friend-pictures-google-flow.png)
