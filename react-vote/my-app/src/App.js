import './App.css';
import {useState, useEffect} from "react";
import disbeliefIcon from './emoji/reshot-icon-disbelief-TQL2MNDFRK.svg';
import moneyIcon from './emoji/reshot-icon-money-ZED7VSP4CJ.svg';
import sadIcon from './emoji/reshot-icon-sad-V3LR2M9ZXD.svg';
import tongueIcon from './emoji/reshot-icon-tongue-Y92VG4RXPL.svg';
import {Emoji} from "./Emoji";
import {ButtonResult} from "./ButtonResult";
import {ButtonReset} from "./ButtonReset";


const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [thirdCounter, setThirdCounter] = useState(0);
  const [forthCounter, setForthCounter] = useState(0);
  const [result, setResult] = useState(-1);
  const [isFirstStyledOpacity, setIsFirstStyledOpacity] = useState(false);
  const [isSecondStyledOpacity, setIsSecondStyledOpacity] = useState(false);
  const [isThirdStyledOpacity, setIsThirdStyledOpacity] = useState(false);
  const [isForthStyledOpacity, setIsForthStyledOpacity] = useState(false);

  const data = [
    {emoji: disbeliefIcon, counterValue: firstCounter, counterSetter: setFirstCounter, style: isFirstStyledOpacity, changedStyle: setIsFirstStyledOpacity},
    {emoji: moneyIcon, counterValue: secondCounter, counterSetter: setSecondCounter, style: isSecondStyledOpacity, changedStyle: setIsSecondStyledOpacity},
    {emoji: sadIcon, counterValue: thirdCounter, counterSetter: setThirdCounter, style: isThirdStyledOpacity, changedStyle: setIsThirdStyledOpacity},
    {emoji: tongueIcon, counterValue: forthCounter, counterSetter: setForthCounter, style: isForthStyledOpacity, changedStyle: setIsForthStyledOpacity},
  ];

  const increment = (setState) => {
    setState((prevState) => prevState + 1);
  }

  const displayResult = () => {
    const value = Math.max(...data.map((value) => value.counterValue));
    setResult(value);
  }

  useEffect(() => {
    if (result > 0) {
      data.filter((counter) => {
        return counter.counterValue !== result ? counter.changedStyle(true) : counter.changedStyle(false);
      })
    }
  }, [result]);

  const resetData = () => {
    setResult(-1);
    data.map((data) => {
      data.counterSetter(0);
      data.changedStyle(false);
    });
  }

  return (
      <>
        <div className='App-container'>
          {data.map((value, idx) => {
            return <Emoji key={idx} src={value.emoji} styleView={value.style}
                          incrementHandler={() => increment(value.counterSetter)} counter={value.counterValue}/>
          })}
        </div>
        <ButtonResult displayResultHandler={displayResult}/>
        <ButtonReset resetHandler={resetData}/>
      </>
  );
}

export default App;
