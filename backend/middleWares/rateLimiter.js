import ratelimit from "../db_config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("notes-user-with-id");
    if (!success) {
      return res.status(429).json({
        message: "Too many Requests try again later",
      });
    }

    next();
  } catch (error) {
    console.log("Rate Limit Error", error);
    next(error);
  }
};

export default rateLimiter;
