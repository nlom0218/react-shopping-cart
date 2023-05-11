import Logo from '@Asset/Logo.png';

import * as S from './style';
import { useRecoilValue } from 'recoil';
import shoppingItemsAmountState from '@Selector/shoppingItemsAmountState';
import UserSummaryShoppingCart from '@Components/UserSummaryShoppingCart';

function Header() {
  const shoppingItemsAmount = useRecoilValue(shoppingItemsAmountState);

  return (
    <S.Container aria-label="페이지 헤더">
      <S.Layout>
        <S.LogoWrapper>
          <S.LogoImg src={Logo} alt="장바구니 로고" />
          <S.LogoText>SHOP</S.LogoText>
        </S.LogoWrapper>
        <UserSummaryShoppingCart quantity={shoppingItemsAmount} />
      </S.Layout>
    </S.Container>
  );
}

export default Header;
