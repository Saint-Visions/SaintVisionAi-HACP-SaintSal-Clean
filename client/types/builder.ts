// Builder.io Types
export interface BuilderPage {
  id: string;
  name: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
}

export interface BuilderSection {
  id: string;
  name: string;
  data: {
    [key: string]: any;
  };
}

export interface BuilderComponent {
  '@type': string;
  component: {
    name: string;
    options: Record<string, any>;
  };
  children?: BuilderComponent[];
}
