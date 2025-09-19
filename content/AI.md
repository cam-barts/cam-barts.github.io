---
title: AI
description: How I do and don't use AI
tags: 
  - SlashPages
---

# Guiding Principals

## LLMs as Talking Machines, Not Thinking Machines

Recognizing large language models (LLMs) as language tools rather than thinking tools is essential to my AI approach. This distinction profoundly influences how I use AI. LLMs generate coherent sentences based on patterns, not understanding, leading to confident sounding yet ultimately inaccurate responses known as "hallucinations".

LLMs can be extraordinarily powerful tools, and like many very powerful tools, they are subject to the [[Golden Hammer|Law of the Hammer]]. In this way, I think of them like a table saw: If you have access to a table saw, its natural to think of new applications for the table saw. If this behavior is left unchecked, you might start using the table saw in situations where it might not be the best tool.

This analogy goes even further for me in that it would be silly to think that a table saw on its own can produce a house. Of course it would be useful in a great number of tasks required to build the house, but you will eventually need other tools, not to mention a carpenter.

Viewing LLMs as language processors rather than independent thinkers shapes my usage: never as standalones, but as integral components in broader systems. Using AI to answer questions resembles a game of telephone—it aims to relay something sensible but often errs in content due to a lack of comprehension. This is precisely why I refrain from using LLMs as substitutes for search engines; they may offer compelling answers that lack accuracy, putting you in a precarious position. Instead, I pair them with complementary tools like search engines or retrieval-augmented generation, ensuring their output is verifiable and grounded in truth.

The beauty of these language machines lies in their ability to enhance communication, not automate it. They serve as tools for sketching concepts before refining them into masterpieces. Ideal for brainstorming or drafting initial texts, they falter when detailed knowledge is required. Thus, I remain mindful of their operational space. [[Levels Of Proficency|They are not the experts]], but rather scribes recording thoughts without grasping their full implications.

While LLMs hold tremendous potential, treating them as anything more than language machines risks overestimating their current capabilities. They require guidance and verification; they’re part of the process, not the endpoint. This focus on their nature, rather than overstating their cognitive abilities, helps maintain a productive and realistic approach to working with AI.

## The Intern Analogy

The underpaid intern analogy has been a guiding force in how I interact with AI, particularly LLMs. I visualize LLMs as interns who are both eager and capable of processing vast amounts of information quickly. With good tooling, they have a superpower to take in and communicate data at speeds no human intern could match. Yet, just like real-life interns who may lack the context or experience to make nuanced decisions, LLMs need supervision. They aren't equipped to make judgments or understand the intricacies of a situation fully, which is a key limitation I try to keep in mind.

This analogy serves as a reminder that, despite their impressive abilities, LLMs' outputs often require the expertise and oversight of a seasoned professional, or at least a human capable of understanding nuance. Much like an intern might draft a report that needs to be reviewed for accuracy and relevance, any LLM output could benefit from human scrutiny. I find it crucial not to automate processes entirely with AI without human checks and balances. The intern can handle drafting, summarizing, or organizing information, but final validation always rests in human hands. This approach helps ensure that the work is both accurate and insightful.

Another layer to this analogy is the intrinsic motivation of interns—they want to impress, they want to do well, sometimes going above and beyond expectations. However, they might not always know what's most critical without proper guidance. An LLM, driven by its programming, will attempt to provide the most competent-seeming response, yet it may unintentionally prioritize style over substance. That's why it's essential to direct its focus properly, complementing it with additional resources, checks, or integration with other smart tools that can supply accurate and trustworthy data.

In the end, visualizing LLMs as underpaid interns shapes my workflow to be collaborative rather than solely dependent on AI. It's not about replacing human effort and insight but augmenting it, making sure that AI acts as a supportive tool rather than a substitutive one. The intern is there to assist, to help juggle the myriad of tasks and information we deal with daily, but always under a watchful human eye who ensures the output meets the standards required.

## Intentional Use

My principal of Intentional use of AI is fundamentally about maintaining an active role in my interactions with technology, ensuring nothing happens on autopilot without my explicit direction. I am wary of passive integrations, where AI operates without a deliberate trigger or oversight.

For instance, in my approach to coding, tools like [[#Avoiding Copilot-Style Assistance|Copilot]] that auto-generate code snippets without a proactive nudge are a [[Nope]] from me. I insist that any engagement with AI is deliberate, whether it's enhancing existing work or initiating a specific task, because this allows me to maintain full control over the creative and decision-making processes. The last thing I want is AI filling in gaps autonomously.

This focus on intention spills over into my broader workflow, dictating how I leverage AI across various tasks. Whenever I use AI, be it for drafting, generating insights, or any other use case, the choice to employ AI is purposeful. This ensures that the AI acts as an extension of my thought process rather than an independent agent.

Being intentional in how I use AI means that each interaction is marked by clear boundaries and active involvement. This method preserves the irreplaceable human element in AI-assisted work, where my insights and decisions take precedence. By avoiding passive automation, I ensure that AI remains a powerful tool in my arsenal, supporting my goals without encroaching on the creative autonomy that defines a truly productive workflow.

# Things I Do Use AI For

## Before and After Writing Code

In the realm of software development, I try to keep my use of AI is carefully structured around boilerplate activities and less around the actual writing of the code. This approach helps me harness the unique strengths of AI while preserving the integrity and creativity inherent to the coding process itself.

Before I ever write a line of code, I might consult AI to help plan and organize my thoughts, using it as a tool to build scaffolding or outline a project based on predefined standards and documentation.

For example, before diving into a new project, I often begin with a stream of consciousness dictation capturing my goals and ideas for the code I plan to write. I'll use [[Lab#Whishper|whisper]] to transcribe that audio into text. Then, I'll use [[Lab#Open WebUI|Open WebUI]] to process my transcript alongside relevant documentation, such as coding standards or project requirements, and output an outline the foundational modules and functions in the code. This preliminary work ensures that when I start to write, I am doing so with a clear and intentional structure in mind.

Once the [[Work Right Ship Fast|"Make it Work"]] phase is complete and I've fleshed out my ideas into a first draft of functional code, I turn to AI once more, this time for refinement and enhancement. Here, AI becomes an invaluable collaborator in the [[Work Right Ship Fast|"Make it Right"]] stage, helping me to review and tidy up the code to ensure it adheres to best practices. I might ask it to refactor sections for efficiency or clarity, apply consistent styling, write unit tests, or add comprehensive docstrings and type hints in language-specific formats like Python. The output is something that benefits from a secondary set of eyes, providing suggestions I might overlook during the intense flow of initial creation.

The crucial element, however, is maintaining a strict boundary where AI is involved. During the actual development, where creativity meets function, I keep the LLM at bay. The reason is goes back to my principals: I'm fine with letting an [[#The Intern Analogy|intern]] do the busywork involved with development, but I don't want my intern writing my code.

By engaging AI before and after the main coding activity, I ensure its strengths are maximized in planning and refining stages, while the creative human element remains intact in the heart of development itself. This balanced approach lets me integrate AI where it adds the most value.

## Personal Knowledge Management

### Ingestion and Extraction

In my personal knowledge management system ( #pkm ), deliberate ingestion and extraction of information are key components where AI plays a significant role, enhancing the way I consume and interact with content. The goal is to smartly integrate AI to assist with information processing but always under my guidance, ensuring that the human element is never lost in translation. This process begins by ingesting diverse media, spanning articles, videos, essays, and more, with the intent to efficiently sort through and identify points of genuine interest.

Using tools like [Readwise Reader](https://readwise.io/read)'s [Ghostreader](https://docs.readwise.io/reader/guides/ghostreader/overview) and [Shortform's](https://extension.shortform.com/) chrome extension, I leverage AI during the ingestion phase to generate summaries that help me quickly gauge the potential value of content. It's a bit like having an [[#The Intern Analogy|intern]] curate my reading list by highlighting materials that align with my interests. However, it’s crucial that this process remains an _assistive_ function, not a replacement for my own engagement. I look at AI-generated summaries not as the end but as a way to efficiently decide what deserves a deeper dive.

When it comes to denser materials like research papers or lengthy PDFs, AI assists in extracting main ideas and important quotations. This step functions as a prelude, sparking my curiosity and setting the stage for active reading, and specifically doesn’t replace the actual experience of engaging with the original document. Instead, it serves as a primer, preparing me to delve into the material with greater context and focus. This kind of pre-work is especially useful for maintaining interest and ensuring comprehension, and is particularly valuable when wrestling with my own tendencies to get distracted or consuming content over multiple sessions.

Throughout this process, [[#Intentional Use|intentionality]] is the guiding principle. Each AI interaction is carefully chosen to enhance understanding and purpose, never replacing the ultimate objective of personal insight and connection.

### Note Creation and Connection

In the realm of personal knowledge management, creating and connecting notes is where I find AI to certainly be beneficial, yet it's essential for me that this process remains rooted in intentional interaction on my part. The real value of note-making (as opposed to [note-taking](https://www.youtube.com/watch?v=SAsZDg2l1R0)) lies not just in documenting information, but in developing a deeper understanding by actively [[Linking Your Thinking|linking]] ideas together. AI can act as a facilitator in this endeavor, serving as a guide to help expand and refine thoughts without overshadowing the personal insights that make note-making meaningful.

When it comes to actual note creation, I resist the temptation to lean on AI for generating them from scratch. Instead, I use AI to prompt further exploration of an already seeded idea. For instance, if a note lacks depth, I might use AI to propose thought-provoking questions or highlight potential [[Tenth Manning|counterarguments]] that I hadn’t considered. This approach aligns with my goal of deepening the cognitive connections between ideas, ensuring that each note is a product of both my original insights and the AI's ability to evoke further reflection.

When integrating AI within my note-taking workflow in [Obsidian](https://obsidian.md), I take advantage of semantic search tools that analyze the meaning behind the text rather than just the words themselves. This includes using [plugins](https://github.com/brianpetro/obsidian-smart-connections) that can identify connections between seemingly unrelated notes, suggesting avenues for exploration and potentially unearthing new insights. By facilitating these connections, AI helps to weave a richer tapestry of knowledge, one where insights are continuously refined and expanded upon.

Ultimately, the process is collaborative, with AI acting as both a catalyst for idea generation and a supportive tool for finding links between concepts. This ensures that my notes remain dynamic and thoroughly considered. By retaining full creative control over note creation and leveraging AI's strengths in connection and suggestion, I maintain a balance that fosters a deeper engagement with the material.

### Transcription and Post-Processing

Dictation, transcription, and post-processing play vital roles in my workflow, especially when transforming streams of consciousness into polished, coherent pieces of content. The journey begins with dictation, where AI serves as an indispensable ally in converting spoken thoughts into written text. Using AI models like [[Lab#Whishper|Whisper]], I transcribe audio recordings swiftly and accurately. This initial step transforms raw verbal input into a textual format that forms the baseline for further refinement.

The transcription process, however, is just the beginning. Once the spoken words are down on paper, the real magic happens in the post-processing phase. Here, AI assists in organizing and structuring these raw transcripts, ensuring that they evolve into cohesive documents. I feed the transcribed text into an LLM (usually using [[Lab#Open WebUI]]), guided by specific prompts that outline my goals—whether crafting documentation, writing a blog post, or preparing presentation notes. This step transforms an unstructured data dump into a well-rounded piece of content, maintaining the essence of the original dictation while enhancing clarity and readability.

Crucially, although AI plays a significant role in restructuring the text, the human touch remains integral at every stage. After the AI refines the initial draft, I meticulously review the content, making adjustments where needed to ensure the final product aligns perfectly with my voice and intent. This process involves not only ensuring grammatical accuracy but also adapting tone and emphasis to suit the desired outcome. By doing so, I safeguard the authenticity of the output, making sure it resonates with the intended audience.

## Meeting Recaps and Action Items

In the context of meetings and communication, AI presents remarkable opportunities to streamline workflow and ensure nothing slips through the cracks. One of the most beneficial applications I've found is using AI for generating meeting recaps and identifying action items. Rather than merely relying on memory, of which "the palest ink" is more reliable, or manual note-taking, AI acts as an impartial scribe, capturing the details of our discussions and delivering them back in a structured format that's easy to digest and act upon.

One of the tools I frequently use for this is Microsoft Teams's [recap feature](https://support.microsoft.com/en-us/office/recap-in-microsoft-teams-c2e3a0fe-504f-4b2c-bf85-504938f110ef). By converting the meeting dialogue into a concise summary and pinpointing action items, the AI enables me to review key decisions and next steps without wading through the entire discussion again. The recap is also useful for returning to a meeting later on and recalling the discussion topics.

The benefit here is twofold: it reduces the administrative overhead typically associated with post-meeting tasks and provides an unbiased perspective on what transpired, highlighting items that may need additional attention. While the feature does a decent job at summarizing and extracting key points, I appreciate that the recap always includes a note indicating it's AI-generated and still requires a human to review the outputs to ensure nothing's been misinterpreted.

# Things I Don’t Use AI For

## Avoiding AI as a Search Engine

In an era where AI-powered search results are becoming increasingly common, I consciously choose to avoid using AI as a substitute for traditional search engines. Google and Bing often try to provide an AI generated response to queries. The allure of quick, conversational answers might seem convenient, but I find that this approach often sacrifices the depth and reliability of information that I value. Whats even worse is users who just "Ask ChatGPT" their question and take the response as valid. AI-generated responses can be highly persuasive and well-phrased, but without proper verification, they can lead to misinformation or incomplete understanding. At the risk of beating a dead horse, [[#LLMs as Talking Machines, Not Thinking Machines]]. While I acknowledge that there have been recent improvements in this area, this is still a risk I'm not willing to take when it comes to gathering knowledge.

If I do run across a situation in which a conversational response is preferable for some reason to just parsing search results manually, I'll turn to a hybrid approach using my [[Lab#Open WebUI]] and [[Lab#SearXNG]] services. The Open WebUI service has the ability to integrate directly with SearXNG, and as a user I can activate the tool at the prompt input to perform a web search to retrieve answers. It will then generate a search query based on my input, send that query to my SearXNG service, generate embeddings from the results, and then use the embeddings to fine the most relevant results to answer the question, and finally output the answer along with citations from the sites it actually used to generate the response.

## Avoiding Autogenerated Notes and Content

As mentioned in the [[#Note Creation and Connection]] section, I consciously avoid relying on AI to auto-generate notes or content. The process of note-taking is invaluable not just for information retention, but for fostering a deeper understanding and internalization of ideas. The whole point of my #pkm is for me to [[Linking Your Thinking|connect]] ideas together and fortify new knowledge by linking it to things I'm already familiar with. When AI generates notes automatically, it strips away the personal engagement and cognitive effort that are crucial to making meaningful connections. For me, creating notes is an integral part of the intellectual journey, transforming passive consumption into active [[#Intentional Use|intentional]] learning.

In essence, avoiding autogenerated notes and content is fundamentally about maintaining control over my intellectual development. It’s about ensuring that each piece of written material, whether a brief note or an extensive article, bears the mark of my thought process and insight. By steering clear of shortcuts that remove me from the equation, I uphold the integrity of my knowledge-building practices and ensure a richer, more rewarding learning experience.

## Avoiding Copilot-Style Assistance

You might gather from my emphasis on [[#Intentional Use]] that I avoid using GitHub Copilot-style assistance while coding. This decision isn't about imposing my preferences on others—I get that these tools can significantly boost productivity for some developers. Everyone has their unique methods to stay efficient and effective, and it's not my place to pass judgment on how other fleshbags choose to keep food on their table.

An additional reason I steer clear of such editor integrations is something the community, including [[Feeds#^edadb5|ThePrimeagen]], refers to as the "Copilot Pause", which is the the conditioned expectation for Copilot to automatically complete your line or section. When coding, you want to stay in a state of flow, with every keystroke and decision flowing naturally from one to the next, and having an [[#The Intern Analogy|intern]] anticipate and suggest your next move at every turn can disrupt that organic process.

> [!NOTE] Watch Prime Talk with Quincy About the Copilot Pause
> [Watch on Youtube](https://www.youtube.com/watch?v=SuWKCv3ewXw?t=6200)

From an ethical standpoint, as an advocate of open source principles, the way Microsoft has trained Copilot adds another layer of discomfort for me. Even if it's "technically legal," using open source code for training models [without regard for licenses](https://matthewbutterick.com/chron/this-copilot-is-stupid-and-wants-to-kill-me.html) feels off. It raises questions about the integrity and respect for the collaborative spirit that open source communities thrive on. To me, the essence of open source is about sharing and building upon each other's work within agreed-upon boundaries, not bypassing these standards under the guise of innovation.

# Embeddings, Semantic Search, and RAG are Cool

In the landscape of AI's rapidly evolving capabilities, Large Language Models (LLMs) often steal the spotlight, celebrated for their ability to generate coherent and contextually rich text. However, behind the scenes in some of the very best applications of AI, embeddings play an equal if not more crucial role in providing value to the user, though that value often goes underappreciated. While LLMs offer the immediate, eye-catching interface of the AI "revolution," embeddings are the unsung heroes, powering deeper insights through a complex network of semantic understanding.

Embeddings may not be flashy or even particularly intuitive, but they hold a powerful place in the AI toolkit, orchestrating relationships between data that transcend surface-level text recognition. These numerical vector representations of text capture the essence of meaning and context, enabling applications like semantic search to surpass traditional keyword matching. This means that rather than just finding exact words, embeddings allow us to delve into the thematic and conceptual similarities between pieces of text—a feat that enriches our ability to locate the blurbs that are most relevant to achieving our goals with AI from a collection of documents.

What makes embeddings particularly compelling is how they complement LLMs, providing a foundational layer that enhances the AI's understanding of context and nuance. By integrating embeddings, AI systems can achieve a richer, more detailed comprehension of the information, fostering more intelligent and intuitive responses. This synergy exemplifies potential collaborations within AI technologies that can drive better, more informed outcomes across various domains.

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

- [ChatBlade](https://github.com/npiv/chatblade)
- [Fabric](https://github.com/danielmiessler/fabric) (mostly for the prompts)
- [Crush](https://github.com/charmbracelet/crush)

## Obsidian Plugins

- [Smart Connections](https://smartconnections.app/)
- [Text Generator](https://docs.text-gen.com/)

## Media Ingestion

- [Readwise Reader's](https://readwise.io/read) [Ghostreader](https://docs.readwise.io/reader/guides/ghostreader/overview) 💵
- [Shortform's Chrome Extension](https://extension.shortform.com/) 💵

## Other Stuff

- [v0](https://v0.dev/) I can't write good looking frontends. This helps.
