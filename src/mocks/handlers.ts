import { rest } from "msw";
import { type } from '../utils/types';

const dummy = "테스트입니다.";

const post: type.PostType[] = [
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda91",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "봄엔 가디거언~!",
    "image": "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp",
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": "2023-04-12T21:37:03.334Z"
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda92",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "모던함의 끝.",
    "image": "https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp",
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": "2023-04-12T21:37:03.334Z"
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda93",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "나.. 좀 이쁠지도?",
    "image": "https://images.onthelook.co.kr/posts/202303200803738411612980.jpeg?w=420&q=60&f=webp",
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": "2023-04-12T21:37:03.334Z"
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda94",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "아우터 이뿌지!!",
    "image": "https://shop-phinf.pstatic.net/20221026_136/1666775192616mcXHY_JPEG/67911035283532969_380459201.jpg?type=f296_296",
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": "2023-04-12T21:37:03.334Z"
  },
  {
    "id": "5fd52d23-9089-49ad-8060-d9097aafda95",
    "userId": "07aca204-228b-4e03-ab4b-4ca2b8b0c3f4",
    "name": "이렇게 입어봐!",
    "image": "https://shop-phinf.pstatic.net/20230310_204/1678432133285TqH1a_JPEG/79567975960091012_1853682088.jpg?type=f296_385",
    "createdAt": "2023-04-12T21:37:03.334Z",
    "updatedAt": "2023-04-12T21:37:03.334Z",
    "deletedAt": "2023-04-12T21:37:03.334Z"
  }
]

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

export const handlers = [
    // 테스트 mock api
    rest.get("/api/test", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(dummy));
    }),

    rest.get("/api/v1/posts", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(post))
    }),

    rest.get(`/api/v1/weather?latitude=37&longtitude=126`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(weather))
    }),

    rest.get(`/api/v1/address?latitude=37&longtitude=126`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(location))
    })

    // rest.post('api/v1/posts', (req, res, ctx) => {
    //   const {image, title, review, location, temp, humid} = req.body

    //   const finded = 
    //   if (!finded){
    //     return res(
    //       ctx.status(401)
    //     )
    //   }

    //   return res(
    //     ctx.status(200), ctx.json({})
    //   )
    // })


    // rest.get("/api/")

    
  
    // rest.get("/api/result", (req, res, ctx) => {
    //   return res(ctx.status(200), ctx.json(result));
    // }),
    // rest.post("/api/flowers/image", (req, res, ctx) => {
    //   return res(ctx.status(200), ctx.delay(2000), ctx.json(result));
    // }),
    // rest.get("/api/flowers/details", (req, res, ctx) => {
    //   const name = req.url.searchParams.get("name"); // QueryParameter로 name 추출
    //   const data = detail.filter((item) => item.name === name);
    //   if (data.length === 0) {
    //     return res(
    //       ctx.status(404),
    //       ctx.json({
    //         message: "데이터가 없습니다.",
    //       }),
    //     );
    //   }
    //   return res(ctx.status(200), ctx.delay(500), ctx.json(data[0]));
    // }),
    // rest.get("/api/flowers", (req, res, ctx) => {
    //   const page = req.url.searchParams.get("page");
    //   const name = req.url.searchParams.get("name");
    //   if (name && name !== "") {
    //     return res(ctx.status(200), ctx.delay(500), ctx.json(encySearch));
    //   } else if (!name && (page === "1" || page === null)) {
    //     return res(ctx.status(200), ctx.delay(500), ctx.json(encyPage1));
    //   } else if (!name && page === "2") {
    //     return res(ctx.status(200), ctx.delay(500), ctx.json(encyPage2));
    //   } else if (!name && page === "3") {
    //     return res(ctx.status(200), ctx.delay(500), ctx.json(encyPage3));
    //   }
    // }),
    // rest.get("/api/flowers/hour-ranking", (req, res, ctx) => {
    //   return res(ctx.status(200), ctx.json(rankHour));
    // }),
    // rest.get("/api/flowers/total-ranking", (req, res, ctx) => {
    //   return res(ctx.status(200), ctx.json(rankTotal));
    // }),
  ];