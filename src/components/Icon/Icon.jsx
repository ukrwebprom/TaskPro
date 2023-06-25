import sprite from '../../images/sprite.svg'

const Icon = ({
  name,
  color = null,
  width ='18px',
  height ='18px',
}) => {

    return (
        <svg width={width} height={height} stroke='currentColor'>
          <use href={sprite + name} />
        </svg>
    );
  };
  export default Icon;
