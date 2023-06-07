
# Youtub Clone Project

This project is inteded to be a clone of Youtube while showcasing what we have learned in Module 3 of our Pursuit Journey. In this project, we make use of React and many of its features, as well as utilizing functions that update states, fetch, promises, and passing props.


## API Reference

#### Base Url

```http
  GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=25&key=${process.env.REACT_APP_API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `${searchTerm}` | `string` | A String of what will be searched |
| `${process.env.REACT_APP_API_KEY}` | `string` | **Required**. Your API key |

#### Get Popular Videos

```http
  GET https://www.googleapis.com/youtube/v3/videos?part=snippet%2CContentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=21&key=${process.env.REACT_APP_API_KEY}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `${process.env.REACT_APP_API_KEY}` | `string` | **Required**. Your API key |

#### Get One Video

```http
  GET /video/${video.id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `${video.id}`      | `string` | **Required**. Id of video to fetch |




## Authors

- [Trello board](https://trello.com/b/WmDyLtx8/youtube-clone)
- [@crsvalle](https://github.com/crsvalle)
- [@Irwinj7](https://github.com/Irwinj7)
- [@imjerryjohn](https://github.com/imjerryjohn)
- [@p-mitchell1007](https://github.com/p-mitchell1007)


