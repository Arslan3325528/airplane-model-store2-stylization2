import PropTypes from 'prop-types';

import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! приклад
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle } from "react-icons/ai";

// nameBrief
// nameFull,
// nickname
// year - <AiOutlineClockCircle /> - рік
// country - <AiOutlineFlag /> - прапор, країна
// type
// price
// description - <AiOutlineInfoCircle /> - опис

import css from "./Planes.module.css";

// import defaultImage from "../default.jpg"; //! Дефолтне зображення
import defaultImage from "@/components/default.jpg"; //! Дефолтне зображення --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json


export function Planes({
  urlMain = defaultImage, //! Дефолтне зображення
  urlPromotional,
  urlActual,
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price = "немає інформації",
  description
})
{
  function printlActualimages(urlActual) {
    urlActual.map
  }
  return (
    <>
      <h3 className={css.planeTitle}>{nameBrief}</h3>
      <img src={urlMain} alt={nameBrief} />
      {/* <p className="textField">Повна назва: <span className="textFieldValue boldStyle">{nameFull}</span></p> */}
      {/* //! Використання властивості composes */}
      {/* <FaMapMarkerAlt size={iconSize.sm} /> */}
      <p className={css.textField}><FaMapMarkerAlt /> Повна назва: <span className={css.boldStyle} >{nameFull}</span></p>
      <p className={css.textField}>Тип: <span className={css.textFieldValue}>{type}</span></p>
      <p className={css.textField}>Прізвисько: <span className={css.textFieldValue}>{nickname}</span></p>
      <p className={css.textField}>Країна виробник: <span className={css.textFieldValue}>{country}</span></p>
      <p className={css.textField}>Рік випуску: <span className={css.textFieldValue}>{year}</span></p>
      <p className={css.textField}>Ціна: <span className={css.textFieldValue}>{price}</span></p>
      <p className={css.textField}>Опис: <span className={css.textFieldValue}>{description}</span></p>
      {/*//! заголовок зображень */}
      <h4 className={css.imageTitles}>Рекламна модель:</h4>
      <img src={urlPromotional} alt={nameBrief} className="promotionalImage" />
      {/*//! заголовок зображень */}
      <h4 className={css.imageTitles}>Реальна модель:</h4>
      <div className={css.actualImageBox}>
        {urlActual.map(item =>
          <img
            // key={item} //! поки що не унікальний
            src={item}
            alt={nameBrief}
            className={css.actualImage}
          />
        )}
      </div>
      <button
        type="button"
        className={css.planeButton}
      >
        Додати до кошику
      </button>
    </>
  );
};

//! Контроль типу змінних - propTypes
Planes.propTypes = {
  urlMain: PropTypes.string.isRequired,
  urlPromotional: PropTypes.string.isRequired,
  urlActual: PropTypes.string.isRequired,
  nameBrief: PropTypes.string.isRequired,
  nameFull: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,  //! контроль propTypes
  description: PropTypes.string.isRequired
};
