import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { setInformation } from "../../Redux/Actions";
import "./Events.css";

const Events = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      setInformation({
        id: Math.random(),
        Name: data.name,
        Description: data.description,
        StartTime: data.startTime,
        EndTime: data.endTime,
      })
    );
  };

  return (
    <div>
      <div>
        <div className="card">
          <h2 className="card-title">Events Page</h2>
          <div className="card-content">
              This is Events Page
              <br></br>
          <Link to="/">
              <button className="card-button">Link to Home</button>
          </Link>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          className="card-input"
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              placeholder="Enter event name"
            />
          )}
        />

        <Controller
          className="card-input"
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              placeholder="Enter description"
            />
          )}
        />

        <Controller
          className="card-input"
          name="startTime"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="time"
            />
          )}
        />

        <Controller
          className="card-input"
          name="endTime"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="time"
            />
          )}
        />

        <button className="card-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Events;
