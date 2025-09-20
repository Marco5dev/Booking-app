import React from "react";

function BookingForm({formData, availableTimes, handleChange, handleSubmit, updateTimes}) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (new Date(formData.date) < tomorrow) {
          alert("Please select a date starting from tomorrow.");
          return;
        }

        handleSubmit(e);
      }}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        min={minDate}
        onChange={(e) => {
          handleChange(e);
          updateTimes({ type: "update_time", date: e.target.value });
        }}
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="20"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit"
              value="Make Your reservation"
              aria-label="On Click" />
    </form>
  );
}

function BookingPage({formData, availableTimes, handleChange, handleSubmit, updateTimes}) {
  return (
    <BookingForm
      formData={formData}
      availableTimes={availableTimes}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      updateTimes={updateTimes}
    />
  );
}

export default BookingPage;