import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    //? here it is initialized with an empty object to incase the fetch call is not coming 

    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Optional: Add error state

    
    useEffect(() => {
        //* useEffect hook is used to invoke a method when a component is mounted
    
        const fetchCurrencyInfo = async () => {
            setLoading(true); // Set loading to true before fetching
            setError(null); // Reset error state
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                console.log(result); // Log the response
                
                setData(result.rates || {}); // Set rates instead of res[currency], if available
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setError(error); // Set error state
                setData({}); // Reset to an empty object on error
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchCurrencyInfo();
        }, [currency]
        //* here currency is the dependecy. we want to call this method, everytime currency is changed.

    );

    return { data, loading, error }; // Return data, loading, and error states

    // console.log(data);
    
}


//* this is the function which was written for a different api which is not working
// function useCurrencyInfo(){
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=>res.json)
//         .then((res)=>setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     // return[data, setData]
//     //? we cannot use this because we need an access to run this function but we rather return data

//     console.log(data);
//     return data
// }


export default useCurrencyInfo;
