import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    margin: 4rem auto;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 8px solid #000000ff;
    border-left: 8px solid #8c7d7dff;
    border-right: 8px solid #ff00;
    animation: loader .7s infinite linear;
  }

  @keyframes loader {
    to {
      transform: rotate(360deg);
    }
  }`;

export default Loader;
