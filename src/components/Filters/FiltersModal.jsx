import LabelColor from "./LabelColor";
import Background from "./Background";

const FiltersModal = ({ handleBgClick }) => {
  return (
      <div>
        <Background
          handleBgClick={handleBgClick}
        />

        <LabelColor />
      </div>
  );
};

export default FiltersModal;
