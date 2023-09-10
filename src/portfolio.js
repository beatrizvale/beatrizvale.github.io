/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loadingAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ana Vale",
  title: "Hello, I'm Ana",
  subTitle: emoji(
    "A recent Biochemistry graduate with a strong interest in Regulatory Affairs and a desire to improve patient outcomes and contribute to the developmente of life-changing therapies."
  ),
  resumeLink:
  require("./assets/pdfs/ana_vale_resume.pdf"), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/anabeatrizvale/",
  gmail: "vale.anabeatriz@gmail.com",
  goodreads: "https://www.goodreads.com/user/show/33628825-ana-vale",
  phone: "tel:+351924170598",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Minho",
      logo: require("./assets/images/uminho_logo.png"),
      subHeader: "Master of Science in Applied Biochemistry",
      duration: "October 2020 - April 2023",
      desc: "Grade: 18/20",
    },
    {
      schoolName: "University of Minho",
      logo: require("./assets/images/uminho_logo.png"),
      subHeader: "Bachelor of Science in Biochemistry",
      duration: "September 2017 - July 2020",
      desc: "Grade: 15/20",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Portuguese", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "English",
      progressPercentage: "90%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Master Thesis Researcher",
      company: "ICVS",
      companylogo: require("./assets/images/icvs_logo.png"),
      date: "October 2021 – April 2023",
      desc: 'Pursued the project "Exploring SNX3 and SNX27 role in nervous system function - insights from aged and \'stressed\' synapses" as my Master Thesis (Grade: 19/20).',
      descBullets: [
        "Learned to work with rodent models and in vitro cell culture.",
        "Performed molecular and biochemical techniques.",
        "Performed morphological analysis of neurons.",
        "Analysed and interpreted data using several softwares and tools (Microsoft Office, GraphPad, SPSS, ImageJ).",
        "Designed and implemented research protocols to meet my scientific questions.",
        "Communicated my research findings to different teams through presentations and meetings."
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "ICVS",
      companylogo: require("./assets/images/icvs_logo.png"),
      date: "July 2019 – July 2020",
      desc: 'Pursued the project "Exploring SNX27 role in stress" as a Volunteer Researcher and as my Undergraduate degree final project (Grade: 19/20).',
      descBullets: [
        "Analysed behavioural tests.",
        "Performed molecular and biochemical techniques.",
        "Performed morphological analysis of neurons."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      title: "Introduction to Good Clinical Practice",
      subtitle:
        "Completed the Introduction to Good Clinical Practice online course taught by Novartis and offered through Coursera.",
      image: require("./assets/images/novartis_logo.png"),
      imageAlt: "Novartis Logo",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/pdfs/GCP-certificate.pdf")
        }
      ]
    },
    {
      title: "Laboratory Animal Science",
      subtitle:
        "Completed the Laboratory Animal Science Course at the University of Minho's School of Medicine and obtained a DGAV authorization to conduct animal research.",
      image: require("./assets/images/dgav_logo.png"),
      imageAlt: "DGAV Logo",
      footerLink: [
        {
          name: "Certificate",
          url: require("./assets/pdfs/lab_animal_sci_certificate.pdf")
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"If I sparked your interest or you have any questions, feel free to reach out to me!",
  number: "+351 924 170 598",
  email_address: "vale.anabeatriz@gmail.com"
};

// Twitter Section

const twitterDetails = {
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
