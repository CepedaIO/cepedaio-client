type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

interface Position {
  top: number;
  left: number;
}

interface iWindow {
  id: string;
  type: string;
  label?: string;
  position: Position;
  index?: number;
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
  position: Position;
  files: Array<iFile>;
  folders: Array<iFolder>;
}

interface iImage {
  id: string;
  label: string;
  position: Position;
  src: string;
}

