/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gonca Toprak",
  title: "Hi there, I'm Gonca",
  subTitle: emoji(
    `I've received my B.Sc. degree in Electrical and Electronics Engineering in 2019, at Izmir Katip Celebi University. I held an M.Sc. degree in Electrical and Electronics Engineering at Izmir Democracy University and work as an R&D Project Coordinator at AdresGezgini Inc. I have national and EU - Horizon Europe project experience as well as a machine learning, image processing, and deep learning background.`
  ),
  resumeLink: "https://drive.google.com/file/d/1U3zPyiUZC8f0ADh_5DiqH6urEEMITjgu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/goncatoprak/",
  gmail: "goncatoprak@outlook.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Artificial Intelligence Engineer",
  skills: [
    emoji(
      "⚡ Image processing, Deep learning and Machine learning project development"
    ),
    emoji("⚡ National and international project management")

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      icon: "python"
    },
    {
      skillName: "Tensorflow",
      icon: "tensorflow"
    },
    {
      skillName: "OpenCV",
      icon: "opencv"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Izmir Democracy University",
      logo: require("./assets/images/idu_logo.png"),
      subHeader: "Master of Science: Electrical And Electronics Engineering",
      duration: "September 2020 - September 2022",
      desc: "MSc Thesis Topic: Early Diagnosis of Breast Cancer by Using Image Processing and Deep Learning",
      descBullets: [
        "Skills: Deep learning, CNN, Image segmentation, Image classification, Image processing, Tensorflow, OpenCV"
      ]
    },
    {
      schoolName: "Izmir Katip Çelebi University",
      logo: require("./assets/images/ikcu_logo.jpg"),
      subHeader: "Bachelor of Science: Electrical And Electronics Engineering",
      duration: "September 2015 - June 2019",
      desc: "Took courses about Artificial Intelligence, Machine Learning and Image Processing.",
      descBullets: ["Bachelor Final Thesis Funded By: The Scientific and Technological Research Council of Turkey (TUBITAK) under 2209B – Bachelor Final Thesis Focused on Industry Program with project number 1139B411801161"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
        {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Image Processing",
      progressPercentage: "90%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "R&D Project Coordinator",
      company: "AdresGezgini Inc.",
      companylogo: require("./assets/images/ag_logo.png"),
      date: "September 2022 – Current",
      descBullets: [
        "Management of AI-based TUBITAK, KOSGEB and TEYDEB projects",
        "EU Horizon Europe project management, consortium building, project idea development"
      ]
    },
    {
      role: "Software Developer/Project Coordinator",
      company: "Emoda Software",
      companylogo: require("./assets/images/emoda.jpeg"),
      date: "January 2021 – August 2022",
      descBullets: [
        "Worked on image processing with deep learning for early diagnosis of breast cancer in Python.",
        "Developed image processing algorithms for ECG digitalization in Python.",
        "National project management including project idea development and proposal writing.",
        "EU Horizon Europe experience including literature surveys, market analyzing, proposal writing, consortium building and organizing further processes.",
        "Developed 2 Horizon Europe project proposals and contributed over 4 proposals.",
        "MSCA Exchange project writing experience",
        "Developing business plans for R&D projects.",
        "Contributing to R&D project idea development.",
        "Handling international collaborations."
      ]
    },
    {
      role: "Graduate Researcher",
      company: "Izmir Katip Celebi University - Artificial Intelligence Lab,",
      companylogo: require("./assets/images/ikcu_logo.jpg"),
      date: "August 2019 – September 2020",
      descBullets: [
        "Research on image classification with deep learning.",
        "Conducted machine learning algorithm enhancement, deep learning project development, and literature surveys.",
        "Machine learning and deep learning-based project management.",
        "Student mentorship for machine learning and deep learning projects.",   
        "Conducted own research in field of expertise image processing with deep learning.",
        "Worked as member of integrated project team in highly collaborative work environment focused on enhancing AI algorithms",
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "TÜBİTAK",
      companylogo: require("./assets/images/tubi_logo.png"),
      date: "October 2018 – April 2019",
      descBullets: [
        "Bachelor Final Thesis Funded By: The Scientific and Technological Research Council of Turkey (TUBITAK) under 2209B – Bachelor Final Thesis Focused on Industry Program with project number 1139B411801161: Energy Consumption Estimation and Management with Machine Learning-Based Time Series Analysis.",
        "For the industrial partner of this study, Pikotek Inc., an energy profile that predicts energy consumption for future time periods by monitoring and recording the user's backward energy consumption (kWh) and to guide the user according to this profile is created in Python.",
        "In order to create the module, machine learning-based time series analysis algorithms are enhanced.",
        "Participated in regular meetings to discuss aspects of research and experiments with the principal investigator and the industry consultant.",   
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications 📄 "),
  achievementsCards: [
    {
      title: "Cancerous Lesion Segmentation for Early Detection of Breast Cancer by using CNN",
      image: require("./assets/images/rg_logo.png"),
      footerLink: [
        {
          name: "Check it out",
          url: "https://www.researchgate.net/profile/Amine-Toprak/publication/362568994_Cancerous_Lesion_Segmentation_for_Early_Detection_of_Breast_Cancer_by_using_CNN/links/62f20704505511283ea06db7/Cancerous-Lesion-Segmentation-for-Early-Detection-of-Breast-Cancer-by-using-CNN.pdf"
        }
      ]
    },
    {
      title: "Energy Consumption Estimation And Management With Machine Learning Regression Techniques",
      image: require("./assets/images/rg_logo.png"),
      footerLink: [
        {
          name: "Check it out",
          url: "https://www.researchgate.net/publication/363452077_Energy_Consumption_Estimation_And_Management_With_Machine_Learning_Regression_Techniques"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  email_address: "goncatoprak@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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