export type StoriesGridProps = {
  data: any;
  isLoading: boolean;
};

export type StoriesGridItemProps = {
  date: string;
  isLoading: boolean;
  title: string;
  slug: string;
  appName: string;
  appLogo: string;
  tags: Array<string>;
  imageLink: string;
  userPhoto: HTMLImageElement;
  username: string;
  description: string;
  communityName: string;
};
