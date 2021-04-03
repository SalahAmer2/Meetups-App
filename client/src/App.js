import './App.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import axios from "axios";

function App() {

  const [state, setState] = useState(
    {
      title: '',
      body: ''
    }
  )

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setState({
      [name]: value
    })

    console.log('State: ', state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: state.title,
      body: state.body
    }

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

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
          <div>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
              placeholder='Who did you meet?'
            />
          </div>
          <br />
          <div>
            <textarea
              cols="30"
              rows="10"
              name="body"
              value={state.body}
              onChange={handleChange}
              placeholder='What did you do?'
            >
            </textarea>
          </div>
          <Button
            variant="contained"
            color="primary"
            className='shareMeetupBtn'
            onClick={handleSubmit}
          >
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
