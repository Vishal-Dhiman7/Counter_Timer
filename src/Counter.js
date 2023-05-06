import {useState,useEffect} from 'react';

function Counter(){
    const [time,setTime] = useState(0);
    function getInput(e){
        if(e.key == 'Enter'){
            const Value = Math.floor(e.target.value);
            if (isNaN(Value)) {
                setTime(0);
            } else {
                setTime(Value);
            }
        }
        console.log(e.key);
    }
    useEffect(() => {
        let interval = 0;
        if (time > 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
        } else {
            setTime(0)
        }
        return () => clearInterval(interval)
    }, [time])
    
    return <>
         <input id="timecount" onKeyDown={getInput} placeholder="Enter the time count" />
        <div>{time}</div>
    </>
}
export default Counter;