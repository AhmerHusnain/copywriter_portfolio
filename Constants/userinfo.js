//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFiverr,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "Ahmer Husnain", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "chahmer143@email.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "3019556310", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+92", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    {
      type: "github",
      link: "https://github.com/AhmerHusnain",
      icon: faGithubAlt,
    },
    {
      type: "linkedin",
      link: "https://pk.linkedin.com/in/ahmer-husnain-3093a118b",
      icon: faLinkedinIn,
    },
    { type: "medium", link: "", icon: faMediumM },
  ],
  greeting: {
    //this text goes on your landing page
    title: "You can do ANYTHING, but not EVERYTHING!",
    subtitle:
      " Hello there!\n" +
      "I'm Ahmer¬'Your Copy Boy', empowering businesses through my writing.\n" +
      "You see, great copywriting is both an art and science. And as a business owner always on the run, do you really have time for both? With my passion for writing, a love for words, and an intuitive, creative spark, I craft words that sell So, with me by your side, you don't have to do late-night Googling or take a cheap DIY copywriting course. Looking for a compelling copy to stand out and scale-up? I'm just a hello away!",
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "PRODUCT LAUNCH EMAILS", // eg.frontend, backend, devops etc
      skills: ["Technical", "Health", "Entertainment"], //eg. react, html, python etc.
    },
    ,
    {
      category: "B2B SALES EMAILS",
      skills: ["Financial/Accounting", "Business Operations", "Infotainment"],
    },
    {
      category: "AUTORESPONDER ",
      skills: ["DRIP CAMPAIGNS", "Sale Convertion", "Email Sequence"],
    },
    {
      category: "EMAIL NEWSLETTERS",
      skills: ["Webinars", "Relationship/Dating", "Fitness"],
    },
    {
      category: "THE DAILY EMAIL",
      skills: [
        "Checklist Email",
        "Humble Brag Email",
        "Skeptic's Quick Turn",
        "Q&A with Help",
      ],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "Do you enjoy checking your inbox?\n" +
      "Ummm...no. Obviously, it's more like deleting your inbox! Your target audience is no different.\n" +
      "Emails only get opened if they communicate relatable stories or captivating information. And clearly, most just don't do that.\n" +
      "Luckily, I can convey your brand's message in engaging, fun emails that are true to your unique brand voice. I have learnt techniques to sell almost ANYTHING to ANYONE. My shifu include Dan Lok,Anik Singal ,Arman Assadi, Cat Howell and one person I owe alot to 'Mike Shreeve'.",
    resume: "/", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "2015-17", //timespan
        title: "Matriculation", //eg. BTech in Compuster Engineering
        organization: "Army Public School & College. Sarai ALamgir", //eg. VJTI, Mumbai
        description: "Recieved District level Distinction at 97%", //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "2017-19",
        title: "FSc. Pre Engineering",
        organization: "Military College of Jhelum",
        description:
          "Learnt Cultural DIversity, English Level Proefficiency, Communication Skills ",
      },
      {
        time: "2019-23",
        title: "Bachelors",
        organization: "National University of Science and Technology",
        description:
          "Development of State-of-art knowledge with 1st Division and Well Renowned Mentors at Military College of Signals.",
      },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Dan Lok", //company name eg.Microsoft
        companylogo:
          "https://k82bd48pgck19i7321xvcc91-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/bio-dan.jpg", //companylogo
        position: "High Income Copywriter", //post you held eg.Senior SDE
        time: "2021", //timespan
        description:
          "Dan Lok Taught his skills and secret techniques for conversion in his course which I was part of. Mr. Lok has led several global movements to redefine modern education where Mr. Lok has taught men and women from 130+ countries to develop high income skills, unlock true financial confidence and master their financial destinies.", //eg. spearheaded the graphics team in designing SASS product UIs
      },
      {
        company: "Mike Shreeve",
        companylogo:
          "https://www.peacefulprofits.com/hosted/images/76/ac595e954046a8bc2351da7462b608/Group-273.png",
        position: "Email Academy",
        time: "2021",
        description:
          "I feel fortunate to learn from Mike's work on 'THE “BELIEF CHANGE” FORMULA THAT WORKS'. This is how televangelists convert atheists. It’s how climate change deniers convince people that scientists are wrong. It’s how politicians win office. It’s how great salesmen (and women) get rich. Understanding Your Audience The people who read your sales copy or hear your sales pitch aren’t blank canvasses. They are complex, multi-faceted human beings.",
      },
      {
        company: "Joanna Wiebe",
        companylogo:
          "https://lh3.googleusercontent.com/Fq8ilpb5EZPpZUURQLFDz4J_pINOsCy8x37idZ77bQ0JALQql5JdVmJheKa3BfSIjYFNzSnIV-HzZYuYmeWt=w322",
        position: "10x Email Copyhackers",
        time: "2022",
        description:
          "Joanna Wiebe is the OG Conversion Copywriter and the CEO of Copyhackers. She’s written or chiefed the kind of emails that make credit cards jump outta wallets for every kind of business including companies like Indochino, InVision, QuickSprout, Wistia, Prezi and Doodle.  ",
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: true,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Work",
  workMainPage: "Projects",
  capabilities: "Capabilities",
  about: "About Me",
  education: "Education",
  experience: "Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
