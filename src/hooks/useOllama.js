import ollama from 'ollama'
import { useState, useEffect } from "react"

const useOllama = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await ollama.chat({
                model: 'llama2',
                messages: [{ role: 'user', content: 'Why is the sky blue?' }],
              })
              console.log(response.message.content)
        } catch (e){
            setError(e);
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
}

export default useOllama;