export class Constants {
  static get URLS() {
    return {
      LINKEDIN_URL: "https://www.linkedin.com/in/alessandro-pozzi-70b743180/",
      GITHUB_URL: "https://github.com/AlessandroPozzi96",
      RICKROLLED_URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };
  }

  static get GROQ() {
    return {
      API_KEY: process.env.REACT_APP_GROQ_API_KEY,
      API_URL: "https://api.groq.com/openai/v1/chat/completions",
    };
  }
}
