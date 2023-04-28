import { rest } from "msw";
import { type } from '../utils/types';

const dummy = "테스트입니다.";

const posts: type.WeatherPostType[] = [
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda91",
    "name": "봄엔 가디거언~!",
    "image": "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda92",
    "name": "모던함의 끝.",
    "image": "https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda93",
    "name": "나.. 좀 이쁠지도?",
    "image": "https://images.onthelook.co.kr/posts/202303200803738411612980.jpeg?w=420&q=60&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda94",
    "name": "아우터 이뿌지!!",
    "image": "https://shop-phinf.pstatic.net/20221026_136/1666775192616mcXHY_JPEG/67911035283532969_380459201.jpg?type=f296_296",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda95",
    "name": "이렇게 입어봐!",
    "image": "https://shop-phinf.pstatic.net/20230310_204/1678432133285TqH1a_JPEG/79567975960091012_1853682088.jpg?type=f296_385",
  }
]

const weatherPostSunny: type.WeatherPostType[] = [
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda91",
    "name": "봄엔 가디거언~!",
    "image": "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda92",
    "name": "모던함의 끝.",
    "image": "https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda95",
    "name": "이렇게 입어봐!",
    "image": "https://shop-phinf.pstatic.net/20230310_204/1678432133285TqH1a_JPEG/79567975960091012_1853682088.jpg?type=f296_385",
  }
]
const weatherPostCloud: type.WeatherPostType[] = [
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda91",
    "name": "봄엔 가디거언~!",
    "image": "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda92",
    "name": "모던함의 끝.",
    "image": "https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda94",
    "name": "아우터 이뿌지!!",
    "image": "https://shop-phinf.pstatic.net/20221026_136/1666775192616mcXHY_JPEG/67911035283532969_380459201.jpg?type=f296_296",
  },
]
const weatherPostRain: type.WeatherPostType[] = [
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda93",
    "name": "나.. 좀 이쁠지도?",
    "image": "https://images.onthelook.co.kr/posts/202303200803738411612980.jpeg?w=420&q=60&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda92",
    "name": "모던함의 끝.",
    "image": "https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda95",
    "name": "이렇게 입어봐!",
    "image": "https://shop-phinf.pstatic.net/20230310_204/1678432133285TqH1a_JPEG/79567975960091012_1853682088.jpg?type=f296_385",
  }
]
const weatherPostSnow: type.WeatherPostType[] = [
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda91",
    "name": "봄엔 가디거언~!",
    "image": "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda94",
    "name": "아우터 이뿌지!!",
    "image": "https://shop-phinf.pstatic.net/20221026_136/1666775192616mcXHY_JPEG/67911035283532969_380459201.jpg?type=f296_296",
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda95",
    "name": "이렇게 입어봐!",
    "image": "https://shop-phinf.pstatic.net/20230310_204/1678432133285TqH1a_JPEG/79567975960091012_1853682088.jpg?type=f296_385",
  }
]

const singlePost1: type.SinglePostType = 
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda91",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "봄엔 가디거언~!",
    "image": "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp",
    "review": "추웠다",
    "skyStatus": 1,
    "rainfallType": 3,
    "windChill": 0.8,
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": ""
  }

const singlePost2: type.SinglePostType = 
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda92",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "모던함의 끝.",
    "image": "https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp",
    "review": "추웠다",
    "skyStatus": 3,
    "rainfallType": 1,
    "windChill": 1,
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": ""
  }

const singlePost3: type.SinglePostType = 
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda93",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "나.. 좀 이쁠지도?",
    "image": "https://images.onthelook.co.kr/posts/202303200803738411612980.jpeg?w=420&q=60&f=webp",
    "review": "추웠다",
    "skyStatus": 3,
    "rainfallType": 7,
    "windChill": 5,
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": ""
  }

const singlePost4: type.SinglePostType = 
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda94",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "아우터 이뿌지!!",
    "image": "https://shop-phinf.pstatic.net/20221026_136/1666775192616mcXHY_JPEG/67911035283532969_380459201.jpg?type=f296_296",
    "review": "적당했다.",
    "skyStatus": 1,
    "rainfallType": 4,
    "windChill": 3,
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": ""
  }

const singlePost5: type.SinglePostType = 
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda95",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "이렇게 입어봐!",
    "image": "https://shop-phinf.pstatic.net/20230310_204/1678432133285TqH1a_JPEG/79567975960091012_1853682088.jpg?type=f296_385",
    "review": "추웠다",
    "skyStatus": 1,
    "rainfallType": 2,
    "windChill": 2,
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": ""
  }

const weather: type.WeatherType = 
  {
    "sky": 1,
    "temperature": 8.6,
    "hourRainfall": 0,
    "humidity": 73,
    "rainfallType": 0,
    "windSpeed": 0.8,
    "windChill": 27,
  }

const location: type.LocationType = {
    "fullAddress": "경기도 성남시 분당구 삼평동",
    "region1depth": "경기도",
    "region2depth": "성남시 분당구",
    "region3depth": "삼평동"
  }

const imageUpload: type.ImageUploadType = {
  "imageS3URL": "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp"
}

export const handlers = [
    // 테스트 mock api
    rest.get("/api/test", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(dummy));
    }),

    rest.get("/api/v1/posts", (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(posts))
    }),

    rest.post("/api/v1/posts/weather", async (req, res, ctx) => {
      const requestBody: type.SearchWeatherType = await req.json();

      console.log("requestBody: ", requestBody)
      return res(ctx.status(200), ctx.delay(500), ctx.json(weatherPostSunny))
    }),

    rest.get(`/api/v1/weather?latitude=37&longtitude=126`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(weather))
    }),

    rest.get(`/api/v1/address?latitude=37&longtitude=126`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(location))
    }),

    rest.post("/api/v1/posts", async (req, res, ctx) => {
      return res(ctx.status(201), ctx.delay(500), ctx.json(posts));
    }),

    rest.post("/api/v1/images", (req, res, ctx) => {
      return res(ctx.status(201), ctx.delay(500), ctx.json(imageUpload));
    }),

    rest.get(`/api/v1/posts/5fd52d23-9089-49ad-8060-d9097aafda91`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(singlePost1))
    }),
    rest.get(`/api/v1/posts/5fd52d23-9089-49ad-8060-d9097aafda92`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(singlePost2))
    }),
    rest.get(`/api/v1/posts/5fd52d23-9089-49ad-8060-d9097aafda93`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(singlePost3))
    }),
    rest.get(`/api/v1/posts/5fd52d23-9089-49ad-8060-d9097aafda94`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(singlePost4))
    }),
    rest.get(`/api/v1/posts/5fd52d23-9089-49ad-8060-d9097aafda95`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(singlePost5))
    }),
  ];