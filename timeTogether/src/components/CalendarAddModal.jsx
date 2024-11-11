import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./CalendarAddModal.css";

function CalendarAddModal({
  date,
  addEvent,
  updateEvent,
  closeModal,
  editEvent,
}) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("#f5a623");
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  // editEvent가 있을 때 초기값을 설정
  useEffect(() => {
    if (editEvent) {
      setTitle(editEvent.title);
      setLocation(editEvent.location);
      setColor(editEvent.color);
    } else {
      // editEvent가 없을 때는 빈 값으로 초기화
      setTitle("");
      setLocation("");
      setColor("#f5a623");
    }
  }, [editEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, location, color };
    if (editEvent) {
      updateEvent(format(date, "yyyy-MM-dd"), event);
    } else {
      addEvent(format(date, "yyyy-MM-dd"), event);
    }
    closeModal();
  };

  const colors = ["#f5a623", "#f8e71c", "#7ed321", "#4a90e2", "#9013fe"];

  return (
    <div className="cm-modal-overlay" onClick={closeModal}>
      <div className="cm-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          <span
            style={{ backgroundColor: color }}
            className="cm-color-circle"
            onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
          ></span>
          {format(date, "yyyy년 MM월 dd일")}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="장소"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {isColorPickerOpen && (
            <div className="cm-color-picker">
              {colors.map((c) => (
                <span
                  key={c}
                  style={{
                    backgroundColor: c,
                    border: color === c ? "2px solid black" : "none",
                  }}
                  onClick={() => {
                    setColor(c);
                    setIsColorPickerOpen(false);
                  }}
                  className="cm-color-option"
                />
              ))}
            </div>
          )}
          <button type="submit">{editEvent ? "일정 수정" : "일정 등록"}</button>
        </form>
      </div>
    </div>
  );
}

export default CalendarAddModal;
