import React, { useState, useEffect } from "react";
import FiltersButton from "./FiltersButton";
import FiltersModal from "./FiltersModal";

const Filters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div>
      <FiltersButton onClick={openModal} />
      {isModalOpen && (
        <FiltersModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default Filters;
