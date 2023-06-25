import sprite from '../../images/sprite.svg'
import css from './Icon.module.css'

const Icon = ({
  name,
  color = null,
  width ='18px',
  height ='18px',
}) => {

    return (
        <svg className={css.icon} width={width} height={height} stroke={color? color:'currentColor'}>
          <use href={sprite + name} />
        </svg>
    );

  };

  return (
    <svg
      className="icon"
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      sprite={sprite}
    >
      <use href={iconsPath[sprite] + name}></use>
    </svg>
  );
};
export default Icon;
