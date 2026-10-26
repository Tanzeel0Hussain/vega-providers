# Vega Providers: Internet Archive

A provider for the [Vega app](https://github.com/vega-org/vega-app) that streams **public domain and Creative Commons** films and TV shows from the [Internet Archive](https://archive.org).

It uses only Internet Archive's official public APIs ([Advanced Search](https://archive.org/advancedsearch.php) and the [Metadata API](https://archive.org/developers/md-read.html)). No scraping, no third-party hosts.

## Features

- **Catalog:** popular classic films, silent films, sci-fi & horror, classic TV, cartoons & animation, short films.
- **Genres:** drama, comedy, horror, western, mystery, romance, war, film noir, science fiction.
- **Search** by title.
- **Movies and series:** items that contain several videos (for example a TV season) show up as a series with one entry per episode.
- **Every available format** is offered as a server (MP4, h.264, Ogg, …) with resolution and size; downloads list the original, highest-quality file first.
- **Settings:** choose between "Public domain and Creative Commons" (default) or "Public domain only".

Only items whose license on Internet Archive is marked public domain or Creative Commons are shown.

## Use it in Vega

1. Open **Settings → Provider Manager** in the Vega app.
2. Tap **Add provider source** and enter `Tanzeel0Hussain`.
3. Install **Internet Archive** from the list.

## Development

```sh
npm install
npm run build                       # bundle providers into dist/
npm run test -- internetArchive     # end-to-end test against the live API
npm run dev                         # serve the providers locally on port 3001
```

The provider lives in [`providers/internetArchive`](providers/internetArchive). This repository is based on the official [Vega providers template](https://github.com/vega-org/providers-template); see its README for the full provider API.
