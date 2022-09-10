// import project demo images as follows.
import PROJECT1_1 from "../styles/projects/Project1_1.jpg";
import PROJECT1_2 from "../styles/projects/Project1_2.jpg";
import PROJECT1_3 from "../styles/projects/Project1_3.jpg";
import PROJECT2_1 from "../styles/projects/Project2_1.jpg";
import PROJECT2_2 from "../styles/projects/Project2_2.jpg";
import PROJECT2_3 from "../styles/projects/Project2_3.jpg";
import PROJECT3_1 from "../styles/projects/Project3_1.jpg";
import PROJECT3_2 from "../styles/projects/Project3_2.jpg";
import PROJECT3_3 from "../styles/projects/Project3_3.jpg";

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: "Weight Decimator Program", //project name
    description:
      " 15 customer emails and 16 prospect emails(including affiliate promos for three related products for memory loss, acid reflux, and low testosterone)...", //project description
    githubLink: "https://www.fiverr.com/ahmerhusnain?public_mode=true", //github repo link
    projectLink: "work", //deployed project link
    tech: ["Sale Funnels", "Daily Emails", "Product Launch"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
  },
  {
    name: "Black Friday Ecommerce Promo",
    description:
      "27 emails that helped generate 600+ orders in one day during the biggest promotion in this company’s history... (not to mention the 500 replies from oneemail helping create the promotion)....",
    githubLink: "https://www.fiverr.com/ahmerhusnain?public_mode=true", //github repo link
    projectLink: "work", //deployed project link
    tech: ["Ecommerce", "Technology", "Holiday Sales"],
    photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
  },
  {
    name: "Diabetes Code Program",
    description:
      "5 customer emails and 5 prospect emails (including affiliate promos for four related products for memory loss, weight loss, acid reflux, and low testosterone)...",
    githubLink: "https://www.fiverr.com/ahmerhusnain?public_mode=true", //github repo link
    projectLink: "work", //deployed project link
    tech: ["ustomer emails", "prospect emails", "affiliate promos"],
    photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
  },
];
