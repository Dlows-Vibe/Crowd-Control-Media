
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  metrics: string;
}

export interface StrategyResult {
  overview: string;
  steps: string[];
  projectedImpact: string;
}

export interface NavItem {
  label: string;
  href: string;
}
