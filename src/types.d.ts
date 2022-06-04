type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

interface Position {
  top: number;
  left: number;
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
  files?: Array<iFile | iContribution>;
  folders?: Array<iFolder>;
}

interface iEmbed {
  id: string;
  label?: string;
  src: string;
}

interface iContribution {
  id: string;
  label?: string;
  images: {
    icon: string;
    hero: string;
  };
  href: string;
}

type iWindowable = iFolder | iEmbed | iContribution;
