# InstaFeed Component

The aim of this project was to create a 3x3 grid of the latest Instagram posts. 
The development and reasoning behind choices has been documented on my [medium blog](https://medium.com/dev-genius/improving-instagram-posts-in-react-cea3eec4dbaa).

Currently this component relies on [this backend](https://github.com/fs1g17/http-server), which is a Golang server that hides away sensitive information, 
such as the user_id and the access_token, as well as providing caching capabilities.

The link to the backend [is here](https://github.com/fs1g17/instafeed/blob/b2744f66a728a96221898d00b077a6852e78198d/src/components/InstaFeed/InstaFeed.tsx#L16), so if you are not running it locally, just change it there and should suffice!

