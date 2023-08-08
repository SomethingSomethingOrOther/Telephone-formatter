import './App.css';
import {useState} from "react"

function App() {
      const [phoneNumber, setPhoneNumber] = useState('');

const formatPhoneNumber = (input) => {
  const digitsOnly = input.replace(/\D/g, ''); //remove

  if (digitsOnly.length > 10) {
    return digitsOnly.slice(0, 10); 
  } else if (digitsOnly.length >= 4) {

    const formattedNumber =
      `(${digitsOnly.slice(0, 3)})-${digitsOnly.slice(3, 6)}` +
      (digitsOnly.length > 6 ? `-${digitsOnly.slice(6, 10)}` : '');
    return formattedNumber;
  } else {
    return digitsOnly; 
  }
};

  const handleInputChange = (e) => {
    const { value } = e.target;
    const formattedNumber = formatPhoneNumber(value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <div className="App">
        <header>
            <h1>Telephone Formatter</h1>
          </header>   
          <div>
            <label>
                <input maxLength={14} placeholder='Enter phone number' type="text" value={phoneNumber} onChange={handleInputChange}/>
            </label>

        </div>   
    </div>
  );
}

export default App;
