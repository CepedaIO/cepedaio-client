import FileData from "../models/FileData";
import {openWindow} from "../store/app";
import ContributionData from "../models/ContributionData";

export const Numedics = new ContributionData({
  id: 'Numedics',
  position: 'Front-End Developer',
  image: '/numedics.jpg',
  link: 'https://www.numedics.com/',
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
  description: 'Numedics develops applications for diabetes management used by both doctors and patients. I was part of a small team of about 10 individuals where we serviced hospitals located throughout Oregon'
});

export const allWork = [
  Numedics
];

export function fileFromWork(work:ContributionData): FileData {
  return new FileData({
    id: work.id,
    image: work.image,
    activated() {
      openWindow(work);
    }
  })
}
