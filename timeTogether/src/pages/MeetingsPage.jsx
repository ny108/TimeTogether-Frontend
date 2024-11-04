// MeetingsPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WhereToMeet from "../components/WhereToMeet";
import "./MeetingsPage.css";
import Header from "../components/Header";
import TabSelector from "../components/TabSelector";
import LocationItemList from "../components/LocationItemList";
import AddPlaceButton from "../components/AddPlaceButton";
import AddPlaceModal from "../components/AddPlaceModal";
import SelectPlaceButton from "../components/SelectPlaceButton";

function MeetingsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("어디서");
  const [locations, setLocations] = useState([]);
  const [selectedLocationIds, setSelectedLocationIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHost, setIsHost] = useState(true); // 방장 여부 상태 추가
  const [isPlaceConfirmed, setIsPlaceConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const response = {
      code: 200,
      message: "요청에 성공하였습니다.",
      candidates: [
        {
          locationId: 101,
          locationName: "스타벅스 강남점",
          locationUrl: "https://naver.me/5xyzExample",
        },
        {
          locationId: 102,
          locationName: "투썸 강남점",
          locationUrl: "https://naver.me/7abcExample",
        },
        {
          locationId: 103,
          locationName: "커피빈 강남점",
          locationUrl: "https://naver.me/8defExample",
        },
      ],
    };
    setLocations(response.candidates); // 서버 응답 데이터를 상태로 설정
  }, []);

  const handleSelectLocation = (locationId) => {
    setSelectedLocationIds((prevSelected) => {
      if (prevSelected.includes(locationId)) {
        // 이미 선택된 장소면 선택 해제
        return prevSelected.filter((id) => id !== locationId);
      } else {
        // 선택되지 않은 장소면 선택 추가
        return [...prevSelected, locationId];
      }
    });
  };

  // 장소 삭제 함수
  const handleDeleteLocation = (locationId) => {
    setLocations((prevLocations) =>
      prevLocations.filter((location) => location.locationId !== locationId)
    );
    setSelectedLocationIds((prevSelected) =>
      prevSelected.filter((id) => id !== locationId)
    );
  };

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => setIsModalOpen(false);

  // 장소 추가
  const handleAddPlace = ({ placeName, placeUrl }) => {
    const newPlace = {
      locationId: locations.length + 1 + 100,
      locationName: placeName,
      locationUrl: placeUrl,
    };
    setLocations((prevLocations) => [...prevLocations, newPlace]);
  };

  const handleConfirmPlace = () => {
    setIsPlaceConfirmed(true); // 장소 확정 상태를 true로 변경
  };

  return (
    <div className="meetings-page">
      {isModalOpen && (
        <AddPlaceModal onClose={closeModal} onAddPlace={handleAddPlace} />
      )}
      <Header
        title={"ExampleTeam"}
        onBackClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/group"); // 기본 경로 설정
          }
        }}
        onMenuClick={() => {}}
      />
      <TabSelector
        selectedOption={activeTab}
        onSelect={(option) => setActiveTab(option)}
      />
      <div className="tab-content">
        {activeTab === "언제" && <p>언제</p>}
        {activeTab === "어디서" && (
          <>
            {!isPlaceConfirmed ? (
              <>
                <AddPlaceButton onAddPlace={openModal} />
                <LocationItemList
                  locations={locations}
                  selectedLocationIds={selectedLocationIds}
                  onSelectLocation={handleSelectLocation}
                  onDeleteLocation={handleDeleteLocation}
                />
                {isHost && <SelectPlaceButton onClick={handleConfirmPlace} />}
              </>
            ) : (
              <>
                <h3>선택한 장소:</h3>
                <p>모임 장소가 확정되었습니다.</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MeetingsPage;
