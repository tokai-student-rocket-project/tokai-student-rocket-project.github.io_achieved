// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Tokai Student Rocket Project";
export const SITE_DESCRIPTION =
  "東海大学学生ロケットプロジェクトのホームページへようこそ！";
export const TWITTER_HANDLE = "@Tokai_SRP";
export const MY_NAME = "Tokai Student Rocket Project";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
