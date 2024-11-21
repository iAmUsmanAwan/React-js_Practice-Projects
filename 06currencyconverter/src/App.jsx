import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Use the custom hook to fetch currency info
  const { data: currencyInfo, loading, error } = useCurrencyInfo(from);

  // Handle loading and error states
  if (loading) {
    return <div>Loading currency data...</div>; // Show loading message
  }

  if (error) {
    return <div>Error fetching currency data: {error.message}</div>; // Show error message
  }

  const options = Object.keys(currencyInfo); // Get currency options from the fetched data

  const swap = () => {
    const tempFrom = from;
    const tempTo = to;
    setFrom(tempTo);
    setTo(tempFrom);
    
    // Recalculate converted amount after swapping
    if (currencyInfo[tempTo]) {
      setConvertedAmount(amount * currencyInfo[tempTo]);
    } else {
      console.error("Currency conversion failed after swap: currencyInfo[tempTo] is undefined");
    }
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      console.error("Currency conversion failed: currencyInfo[to] is undefined");
    }
  };

  return (

    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-no-repeat bg-cover bg-top '
      style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=400`}}
      >
        <div className='w-full'>
          
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
              <button
                type='button' // Changed to type='button' to prevent form submission
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
                >Swap</button>

              </div>
              
              <div className='w-full mb-1'>
                <InputBox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
                />
              </div>

              <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

            </form>

          </div>
        
        </div>
        
      </div>
  )
}

export default App
