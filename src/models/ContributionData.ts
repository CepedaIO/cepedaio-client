export default class ContributionData implements iContribution {
  id!: string;
  label?: string;
  position!: string;
  image?: string | { icon:string; hero:string; };
  iconLabel?: string;
  link!: string;
  start!: Date;
  end?: Date;
  size!: TeamSize;
  technologies?: string[];
  points!: string[];
  description!: string;
  otherLinks?: string[];

  constructor(data: iContribution) {
    Object.assign(this, data);
  }
}
