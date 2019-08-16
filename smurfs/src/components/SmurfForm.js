import React, { useState, useContext } from 'react';
import { SmurfContext } from "../contexts/SmurfContext";
import axios from 'axios';

const SmurfForm = props => {
  const [data, setData] = useState({});
  const setLastUpdate = useContext(SmurfContext);

  const addData = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  };
  const clearData = () => {
    setData({});
  };
  const submitData = (e) => {
    e.preventDefault();
    if(!data.name || !data.age || !data.height) return;
    const postData = async () => {
      const res = await axios.post('http://localhost:3333/smurfs', data);
    };
    postData();
    setLastUpdate(Date.now());
  };

  return (
      <div className='smurfForm'>
        <form name='postSmurf'>
          <input name='name' placeholder='Smurf Name' value={data.name} onChange={addData} />
          <input name='age' placeholder='Age' value={data.age} onChange={addData} />
          <input name='height' placeholder='Height (cm)' value={data.height} onChange={addData} />
          <button onClick={submitData}>Submit</button>
        </form>
      </div>
  );
};

export default SmurfForm;