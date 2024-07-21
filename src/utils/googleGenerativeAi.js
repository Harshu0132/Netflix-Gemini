import { GOOGLE_AI_STUDIO_API } from "./constant"

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(GOOGLE_AI_STUDIO_API);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;