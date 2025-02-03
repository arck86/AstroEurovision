export type Title = {
  text: string;
};

export type Tooltip = {
  trigger: string;
};

export type Legend = {
  data: string[];
};

export type Grid = {
  left: string;
  right: string;
  bottom: string;
  containLabel: boolean;
};

export type Toolbox = {
  feature: {
    saveAsImage: Record<string, string>;
  };
};

export type Axis = {
  type: string;
  boundaryGap?: boolean;
  data?: string[];
};

export type Series = {
  name: string;
  type: string;
  stack: string;
  data: number[];
};

export type ChartOption = {
  title: Title;
  tooltip: Tooltip;
  legend: Legend;
  grid: Grid;
  toolbox: Toolbox;
  xAxis: Axis;
  yAxis: Axis;
  series: Series[];
};
