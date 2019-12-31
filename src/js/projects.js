(function() {
  // TODO: finalize copy
  var data = [
    {
      type: 'CLIENT',
      client: "ModOp",
      project: "Booq App",
      role: "software engineer, team lead",
      roleDescription: "",
      description:
        "lead and mentoring a three-person team to create the front-end architecture for a proprietary mobile app used by movie industry professionals to manage projects and book talent.",
      techStack: [
        "react",
        "graphql",
        "apollo",
        "prisma",
        "postgres",
        "material-ui"
      ],
      url: "https://www.modop.com/case-study/booq/",
      cta: "Read the casestudy",
      // img: "img/booq-logo.png",
      img: "img/modop.jpg",
      startDate: "April 2018",
      endDate: "January 2019",
      featured: true
    },
    {
      type: 'CLIENT',
      client: "Hudson Pacific Properties",
      project: "Hudson Pacific Properties Website Redesign",
      role: "front-end architect",
      roleDescription:
        "lead the architecture design, developed server-side rendering, development with react, redux, added bootstrap theme to internal app",
      description:
        "Built a new web experience for the real estate company&#39;s brand refresh&#46;",
      techStack: ["react", "redux", "razzle", "bootstrap", "bulma", "sass"],
      url: "http://www.hudsonpacificproperties.com/",
      cta: "View the inventory",
      img: "img/hpp.png",
      startDate: "April 2018",
      endDate: "",
      featured: true
    },
    {
      type: 'CLIENT',
      client: "Nike",
      project: "NikeConnect App",
      role: "front-end dev",
      roleDescription: "",
      description:
        "Developed UI features for the NikeConnect app&#44; connecting NBA fans to exclusive content&#46;",
      techStack: ["react", "redux", "mysql", "mocha", "enzyme", "sinon"],
      url: "https://www.nike.com/us/en_us/c/nba/jerseys",
      cta: "Get the app",
      img: "img/nike.png",
      startDate: "March 2018",
      endDate: "April 2018",
      featured: true
    },
    {
      type: 'CLIENT',
      client: "Meguiar's",
      project: "Meguiar's Product Advisor",
      role: "front-end engineer",
      roleDescription:
        "",
      description:
        "",
      techStack: ["react"],
      url: "https://www.meguiars.com/",
      cta: "Find the right product",
      img: "img/meguiars.png",
      startDate: "2018",
      endDate: "",
      featured: true
    },
    {
      type: 'CLIENT',
      client: "Alchemy Code Lab (MartyPDX)",
      project: "Jimmy Dorsey Real Estate App",
      role: "full-stack development",
      roleDescription: "",
      description:
        "Developed web and mobile apps for a realty site created to facilitate the listing and sale of a home using a subscription service.",
      techStack: [
        "node",
        "express",
        "react",
        "redux",
        "mongodb",
        "firebase",
        "stripe api"
      ],
      url: "https://itunes.apple.com/US/app/id1425161294",
      cta: "Get the app",
      img: "img/jdre.png",
      startDate: "November 2017",
      endDate: "March 2018",
      featured: true
    },
    {
      type: 'PERSONAL',
      project: "Bulma Codepens",
      description:
        "I love to support new CSS frameworks like Bulma&#44; and share what I&#39;ve learned&#46;",
      techStack: ["react", "bulma"],
      url: "https://codepen.io/christylaguardia/pens/tags/?selected_tag=bulma",
      cta: "View my pens",
      img: "img/bulma.png",
      date: "March 2018",
      featured: true
    },
    {
      type: 'CLIENT',
      client: "",
      project: "Varcity Network",
      role: "full-stack development",
      roleDescription: "",
      description:
        "Designed and developed a education-oriented social network platform for student athletes.",
      techStack: ["node", "express", "react", "redux", "mongodb"],
      url: "https://varcity-network.herokuapp.com/",
      cta: "View the prototype",
      img: "img/varcity.jpg",
      startDate: "September 2017",
      endDate: "October 2017",
      featured: true
    },
    {
      type: 'PERSONAL',
      project: "Rock Paper Scissors Lizard Spock",
      description:
        "If you know what this is, you've watched too much of the Big Bang Theory. It's ok, I have too.",
      techStack: ["react", "bulma", "sass"],
      url: "https://rpslp.herokuapp.com/",
      cta: "Play the game",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      date: "March 2018",
      featured: false
    },
    {
      type: 'PERSONAL',
      project: "ebay Chat Bot",
      description: "A simple chat bot for searching ebay products&#46;",
      techStack: ["node", "express", "socket.io", "bulma", "ebay api", "dialogflow"],
      url: "https://ebay-chat-bot.herokuapp.com/",
      cta: "Talk to the bot",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      date: "December 2017",
      featured: false
    },
    {
      type: 'PERSONAL',
      project: "Caret API",
      description:
        "Created a hacker screening API to be used as part of server side authentication.",
      techStack: ["node", "express", "mongodb"],
      url: "https://github.com/ACL-CMS-P1/carret/",
      cta: "Checkout the code",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      date: "August 2017",
      featured: false
    },
    {
      type: 'PERSONAL',
      project: "Dragons Lair",
      description:
        "A modern recreation of the infamous 1980 laserdisc game Dragon's Lair!",
      techStack: ["react"],
      url: "https://github.com/christylaguardia/adventure-game",
      cta: "View this project",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      date: "September 2017",
      featured: false
    },
    {
      type: 'PERSONAL',
      project: "Garage Fellows",
      description:
        "Created an online swap meet for automotive hobbyists to buy the parts they need—and sell the ones they don’t.",
      techStack: ["node", "express", "jquery", "postgres"],
      url: "https://garagefellows.herokuapp.com/",
      cta: "View this project",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      date: "June 2017",
      featured: false
    },
    {
      type: 'CLIENT',
      client: "Johnstone Supply",
      project: "Refrigeration Sizing Calculator",
      role: "Data Specialist",
      roleDescription: "",
      description: "",
      techStack: [],
      url: "https://www.johnstonesupply.com/storefront/index.ep",
      cta: "",
      img: "img/johnstone.png",
      startDate: "",
      endDate: "",
      featured: true
    },
    {
      type: 'CLIENT',
      client: "Sulzer Pumps",
      project: "Pump Application Database Migration",
      role: "programmer",
      roleDescription:
        "Build internal tools and migrated legacy databases to the facilitate the sale of pumps and secure the hydraulic and mechanical designs.",
      description: "",
      techStack: ["c#", ".NET", "sql server", "Windows Form Application"],
      url: "https://www.sulzer.com/",
      cta: "",
      img: "img/sulzer.jpg",
      startDate: "",
      endDate: "",
      featured: true
    },
  ];

  var projectsHtml = '';

  for (var i=0; i < data.length; i++) {
    if (data[i].featured === true) {
      if (data[i].type === 'CLIENT') {
        var templateHtml = document.getElementById("template-client-project").innerHTML;

        projectsHtml += templateHtml
          .replace(/{{id}}/g, i)
          .replace(/{{client}}/g, data[i].client)
          .replace(/{{project}}/g, data[i].project)
          .replace(/{{role}}/g, data[i].role)
          .replace(/{{roleDescription}}/g, data[i].roleDescription)
          .replace(/{{description}}/g, data[i].description)
          .replace(/{{url}}/g, data[i].url)
          .replace(/{{cta}}/g, data[i].cta)
          .replace(/{{img}}/g, data[i].img)
          .replace(/{{endDate}}/g, data[i].endDate);
      } else {
        var templateHtml = document.getElementById("template-personal-project").innerHTML;

        projectsHtml += templateHtml
        .replace(/{{id}}/g, i)
        .replace(/{{project}}/g, data[i].project)
        .replace(/{{description}}/g, data[i].description)
        .replace(/{{url}}/g, data[i].url)
        .replace(/{{cta}}/g, data[i].cta)
        .replace(/{{img}}/g, data[i].img)
        .replace(/{{date}}/g, data[i].date);
      }

    }
  }

  document.getElementById("projects").innerHTML = projectsHtml;
})();
