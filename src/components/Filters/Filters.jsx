import FiltersButton from "components/Filters/FiltersButton";
import FiltersModal from "components/Filters/FiltersModal";
import { useModal } from 'hooks/useModal';

const Filters = () => {
  const {getModal} = useModal();

  return (
      <FiltersButton onClick={() => getModal("Filters", 
        <FiltersModal />
      )} />
  );
};

export default Filters;
