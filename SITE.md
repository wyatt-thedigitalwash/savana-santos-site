# Savana Santos — Site Brand System

## Project
Single-page release site for the artist Savana Santos, built around the "4 Minutes" single and the broader Soulmates era. This is a release site, not an evergreen artist site.

## Artist
Savana Santos. Nashville-based singer-songwriter and producer, originally from Quincy, Illinois. Signed to Big Machine via The Valory Music Co. Formerly lead vocalist of the viral trio Avenue Beat. Confessional, diary-like, witty bedroom pop. She styles her titles in lowercase.

## Site scope
A single scrolling page. Sections in order:
1. Hero
2. Covers
3. About
4. Subscribe

No other pages. No streaming links on the hero or covers for now.

## Color tokens
- Background, dark green: #1A2100
- Headline and accent, orange: #FF7B1E
- Sub-head and body text, cream: #FFF6E6

Dark green is the dominant background. Cream-background sections invert to dark green text. Orange is for headlines and accents only, never a fill-everything button color. Define these as theme tokens.

## Typography
- Headlines: Burial TM, served via the Adobe Fonts kit at use.typekit.net, not self-hosted.
- Sub-heads: Zine TM, served via the same Adobe Fonts kit, not self-hosted.
- Body: Source Serif 4, Light weight 300, via next/font/google (free and open-source).
- Handwritten display (the Soulmates wordmark and track titles): use the provided wordmark and logo image assets, not a web font. The Mazzy local .ttf files are desktop-license only and are not loaded as web fonts.

## Logo usage
All three logo files are the same "Savana Santos" wordmark in different colors. Files live in public/logos.
- ColoredLogo: the wordmark in cream (#FFF6E6). This is the primary mark on dark green backgrounds (header and footer). It matches the cream body text for a cohesive, warm look.
- WhiteLogo: the wordmark in pure white. Held in reserve, only for a spot that needs maximum contrast.
- BlackLogo: the wordmark in dark near-black. Use on cream or orange backgrounds.

## Tone of voice
- Lowercase or sentence case. Never title-case marketing speak.
- First person, written like a diary entry or a text from a friend.
- Short, plain, dry, a little self-deprecating.
- No hype, no exclamation spam, no "stream now" energy.

## Visual references (anchors)
- Cut-and-paste zine and riot grrrl photocopy: tape, handwriting, slightly crooked. Covers are arranged like taped-down photos, not a card grid.
- Faye Webster restraint: generous breathing room, nothing busy.
- Film-photo scrapbook nostalgia, Olivia Rodrigo GUTS-era handwriting: keep grain and imperfection, lean on Mazzy handwriting for display moments.

## Anti-patterns (do not do)
- No three-column card grid for the covers
- No pill buttons or gradients
- No lucide icons inside colored circles
- No glassmorphism or drop-shadow startup polish
- No heavy or parallax over-animation
- Orange is accent and headline only, not a button fill everywhere
- Do not clean up the imperfection or force symmetry

## Footer
Credit line: © Borchetta Entertainment Group, LLC d/b/a Big Machine Records

Legal links:
- Terms: https://www.bigmachinerecords.com/terms
- Do Not Sell My Personal Information: https://www.bigmachinerecords.com/privacy
- Privacy: https://www.bigmachinerecords.com/privacy
- Cookie Choices: https://www.bigmachinerecords.com/privacy

Social links:
- TikTok: https://www.tiktok.com/@savana_santos
- Instagram: https://www.instagram.com/savanasantos/
- YouTube: https://www.youtube.com/channel/UCUxdZbmpZVniUgn0sl6jSjA
- X: https://x.com/savanasantos

No streaming links.

## Section content notes
- Hero: full viewport height. Uses the 4 Minutes banner, art-directed so the desktop banner shows on wide screens and the mobile banner shows on narrow screens. The banner art carries the visual. Include a real, accessible H1 for SEO and screen readers even if it is visually hidden.
- Covers: three covers in this exact order: 4 Minutes, Soulmates (use the SoulmatesCover image, not SoulmatesAlbumCover), Crying On Your Birthday. Arranged like taped-down photos, not a grid. No links for now.
- About: text only on dark green. Placeholder copy below, replace with label-approved bio before launch.
- Subscribe: a branded form collecting phone, email, zip code, and country. Connects to Laylo and Mailchimp (wired in a later step). Placeholder copy below.

## Placeholder copy (clearly marked, replace before launch)
About [PLACEHOLDER, replace with label-approved bio]:
"savana santos makes songs about the things you'd only admit at 2am. raised in quincy, illinois, now overthinking everything in nashville. she started out in the viral trio avenue beat and has been writing her way out of her feelings ever since."

Subscribe [PLACEHOLDER]:
- Headline: "i'll text you first"
- Subline: "new music, show announcements, and the occasional oversharing text. drop your info."

## Placeholder log
1. About bio copy (About section) -- need label-approved bio
2. Subscribe headline and subline (Subscribe section) -- drafted in her voice, confirm with client
