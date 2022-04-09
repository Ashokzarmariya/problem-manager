
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function CheckBox({practice}) {
  const [checked, setChecked] = useState(false);
  const valid= +practice.split(" ")[0]
//console.log(valid)
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  //console.log(checked);
  return (
      <div className="mx-3">    
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        disabled={(valid===0 && checked ?"disabled":"") || (valid<0 ? "disabled" : "")}
         />
      <label htmlFor="">{valid===0 ? "Today": valid<=0 && checked ? "completed": valid<0 && !checked ? "Missed":  practice  }</label>
    </div>
  );
}
