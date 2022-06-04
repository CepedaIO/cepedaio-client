import FileData from "../models/FileData";
import {openWindow} from "../store/app";
import ContributionData from "../models/ContributionData";

export const allWork = [
  new ContributionData({
    id: 'Springbig',
    size: 'medium',
    position: 'Lead Front End Developer',
    description: 'SaaS providing customer rewards platform for medical marijuana dispensaries. I directly managed 5 developers and was heavily involved in management through a deparment of about 30 people',
    image: {
      icon: '/springbig.logo.png',
      hero: '/springbig.hero.png'
    },
    link: 'https://springbig.com',
    start: new Date('2020-10-01'),
    end: new Date('2022-01-01'),
    technologies: [
      'VueJS',
      'Typescript',
      'Ruby-On-Rails',
      'Docker',
      'ElasticSearch',
      'TailwindCSS'
    ],
    points: [
      'Positively influenced ticket throughput by advising VP of department to organized developers into smaller teams and hire ScrumMasters',
      'Personally mentored five new hires, taught best practices, interfaces and utilized concepts like "domain driven design" to help talk about implementation',
      'Implemented a complete redesign of their flagship feature (campaign scheduling) while following the standards collectively established by company\'s FE developers',
      'Greatly improved FE throughput by impelmenting a standard library of re-usable components',
      'Heavily involved in improving QA workflow by mentoring on QA automation best practices',
      'Trivialized local development setup by using Docker to provide all necessary runtimes through the use of a single command',
    ]
  }),
  new ContributionData({
    id: 'Universal Studio',
    size: 'corporate',
    position: 'Everything IT Engineer',
    description: 'Part of a rapid response team that address whatever issue were prioritized. It could be anything from partk services to QA to hanging stuff up on the walls in the office',
    image: '/universalstudios.jfif',
    link: 'https://www.universalorlando.com',
    start: new Date('2019-11-01'),
    end: new Date('2020-08-01'),
    technologies: [
      'Angular7',
      'NodeJS',
      'Kubernetes',
      'ReadyAPI',
      'Express',
      'MongoDB'
    ],
    points: [
      'Mentored QA team on improving test design to reduce blocks due to poor test quality',
      'Fixed several bugs with their in-park locker services',
      'Provided solution for high priority issue blocking a major release',
      'Migrated production database for several features',
      'Helped laid foundation for kubernetes deployment of microservices',
      'Involved in patching an issue involved with turntables at park entrance'
    ]
  }),
  new ContributionData({
    id: 'Electronic Arts',
    size: 'corporate',
    position: 'Full Stack Developer',
    description: 'Internal tool used game developer and analytic teams throughout the world. We provided documentation on standards that made game analytics consistent and easier to understand',
    image: '/ea.jfif',
    link: 'https://www.ea.com/',
    start: new Date('2018-11-01'),
    end: new Date('2019-11-01'),
    technologies: [
      'Angular6/8',
      'RxJS',
      'Redux',
      'NodeJS',
      'Typescript',
      'TypeORM'
    ],
    points: [
      'Migrated website from Angular 6 to Angular 8',
      'Implemented an interactive tour to help introduce new features to users',
      'Helped improve on event sourcing workflow which managed history of changes to documentation',
      'Involved in planning to integrate Protobuf protocol for faster data throughput',
      'Fixed many bugs throughout the website'
    ]
  }),
  new ContributionData({
    id: 'Flight Schedule Pro',
    size: 'xs',
    position: 'Senior Front End Developer',
    description: 'Pilot training, plane management and scheduling software used by companies all around the world. Also included online courses and integrated e-commerce billing',
    image: '/flightschedule.gif',
    link: 'https://app.flightschedulepro.com',
    start: new Date('2017-02-01'),
    end: new Date('2018-12-01'),
    technologies: [
      'AngularJS',
      'Karma',
      'SenchaEXT',
      'Google Analytics',
      'ProPay',
      'ASP.Net',
    ],
    points: [
      'Involved in countless bug fixes and feature releases',
      'Integrated e-commerce billing using ProPay',
      'Greatly improved on their flagship calendar feature making it far more interactive and user friendly',
      'Huge performance gains and optimizations throughout the website',
      'Implemented many changed to their finance reports',
      'Laid the foundation for their online course platform',
      'Manage client facing documentation of website and features'
    ]
  }),
  new ContributionData({
    id: 'Urban Fort',
    size: 'xs',
    position: 'Full Stack Developer',
    description: 'Sub contracting with individual developer to provide services to real estate company and data scrape of iTunes/Amazon websites',
    iconLabel: 'UB',
    link: 'http://urbanfort.com',
    start: new Date('2016-08-01'),
    end: new Date('2017-02-01'),
    technologies: [
      'jQuery',
      'NodeJS',
      'MySQL',
      'Cheerio',
      'Tape',
      'Heroku'
    ],
    points: [
      'Updated theme and fixed bugs for real estate website specializing in commercial property',
      'Performed data scrape of iTunes and Amazong website to developer\'s personal database',
      'Implemented a website use data scrape to compare prices and recommend best purchases',
      'Utilized Sequelize and ORM abstraction for data driven development'
    ]
  }),
  new ContributionData({
    id: '8 Bit Consulting',
    size: 'small',
    position: 'Full Stack Developer',
    description: 'Sub-contracting for consulting company providing development services to Panera Bread involving a full redesign of their in-house inventory system',
    image: '/panera.jfif',
    link: 'https://www.facebook.com/8BitConsulting',
    start: new Date('2016-08-01'),
    end: new Date('2017-01-01'),
    technologies: [
      'jQuery',
      'Bootstrap',
      'NodeJS',
      'Typescript',
      'Lass',
      'Angular2'
    ],
    points: [
      'Full implemented inventory system from scratch',
      'Lead the architecting pf reusable components utilized throughout the site',
      'Purely FE change, SPA interfaced with existing API',
      'Collaborators were distributed around the globe',
      'Front End design closely followed Google\'s Material Design standards'
    ],
    otherLinks: [
      'https://www.panerabread.com'
    ]
  }),
  new ContributionData({
    id: 'RetireReady',
    size: 'xs',
    position: 'Front-End Developer',
    description: 'SaaS specializing in retirement plans and investing. Predicted ROI over a variable period of time using a large library of different investing strategies',
    image: '/retireready.png',
    link: 'https://retireready.com',
    start: new Date('2015-09-01'),
    end: new Date('2016-02-01'),
    technologies: [
      'jQuery',
      'KnockoutJS',
      'ASP.Net',
      'T-SQL',
      'D3',
      'Bootstrap'
    ],
    points: [
      'Drove a 2 year stagnant feature over the finish to production release',
      'Developed fully client side "interest calculator" calculating compounded interest',
      'Provided technical support to clients using desktop software',
      'Fixed many bugs related to UI/UX and features on flapship product'
    ]
  }),
  new ContributionData({
    id: 'Blackbird Crow',
    size: 'xs',
    position: 'IT Support',
    description: 'Provided all IT support to a local, family owned medicaly marijuana dispensary. Included but not limited to network and system administration, POS management and integration',
    iconLabel: 'BC',
    link: 'https://blackbirdcrow.business.site',
    start: new Date('2015-05-01'),
    end: new Date('2016-06-01'),
    points: [
      'Cleaned up business machines, removed malware and optimized OS',
      'Provided hardware troubleshooting and maintenance, such as printer repair',
      'Configured firewall and local storage to HIPAA standards',
      'Setup Quickbooks server and account',
      'Improved digital marketing and social media presence'
    ]
  }),
  new ContributionData({
    id: 'reBaked',
    size: 'small',
    position: 'Lead iOS Developer',
    description: 'A halloween themed AV recording and uploading application meant to be used to play pranks on friends. You chose a sound, set up the phone somewhere and when it detected someone going by, would record and upload their reaction',
    image: '/rebaked.png',
    link: 'https://medium.com/@mfonisoarchibong1/monetization-of-skills-by-rebaked-108002601a61',
    start: new Date('2014-04-01'),
    end: new Date('2014-10-01'),
    technologies: [
      'Objective-C',
      'Swift',
      'iOS',
      'WebKit',
      'SpriteKit',
      'AVKit'
    ],
    points: [
      'Motion detection with iOS camera',
      'Video recording and uploading to Youtube Library',
      'Custom sprite UI and animations',
      'Managed library of video and audio',
      'Google oAuth support'
    ],
    otherLinks: [
      'https://github.com/reBaked/14-TerrorTorch'
    ]
  }),
  new ContributionData({
    id: 'Bonzi Sports',
    size: 'small',
    position: 'Fullstack/iOS Developer',
    description: 'Sports software specializing in connecting referees with minor leagues. Managed newly acquired GameOfficials.net website and iOS application',
    image: '/bonzi.png',
    link: 'https://www.getapp.com/recreation-wellness-software/a/bonzi',
    start: new Date('2013-11-01'),
    end: new Date('2014-04-01'),
    technologies: [
      'jQuery',
      'Bootstrap',
      'Coldfusion',
      'T-SQL',
      'iOS',
      'Objective-C'
    ],
    points: [
      'Optimized many SQL queries from minutes down to seconds',
      'Implemented five large features for GameOfficials.com',
      'Led two large releases for their iOS product',
      'Involved in improving their automated billing processes'
    ],
    otherLinks: [
      'https://www.gameofficials.net',
      'https://team.stacksports.com'
    ]
  }),
  new ContributionData({
    id: 'Numedics',
    size: 'small',
    position: 'Front-End Developer',
    description: 'Developed hospital management software specializing in diabetes care. Written in ASP.NET. I helped provide front-end development for three of their major products.Serviced hospitals located throughout Oregon',
    image: '/numedics.jpg',
    link: 'https://www.numedics.com',
    start: new Date('2012-01-01'),
    end: new Date('2013-01-11'),
    technologies: [
      'jQuery',
      'Bootstrap',
      'ASP.Net',
      'Mercurial',
      'IIS',
      'MSSQL'
    ],
    points: [
      'Accompanied CEO on business trips to hospitals to diagnose application issues',
      'Involved in backend services and deployment processes',
      'Updated and managed UI for customer facing application',
      'Resolved issues with production deployments to internally managed dedicated servers'
    ],
    otherLinks: [
      'https://www.clinipro-web.com',
      'https://www.diabetespartner.com'
    ]
  })
];

export function allWorkFiles(): FileData[] {
  return allWork.map(fileFromWork);
}

export function fileFromWork(work:ContributionData): FileData {
  return new FileData({
    id: work.id,
    image: typeof work.image === 'object' ? work.image.icon : work.image,
    iconLabel: work.iconLabel,
    activated() {
      openWindow(work);
    }
  })
}
