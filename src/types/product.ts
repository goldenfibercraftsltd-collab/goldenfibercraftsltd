export interface Product {
  id: string;
  itemCode: string;
  name: string;
  category: 'baskets' | 'planters' | 'bags' | 'decor' | 'bamboo';
  categoryLabel: string;
  specification: string;
  materials: string;
  moq: string;
  image: string;
  featured?: boolean;
  topRank?: number;
  description?: string;
}
