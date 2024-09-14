import { useState } from 'react'
import { Inputbox } from './component/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
function App() {
  const [amount, setAmount] = useState(0);
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("gbp")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setConvertedAmount(convertedAmount)
  }
  const convert =()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <>
      <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/290707/910/606/m2/fpnw/wm1/cuy7u7t3dl2oyp8usqt9k0yvp0e19fdmdvobdfqothkl4d0eqt1fww11kvgdv105-.jpg?1420650599&s=05ad116c3da55dbfc48eeed4588d39f3')`,
      }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form 
              onSubmit={(e)=>{
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
              <Inputbox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}  
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
              </div>
              <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 text-center"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                      <Inputbox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setTo(currency)}
                        selectCurrency={to}
                        amountDisable
                      />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
