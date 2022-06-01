---
title: Work Right Ship Fast
date: 2022-06-01 02:06:37 -0400
categories: [Technology]
tags: [philosophy]     # TAG names should always be lowercase
---

> [Original LinkedIn Post](https://www.linkedin.com/pulse/work-right-shippable-fast-cam-barts-/?trackingId=%2FY050NjaQdS8y11%2BQIoivg%3D%3D)
{: .prompt-info }


In programming, and indeed most tech, there is always a necessary _order_ in which we should work through a particular issue.

That order is like so:

-   **Make it _work_**
-   **Make it _right_**
-   **Make it _shippable_**
-   **Make it _fast_**

This is one of my favorite phrases, and is applicable in many places in your life. While simple, there is a lot packed in here.

-   The first bit here is that making a piece of code _work_ always takes a priority over making it _correctly_. Often you will run into folks who will be obsessed with writing something correctly the first time around, and never get code on screen out of self induced anxiety. Hear this: Not getting code on screen is _less than worthless_. A programmers time and developmental energy is inherently valuable, and if you lose time focusing on a program you never write, you are burning up a valuable resource. May as well withdraw few Benjamins and light 'em on fire.

-   After you get your code to actually function the first time, **then** its time to go back and make it work correctly. This includes finding all edge cases, making your code cleaner, more readable, and effectively more maintainable. This mean going back in an turning repeated code into functions, abstracting things into other file, modules, packages if they exceed the scope of what you are doing. This is a lot of administrative work, and people _love_ skipping this step because they don't feel like they are producing any type of value, because they tie value to functionality and value. This is short sighted. If you focus on just packing in features, you will be piling up tech debt. There are a few pictures I want you to see here, imagine a room in a house that you'd love to do something with, but you start putting a few boxes in there for storage, and then a few more come, and a few more. Next thing you know, its hard to even get into the room, because of the messy, unorganized nature of the room. It loses its functionality to store new items, because of that nature. Now a more aggressive example: generating trash is a normal part of being a human. Not wanting to take it out is also human, a point my wife will argue makes me the most human on Earth. If you never take out the garbage, and just throw it into the garage, in the beginning you might not worry because it manageable. This goes on for a few months, and you start running out of space to put your tools in your garage, so you create tables that are supported by the piles of garbage. You place your tools there, and they are perfectly useful tables (which will eventually also be holding garbage). At a certain point, you can't have people come over because garbage fills your home. You don't ever take it out, and even the thought of doing so brings more hesitation because _you have built functional features on the garbage_. Don't let yourself get here.

-   The next bit here is a warning against premature optimization. You will note making a piece of code _fast_ is the last step in the chain. It is no doubt important, but it's only important in context. You can look all over the internet and industry and you will find warnings against premature optimization. There are a number of reasons for this, not the least of them tying into the first point of getting so worked into making some code fast that it never works. Another reason, similarly, is because you should not optimize where optimizations wouldn't actually matter, and you don't know what would actually matter until you have shipped. Don't spend 3 days optimizing a piece of code that accounts for less than 1% of your run time is the idea here. Making a piece of code fast often inherently makes it less intuitive, either by changing how you are doing something entirely or by making the code less readable (I'm thinking of minimizers here, we will loop back around to that).


-   This motto is not my brainchild, you will hear versions of it all over that predate my time in the industry, but what I think I can claim credit for is the **_shippable_** part (though I have no idea if that was influenced by someone else). Here is another sentiment that you will hear me repeat over and over, also applicable in other ways: **_Real developers ship._** As with many difficult industries, you will find people who attempt to gatekeep people from coming in. Its unfortunately rampant in the community, and you will see that when you start getting more exposure to the culture. You get a lot of "HTML isn't a programming language, so you aren't a developer" and even some awful people who think people unlike them are bad programmers, a sentiment held especially against women (which boggles my mind, since the beginning women have made this industry what it is. If you desire a history lesson, look into Ada Lovelace and Rear Admiral Grace Hopper (who is one of my daughters namesakes btw). It has gotten better in recent years, but its still a problem. Gatekeeping is counter productive, and stupid. That being said, the gate that is worth keeping is this one, and here is why: You can write 10,000 exquisite, readable, formatted, beautiful and clever lines of code, but if no one uses it, it is worthless. You don't get points for writing the code, you get points for people, including yourself, _using_ the code. When you ship code, you get feedback that you never would have gotten, and forces you to see problem areas you are blind to, usually because you are too close to a problem. You will never find the crack in the hull of a ship if you can only see the ship through a microscope.