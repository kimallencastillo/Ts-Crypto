
import { Crypto } from '../types/Types';
import {useState , useEffect}from 'react';

// whenever function expecting it needs to set as a properties first 
export type AppProps = {
    crypto: Crypto;
    updateOwned: (crypto: Crypto, amount: number) => void;
}

export default function CryptoSummary({crypto, updateOwned} : AppProps) :  JSX.Element {
   
    
     useEffect(()=>{
        console.log(crypto.name, amount, crypto.current_price * amount)
     })
     const [amount, setAmount] = useState<number>(0);
    return (
        <>
        <div>
            <span>{crypto.name + ' $' + crypto.current_price}</span>
            <input  
                type ="number"
                style={{ margin : 10}}
                value={amount} 
                onChange={(e) => {
                     setAmount(parseFloat(e.target.value));
                     // set parent state calling a function passed in as a prop
                     updateOwned(crypto, parseFloat(e.target.value))

                }}
                >
            </input>
            <p>
                {isNaN(amount) ? '$0.0' : '$' +
                (crypto.current_price  * amount).toLocaleString(undefined, { minimumFractionDigits: 2 , maximumFractionDigits: 2})}
            </p>
        </div>
        </>
    )
}