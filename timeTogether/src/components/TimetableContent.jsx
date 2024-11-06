import GroupTimetable from './GroupTimetable.jsx';
import PersonalTimetable from '././PersonalTimetable.jsx';
import './TimetableContent.css';

const TimetableContent = ({ activeTab }) => {
    const days = [ '10/9', '10/10', '10/11', '10/12', '10/13'];
    const dayLabels = [ '수', '목', '금', '토', '일'];

    if (activeTab === 'where') {
        return(
            <div className="timetable-content">장소대한 처리</div>
        )
    }

    return (
        <div className="timetable-content">
            <GroupTimetable days={days} dayLabels={dayLabels}/>
            <PersonalTimetable days={days} dayLabels={dayLabels}/>
        </div>
    );
};

export default TimetableContent;