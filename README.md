# vega-providers (Tanzeel's fork)

This is my fork of [Zenda-Cross/vega-providers](https://github.com/Zenda-Cross/vega-providers),
the provider extensions for the [Vega app](https://github.com/Zenda-Cross/vega-app).
A provider is a small TypeScript module that tells Vega how to browse,
search and play videos from one website.

My additions are three providers for free and legal video: **Internet Archive**,
**PeerTube** and **Wikimedia Commons**. Internet Archive was accepted upstream in
[Zenda-Cross/vega-providers#36](https://github.com/Zenda-Cross/vega-providers/pull/36),
and its subtitles and sort setting in
[#37](https://github.com/Zenda-Cross/vega-providers/pull/37), so it ships with
the default provider source.

This repository is published as
[Tanzeel0Hussain/vega-providers](https://github.com/Tanzeel0Hussain/vega-providers),
so typing `Tanzeel0Hussain` as a provider source in Vega loads all of the
providers here. The earlier repository that held only my own three providers is
now [vega-providers-old](https://github.com/Tanzeel0Hussain/vega-providers-old).

## Internet Archive provider

[archive.org](https://archive.org) hosts thousands of films and TV episodes
that are in the public domain or under Creative Commons licenses, so they are
free and legal to watch. The provider brings them into Vega.

What it does:

- **Home screen rows:** Popular Classic Films, Silent Films, Sci-Fi & Horror,
  Classic TV, Cartoons & Animation and Short Films.
- **Genres:** Drama, Comedy, Horror, Western, Mystery, Romance, War, Film Noir
  and Science Fiction.
- **Search** across the whole video collection.
- **Details page** with title, description, poster, the year and subjects as
  tags, and the IMDb ID when the item has one.
- **Playback** of the original video files (MP4 and others). An item with
  several versions of one film (different qualities) is shown as one movie
  with a choice of quality, not as a series.
- **Subtitles:** SRT and WebVTT files in an item show up in
  the player, named by language; Internet Archive's own speech-recognition
  captions are labelled "Automatic captions".
- **Settings:** in Vega's Provider Manager choose "Public domain and Creative
  Commons" (default) or "Public domain only", and sort lists by most popular,
  recently added or highest rated.

It uses the official Internet Archive search and metadata APIs, not page
scraping, so it does not break when the website's layout changes.

## PeerTube provider

[PeerTube](https://joinpeertube.org) is a federated, open-source video platform.
Every server exposes the same public API, so one provider reads from any of them.

- **Home screen rows:** Trending, Most Viewed, Recently Added, Films, Animation &
  Kids, Education, and Science & Technology.
- **Genres:** Films, Comedy, Entertainment, Education, Science & Technology,
  Kids, Music and Art.
- **Settings:** the PeerTube server to use (default `https://framatube.org`),
  "Public domain and Creative Commons" or "Public domain (CC0) only", and the
  default order.
- **Playback:** adaptive HLS streaming first, then MP4 files with the best
  resolution first.

## Wikimedia Commons provider

[Wikimedia Commons](https://commons.wikimedia.org) holds only freely licensed
media. The provider uses its official MediaWiki API.

- **Home screen rows:** Featured Videos, Short Films, Animation, Documentaries,
  Nature & Wildlife, Science & Space and History.
- **Genres:** Animation, Documentary, Nature, Animals, Space, Science, Music and
  Travel.
- **Settings:** "Public domain and Creative Commons" or "Public domain only", and
  the order of lists and search results.
- **Playback:** MP4 and WebM transcodes for streaming, and the original upload
  for downloads. SRT and WebVTT subtitles show up in the player.

## Use it in the Vega app

1. Open Vega and go to **Settings → Provider Manager**.
2. Press the + button, type `Tanzeel0Hussain` and add the source.
3. Install the providers you want, then select one.

Internet Archive is also in the default provider source, so it is there without
adding anything.

## Run and test it on a computer

You need Node.js 18 or newer.

```bash
git clone https://github.com/Tanzeel0Hussain/vega-providers.git
cd vega-providers
npm install
npm run build              # compiles providers/ into dist/
npm run test:unit          # offline tests, no network needed
npm run test:provider      # interactive: pick "internetArchive", then a function such as getPosts
```

`npm run dev` serves the built providers on port 3001, so a debug build of
Vega in test mode can load them from your computer while you develop.

### How the code is organised

```
providers/internetArchive/
  api.ts        search URL builder, license filter, helpers
  catalog.ts    home screen rows and genres (Internet Archive search queries)
  posts.ts      lists and search results
  meta.ts       details page, movie vs series, IMDb ID
  stream.ts     playable video files and their quality
  settings.ts   the license option shown in Provider Manager
```

Every provider follows the same layout. See [AGENTS.md](AGENTS.md) for the
full list of functions and types a provider exports.

---

Original project by [Zenda-Cross](https://github.com/Zenda-Cross):
"My personal providers for the Vega app".

## DMCA Notice
We issue this notice to clarify that this repository operate like standard web browsers by retrieving video files from the Internet and do not, by themselves, contravene the Digital Millennium Copyright Act (17 U.S.C. §§ 1201–1205, 17 U.S.C. § 512) or other applicable law. Any content accessed through this addon is provided by third-party websites or file hosts and is not hosted, controlled, or maintained on this repository. Pursuant to the DMCA, copyright owners seeking removal of infringing material should follow the notice-and-takedown procedures set forth in 17 U.S.C. §§ 1201–1205, 17 U.S.C. § 512. If you believe any content accessed via the addon infringed intellectual property rights, please direct your complaints to the hosting websites or file hosts rather than to this repository.

<a href="https://www.buymeacoffee.com/ZendaX" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## DRM streams

Providers can return `Stream.drm` for inline ClearKey or license-server DRM.
See [DRM configuration, examples, and platform limits](docs/provider-drm.md).
