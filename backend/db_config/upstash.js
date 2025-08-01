import dotenv from "dotenv";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

dotenv.config();

//limiter 10 request per 20 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;
