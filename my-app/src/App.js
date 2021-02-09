import { useEffect } from 'react';
import MyWidget from 'my-widget';

function App() {
	useEffect(() => {
		MyWidget({ target: 'widget' });
  }, []);
  
  return (
    <div>
      <div>React APP. div</div>
      <div id="widget" />
    </div>
  );
}

export default App;
