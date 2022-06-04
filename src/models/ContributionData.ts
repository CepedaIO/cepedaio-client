export default class ContributionData implements iContribution {
  id!: string;
  label?: string;
  position!: string;
  image!: string;
  link!: string;
  start!: Date;
  end?: Date;
  technologies!: string[];
  points!: string[];
  description!: string;

  constructor(data: iContribution) {
    Object.assign(this, data);
  }
}
