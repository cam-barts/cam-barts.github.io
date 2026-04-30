---
title: AI
description: How I do and don't use AI
tags: 
  - SlashPages
---

# Guiding Principals

## LLMs as Talking Machines, Not Thinking Machines

LLMs are language tools, not thinking tools. That distinction drives most of how I use them. They generate coherent sentences by matching patterns, not by understanding anything, which is why they can sound completely confident while being completely wrong. "Hallucinations" is the polite term for it.

LLMs can be extraordinarily powerful, and like many powerful tools, they’re subject to the [[Golden Hammer|Law of the Hammer]]. I think of them like a table saw: if you have access to one, you start finding new applications for it. Left unchecked, you end up using it in situations where it probably shouldn’t be your first choice.

The analogy extends further: no table saw, on its own, builds a house. It’s useful for a huge number of tasks, but you’ll eventually need other tools. And a carpenter.

That’s why I never use LLMs standalone—they work as components inside broader systems, not as the system itself. Using AI to answer questions is a bit like a game of telephone: it’ll relay something that sounds plausible, but it has no idea whether the content is actually accurate. That’s exactly why I don’t use them as search engines. Instead, I pair them with tools like search engines or retrieval-augmented generation so the output is verifiable.

These are language machines. Their strength is communication, not cognition—good for sketching out ideas, useful for drafting, unreliable when you need to actually know something. [[Levels Of Proficency|They’re not the experts]], just scribes writing down thoughts they don’t fully grasp.

## The Intern Analogy

The underpaid intern analogy is how I keep my LLM usage honest. I think of LLMs as interns: eager, fast, capable of chewing through information at speeds no human could match. With good tooling, they can pull in and communicate data at impressive scale. But like real interns, they don't have the context or experience to make nuanced calls, and that's something I try not to forget.

That means any LLM output benefits from someone actually looking at it. Just like an intern might draft a report that needs fact-checking, LLM output needs review. I don't automate entire processes with AI without building in that human check. The intern can draft, summarize, organize—but the final call is always mine.

There's another dimension to this: interns want to impress. They'll go above and beyond, sometimes guessing at what you want when they don't actually know. LLMs do the same thing—they'll produce the most competent-seeming response even when they're not sure, which means they can prioritize style over substance. You have to actually tell them what you need, and cross-reference their output with something trustworthy.

So my workflow is collaborative, not AI-dependent. AI is there to help manage information overload, but always with a human in the loop.

## Intentional Use

My approach to AI is fundamentally about not letting things happen on autopilot. I'm wary of passive integrations—AI running without a deliberate trigger or oversight.

In coding, tools like [[#Avoiding Copilot-Style Assistance|Copilot]] that auto-generate suggestions without a proactive nudge are a [[Nope]] for me. Any time I engage with AI, it's because I chose to—not because it decided to fill a gap. That's what keeps me actually in control of the creative and decision-making process.

This applies across everything I use AI for. When I draft with it, generate insights with it, or anything else—the choice to use it is mine, and it's deliberate. AI should extend my thinking, not replace it.

# Things I Do Use AI For

## The Boring Parts of Writing Code

Before writing any code, I might use AI to help organize my thoughts—use it to build scaffolding or outline a project based on existing standards and documentation.

My typical workflow: before starting a new project, I'll do a stream-of-consciousness voice memo capturing my goals and ideas. [[Lab#Whishper|Whisper]] transcribes it. Then I'll feed that transcript into [[Lab#Open WebUI|Open WebUI]] alongside relevant documentation and have it output a rough outline of the foundational modules and functions. By the time I start writing, I have a structure to work from.

> [!NOTE] Update
> For a lot of the planning work, I've recently started using https://gsd.build/ within Claude Code, which helps codify the goals of the project and of the specific milestones I'm working against. It's a little heavy on tokens, but once set up I find it produces consistently good output. 

Once the [[Work Right Ship Fast|"Make it Work"]] phase is done and I've got a functional first draft, I'll turn to AI again for the [[Work Right Ship Fast|"Make it Right"]] stage—reviewing code for best practices, refactoring for clarity, applying consistent styling, writing unit tests, adding docstrings and type hints. It's useful as a second set of eyes on stuff I might overlook in the flow of writing.

If you get a diff of this post in GitHub, you'll notice that I've changed my stance a little bit over time on whether to use LLMs to actually assist in generating code. Before Claude Code got so good, I was *very* hesitant to allow an LLM to write a lot of the code I was responsible for. The reason went back to my principals: I'm fine with letting an [[#The Intern Analogy|intern]] do the busywork involved with development, but I didn't want my intern writing my code, especially when that intern was ChatGPT quality. 

My stance has changed a little bit. Claude Code hit the scene, and while it can certainly go a little off the rails occasionally, for the most part the code it generates is pretty solid. Now, I can honestly say that I'm still skeptical enough to actually review every line of code it produces that I'd be responsible for, and I typically only really point it at either really straightforward tasks that don't require a lot of complexity ("hook this app up to SSO with the msal package") or using a technology I'm simply not interested in learning ("make this web app look like someone with eyes built it"). 


## Personal Knowledge Management

### Ingestion and Extraction

In my personal knowledge management system ( #pkm ), AI helps me handle the firehose of information without getting buried in it. The goal is to let AI assist with processing, but always with my direction—never fully automated. This means ingesting diverse media, spanning articles, videos, essays, and more, with AI helping me quickly sort what’s actually worth my time.

Using tools like [Readwise Reader](https://readwise.io/read)’s [Ghostreader](https://docs.readwise.io/reader/guides/ghostreader/overview) and [Shortform’s](https://extension.shortform.com/) chrome extension, I leverage AI during the ingestion phase to generate summaries that help me quickly gauge whether something is worth my time. It’s a bit like having an [[#The Intern Analogy|intern]] skim my reading list and flag things that match my interests. But that’s assistive, not a replacement for reading. I use those summaries to decide what deserves a deeper look, not as a substitute for actually looking.

For denser material—research papers, long PDFs—AI helps pull out the main ideas and key quotes. It’s a primer, not a replacement. It sets me up to engage with the actual document with some context already loaded, which is especially useful when I’m reading something over multiple sessions or when my attention is scattered.

[[#Intentional Use|Intentionality]] runs through all of it. Each AI interaction is chosen, not automatic.

### Note Creation and Connection

Note-making (as opposed to [note-taking](https://www.youtube.com/watch?v=SAsZDg2l1R0)) is about actively [[Linking Your Thinking|linking]] ideas together, not just documenting them. AI can help with that, but only if it stays in the right lane.

I don’t use AI to generate notes from scratch. Instead, I use it to push on ideas I’ve already started. If a note feels thin, I might ask AI to suggest questions I haven’t considered or flag potential [[Tenth Manning|counterarguments]]. The goal is to deepen the connections between ideas, not outsource the thinking.

In [Obsidian](https://obsidian.md), I use semantic search [plugins](https://github.com/brianpetro/obsidian-smart-connections) that find connections between notes based on meaning rather than keywords. These can surface links between things I wouldn’t have thought to connect, which is where interesting things often happen.

AI is a catalyst and a connector here, not the author. I keep full creative control over what goes into my notes and let AI help find where things might link up.

### Transcription and Post-Processing

Dictation is a big part of my workflow. [[Lab#Whishper|Whisper]] handles transcription quickly and accurately, converting raw verbal input into text I can work from.

The transcription itself is just the starting point. The raw transcript goes into an LLM (usually [[Lab#Open WebUI]]) with a prompt outlining what I want—documentation, a blog post, presentation notes, whatever. AI structures the dump into something coherent while preserving the essence of the original dictation.

But I'm always in the loop. After AI refines the initial draft, I go through it and make it actually sound like me—adjusting tone, fixing emphasis, making sure it says what I meant to say. That step isn't optional.

## Meeting Recaps and Action Items

Memory is unreliable and manual note-taking during meetings means you're half-listening. AI handles this well.

One of the tools I frequently use for this is Microsoft Teams's [recap feature](https://support.microsoft.com/en-us/office/recap-in-microsoft-teams-c2e3a0fe-504f-4b2c-bf85-504938f110ef). Rather than merely relying on memory, of which "the palest ink" is more reliable, the AI converts the meeting dialogue into a summary and pinpoints action items, which means I can review what actually happened without sitting through the whole recording. Also useful for catching up on a meeting I attended but mostly forgot.

It cuts the administrative overhead of post-meeting writeups and gives an outside view of what was said—sometimes it catches things I glossed over in the moment. It's not perfect, and the recap always notes that it's AI-generated, which is the right approach. I still review the output.

# Things I Don’t Use AI For

## Avoiding AI as a Search Engine

AI-powered search results are increasingly common, and I consciously avoid them. Google and Bing keep trying to slot AI responses in front of actual search results. The conversational answers are convenient, but they trade depth and reliability for speed—and worse, they sound authoritative even when they're not. People who just "Ask ChatGPT" their question and take the response at face value are putting a lot of trust in a system with no actual stake in being correct. At the risk of beating a dead horse, [[#LLMs as Talking Machines, Not Thinking Machines]]. Things have improved, but not enough that I'm comfortable with it as a knowledge source.

If I do run across a situation where a conversational response is preferable to parsing search results manually, I'll turn to a hybrid approach using my [[Lab#Open WebUI]] and [[Lab#SearXNG]] services. Open WebUI integrates directly with SearXNG, I activate the tool at the prompt, it generates a search query, sends it to SearXNG, pulls the most relevant results, and outputs an answer with citations from the actual sites it used. That's a workflow I can trust.

## Avoiding Autogenerated Notes and Content

As mentioned in the [[#Note Creation and Connection]] section, I consciously avoid relying on AI to auto-generate notes or content. The process of note-taking is invaluable not just for information retention, but for building actual understanding. The whole point of my #pkm is for me to [[Linking Your Thinking|connect]] ideas together and fortify new knowledge by linking it to things I’m already familiar with. When AI generates notes automatically, it strips away the personal engagement and cognitive effort that go into making meaningful connections.

Avoiding autogenerated notes is about maintaining control over my intellectual development. Each piece of written material, whether a brief note or an extensive article, should bear the mark of my thought process. Shortcuts that remove me from the equation undermine the whole thing.

## Avoiding Copilot-Style Assistance

You might gather from my emphasis on [[#Intentional Use]] that I avoid using GitHub Copilot-style assistance while coding. This decision isn't about imposing my preferences on others—I get that these tools can significantly boost productivity for some developers. Everyone has their unique methods to stay efficient and effective, and it's not my place to pass judgment on how other fleshbags choose to keep food on their table.

An additional reason I steer clear of such editor integrations is something the community, including [[Feeds#^edadb5|ThePrimeagen]], refers to as the "Copilot Pause", which is the the conditioned expectation for Copilot to automatically complete your line or section. When coding, you want to stay in a state of flow, with every keystroke and decision flowing naturally from one to the next, and having an [[#The Intern Analogy|intern]] anticipate and suggest your next move at every turn can disrupt that organic process.

> [!NOTE] Watch Prime Talk with Quincy About the Copilot Pause
> [Watch on Youtube](https://www.youtube.com/watch?v=SuWKCv3ewXw?t=6200)

From an ethical standpoint, as an advocate of open source principles, the way Microsoft has trained Copilot adds another layer of discomfort for me. Even if it's "technically legal," using open source code for training models [without regard for licenses](https://matthewbutterick.com/chron/this-copilot-is-stupid-and-wants-to-kill-me.html) feels off. It raises questions about the integrity and respect for the collaborative spirit that open source communities thrive on. To me, the essence of open source is about sharing and building upon each other's work within agreed-upon boundaries, not bypassing these standards under the guise of innovation.

# Embeddings, Semantic Search, and RAG are Cool

LLMs get most of the attention, but embeddings are often doing the more interesting work underneath.

Embeddings aren't flashy. Numerical vector representations of text aren't something you can easily demo in a tweet, but they're what make semantic search actually work. Instead of matching keywords, they capture meaning and context, which means you can search for a concept and surface relevant content that doesn't use the same words. That's a genuinely different capability than traditional keyword matching.

Where embeddings really shine is in combination with LLMs. Embeddings find the relevant content; LLMs work with it. That combination (retrieval-augmented generation, or RAG) is why some AI applications are actually useful rather than just impressive-sounding. The LLM alone would hallucinate. With good retrieval underneath, it has something real to work from.

I strongly believe that the potential of embeddings is vast and has plenty of room for more innovation.

# AI Things I Enjoy

> [!WARNING] Paid Apps
> Some of the following are paid apps, I'll mark them with 💵

## Development

- [LangChain](https://python.langchain.com/docs/introduction/) Python and JS framework for building AI stuff
  - I've used LangChain in a number of projects, both personal and for work. I've also tried out Microsoft's [Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/overview/) for some work stuff and **vastly** prefer LangChain over it
- [Unstructured](https://unstructured.io/) 💵 free if you self host their [API](https://github.com/Unstructured-IO/unstructured-api)

## Vector Stores

- [Weaviate](https://weaviate.io/)
- [[Lab#SurrealDB]] (not specifically a vector store, but I use it as such more than anything else)
- [ChromaDB](https://docs.trychroma.com/docs/overview/introduction) for local stuff

## Self Hosted Services

- [Ollama](https://ollama.com/)
- [[Lab#Open WebUI]]
- [[Lab#Whishper]]
- [Kokoro FastAPI](https://github.com/remsky/Kokoro-FastAPI)
- [Verba](https://github.com/weaviate/Verba)

## CLIs

- [Claude Code](https://code.claude.com/docs/en/overview) 💵
- [ChatBlade](https://github.com/npiv/chatblade)
- [Fabric](https://github.com/danielmiessler/fabric) (mostly for the prompts)

## Obsidian Plugins

- [Smart Connections](https://smartconnections.app/)
- [Text Generator](https://docs.text-gen.com/)

## Media Ingestion

- [Readwise Reader's](https://readwise.io/read) [Ghostreader](https://docs.readwise.io/reader/guides/ghostreader/overview) 💵
- [Shortform's Chrome Extension](https://extension.shortform.com/) 💵

## Other Stuff

- [v0](https://v0.dev/) I can't write good looking frontends. This helps.
