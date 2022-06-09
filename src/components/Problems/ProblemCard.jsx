import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckBox from "./CheckBox";

const ProblemCard = ({
  practice1,
  practice2,
  practice3,
  practice4,
  practice5,
  index,
  link,
  id,
  isDone,

}) => {

  const store = useSelector((store) => store);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  useEffect(() => {
    

    isDone.includes(1) ? setFirst(true) : setFirst(false);
      isDone.includes(2) ? setSecond(true) : setSecond(false);
      isDone.includes(3) ? setThird(true) : setThird(false);
      isDone.includes(4) ? setFour(true) : setFour(false);
      isDone.includes(5) ? setFive(true) : setFive(false);
    
  }, [store, isDone, first]);

  return (
    <div className="flex bg-gray-100 p-3 mt-2 justify-between rounded-md">
      <div className="flex items-center mr-20">
        <h1 className="mr-5 font-bold text-lg">{index}.</h1>

        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>

      </div>
      <div className="flex">
        <CheckBox
          id={id}
          problemId={link}
          practice={practice1}
          num={1}
          check={first}
          
       
        />
        <CheckBox
          id={id}
          problemId={link}
          practice={practice2}
          num={2}
          check={second}
          
        />
        <CheckBox
          id={id}
          problemId={link}
          practice={practice3}
          num={3}
          check={third}
         
        />
        <CheckBox
          id={id}
          problemId={link}
          practice={practice4}
          num={4}
          check={four}
          
        />
        <CheckBox
          id={id}
          problemId={link}
          practice={practice5}
          num={5}
          check={five}
          
        />
      </div>
    </div>
  );
};

export default ProblemCard;
