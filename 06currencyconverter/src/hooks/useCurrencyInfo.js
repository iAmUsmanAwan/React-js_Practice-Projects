import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Optional: Add error state

    
    useEffect(() => {
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
    );

    return { data, loading, error }; // Return data, loading, and error states

    // console.log(data);
    
}

export default useCurrencyInfo;
