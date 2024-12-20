export const config = {
  siteTitle: "Miguel Capellan | Developer",
  siteDescription:
    "Developer based in Madrid, SPN who specializes in developing websites and applications.",
  siteKeywords:
    "Miguel Capellan, Miguel, Capellan, migcap, front-end, front-end developer, web developer, javascript, madrid",
  siteUrl: "https://miguelcapellan.com/",
  siteLanguage: "en_US",
  siteImage: "../images/og.png",

  name: "Miguel Capellan",
  location: "Madrid, SPN",
  email: "miguelcapellan@gmail.com",

  googleVerification: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
  googleAnalyticsID: "G-VDTMNSJXEK",

  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/MigCap",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/miguel-capellan/",
    },
  ],

  nav: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "#jobs",
    },
    {
      name: "Work",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ],

  headerHeight: 100,
  tabHeight: 42,

  greenColor: "#64ffda",
  navyColor: "#0a192f",

  // hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  srConfig: (delay = 200) => {
    return {
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      mobile: true,
      reset: false,
      useDelay: "always",
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
