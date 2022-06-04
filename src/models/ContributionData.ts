export default class ContributionData implements iContribution {
  id!: string;
  label?: string;
  images!: {
    icon: string;
    hero: string;
  };
  href!: string;

  constructor(data: iContribution) {
    Object.assign(this, data);
  }
}
