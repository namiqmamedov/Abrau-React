import { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  height: 2px;
`;
const ProgressBar = styled.div`
  height: 2px;
  background: ${(props) => props.color || "#ccc"};
  width: ${(props) => props.width || 0}%;
`;
const ProgressText = styled.span`
  font-size: 1rem;
`;

const ScrollIndicator = ({ color, showText }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [progressWidth2, setProgressWidth2] = useState(0);
  const [progressWidth3, setProgressWidth3] = useState(0);
  const [progressWidth4, setProgressWidth4] = useState(0);
  const [progressWidth5, setProgressWidth5] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 500;
      const scrolled2 = (winScroll / height) * 228.5;
      const scrolled3 = (winScroll / height) * 230;
      const scrolled4 = (winScroll / height) * 120;
      const scrolled5 = (winScroll / height) * 95;
      setProgressWidth(scrolled);
      setProgressWidth2(scrolled2);
      setProgressWidth3(scrolled3);
      setProgressWidth4(scrolled4);
      setProgressWidth5(scrolled5);
    };
  }, []);

  return (
    <>
    <div className="indicator">
    <ProgressContainer id="indicator-item" className="indicator-item">
      <ProgressBar id="indicator-main" className="indicator-main" width={progressWidth} color={color}>
        {showText && (
          <ProgressText width={progressWidth}>{`${Math.round(
            progressWidth
          )}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
    </div>
    <ProgressContainer id="indicator-item" className="indicator-item-second">
    <ProgressBar id="indicator-main" className="indicator-main-second" width={progressWidth2} color={color}>
      {showText && (
        <ProgressText width={progressWidth2}>{`${Math.round(
          progressWidth2
        )}%`}</ProgressText>
      )}
    </ProgressBar>
    </ProgressContainer>
    <ProgressContainer id="indicator-item" className="indicator-item-third">
      <ProgressBar id="indicator-main" className="indicator-main-third" width={progressWidth3} color={color}>
        {showText && (
          <ProgressText width={progressWidth3}>{`${Math.round(
            progressWidth3
          )}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
    <ProgressContainer id="indicator-item" className="indicator-item-fourth">
      <ProgressBar id="indicator-main" className="indicator-main-fourth" width={progressWidth4} color={color}>
        {showText && (
          <ProgressText width={progressWidth4}>{`${Math.round(
            progressWidth4
          )}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
    <ProgressContainer id="indicator-item" className="indicator-item-fifth">
      <ProgressBar  id="indicator-main" className="indicator-main-fifth" width={progressWidth5} color={color}>
        {showText && (
          <ProgressText width={progressWidth5}>{`${Math.round(
            progressWidth5
          )}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
  </>
  );
};

export default ScrollIndicator;
