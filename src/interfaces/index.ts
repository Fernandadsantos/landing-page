export interface TitleBoxParams {
  title: string;
  subtitle: string;
}

export interface RedirectCardParams {
  children: React.ReactNode;
  titleTop: string;
  titleBottom: string;
  link: string;
  theme: string;
}

export interface CardParams {
  title: string;
  paragraph: string;
  buttonContent: string;
  children: React.ReactNode;
}
