import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <div className='outerDiv'>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</div>
      <div className='midOuterDiv'>
        <div className='div_inside_div'>
          <strong className='homeFeedTitle'>
            Home
            </strong>
        </div>
        <div className='div_inside_div'>
          Who did you meet?<br /><br />
          <Button variant="contained" color="primary" className='shareMeetupBtn'>
            Share Meetup
          </Button>
        </div>
        <div className='div_inside_div'>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</div>
      </div>
      <div className='outerDiv'>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</div>
    </div>
  );
}

export default App;
