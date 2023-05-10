import styled from 'styled-components';

export const Container = styled.div`
  background-color: #333333;
  padding: 10px 0;
`;

export const Layout = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  margin-right: 15px;
  width: 40px;
`;

export const LogoText = styled.span`
  position: relative;
  top: 4px;
  font-size: 40px;
  font-weight: 900;
`;