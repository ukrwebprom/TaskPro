import LabelColor from "./LabelColor";
import Background from "./Background";

const FiltersModal = ({ handleBgClick, selectedBgIndex }) => {
  return (
      <div>
        <Background
          handleBgClick={handleBgClick}
          selectedBgIndex={selectedBgIndex}
        />

        <LabelColor />
      </div>
  );
};

export default FiltersModal;
