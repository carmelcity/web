export type TabsProps = {
  tabs: Array<{ description: string; value: string }>;
  selectedTab: string;
  onClickTab: (value: string) => void;
  isLoading: boolean;
};

export type TabProps = {
  description: string;
  value: string;
  onClick: (value: string) => void;
  selectedValue: string;
  isLoading: boolean;
};
