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
  icon: string;
  label?: string;
  position: Position;
  activated: (file: iFile) => void;
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
  type: string;
}

type iWindowable = iFolder | iEmbed;
