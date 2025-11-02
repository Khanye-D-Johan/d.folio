// Projects' Images
import AdvanceIOImage from "./assets/images/projects/scikit.webp";
import bootstrapEworkshopImage from "./assets/images/projects/eworkshop.png";
import referenceDrMichelleImage from "./assets/images/references/Dr.Michelle.jpeg";
import referenceMakakoleImage from "./assets/images/references/makakole.jpeg";
import referenceMichaelImage from "./assets/images/references/Michael.jpeg";
import referenceSheenaImage from "./assets/images/references/sheena.jpeg";
import referenceSuganImage from "./assets/images/references/sugan.jpeg";
// import referenceMakalkoleImage from "./assets/";
import TIHaqueductImage from "./assets/images/projects/databricks.jpeg";
import umuziTildeImage from "./assets/images/projects/hugo.jpg";
import umuziRecruitmentImage from "./assets/images/projects/Umuzi.jpeg";

// ====================[ Exports ]==================== //
export const SITE_TITLE = 'D.Folio';
export const SITE_DESCRIPTION = 'Welcome to my portfilio, Johan D. Khanye\'s Portfolio!';

// Projects:
// | Summary Details:
//    | title
//    | image
//    | stack
//    | summary
//    | slug
//    | links: list
// 
// | Projects/Case Study Details:
//    | description
//    | duration
//    | toolbox: list
//    | methodology: list, 
//    | References: dict keys:(name, ref_image, ref_role, ref_slug, ref_summary)
//
const ENGINEERING_PROJECTS = [ // Engineering Solutions
  { // Aqueduct
    title: "Aqueduct: Data Pipeline Optimization.",
    image:  TIHaqueductImage,
    stack: "Python · Pyspark · Azure Databricks",
    summary: "Reduced daily ETL runtime from 12 hours to 2 hours by parallelizing ADF pipelines.",
    slug: "aqueduct-data-pipeline",
    // Full Projects / Case Study Details
    description: "A Data Lake solution that the TIH Data Engineering team has shed blood and tears for, the baby of the team. A solution designed to help the business tackle data discrepancies for daily operations. Built on Microsoft Azure Databricks mainly using Spark's Python API, PySpark. The Project's main goal is to collate scattered operational and analytics data, both structure and otherwise, from inside and outside the business, preprocess it and then store it in a neat and secure manner within Azure's Storage services.",
    duration: "±≈ 18 Months",
    // References
    references: {
      // Michael Wedgewood
      "michael": {
        "name": "Michael Wedgewood",
        "ref_image": referenceMichaelImage,
        "ref_role": "DnA HoD",
        "ref_slug": "./references.html#michael",
        "ref_summary": "An inspirational and supportive head of the Data and Analytics department at Telesure Investmment Holdings, the project owner of Aqueduct and my manager while I was with the business.",
      },
      // Sugandran "Sugan" Govindsamy
      "sugan": {
        "name": "Sugandran Govindsamy",
        "ref_image": referenceSuganImage,
        "ref_role": "DnA D. mngr",
        "ref_slug": "./references.html#sugan",
        "ref_summary": "A former Data engineering manager at TIH, Sugan was the project owner of Aqueduct during it's inception and initial implementation. Sugan as a manager in a sentence is Cool, calm and considerate. He's basically everything but a bad manager."
      },
      // Makakole
      "makakole": {
        "name": "Makakole Mafane",
        "ref_image": referenceMakakoleImage,
        "ref_role": "Assc DE", 
        "ref_slug": "./references.html#makakole",
        "ref_summary": "A great team player, scholar and an even better friend, Makakole is a former Data engineer at TIH, currently employed @<b>FNB</b>, Makakole has seen me grow from being a junior to my current standing. The man was part of the original Aqueduct team during it's inception and initial implementation."
      }
    },
    toolbox: ["SQL", "PYODBC", "Unit Testing", "Azure Data factory", 
      "Azure Storage", "Azure Data Explorer", "Azure Data Lake Storage", 
      "Azure Data Catalog", "Azure DevOps", "Azure Boards", 
      "Word", "Excel", "Outlook", "Powerpoint", "Windows", "CMD", "Git"
    ],
    methodology: ["Agile", "Azure Boards"],
  },
  { // AdvanceIO
    "title": "CSIR: AdvanceIO",
    "image": AdvanceIOImage,
    "stack": "Python · PySpark · Azure Databricks",
    "summary": "...#TBD...",
    "slug": "csir-advance-io",
    "links": ["https://www.umuzi.org/apply-now"],
    // Full Projects/Case Study Details
    "description": "",
    "duration": "±≈ 18 Months",
    "toolbox": [
      "Python", "PySpark", "Azure Databricks", "SQL", "PYODBC",
      "Unit Testing", "Azure Data factory", "Azure Storage",
      "Azure Data Explorer"
    ],
    "methodology": ["Agile"],
    // References
    "References": {
      // "name, ref_image, ref_role, ref_slug, ref_summary"
      // 1. Dr. Michelle.
      // 2. M.K. Mafane.
      // 3. Singi.
    },
  },
];
const UTILITIES_PROJECTS = [  // Tools & Utilities Solutions.
  { // Tilde site: Learning Resources site
    "title": "Umuzi.org: Tilde: Learning Resources site",
    "image": umuziTildeImage,
    "stack": "TBD",
    "summary": "TBD",
    "slug": "Umuzi-org:-tilde",
    "links": ["https://github.com/Umuzi-org/Tilde"],
  },
  // { 
  // Youtube Archiver: ./images/projects/youtube_archiver.png"
  // Traffic Accidents: "./images/projects/traffic.jpg"
  // JP Properties: Butler: "./images/projects/jproperties.png": (I'm the <strong>sole</strong> Development team of this Simple Web App, I'm trying to keep it as minimal as possible, utilisable and easy to understand and navigate</p>
  // <p class="lead highlight">I really hope it turns out my way</p>)
  // }
];
const WEB_APP_PROJECTS = [ // Web Apps.
  { // Sakkies Local Store PWA MVP
    title: "Django PWA for Local Store",
    image: "",
    stack: "Django · Bootstrap · PWA",
    summary: "Offline-first web app for small retail customers with push notifications.",
    slug: "django-pwa-localstore",
  },
  { // Recruitment Portal
    title: "Umuzi.org: Recruitment Portal",
    image: umuziRecruitmentImage,
    stack: "Python · Django · Bootstrap",
    summary: "...#TBD...",
    slug: "umuzi-recruitmentment-portal",
    links: ["https://www.umuzi.org/apply-now"],
    // Full Projects/Case Study Details
    "description": "Due to high volumes of admission applications, Umuzi facilitators, being responsible for managing & teaching recruits, we also had to manage the recruitment process, which was becoming unviable, due to the enormous volume of data. Finding a better way was inevitable to manage recruits and prospective recruits properly. The Python dev team set out to develop a Django web app to <strong>1.</strong> Simplify the business' internal processes RE. Prospective students, students and Investors. <strong>2.</strong> Simplify an applicant's application process. <strong>3.</strong> Simplify the recruit's learnership learning and mentoring process. <strong>lastly</strong>, Simplify reapplication in case a prospective recruit fails the selection bootcamp.",
    "duration": "±≈ 18 Months",
    "toolbox": [
      "Python", "Django", "Bootstrap", "Django Rest Framework", 
      "Docker", "PostgreSQL", "Test Driven Development(TDD)", "NGINX", 
      "Slack", "Github", "Git", "Gmail", "Google Drive", "Google Sheets",
      "Google Docs", "Linux", "Curl", "Bash", "HTML", "CSS", "Javascript"
    ],
    "methodology": ["Agile"],
    // References
    "references": {
      // Sheena O'Connell
      "sheena": {
        "name": "Sheena O'Connell", 
        "ref_image": referenceSheenaImage,
        "ref_role": "CTO",
        "ref_slug": "./references.html#sheena",
        "ref_summary": "A maverick, inspiration and a  genie with a IDE, Sheena, The <strong>Chief Technolgy Office</strong> @Umuzi, a director of Prelude Technologies. Sheena was the project owner, development team's director and the first person to help me look at my career in a different light.",
      },
      // Sugan.
    },
  },
  { // JMB eworkshop
    "title": "Bootstrap: Digital Workshop",
    "image": bootstrapEworkshopImage,
    "stack": "Django · Bootstrap · PWA",
    "summary": "...#TBD...",
    "slug": "digital-workshop",
    "links": [""],
  },
];

const PROJECTS = ENGINEERING_PROJECTS.concat(WEB_APP_PROJECTS).concat(UTILITIES_PROJECTS);
export {ENGINEERING_PROJECTS, WEB_APP_PROJECTS, PROJECTS};