# tweetland-clone

A Twitter clone that allows users to post tweets, follow other users, and engage with tweets through likes, retweets, and replies.
Screens
Home Feed

Displays a feed of tweets from the user and the users they follow.

    Behavior: Fetches and updates tweets from followed users.
    Layout: Contains a Header and a TweetList.

Explore

Displays trending tweets and suggestions for users to follow.

    Behavior: Fetches and updates trending tweets and suggested users.
    Layout: Contains a Header and a TrendingTweets section followed by a SuggestedUsers section.

Profile

Displays user's profile information, tweets, followers, and following.

    Behavior: Fetches and updates user's profile data and tweets.
    Layout: Contains a Header, ProfileInfo, ProfileStats, and TweetList.

Components
Header

Displays the app title and navigation buttons.

    Behavior: Allows navigation between Home Feed, Explore, and Profile screens.
    Styling: Fixed at the top, with a Twitter blue color scheme.

TweetList

Displays a list of tweets in a scrollable format.

    Behavior:
        Renders a list of TweetItem components.
        Supports pull-to-refresh and infinite scrolling.
    Styling: Occupies the remaining space below the Header.

TweetItem

Displays an individual tweet with its content, author, likes, retweets, and reply options.

    Behavior: On tap, opens the tweet for viewing and interaction.
    Styling:
        Displays the tweet content in a readable format.
        Shows author's name, handle, timestamp, and profile picture.
        Provides options for liking, retweeting, and replying to the tweet.

ProfileInfo

Displays user's profile picture, name, bio, and follower/following count.

    Behavior: Allows editing of profile information.
    Styling: Positioned at the top of the Profile screen with appropriate spacing and alignment.

ProfileStats

Displays user's tweet count, followers count, and following count.

    Behavior: Allows navigation to view followers and following lists.
    Styling: Positioned below ProfileInfo with appropriate spacing and alignment.

TrendingTweets

Displays a list of trending tweets.

    Behavior: Allows tapping on a trend to view related tweets.
    Styling: Styled similarly to TweetList with a section header for trending topics.

SuggestedUsers

Displays a list of suggested users for the current user to follow.

    Behavior: Allows following suggested users.
    Styling: Styled similarly to TweetList with a section header for suggested users.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tweetland-clone.git
cd tweetland-clone
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
