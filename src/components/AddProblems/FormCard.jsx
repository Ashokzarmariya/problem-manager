import React from "react";
import "./formCss.css";

const FormCard = ({ handleChange, handleSubmit }) => {
  return (
    <div className="max-w-6xl p-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Problem Link
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            name="link"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleDataList" className="form-label">
            Choose Difficulty
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="choose difficulty"
            name="difficulty"
            onChange={handleChange}
            required
          />
          <datalist id="datalistOptions">
            <option value="Easy" />
            <option value="Medium" />
            <option value="Hard" />
          </datalist>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
