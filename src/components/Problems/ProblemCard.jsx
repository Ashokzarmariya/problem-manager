
import CheckBox from "./CheckBox";

const ProblemCard = ({
  practice1,
  practice2,
  practice3,
  practice4,
  practice5,
  index,
  link,
}) => {
  return (
    <div className="flex bg-gray-100 p-3 mt-2 justify-between">
      <div className="flex items-center mr-20">
        <h1 className="mr-5 font-bold text-lg">{index}.</h1>
        <a href={link} target="_blank" rel="noreferrer">{ link}</a>
      </div>
      <div className="flex">
        <CheckBox practice={practice1} />
        <CheckBox practice={practice2} />
        <CheckBox practice={practice3} />
        <CheckBox practice={practice4} />
        <CheckBox practice={practice5} />
      </div>
    </div>
  );
};

export default ProblemCard;
