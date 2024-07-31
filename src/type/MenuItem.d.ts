export type MenuItem = {
  key: string;
  path: string;
  children?: MenuItem[];
  label: React.ReactNode;
};
