import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { OutlinedInput } from "@mui/material";

export default function Selects({ difficulty, setDifficulty, handleChange }) {
  return (
    <div>
      <FormControl style={{ width: "20rem" }}>
        {/* <InputLabel >Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={difficulty}
          placeholder="Difficulty"
          onChange={handleChange}
        >
          <MenuItem value={"Hard"}>Hard</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Easy"}>Easy</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
