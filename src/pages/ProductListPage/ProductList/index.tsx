import ProductItem from '@Components/ProductItem';

import { Product } from '@Types/index';

import { useMockFetch } from '@Hooks/useMockFetch';

import * as S from './style';
import MockData from '../../../mockData.json';

function ProductList() {
  const { data, isLoading } = useMockFetch<Product[]>(MockData);

  return (
    <S.ProductListContainer>
      {data && data.map((data) => <ProductItem product={data} key={data.id} isLoading={isLoading} />)}
      {isLoading &&
        new Array(12).fill(undefined).map((_: undefined, index) => <ProductItem key={index} isLoading={isLoading} />)}
    </S.ProductListContainer>
  );
}

export default ProductList;
