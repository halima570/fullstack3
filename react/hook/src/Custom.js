import { useEffect,useState } from "react";

function useInterval (timeout, getValue) {
  const [value, setValue] = useState(getValue);
   useEffect(() => {
    const intervalID = setInterval(
      () => setValue(getValue()),
      timeout
    );
   return function () {
    clearInterval(intervalID);
  }
}, []);
 return value;
}
 const getCurrentDate = () => new Date();
 function Appp() {
  const date = useInterval(1000, getCurrentDate);
   return <p>Nous sommes le {date.toLocaleString('en-GB')}</p>;
}
export default Appp