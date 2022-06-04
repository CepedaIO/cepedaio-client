type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

interface Position {
  top: number;
  left: number;
  index?: number;
}

interface iWindow {
  id: string;
  label?: string;
  position: Position;
}

interface iFile {
  id: string;
  class?: string;
  icon?: string;
  iconLabel?: string;
  image?: string;
  label?: string;
  position: Position;
  activated: (file: this) => void;
}

interface iFolder {
  id: string;
  label?: string;
  files?: Array<iFile>;
  folders?: Array<iFolder>;
}

interface iEmbed {
  id: string;
  label?: string;
  src: string;
  mime?: string;
}

interface iContribution {
  id: string;
  label?: string;
  position: string;
  image?: string | { icon:string; hero:string; };
  iconLabel?: string;
  link: string;
  start: Date;
  end?: Date;
  technologies?: string[];
  points: string[];
  description: string;
  otherLinks?: string[];
}

type iWindowable = iFolder | iEmbed | iContribution;
