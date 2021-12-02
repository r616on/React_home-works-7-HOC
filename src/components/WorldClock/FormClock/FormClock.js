import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";

const FormClock = (props) => {
  const { form, onChange, onSubmit } = props;

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-item fild">
        <label className="lable" htmlFor="name">
          Название
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={"input-name  input-item"}
          value={form.name}
          onChange={onChange}
          placeholder="Название"
        />
      </div>
      <div className="form-item fild">
        <label className="lable" htmlFor="timeShift">
          Временная зона
        </label>
        <select
          value={form.timeShift}
          onChange={onChange}
          className={"input-timeShift  input-item"}
          id="timeShift"
          name="timeShift"
        >
          <option value="Europe/Moscow">Moscow</option>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">London</option>
          <option value="Asia/Tokyo">Tokyo</option>
        </select>
      </div>

      <button className={"input-button input-item"}>Добавить</button>
    </form>
  );
};

FormClock.propTypes = {
  form: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default FormClock;
