export interface TabItem {
  id: string;
  label: string;
  content: string;
}

export interface TabsProps {
  id?: string;
  tabs: TabItem[];
  defaultTab?: number;
  alignment: 'left' | 'center' | 'right';
  tabStyle: 'underline' | 'pills' | 'bordered';
}
