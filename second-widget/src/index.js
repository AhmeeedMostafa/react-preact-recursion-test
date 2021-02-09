import { h } from "preact";
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const SecondWidget = () => (
 <div>
    <Button>Normal Button from second widget</Button>
    <Button as="a" href="/">Link with Button styles</Button>
    <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
  </div>
)

/*
const SecondWidget = () => (
 <div>
   No styled-components in 2nd widget
  </div>
)
*/

export default SecondWidget;