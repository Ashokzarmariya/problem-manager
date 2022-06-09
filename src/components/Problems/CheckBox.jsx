import Checkbox from "@mui/material/Checkbox";
import { useContext,  useState } from "react";
import { useDispatch, } from "react-redux";
import AuthContext from "../../contex/AuthContext";
import { fetchSingleProblem } from "../../redux/singleProblemSlice";

export default function CheckBox({ practice, id,check ,num}) {
  const dispatch = useDispatch();
  const user = useContext(AuthContext);
  const userId = user ? user._id : null;
 

  const [checked, setChecked] = useState(false);
  
 practice=practice-3

 

  const handleChange = (event) => {
    setChecked(event.target.checked);
    const data = {
      userId,
      problemData:{
        problemId: id,
      },
      num,
    };

      dispatch(fetchSingleProblem(data));
 
    
  
  };

  return (
    <div className="mx-3">
      <Checkbox
        checked={check?check:checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        disabled={
          (practice ===0 && check ? "disabled" : "") ||
          (practice < 0 || practice>0 ? "disabled" : "")
        }
        className="bg-green-700"
      />
      <label className={practice<=0 && check ?"text-green-500":practice<0 && !check?"text-red-600":''} htmlFor="">
        {practice <= 0 && check
          ? "Completed"
          : practice === 0
          ? "Today"
          : practice < 0 && !check
          ? "Missed"
          : `${practice} days left`
        }
      </label>
    </div>
  );
}
