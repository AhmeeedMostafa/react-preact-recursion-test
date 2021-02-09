import { h, render } from "preact";
import styled from 'styled-components';
import Test from "./test";
// import SecondWidget from 'second-widget';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const MyWidget = (props) => {
	render(
    <Wrapper>
      <div>Normal</div>
      <Test />
      <Title>
        Hello World!
      </Title>
			{/* <SecondWidget /> */}
    </Wrapper>,
	  document.getElementById(props.target || 'root')
  );
}

/*
const MyWidget = () => (
 <div>
   No styled-components in First widget (my-widget)
  </div>
)
*/

export default MyWidget;
