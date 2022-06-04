export default class EmbedData implements iEmbed {
  id!: string;
  label?: string;
  src!: string;
  type!: string;
  mime?: string;

  constructor(data: iEmbed) {
    Object.assign(this, data);
  }
}
