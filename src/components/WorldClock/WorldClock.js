import React, { useState } from "react";
import FormClock from "./FormClock/FormClock";
import "./desktop.scss";
import ClockItem from "./ClockItem/ClockItem";
import { v4 as uuidv4 } from "uuid";

const initForm = {
  timeShift: "Europe/Moscow",
  name: "",
};

function WorldClock() {
  const [form, setForm] = useState(initForm);
  const [clockArr, setClockArr] = useState();

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.name) {
      setClockArr((prev) => {
        const arr = prev ? [...prev] : [];
        arr.push({ id: uuidv4(), name: form.name, timeShift: form.timeShift });
        return arr;
      });
      setForm(initForm);
    }
  };
  const handleDell = (id) => {
    setClockArr((prevArr) => prevArr.filter((i) => i.id !== id));
  };

  return (
    <div className="WordClock">
      <div className="WordClock-row">
        <FormClock
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        {clockArr && (
          <div className="ClockItem-row">
            {clockArr.map((item) => {
              return (
                <ClockItem
                  handleDell={handleDell}
                  key={item.id}
                  timeShift={item.timeShift}
                  name={item.name}
                  id={item.id}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default WorldClock;
