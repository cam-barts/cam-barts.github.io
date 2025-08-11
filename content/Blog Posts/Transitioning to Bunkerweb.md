---
description: Evaluating Bunkerweb in my Lab
tags:
 - homelab
 - open-source
 - self-hosted
---

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

While on vacation recently, I switched my [[Lab]] over to BunkerWeb from [[Lab#Nginx Proxy Manager]]. 

Before switching over to BunkerWeb, my lab routed all my traffic through Nginx Proxy Manager, and honestly it worked great for a long time. All incoming traffic to my domains after passing through CloudFlare hit NPM as a reverse proxy, which routed the traffic by hostname to whichever [[Lab#Machines|machine]] was handling that service. I even bolted on [[Lab#Fail2Ban]] to scan the Nginx logs and, after a handful of failed login attempts, trigger a Cloudflare rule to ban an IP for a day. With this process, standing up new services was a breeze, LetsEncrypt certificates stayed updated automatically, and there was an option to "block common exploits" (although I never really dug into what that actually did under the hood). 

I stumbled onto [BunkerWeb](https://www.bunkerweb.io/) one day (probably via [[Feeds#RSS|HackerNews]]) and was immediately intrigued by its [Bad Behavior](https://docs.bunkerweb.io/latest/features/#bad-behavior) feature, which essentially replaces my F2B + CloudFlare setup by blocking offenders right at the reverse proxy layer. Boasting numerous additional features, it felt like a natural next step, since BunkerWeb doubles as a web application firewall. I was also drawn to its [community block lists](https://docs.bunkerweb.io/latest/features/#__tabbed_8_1) for known malicious IPs, the idea of a single, [dynamic robots.txt](https://docs.bunkerweb.io/latest/features/#robotstxt) for all my apps, and the built-in [ModSecurity](https://docs.bunkerweb.io/latest/features/#modsecurity) plugin to sniff out suspicious traffic. With dozens of services live in my [[Lab]], any extra layer of defense sounded like a win, so I decided to give it a shot.


# The Process of Switching
I kicked things off by spinning up BunkerWeb using docker-compose on my [[Lab#Citadel|citadel machine]]. Even though BunkerWeb does publish ARMv7 images, my Raspberry Pi setup kept running into permission errors whenever I tried to pull in the full stack with Redis and everything. Since I was on vacation, rather than spend hours twisting permissions, I figured Citadel would be a good enough fit. Following the official [docker-compose docs](https://docs.bunkerweb.io/latest/quickstart-guide/#__tabbed_1_3) verbatim, the install and initial configuration went over without issue.

Once I had the new proxy live, the real fun began(/s): moving my services over one by one. I ended up transferring 38 different services from Nginx Proxy Manager into BunkerWeb. It was quite a bit of busy work, but once I got a feel for exactly which configurations I wanted for each service, it went by a little quicker.

It was also a little entertaining in a frustrating way to ban myself out of the interface a handful of times. Each time that happened I had to clear my IP block, then add a permanent allow-list entry for my home address. This happened multiple times in the beginning because I hadn't set up any of the [Real IP](https://docs.bunkerweb.io/latest/features/#real-ip) configuration yet, so I kept getting different IPs from CloudFlare. After a couple of those self-inflicted lockouts, I got a feel for how strict the default bad behavior rules can be.

When I finally pointed my router to the new proxy, traffic started streaming through BunkerWeb immediately. Watching the docker compose logs, I spotted a few stray GitLab worker processes on my Pis hitting an endpoint I thought I had long since retired. Those calls had flown right past my old proxy logs, but here they showed up front and center. I'm sure I could have seen those in the logs I was pulling into Grafana, but it just wasn't something I knew to look for. 

With the switch complete and my services humming along, I was ready to sit back, let it run for a day, and see exactly what kind of noise this new firewall would filter out.

# Day 1

Once I flipped the switch and traffic started flowing, I let BunkerWeb run in the background while we headed out of town. When I checked back about 24 hours later, it was obvious almost immediately that I’d gained a whole new level of visibility into what was hitting my network. 

![[Bunkerweb Day 1.png]]

Out of the box, BunkerWeb was blocking over *half* of all incoming hits. That number felt high at first, but once I followed the [CloudFlare Real IP setup guide](https://www.bunkerweb.io/2024/06/10/using-bunkerweb-with-cloudflare-a-comprehensive-guide/) and let the proxy see the true client address, the block rate settled around 15 percent. Even at that level, I remain genuinely impressed by how many automated scanners, exploit probes, and random bots were trying to poke holes in my lab. The community IP blocklists and ModSecurity rules are catching everything from generic vulnerability scans to attempts at hitting dot-git folders and other nonsense that I never want exposed.

Beyond the raw blocking stats, I love how everything just “feels” tighter. Managing a single, dynamic robots.txt across all services in one place is a lifesaver compared to my old piecemeal setup. Spinning up new host entries and SSL certs in the UI is surprisingly fast, and watching bad actors get auto-banned right at the proxy makes me feel a lot more confident about the safety of my home lab. After day one, I became much more confident that I wouldn't be going back to NPM.

# Things I Haven't Figured Out Yet

First off, I still need to sort out log collection and forwarding. With Nginx Proxy Manager I was binding logs to a local directory and letting Alloy pick them up for Loki and visualizing in Grafana. BunkerWeb uses Docker volumes by default, and every time I tried to bind-mount a host path I ran into permission errors. I haven’t yet nailed down the right volume configuration or Docker logging driver labels to pipe those logs into my observability stack. Whether I end up using a custom logging plugin, tweaking permissions, or mounting a host directory with the correct UID/GID mapping, I know I’ll need to resolve that before I can get the same Grafana dashboards I had before.

> [!NOTE] 
> I'll give credit where it's due, it seems like they have a [fix for this](https://docs.bunkerweb.io/latest/troubleshooting/#permissions) in their docs, but being lazy on vacation I didn't look that deeply.

I’m also keen on automating more of the ban and unban process via BunkerWeb’s API. I can already ban/unban IPs by running docker exec commands, and I know there’s a REST endpoint for it, but I haven’t figured out the proper way to expose that API externally on a separate port. My goal is to hook it into other tools like [[Lab#Windmill]] or just one-off scripts and have malicious patterns auto-ban themselves.


# Things I'd Like to See in Future Development

Part of my desire to hook into the API is that I want to implement more aggressive honeypot-style banning, but this can also be something BunkerWeb builds in I think. BunkerWeb’s ModSecurity rules and block lists do a great job of blocking individual suspicious calls, but I’d like certain hits (like say any request to `/.env` or `/.git` or `/wp-admin.php`) to trigger an immediate ban rather than just a simple block. None of my real services use those endpoints, so every attempt is almost certainly malicious. Tuning those rules into “block and ban outright” is on my to-do list, but I'd be thrilled if BunkerWeb came out with that functionality.

Finally, on a purely cosmetic level, the UI feels a bit cluttered with prompts for premium features. There are sidebar entries for enterprise-only plugins and a persistent call to action to sign up for the newsletter in the notification area, which [[Nope#^7a528a|I don't have any intention of doing]]. I’m fully behind open source developers finding ways to monetize their work, but if I know I’m never going to upgrade or subscribe, I should be able to disable or hide those sections in the interface. I’d love an option or even a simple toggle to collapse or remove them entirely, but for now I’m living with the extra noise until I find a neat workaround.


[![[not_by_ai.png|150]]](https://notbyai.fyi)