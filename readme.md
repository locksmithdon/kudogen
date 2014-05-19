# kudogen

> Helping co-workers recognize their noteworthiness

kudogen is an app that helps co-workers, particularly those spread across disparate locations recognize each other and have a few laughs. About ...

* their successes and suckcesses,
* their brilliance and bone-headedness,
* and their ah-sweet's and oh-shit's

My team, spread across both hemispheres, meets once a week to catch up. We intend to use kudogen to nominate each other for "awards". Some you're happy to be nominated for, others ... not so much.

## Implementation

I'm currently still building the basic functionality, and will keep this readme updated accordingly. The plan is to host a [ASP.NET Web API](http://www.asp.net/web-api) endpoint in [Microsoft Azure](http://www.azure.microsoft.com/) and use [AngularJS](http://angularjs.org) and [BreezeJS](http://breezejs.com) for the frontend. More on this as it develops.

## Round 2

Initially I was going to use [Azure Mobile Services](http://azure.microsoft.com/en-us/services/mobile-services/) since there will likely be mobile apps to consume the API down the road, but reconsidered. It's still around in the [initial-approach](https://github.com/IntergenUSA/kudogen/tree/initial-approach) branch (the readme has more rationale), but I didn't get too far before changing my minds. Don't get me wrong, I like Azure Mobile Services and use it on other projects. I just decided not to use it on this one ... yet.

