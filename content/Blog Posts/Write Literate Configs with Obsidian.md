---
title: Tangle - Write Literate Configs and Code Directly From Obsidian
date: 2022-06-01 01:06:51 -0400
tags:
  - pkm
  - obsidian
  - tangle
modified: 2023-12-22
---

About a year ago now, I happened across [DistroTube's YouTube](https://www.youtube.com/watch?v=pQe1ul51RM0) video talking about rewriting his configs in Org Mode in Emacs. At the time, I was wondering about how I could go about making my configurations both more modular and readable. The video was informative and I loved the idea of writing out code and configs from a document like file, but ultimately the drawback was that I didn't use emacs at the time and the cost of learning a whole new system outweighed the benefit of this one feature. 

Fast forward a couple of months and I begin falling in love with Obsidian so much I look for more and more things to do in it. I naturally want to put my common configs in my obsidian vault anyway because it's easier to sync all of my stuff between my machines, but Obsidian can't open the various file types that my configs take on, and nor do I want it to. So I wanted a better solution, and that when I remembered that video that I'd watched months prior. I decided I wanted to build a workflow that allowed me to write out *non markdown*  and even *source code* files directly from Obsidian. 

## Goals

- Ideally, I wanted to: 
	1. write a code block in Obsidian
	2. pass in a location in or near the code block
	3. perform some hot-keyable action to write out the code block to the location specified
- I wanted the ability to write multiple different blocks to the same file separated by annotations and notes
	- Specifically, I wanted the ability to split up source code blocks without overwriting the files with every  block reference
		- Additional code blocks referencing the same *source code* file within the same *markdown* file should have an append function, not an overwrite function
- **Nice to Have:** Some of the programs I use, like AutoRecon, have multiple configuration files, so I want to be able to write to *all of them* from the same markdown file


## Demonstrations

###  Python Hello World
Lets say I want to write out a basic hello world script with python from within my Obsidian vault. 

~~~markdown
# Python Hello World App
```python tangle:hello_world.py
print("Hello World")
```
~~~

When I run an Obsidian command, this will output a `hello_world.py` file in the same directory as this markdown file with the contents `print("Hello World"`. 

###  Fish Shell Config

~~~markdown
## Hide Welcome Message

```bash tangle:~/.config/fish/config.fish
## Hide welcome message
set fish_greeting
set VIRTUAL_ENV_DISABLE_PROMPT "1"

```

## Set Environment Variables

I want micro to be my visual editor. `PYTHON_KEYRING_BACKEND` sets upo my keyring to use KeePass

```bash tangle:~/.config/fish/config.fish
set -gx MANPAGER "sh -c 'col -bx | bat -l man -p'"
set -gx SSH_AUTH_SOCK "$XDG_RUNTIME_DIR/ssh-agent.socket"
set -gx EDITOR micro
set -gx VISUAL micro
set -gx PYTHON_KEYRING_BACKEND keyring.backends.SecretService.Keyring
set -gx NMAP_PRIVILEGED "" # https://secwiki.org/w/Running_nmap_as_an_unprivileged_user

```

...truncated...

##  History and Bang Functions

https://github.com/oh-my-fish/plugin-bang-bang

```bash tangle:~/.config/fish/config.fish

## Functions needed for !! and !$ https://github.com/oh-my-fish/plugin-bang-bang
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

if [ "$fish_key_bindings" = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

## Fish command history
function history
    builtin history --show-time='%F %T '
end
```

...truncated...
## Aliases

### LS And CD
```bash tangle:~/.config/fish/config.fish

## Useful aliases
# Replace ls with exa
alias ls='exa -al --color=always --group-directories-first' # preferred listing
alias la='exa -a --color=always --group-directories-first'  # all files and dirs
alias ll='exa -l --color=always --group-directories-first'  # long format
alias lt='exa -aT --color=always --group-directories-first' # tree listing
alias l.="exa -a | egrep '^\.'"
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias ......='cd ../../../../..'

```

### Common Linux

```bash tangle:~/.config/fish/config.fish
# Replace some more things with better alternatives
[ ! -x /usr/bin/bat ] && [ -x /usr/bin/cat ] && alias cat='bat'

# Common use
alias grubup="sudo update-grub"
alias tarnow='tar -acf '
alias untar='tar -zxvf '
alias wget='wget -c '
alias psmem='ps auxf | sort -nr -k 4'
alias psmem10='ps auxf | sort -nr -k 4 | head -10'
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias hw='hwinfo --short'                                   # Hardware Info
alias please='sudo'
alias tb='nc termbin.com 9999'
#get the error messages from journalctl
alias jctl="journalctl -p 3 -xb"
```
...truncated...

## NeoFetch
```bash tangle:~/.config/fish/config.fish

## Run neofetch if session is interactive
if status --is-interactive
   neofetch
end
```
~~~

Here demonstrates the second goal. Each of these code blocks will be written to `~/.config/fish/config.fish`. 


## My Tools

I discovered the functionality I wanted was referred to as *Tangling*, and the process I wanted to have was similar to one called *literate programming*. With that in mind, I started googling around for markdown tanglers. I found 2 on github, [LMT](https://github.com/driusan/lmt) which I had a hard time compiling and wasn't in my Arch repos, and [md-tangle](https://github.com/joakimmj/md-tangle), which had the advantages of being written in python (my favorite language), seemed like it would be easy to work with, and based on their [own documentation](https://github.com/joakimmj/md-tangle/blob/master/DOCS.md) seemed to meet all of the goals I had. 

I am also using the fabulous [Templater](https://github.com/SilentVoid13/Templater) community plugin to execute the script from Obsidian via a template.

## Setup

I installed `md-tangle` into my global python environment with `pip install md-tangle`. 

I then created a user script in the `Templater` configuration with this content: `cd "<% tp.file.folder(true) %>" && md-tangle -f "<% tp.file.path() %>"`. 
This changes into the directory the file I am executing the user script from first. This is because if I don't specify an absolute path in the code block, my preference is to write it in the same directory as the markdown file instead of the root of my vault. It then runs md-tangle against the file I am executing the script from with the `--force` flag to overwrite existing output files if they exist already. 

For my template file, I created a file in my template directory called `!tangle` (exclamation points indicate to me that this is a user script template, but are not required). The content of the file is only:

```markdown
<% tp.user.tangle() %>
```

Now to execute the script, I use my hotkey for `Templater: Insert Template`, choose `!tangle` and and it writes those blocks out.

### Additional Setup to Write CSS Snippets and Automatically Reload

Once I got this all figured out, one of my first use cases was wanting to write my CSS snippets directly in Obsidian, and have them somewhat automatically reload. For this I had to add an additional step of reloading Obsidian after the tangle was performed. For this, I made use of the [Obsidian Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri) community plugin. 

I wrote an additional user script simply to execute the `Reload App Without Saving` command palate action. The user script for me is called `reload_obsidian` looks like this `xdg-open "obsidian://advanced-uri?vault=Nux&commandname=Reload app without saving"`. 

I then wrote another template called `!tangle-reload` and has the following content:

```markdown
<% tp.user.tangle() %>
<% tp.user.reload_obsidian() %>
```

Now I can write my snippets directly from obsidian, and run a script as described in the next section, and have those changes take effect automatically.

In conjunction with this, on my files that have css snippets for Obsidian, I have a markdown link at the top of the page that utilizes the [Hotkeys for Templates](https://github.com/Vinzent03/obsidian-hotkeys-for-templates) plugin in conjunction with the Advanced URI, so it looks like this:

```markdown
[Click to Tangle And Reload]("obsidian://advanced-uri?vault=Nux&commandname=Hotkeys%20for%20templates:%20Insert%20from%20Templater:%20!tangle-reload")
```

## Additional Benefits

### Modularity

In this setup, if I want to take out a section of a config file that I have set up to be tangled, I can easily remove it by breaking the code block, or moving that specific block to another file within Obsidian with the [Note Refactor](https://github.com/lynchjames/note-refactor-obsidian) community plugin.

### API Documentation

In my work, I'm constantly looking up documentation of how to interact with APIs in a specific way. More often than not, I only need a subset of the documentation, and I'd prefer it if it had all of the appropriate variable substitutions relevant to my context. This is a superb use case for Obsidian already, but taking it to the next level is actually writing functional scripts directly from Obsidian. 

### Probably More!

I've only figured this out within the last couple of days. This seems like it'd be a great plugin idea. I unfortunately do not think I have the time to be able to maintain something like that to a standard of quality I'd prefer to keep. However, I would love to see what someone else might come up with in this space, and more so I'd love to see how others might use this workflow differently. As I mentioned at the top, I'm always looking for ways to get more stuff into Obsidian. 
