import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 2rem;
  max-width: 70rem;
  min-width: 70rem;
  max-height: 50rem;
  margin: 5rem;

  border-radius: 0.4rem;
  background: #ffff;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      button {
        width: 5rem;
        padding: 0.5rem;
        background: #cacaca;
        border: none;
        border-radius: 0.4rem;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.5, '#cacaca')};
        }
      }
    }

    li > div {
      flex: 1;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      padding-top: 0.5rem;
      padding-bottom: 1rem;

      span {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const AddTech = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  flex: 1;
  display: flex;
  align-items: center;

  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    flex: 1;
    color: #222;
    border-radius: 0.4rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  button {
    flex: 1;
    border: 0;
    padding: 1rem;
    max-width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border-radius: 0.4rem;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#7159c1')};
    }
  }
`;
