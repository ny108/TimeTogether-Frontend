import {useState} from "react";
import './TimeGrid.css';

const TimeGrid = ({ days, dayLabels }) => {

    const hourCount = 16; //총 16시간에 대해 타임테이블 작성
    const dayCount = days.length;
    const [selectTime, setSelectTime] = useState(0);

    return (
        <div className="time-grid" style={{backgroundColor :'#f4f4f4'}}>
            <div className="grid-header">
                <div className="time-column"></div>
                {days.map((day, index) => (
                    <div key={day} className="day-column">
                        <div className="day-date">{day}</div>
                        <div className="day-label">{dayLabels[index]}</div>
                    </div>
                ))}
            </div>
            <div className="grid-content">
                <TimeScale hourCount={hourCount} />
                <GridCells hourCount={hourCount} dayCount={dayCount} selectTime={selectTime} setSelectTime={setSelectTime} />
            </div>
        </div>
    );
};

const TimeScale = ({hourCount}) => {
    const hours
        = Array.from({ length: hourCount },
        (_, i) => i + 9);

    return (
        <div className="time-scale">
            {hours.map(hour => (
                <div key={hour} className="time-slot">
                    {hour}:00
                </div>
            ))}
        </div>
    );
};

const GridCells = ({dayCount, hourCount, selectTime, setSelectTime}) => {
    let cellColor = 'white';
    if(selectTime === 1){
        cellColor = 'yellow';
    }
    return (
        <div className="grid-cells" style={{
            gridTemplateColumns: `repeat(${dayCount}, 1fr)`,
        }}>
            {Array.from({ length: dayCount * hourCount*2 }).map((_, index) => (
                <div key={index} className="grid-cell" style={{backgroundColor: cellColor}}
                onClick={
                    ()=>{
                        setSelectTime(1);
                    }
                }></div>
            ))}
        </div>
    );
};

export default TimeGrid;