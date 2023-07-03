import React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FiltersButton from "components/Filters/FiltersButton";
import FiltersModal from "components/Filters/FiltersModal";
import { useBoards } from "hooks/useBoards";
import { updateBoardBgById } from "redux/boards/operations";
import { useModal } from 'hooks/useModal';

const Filters = () => {
  const dispatch = useDispatch();
  const {getModal} = useModal();
  const {currentData} = useBoards();
/*   console.log(currentData); */
/*   const [selectedBgIndex, setSelectedBgIndex] = useState(null); */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userScreen, setUserScreen] = useState("1280");
  const [userRatio, setUserRatio] = useState("1280");

  const handleBgClick = index => dispatch(updateBoardBgById({_id:currentData._id, background:index}));

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
      <FiltersButton onClick={() => getModal("Filters", 
        <FiltersModal
        handleBgClick={handleBgClick}
        selectedBgIndex={currentData.background}
      />
      )} />
  );
};

export default Filters;
