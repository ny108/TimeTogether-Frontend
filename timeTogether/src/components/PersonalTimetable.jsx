import TimeGrid from '././TimeGrid.jsx';
import {useState} from "react";

const PersonalTimetable = ({days, dayLabels}) => {
    const [saveBtn, setAddSaveBtn] = useState(false);
    return (
        <div className="personal-timetable">
            <div className="personal-timetable-header">
                <h3 className="section-title">내 시간표</h3>
            </div>
            <TimeGrid days={days} dayLabels={dayLabels} />
            <button className="add-personal-timeBtn" onClick={()=>{
                setAddSaveBtn("저장하기");

            }}>{
                saveBtn ? <p>저장하기</p> : <p>내 시간표 추가하기</p>
            }</button>
        </div>
    );
};

export default PersonalTimetable;