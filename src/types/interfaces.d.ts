interface FetchParams {
  collection: string;
  fieldPath: string;
  opStr: firebase.firestore.WhereFilterOp;
  value: string;
}
type Seasson = 'AUTUMN' | 'WINTER' | 'SPRING' | 'SUMMER';
type Label = 'NEW' | 'SALE' | 'DISCOUNT';
type Collection = 'ALL' | 'BIKER' | 'BOMBER' | 'OVERSIZE' | 'TRUCKER' | 'FUR' | 'TEDDY' | 'SUEDE' | 'DUFF';
interface Product {
  id: string;
  name: string;
  description: string;
  discount: string;
  label: Label;
  images: File[];
  price: string;
  seasson: Seasson[];
  type: Collection[];
}