---
description: Half baked ideas I'd like to work on
permalink: /ideas
aliases:
   - ideas
   - Ideas
---

According to https://aboutideasnow.com/about, here's the idea behind an /ideas page:
> **/ideas** should be about the future: the crazy things people always wanted to make, concepts they're mulling over, or planned projects.

In that spirit, here are a few of my half baked ideas for projects and features:


# Coding Projects

- Similar to an LLM based postmortem generator I built at work, I've been thinking of using an LLM to generate a **reverse engineered design document** based on existing code. Something interesting to me is that as projects get older and the forces of scope creep and tech debt take over, seeing how far the project has drifted from its original design document (if one exists). It might be a fun exercise to evaluate the design doc as if I'm in a Technology Approval Group and see if its something I'd provide an approval on. This might be a good use case for https://pypi.org/project/gitingest/


<div class="rich-link-card-container">
    <a class="rich-link-card" href="https://gitingest.com/" target="_blank">
	    <div class="rich-link-image-container">
		    <div class="rich-link-image" style="background-image: url('https://gitingest.com/static/og-image.png')">
	        </div>
	    </div>
	    <div class="rich-link-card-text">
		    <p class="rich-link-card-title">Gitingest</p>
		    <p class="rich-link-card-description">
		        Replace 'hub' with 'ingest' in any GitHub URL for a prompt-friendly text.
		    </p>
		    <p class="rich-link-href">
		        https://gitingest.com/
		    </p>
	    </div>
    </a>
</div>


- I love [Anki](https://apps.ankiweb.net/) and I'm a believer in the power of spaced repetition, but the interface of [AnkiDroid](https://play.google.com/store/apps/details?id=com.ichi2.anki&pli=1) is *ugly*. No doubt it does the job, especially when its so ubiquitous in the medical community that the American Medical Association mistakenly claims that Anki is a tool designed [for medical students](https://www.ama-assn.org/medical-students/usmle-step-1-2/what-anki). I think the space could use a competitor app with a more modern design. I think something that feels a little more like DuoLingo, and perhaps has some functionality around timing how long it takes to come up with the answer. Creating *good* decks and sharing with others could be somehow incentivized, and streaks could be rewarded. 
- Questions/Conversation Prompt API: While [[Nope|I hate artificial]] "relationship building" exercises, I do find a lot of value in having a set of prompt questions handy when I'm genuinely trying to get to know someone. To this end, my [BestSelf IceBreaker Deck](https://bestself.co/products/icebreaker-deck?variant=31767218225221)(not sponsored) gets quite a bit of use in these situations. When my wife and I were dating, I used this [Question Book](https://www.amazon.com/Question-Book-What-Makes-Tick/dp/0393240371) to ask her questions just to spark conversations. What I think would be neat is an API and associated web interface that has a ton of questions or conversation prompts, served at random. Maybe you can filter the questions by various traits such as how intimate is the question, does it require a pen and paper, or general topic or category. The data source could be easily be maintained as like a simple JSON file in GitHub or something. I think an API might be specifically useful to create integrations, such as adding a question to the top of your Obsidian daily note like some folks do with the weather. 
- I [[Defaults|use]] [Morgen](https://www.morgen.so/) for my calendar stuff, and we use Jira at work so most of my tasking ends up in there. I've been meaning to write a quick script to pull in tasks from Jira into Morgen Tasks to make them easily scheduled, but I'm sortof halfway hoping they come out with a native integration soon. I know no one really *enjoys* using Jira but c'mon, its basically an industry standard at this point I feel like. 
- Why are there no really good Open Source Buffer [Alternatives](https://alternativeto.net/software/buffer/?platform=self-hosted&license=opensource)?

# Blog Ideas
- An article entitled "Why isn't anyone talking about [[Lab#Windmill]]" because seriously, that's the most impactful service I've hosted, and I very quickly got my team at work to get on their Cloud Plan
- I'd like to create a way to show my [Readwise](https://readwise.io/) highlights, but some of the notes I take on the highlights themselves are pretty messy until I import them into my Obsidian vault and process them. Unfortunately I'm not in the habit of going back and updating the original highlights, so I need to figure out a good process there
- I learned about [schema.org](https://schema.org/docs/gs.html) metadata from [Obsidian Web Clipper's](https://help.obsidian.md/web-clipper/variables#Schema.org+variables) documentation, but I haven't figured out how I might go about implementing that fully in my blog yet, but when I do I'll probably want the data to come from frontmatter.