import { useRecoilValue } from 'recoil';

import Checkbox from '@Components/Checkbox';

import useCartItems from '@Hooks/useCartItems';

import cartItemsAmountState from '@Selector/cartItemsAmountState';
import isAllCartItemSelectedState from '@Selector/isAllCartItemSelectedState';
import selectedCartItemsAmountState from '@Selector/selectedCartItemsAmountState';

import * as S from './style';

function CartListController() {
  const { toggleAllSelected, deleteAllUnSelectedCartItem } = useCartItems();
  const shoppingCartAmount = useRecoilValue(cartItemsAmountState);
  const selectedCartItemsAmount = useRecoilValue(selectedCartItemsAmountState);
  const isAllSelected = useRecoilValue(isAllCartItemSelectedState);

  const deleteManyShoppingItem = () => {
    if (!window.confirm('선택한 모든 상품을 장바구니에서 삭제하시겠습니까?')) return;

    deleteAllUnSelectedCartItem();
  };

  return (
    <S.Container>
      <Checkbox
        isChecked={isAllSelected}
        updateSelectedState={() => {
          toggleAllSelected();
        }}
        size="small"
      />
      <S.SelectedSituation>
        {isAllSelected ? '전체해제' : '전체선택'}({selectedCartItemsAmount}/{shoppingCartAmount})
      </S.SelectedSituation>
      <S.DeleteButton onClick={deleteManyShoppingItem}>선택삭제</S.DeleteButton>
    </S.Container>
  );
}

export default CartListController;