import './App.css';
import ColorPicker from './components/colorpicker';

function App() {
  const colors = ['red', 'green', 'blue','coral','yellow','black','lightgreen','cyan','pink','violet','#9AC5F4','#2B2A4C'
  ];
  return (
    <div className="main">
      <div>
        <h1>Color Picker App</h1>
      </div>
      <div>
        <ColorPicker colors={colors} />
      </div>
    </div>
  );
}

export default App;
