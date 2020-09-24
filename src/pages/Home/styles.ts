import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  background: rgba(2,0,36,1);
  
`;

export const Locale = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: rgba(0,212,255,1);
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #ccc;
`;

export const Cel = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: rgba(0,243,255,1);
`;


export const Description = styled.View`
  flex-direction: row;
`;

export const Details = styled.View`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
`;


export const Tex = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #ccc;  
`;

export const Winds = styled.Text`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  color: #ccc;  
`;
