import React, {useState, useEffect} from 'react';
import {Context} from "./types/types"
import {DARK_THEME} from "./utils"

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

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{width : number | undefined, height : number | undefined}>({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
    
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  };


export const AppStore = React.createContext<Context | null>(null);
export const useApplicationState = () => {
    const context = React.useContext(AppStore);

    if(!context || !context.state){
        return ({currentTheme : DARK_THEME});
    }
    return context.state;
}