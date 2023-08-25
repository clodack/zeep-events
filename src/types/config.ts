export type FilterCities = {
  id: string;
  title: string;
  sortOrder: number;
};

export type FilterProces = {
  id: string;
  title: string;
  sortOrder: number;
  range: {
    min: number;
    max: number;
  };
}

export type Dictionaries = {
  filterPrices: FilterProces[];
  filterCities: FilterCities[];
}

export type ResponseConfigs = {
  dictionaries: Dictionaries;
}
