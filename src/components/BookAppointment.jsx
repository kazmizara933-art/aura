import React, { useState } from "react";
import open from "../assets/open.jpg"; // replace with your spa image

 function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  const daysInMonth = new Date(year, currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(year, currentMonth.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <section className="flex flex-col md:flex-row bg-[#fefaf8] text-[#3b2417] overflow-hidden">
      {/* Left Side - Image */}
      <div className="md:w-1/2 relative">
        <img
          src={open}
          alt="Spa Open Sign"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Right Side - Booking Calendar */}
      <div className="md:w-1/2 bg-[#b56b47] flex flex-col justify-center p-10 text-white">
        <div className="max-w-md mx-auto text-center">
          <p className="uppercase text-xs tracking-[3px] text-[#fbd3b8] mb-2">
            We Are Open
          </p>
          <h2 className="text-3xl font-semibold mb-8">Book an Appointment</h2>

          {/* Calendar Container */}
          <div className="bg-[#4b2e22] rounded-lg shadow-xl p-4">
            {/* Header */}
            <div className="flex justify-between items-center text-sm font-semibold mb-3">
              <button
                onClick={prevMonth}
                className="px-3 py-1 rounded hover:bg-[#6b402e]"
              >
                &lt;
              </button>
              <span>{monthName} {year}</span>
              <button
                onClick={nextMonth}
                className="px-3 py-1 rounded hover:bg-[#6b402e]"
              >
                &gt;
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 text-xs text-[#f7d9c4] mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="py-1 text-center">
                  {d}
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 text-sm">
              {Array.from({ length: firstDay }).map((_, idx) => (
                <div key={`empty-${idx}`} className="py-2" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, day) => {
                const date = day + 1;
                const isSelected = selectedDate === date;
                return (
                  <div
                    key={date}
                    onClick={() => handleDateClick(date)}
                    className={`py-2 text-center rounded-md cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#b56b47] text-white font-bold"
                        : "hover:bg-[#6b402e]"
                    }`}
                  >
                    {date}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Confirmation */}
          {selectedDate && (
            <p className="text-sm mt-4 text-[#f7d9c4]">
              Selected Date: <span className="font-semibold">{monthName} {selectedDate}, {year}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
export default BookAppointment;