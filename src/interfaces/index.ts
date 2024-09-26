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

export interface CardModalParams {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  id?: string;
  className?: string;
  radius?: string;
}
export interface CarouselData {
  quote: string;
  name: string;
  title: string;
}

export interface CarouselProps {
  data: CarouselData[];
}

export interface BlockQuote {
  quote: string;
  name: string;
  title: string;
}

export interface BtnProps {
  content: string;
  color?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
  radius?: string;
}

export interface TeamCardParams {
  img: string;
  name: string;
  function: string;
  linkedinRefer: string;
  description: string;
}

export interface DropCardParams {
  title: string;
  numberTitle: string;
  content: string;
}

export interface CardParams {
  title: string;
  paragraph: string;
  buttonContent: string;
  children: React.ReactNode;
}
