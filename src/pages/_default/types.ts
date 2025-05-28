
export type PageContextServer = {
  Page: () => JSX.Element;
  routeParams: Record<string, string>;
  urlOriginal: string;
};

export type PageContextClient = {
  Page: () => JSX.Element;
  routeParams: Record<string, string>;
};

export type PageContext = PageContextServer | PageContextClient;
