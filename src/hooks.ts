import {useState, useEffect} from 'react';

export const useOffset = () => {
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return [offset,setOffset];
}