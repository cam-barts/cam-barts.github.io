---
description: My Home Lab
tags:
  - homelab
  - open-source
  - self-hosted
  - SlashPages
toc: true
permalink: /lab
---

# Machines

My lab consists of 5 machines: my production machine, my secondary, and 3 raspberry pis. 

## War Rig
My main production machine is a [custom built PC](https://pcpartpicker.com/user/cameronbarts/saved/#view=ZvHxrH) that dual boots [EndeavorOS](https://endeavouros.com/) Linux and Windows 11. I try to follow a naming convention for my machines, and since Mad Max: Fury Road is one of my favorite movies and for the general beefiness of the machine at the time of build, it's dubbed The War Rig. The linked part's list is a little out of date, with the notable upgrades being:
- I have two vertical 27" BenQ [monitors](https://www.amazon.com/gp/product/B01K1INYWG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) on each side of the MSI monitor in an "H" configuration
![[monitor_configuration.png]]
- I upgraded to the [Ergodox-EZ](https://ergodox-ez.com/), and then was gifted the [Voyager](https://www.zsa.io/voyager) which became my daily driving keyboard. Using split keyboards has been an absolute game changer for me after the initial couple of weeks re-learning how to type.
- Because of my massive head and my habit of having 1 ear out of the cuff, stressing the band, I *burn* through headsets. I am currently using the Logitech G PRO X Wireless headset, which among other things has a metal band

The Windows 11 partition is only used to play a few steam games. If I'm not playing a video game, I don't have any good reason to be on my windows partition, as most of my work and non-gaming related leisure is done in Linux.

There is no particular reason I am on EndeavorOS and not anything else. I've always liked Arch and Arch-based distros, and I stumbled on Endeavor one day and thought the defaults were great. Before EndeavorOS, I was on [Garuda](https://garudalinux.org/), and before Garuda I was on a base Arch install with KDE.

## Citadel
Because I have amazing friends, I received a refurbished Dell Optiplex 7010 with an Intel i5 and 16 Gbs of ram as a Christmas present. I slapped EndeavorOS on it, and it's been working as my secondary lab machine ever since. 

## Raspberry Pis
I have 3 raspberry pi 3s model B+  each running [Hypriot](https://blog.hypriot.com/), which is just Raspbian that has been optimized for docker.
There isn't much difference between the pis themselves. In the past, I've done some work around getting them to work as a kubernetes cluster, but that didn't end up worth the effort to maintain. 

The host names for the pis are all pirate ship names:
- Black Pearl (default hostname for hypriot)
- Wellerman
- Billy Of Tea

# Software

## What Machine hosts what?
There honestly hasn't been much thought into which machine hosts which piece of software, and that hasn't really come back to bite me yet. I have a pretty robust backup system that ensures that each of the important pieces of data gets backed up so that I can have some persistence during a disaster scenario, so there is no real concept of roles that each machine plays. That being said, there are a few considerations I make when deploying new software:
- Does the public docker image support the arm/v7 architecture?
	-  I've gotten around this in the past by using [buildx](https://www.docker.com/blog/multi-arch-build-and-images-the-simple-way/) to rebuild the images as arm/v7 to put them on one of the pis, but only if that is something I've had a use case for
-  Do I have a reason to want to access this service if my main production machine is offline?
	-  Not very common, but still a consideration


## War Rig Services

### Bin

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/WantGuns/bin" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://opengraph.githubassets.com/c9eb51b04acd697137453e8ad4dd2ba8bef94c5367a8e6c50161d90024d59937/WantGuns/bin')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - WantGuns/bin: highly opinionated, minimal pastebin</p>
		<p class="rich-link-card-description">
		highly opinionated, minimal pastebin. Contribute to WantGuns/bin development by creating an account on GitHub.
		</p>
		<p class="rich-link-href">
		https://github.com/WantGuns/bin
		</p>
	</div>
</a></div>

This is a pastebin service written in Rust that features server side syntax highlighting, image pasting, file drag and drop, and a neat cli tool. It doesn't require a SQL server, and runs off of a statically linked binary. It certainly hits all of the wickets for a pastebin service.

### CyberChef

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/gchq/CyberChef" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://opengraph.githubassets.com/7bc7465ce22aee3a685eb7db25307f813d39a36089a0c7f19a127128cc41de47/gchq/CyberChef')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - gchq/CyberChef: The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis</p>
		<p class="rich-link-card-description">
		The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis - GitHub - gchq/CyberChef: The Cyber Swiss Army Knife - a web app for encryption, encoding, compressio...
		</p>
		<p class="rich-link-href">
		https://github.com/gchq/CyberChef
		</p>
	</div>
</a></div>

This is the open source version of the https://gchq.github.io/CyberChef/ application.

CyberChef is similar to String-Is, but with some additional features like the "Magic" tool, which can intelligently decode a string. This comes in handy when practicing security work on HackTheBox or during my OSCP labs/exams. There are also many more tools at your disposal in cyberchef, and some addtional features like being able to take in files and sequence operations in a repeatable manner.

### Dashy

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/Lissy93/dashy" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/343078060/82f850a2-b1af-4e9f-9245-c92700d74856')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - Lissy93/dashy: 🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!</p>
		<p class="rich-link-card-description">
		🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more! - GitHub - Lissy93/dashy: 🚀 A self-hostable personal dashboard ...
		</p>
		<p class="rich-link-href">
		https://github.com/Lissy93/dashy
		</p>
	</div>
</a></div>

I use Dashy as my HomeLab Dashboard. I can't say enough good things about it, so I won't.  

### Flatnotes

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/dullage/flatnotes" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - dullage/flatnotes: A self-hosted, database-less note taking web app that utilises a flat folder of markdown files for storage.</p>
		    <p class="rich-link-card-description">
		        A self-hosted, database-less note taking web app that utilises a flat folder of markdown files for storage. - dullage/flatnotes
		    </p>
		    <p class="rich-link-href">
		        https://github.com/dullage/flatnotes
		    </p>
	    </div>
    </a>
</div>

I experiment a lot with different ways to get notes into my [Obsidian](https://obsidian.md) vault, and Flatnotes works well within my system since they save as just regular markdown files. Most of this experimentation is to fiddle with way to get around it taking a century for my Obsidian vault to load on mobile. All I had to do was map my docker container's volume to a directory in my Obsidian vault, which is already synced to my devices with SyncThing. 

### Karakeep (Formerly Hoarder)

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/karakeep-app/karakeep" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - karakeep-app/karakeep: A self-hostable bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search</p>
		    <p class="rich-link-card-description">
		        A self-hostable bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search - karakeep-app/karakeep
		    </p>
		    <p class="rich-link-href">
		        https://github.com/karakeep-app/karakeep
		    </p>
	    </div>
    </a>
</div>

This is my [[Defaults|default]] bookmarking service. It has some neat functionality around saving cached versions of web pages using [monolith](https://github.com/Y2Z/monolith). 

### Jellyfin

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/jellyfin/jellyfin" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - jellyfin/jellyfin: The Free Software Media System - Server Backend & API</p>
		    <p class="rich-link-card-description">
		        The Free Software Media System - Server Backend & API - jellyfin/jellyfin
		    </p>
		    <p class="rich-link-href">
		        https://github.com/jellyfin/jellyfin
		    </p>
	    </div>
    </a>
</div>

Okay, its not what you think (though I've very much not opposed to what you might expect this to be used for). Honestly, I run my Jellyfin server because I enjoy watching my YouTube videos at 2.5 speed, I **hate** YouTube ads, and I don't like logging all of my devices at home into my Google account to watch my subscriptions. Check out [[Feeds]] to see which YouTube channels I'm subscribed to. 

### Kutt

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/thedevs-network/kutt" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/121380371/1cb62100-865d-11ea-8f7d-911fef0cc5d5')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - thedevs-network/kutt: Free Modern URL Shortener.</p>
		    <p class="rich-link-card-description">
		        Free Modern URL Shortener. Contribute to thedevs-network/kutt development by creating an account on GitHub.
		    </p>
		    <p class="rich-link-href">
		        https://github.com/thedevs-network/kutt
		    </p>
	    </div>
    </a>
</div>

This is my [[Defaults|default]] url shortener, which I use for [tldr.cam](https://tldr.cam) links.

### MeTube

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/alexta69/metube" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - alexta69/metube: Self-hosted YouTube downloader (web UI for youtube-dl / yt-dlp)</p>
		    <p class="rich-link-card-description">
		        Self-hosted YouTube downloader (web UI for youtube-dl / yt-dlp) - alexta69/metube
		    </p>
		    <p class="rich-link-href">
		        https://github.com/alexta69/metube
		    </p>
	    </div>
    </a>
</div>

While I have [ytdl-sub](https://github.com/jmbannon/ytdl-sub) for my subscriptions, I use metube to download one-off videos from folks I don't subscribe to, which also goes to [[#Jellyfin]].

### Noteshare.Space

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/mcndt/noteshare.space" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - mcndt/noteshare.space: A service for sharing encrypted Markdown notes from Obsidian. Notes are end-to-end-encrypted and are only stored temporarily.</p>
		    <p class="rich-link-card-description">
		        A service for sharing encrypted Markdown notes from Obsidian. Notes are end-to-end-encrypted and are only stored temporarily. - mcndt/noteshare.space
		    </p>
		    <p class="rich-link-href">
		        https://github.com/mcndt/noteshare.space
		    </p>
	    </div>
    </a>
</div>

This app is pretty old, but its solid for when I need to share an [Obsidian](https://obsidian.md) note quickly and directly from the interface, without setting up any type of encryption.

### Open WebUI

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/open-webui/open-webui" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/701547123/f79536d6-99ca-4e42-b269-0491a330d26b')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - open-webui/open-webui: User-friendly AI Interface (Supports Ollama, OpenAI API, ...)</p>
		    <p class="rich-link-card-description">
		        User-friendly AI Interface (Supports Ollama, OpenAI API, ...) - open-webui/open-webui
		    </p>
		    <p class="rich-link-href">
		        https://github.com/open-webui/open-webui
		    </p>
	    </div>
    </a>
</div>

This is my [[Defaults|default]] interface for [[AI]]. I'm able to hook in OpenAI and ollama into the same interface, and create tools and models for my needs. Since it interacts with OpenAI's API, I get the benefits of access to newer models before they are available in the ChatGPT interface. 

### Photoprism

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/photoprism/photoprism" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/119160553/8d534823-a574-45a7-b2a1-f3645b0b5844')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - photoprism/photoprism: AI-Powered Photos App for the Decentralized Web 🌈💎✨</p>
		<p class="rich-link-card-description">
		AI-Powered Photos App for the Decentralized Web 🌈💎✨ - GitHub - photoprism/photoprism: AI-Powered Photos App for the Decentralized Web 🌈💎✨
		</p>
		<p class="rich-link-href">
		https://github.com/photoprism/photoprism
		</p>
	</div>
</a></div>

PhotoPrism is my photos management system, and is like an Open Source Google Photos. I am by no means a photographer, but I do like to keep my photos and have some ability to search them and find what I am looking for, and PhotoPrism makes that easy. 


### Portainer Agent
I utilize [Portainer](https://www.portainer.io/) as the administrative interface for the majority of my services. To that end, I have an agent installed on all of the machines in my home lab that I intend to deploy containers on.


### String Is

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/recurser/string-is" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://opengraph.githubassets.com/9b9d1236423802cf0d254daaaf16a6e1ef0d8d02ca3f98ac633dbd8cca774165/recurser/string-is')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - recurser/string-is: An open-source, privacy-friendly online string toolkit for developers.</p>
		<p class="rich-link-card-description">
		An open-source, privacy-friendly online string toolkit for developers. - GitHub - recurser/string-is: An open-source, privacy-friendly online string toolkit for developers.
		</p>
		<p class="rich-link-href">
		https://github.com/recurser/string-is
		</p>
	</div>
</a></div>

This is the open source version of the https://string.is web app.

Often enough, I find that I need to perform some conversion on text in order to make it useful. It could be something like decoding or encoding base64, turning json data into a csv, getting a timestamp into a different format, or checking a regex expression. String-is provides a swiss army knife for all of those operations. 

### SurrealDB

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/surrealdb/surrealdb" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/436658287/48975688-cf92-4b36-9fe1-fbe0a492a74b')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - surrealdb/surrealdb: A scalable, distributed, collaborative, document-graph database, for the realtime web</p>
		    <p class="rich-link-card-description">
		        A scalable, distributed, collaborative, document-graph database, for the realtime web - surrealdb/surrealdb
		    </p>
		    <p class="rich-link-href">
		        https://github.com/surrealdb/surrealdb
		    </p>
	    </div>
    </a>
</div>

I use SurrealDB to play around with linked data. I don't have many very formal uses for it yet, but I am storing some embeddings for some RAG applications I'm tinkering with. 


### Webhook Site

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/webhooksite/webhook.site" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - webhooksite/webhook.site: ⚓️ Easily test HTTP webhooks with this handy tool that displays requests instantly.</p>
		    <p class="rich-link-card-description">
		        ⚓️ Easily test HTTP webhooks with this handy tool that displays requests instantly. - webhooksite/webhook.site
		    </p>
		    <p class="rich-link-href">
		        https://github.com/webhooksite/webhook.site
		    </p>
	    </div>
    </a>
</div>


This is the open source version of the https://webhook.site/ web app.

This is useful for me when creating new automations that hook into various platforms using webhooks. Often, tools will provide the ability to post to web endpoints when events occur, either to generate notifications or perform some standard actions, however finding and understanding the schema of what gets sent to those endpoints is difficult. For example, at work we wanted to be able to create annotations in our Grafana instance whenever an Octopus deployment kicked off. Octopus allows event subscriptions to post to web endpoints, but understanding what needed to happen for that data to be useful for the Grafana API required understanding how the data gets posted out of Octopus, and to gain this understanding I just had the subscription send data to the webhook.site endpoint. From the UI, I was able to understand how the data get sent from octopus, and then understand what changes the automation needed to make to post the data to Grafana. 

### Whishper

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/pluja/whishper" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - pluja/whishper: Transcribe any audio to text, translate and edit subtitles 100% locally with a web UI. Powered by whisper models!</p>
		    <p class="rich-link-card-description">
		        Transcribe any audio to text, translate and edit subtitles 100% locally with a web UI. Powered by whisper models! - pluja/whishper
		    </p>
		    <p class="rich-link-href">
		        https://github.com/pluja/whishper
		    </p>
	    </div>
    </a>
</div>

I use whishper mostly to transcribe my dictations so that I can clean them up in [[#Open WebUI]] (more about that in my [[AI|How I Use AI]] post). Occasionally I'll also use it to get subtitles for a YouTube video. 


## Citadel Services

### BunkerWeb
<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://www.bunkerweb.io/" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://www.bunkerweb.io/wp-content/uploads/2025/01/intro-overview.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">BunkerWeb - the open-source Web Application Firewall (WAF)</p>
		    <p class="rich-link-card-description">
		        Fool attackers and protect your web services with BunkerWeb, the open-source and next-gen Web Application Firewall (WAF).
		    </p>
		    <p class="rich-link-href">
		        https://www.bunkerweb.io/
		    </p>
	    </div>
    </a>
</div>

I [[Transitioning to Bunkerweb|transitioned to BunkerWeb]] from [[#Nginx Proxy Manager]]. I have 3 domains that route to my BunkerWeb instance, which then routes all of my traffic to the underlying applications from there. It creates, administers, and automatically renews Let's Encrypt certs for all of my applications.

### Monitoring Stack

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/grafana/grafana" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/15111821/ec8ccf00-1db1-11eb-87b4-95f15e4b1fc2')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - grafana/grafana: The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more.</p>
		    <p class="rich-link-card-description">
		        The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many mo...
		    </p>
		    <p class="rich-link-href">
		        https://github.com/grafana/grafana
		    </p>
	    </div>
    </a>
</div>

What kind of SRE would I be if I didn't have some monitoring in my lab. I only listed Grafana here, but the whole stack consists of Grafana, Loki for logs, Prometheus for metrics, and Alloy as an OTEL collector. This stack monitors most of everything else in my lab. 

### SearXNG

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/searxng/searxng" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - searxng/searxng: SearXNG is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled.</p>
		    <p class="rich-link-card-description">
		        SearXNG is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled. - searxng/searxng
		    </p>
		    <p class="rich-link-href">
		        https://github.com/searxng/searxng
		    </p>
	    </div>
    </a>
</div>

This is my [[Defaults|default]] search engine. It aggregates results from the other major search engines for my queries, and I have it set up to produce JSON outputs for searches, which I then can use in [[#Open WebUI]] as a built in web search integration.

### Windmill

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/windmill-labs/windmill" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - windmill-labs/windmill: Open-source developer platform to power your entire infra and turn scripts into webhooks, workflows and UIs. Fastest workflow engine (13x vs Airflow). Open-source alternative to Retool and Temporal.</p>
		    <p class="rich-link-card-description">
		        Open-source developer platform to power your entire infra and turn scripts into webhooks, workflows and UIs. Fastest workflow engine (13x vs Airflow). Open-source alternative to Retool and Temporal...
		    </p>
		    <p class="rich-link-href">
		        https://github.com/windmill-labs/windmill
		    </p>
	    </div>
    </a>
</div>

I honestly don't know why I don't hear about this app more often. Windmill is essentially my lab's central source of automation. You can write scripts in basically any language you want, and have them execute on schedules or as webhooks like FaaS. I love this app so much, I introduced it to my day job and now we are on the cloud version. Really just an absolute rockstar of an application. I *highly* recommend checking out the docs:

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://windmill.dev" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://www.windmill.dev/img/docs_logo.svg')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">Windmill</p>
		    <p class="rich-link-card-description">
		        Turn scripts into auto-generated UIs, APIs and cron jobs. Compose them as workflows or data pipelines. Build complex, data-intensive apps with ease. Write and deploy software 10x faster, and run it with the highest reliability and observability on the fastest self-hostable job orchestrator
		    </p>
		    <p class="rich-link-href">
		        https://windmill.dev
		    </p>
	    </div>
    </a>
</div>


## Wellerman Services

### AppRise API

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/caronc/apprise-api" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/217802180/243ab700-2fe7-11ea-9ff1-b861dbcb7830')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - caronc/apprise-api: A lightweight REST framework that wraps the Apprise Notification Library</p>
		<p class="rich-link-card-description">
		A lightweight REST framework that wraps the Apprise Notification Library - GitHub - caronc/apprise-api: A lightweight REST framework that wraps the Apprise Notification Library
		</p>
		<p class="rich-link-href">
		https://github.com/caronc/apprise-api
		</p>
	</div>
</a></div>

Sending notifications to the right places and at the right times can be a challenge. Apprise is a very robust tool that creates integrations to numerous platforms, and the Apprise API turns that notification ability into an API Service.


### Portainer

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/portainer/portainer" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://opengraph.githubassets.com/8efd15a4c6ad6364ee7d0bef83e73055520ebc7f6fa895b879ee80170b7b6aa7/portainer/portainer')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - portainer/portainer: Making Docker and Kubernetes management easy.</p>
		<p class="rich-link-card-description">
		Making Docker and Kubernetes management easy. Contribute to portainer/portainer development by creating an account on GitHub.
		</p>
		<p class="rich-link-href">
		https://github.com/portainer/portainer
		</p>
	</div>
</a></div>

As previously mentioned, I utilize [Portainer](https://www.portainer.io/) as the administrative interface for the majority of my services. This is the actual web service instance, which also administers the docker images on Wellerman.

### WishThis

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/wishthis/wishthis" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - wishthis/wishthis: wishthis is a simple, intuitive and modern wishlist platform to create, manage and view your wishes for any kind of occasion.</p>
		    <p class="rich-link-card-description">
		        wishthis is a simple, intuitive and modern wishlist platform to create, manage and view your wishes for any kind of occasion.  - GitHub - wishthis/wishthis: wishthis is a simple, intuitive and mode...
		    </p>
		    <p class="rich-link-href">
		        https://github.com/wishthis/wishthis
		    </p>
	    </div>
    </a>
</div>

This is my [[Defaults|default]] wishlist service, which I use to break out of the amazon monopoly. 


## Black Pearl Services

### Memos

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/usememos/memos" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/436297812/02a4fe19-4a8b-4d8b-bd1f-be120b90737a')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - usememos/memos: An open-source, lightweight note-taking solution. The pain-less way to create your meaningful notes. Your Notes, Your Way.</p>
		    <p class="rich-link-card-description">
		        An open-source, lightweight note-taking solution. The pain-less way to create your meaningful notes. Your Notes, Your Way. - usememos/memos
		    </p>
		    <p class="rich-link-href">
		        https://github.com/usememos/memos
		    </p>
	    </div>
    </a>
</div>

More hosting of Markdown files. I could probably get rid of this one in favor of [[#Flatnotes]] and [[#Noteshare.Space]] and this blog, but it doesn't do me any harm having it running. It has a sync to [Obsidian](https://obsidian.md) plugin, but it syncs using numeric IDs, and its only one directional, but sharing features are nice. 

### NTFY

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/binwiederhier/ntfy" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - binwiederhier/ntfy: Send push notifications to your phone or desktop using PUT/POST</p>
		    <p class="rich-link-card-description">
		        Send push notifications to your phone or desktop using PUT/POST - binwiederhier/ntfy
		    </p>
		    <p class="rich-link-href">
		        https://github.com/binwiederhier/ntfy
		    </p>
	    </div>
    </a>
</div>

I use this to programmatically send notifications to various devices including my phone, and also to perform actions on those devices when they receive certain actions. This is my primary route to be notified if my nightly backups for whatever reason aren't working, and for status updates on administrative actions in my lab.

### Portainer Agent
See previous comments. I'm going to skip this one on the following machines, but you can just expect it to be there. 

### Wakapi

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/muety/wakapi" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://github.com/fluidicon.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - muety/wakapi: 📊 A minimalist, self-hosted WakaTime-compatible backend for coding statistics</p>
		    <p class="rich-link-card-description">
		        📊 A minimalist, self-hosted WakaTime-compatible backend for coding statistics - muety/wakapi
		    </p>
		    <p class="rich-link-href">
		        https://github.com/muety/wakapi
		    </p>
	    </div>
    </a>
</div>

I'm an absolute *sucker* for two things in this world:
- metrics
- open source api compatible versions of paid tools

This hits both of those. I'm lucky enough to not work in a place that tracks the data for coding time, but I do like to track it for myself. I mean, c'mon, this is cool: 

![](https://github-readme-stats.vercel.app/api/wakatime?username=Cam&api_domain=wakapi.coder.cam&bg_color=000000&title_color=FF0D8A&icon_color=2F855A&text_color=e1e1e1&custom_title=Programming%20Stats%20%28Last%20Year%29&layout=compact&hide_border=true)


## Billy Of Tea Services


### VaultWarden 

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/dani-garcia/vaultwarden" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://opengraph.githubassets.com/5b8d0438f2f3936df2a0e3d9e4d87caa1e14226a0ae5792df5b39ffecc047f5c/dani-garcia/vaultwarden')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - dani-garcia/vaultwarden: Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs</p>
		<p class="rich-link-card-description">
		Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs - GitHub - dani-garcia/vaultwarden: Unofficial Bitwarden compatible server written in Rust, formerly known as ...
		</p>
		<p class="rich-link-href">
		https://github.com/dani-garcia/vaultwarden
		</p>
	</div>
</a></div>

VaultWarden is a BitWarden clone written in Rust, which implements all of the features of the BitWarden API including most of the paid services. I use YubiKeys for authentication to most things where I can, so I really wanted to have my web based password manager utilize my YubiKeys like my desktop password manager does (KeePassXC). Another shining example of a tool perfectly fitting a need.  


### Nginx Proxy Manager

<div class="rich-link-card-container"><a class="rich-link-card" href="https://github.com/NginxProxyManager/nginx-proxy-manager" target="_blank">
	<div class="rich-link-image-container">
		<div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/114938943/98879880-6796-11ea-8a07-a3f907697ec6')">
	</div>
	</div>
	<div class="rich-link-card-text">
		<p class="rich-link-card-title">GitHub - NginxProxyManager/nginx-proxy-manager: Docker container for managing Nginx proxy hosts with a simple, powerful interface</p>
		<p class="rich-link-card-description">
		Docker container for managing Nginx proxy hosts with a simple, powerful interface - GitHub - NginxProxyManager/nginx-proxy-manager: Docker container for managing Nginx proxy hosts with a simple, po...
		</p>
		<p class="rich-link-href">
		https://github.com/NginxProxyManager/nginx-proxy-manager
		</p>
	</div>
</a></div>

Formerly the public face of my entire lab prior to my [[Transitioning to Bunkerweb|transition]] to [[#BunkerWeb]]. 

### Fail2Ban

<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://github.com/crazy-max/docker-fail2ban" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://repository-images.githubusercontent.com/130902576/d6f3a980-62e0-11e9-84e3-48a4cab5358e')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">GitHub - crazy-max/docker-fail2ban: Fail2ban Docker image</p>
		    <p class="rich-link-card-description">
		        Fail2ban Docker image. Contribute to crazy-max/docker-fail2ban development by creating an account on GitHub.
		    </p>
		    <p class="rich-link-href">
		        https://github.com/crazy-max/docker-fail2ban
		    </p>
	    </div>
    </a>
</div>

This is part of how I keep malicious actors out of the lab. This service ingests the logs from [[#Nginx Proxy Manager]], and if someone is acting fishy, it "bans" them. Banning in my case is adding a rule to CloudFlare to force the IP to jump through hoops for any of my sites before it gets access. 