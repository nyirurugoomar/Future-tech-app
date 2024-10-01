import { Number } from "./data"
import {Status} from "./data"
import { Review } from "./data"
import { Connect } from "./data"

export const Numbers:Number[] =[
    {   
        id:1,
        number:"300",
        text:"Resources available"
    },
    {   
        id:2,
        number:"12k",
        text:"Total Downloads"
    },
    {   
        id:3,
        number:"10k",
        text:"Active Users"
    },
]

export const Statuses:Status[]=[
    {
        id:1,
        icon:"Icon1.svg",
        title:"Latest News Updates",
        subTitle:"Stay Current",
        specification:"Over 1,000 articles published monthly"
    },
    {
        id:2,
        icon:"Icon2.svg",
        title:"Expert Contributors",
        subTitle:"Trusted Insights",
        specification:"50+ renowned AI experts on our team"
    },
    {
        id:3,
        icon:"Icon3.svg",
        title:"Global Readership",
        subTitle:"Worldwide Impact",
        specification:"2 million monthly readers"
    }
]

export const Reviews:Review[]=[
    {
      id:1,
      profileImage:"p1.svg",
      profileName:"Sarah Thompson",
      location:"San Francisco, USA",
      message:"The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
    },
    {
        id:2,
        profileImage:"p2.svg",
        profileName:"Raj Patel",
        location:"Mumbai, India",
        message:"The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis."
      },
      {
        id:3,
        profileImage:"p3.svg",
        profileName:"Emily Adams",
        location:"London, UK",
        message:"The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
      },
      {
        id:4,
        profileImage:"p4.svg",
        profileName:"Alan Jackson",
        location:"Houston, USA",
        message:"The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view."
      },
      {
        id:5,
        profileImage:"p5.svg",
        profileName:"Jessica Miller",
        location:"Boston, USA",
        message:"The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
      },
      {
        id:6,
        profileImage:"p6.svg",
        profileName:"Diego Lopez",
        location:"Barcelona, Spain",
        message:"The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
      },

]

export const Connects:Connect[]=[
    {
        id:1,
        title:"Resource Access",
        specs:"Visitors can access a wide range of resources, including ebooks, whitepapers, reports."
    },
    {
        id:2,
        title:"Community Forum",
        specs:"Join our active community forum to discuss industry trends and collaborate with peers."
    },
    {
        id:3,
        title:"Tech Events",
        specs:"Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge."
    }
]