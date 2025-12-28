export const SITE = {
  website: "https://ei-sandi.github.io",

  author: "Ei Sandi Aung",
  profile: "https://github.com/Ei-Sandi",
  desc: "Ei Sandi Aung | Software Engineer Portfolio",
  title: "Ei Sandi Aung",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/Ei-Sandi/ei-sandi.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/London",
} as const;
