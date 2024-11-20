import React from "react";
import "./GroupItemList.css";
import GroupItem from "./GroupItem";
import allGroupImage from "../assets/all-group-image.png";

const allGroup = {
  groupId: -1, // 그룹 ID가 -1로 설정됨
  groupName: null,
  groupImg: allGroupImage, // "전체" 그룹의 고정 이미지 경로
};

const GroupItemList = ({ groups, onItemClick, selectedGroupId }) => {
  const fullGroupList = [allGroup, ...groups];

  return (
    <div className="group-item-list">
      {fullGroupList.map((group) => (
        <GroupItem
          key={group.groupId === -1 ? "all" : group.groupId}
          group={group}
          onClick={onItemClick}
          isSelected={selectedGroupId === group.groupId}
        />
      ))}
    </div>
  );
};

export default GroupItemList;

//setSelectedGroupId(groupId);
