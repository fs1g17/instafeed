# InstaFeed Component

The aim of this project was to create a 3x3 grid of the latest Instagram posts. 
The development and reasoning behind choices has been documented on my [medium blog](https://medium.com/dev-genius/improving-instagram-posts-in-react-cea3eec4dbaa).

Currently this component relies on [this backend](https://github.com/fs1g17/http-server), which is a Golang server that hides away sensitive information, such as the `user_id` and the `access_token`, as well as providing caching capabilities.

## Intended Use
This project is intended to display your 9 latest Instagram posts. It is responsive, and displays skeletons when the data is loading.

## How to Use
Spin up the [backend project](https://github.com/fs1g17/instafeed/blob/b2744f66a728a96221898d00b077a6852e78198d/src/components/InstaFeed/InstaFeed.tsx#L16). Once you have the link to the deployed backend app, put replace the `REACT_APP_INSTA_URL` variable in the `.env` file.

## Demo
Here is how the final output looks like (requires the [backend project](https://github.com/fs1g17/instafeed/blob/b2744f66a728a96221898d00b077a6852e78198d/src/components/InstaFeed/InstaFeed.tsx#L16)): 
![image](https://user-images.githubusercontent.com/47851444/232897996-e754c86d-6370-4cde-b866-e7f7023dee50.png)
