import PropTypes from 'prop-types';

//! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! Приклад react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель

import css from "./Planes.module.css";

// import defaultImage from "../default.jpg"; //! Дефолтне зображення
import defaultImage from "@/components/default.jpg"; //! Дефолтне зображення --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

//! Для розрахунку тривалості виробництва
// import { getManufacturingYears } from '@/utils/formatDateDuration.js';
//! Реекспорт - декілька імпортів з однієї папки
import {
  getBgColorBuiltInStyles,
  getBgColorVanillaCSS,
  getBgColorCSSModule,
  getManufacturingYears //! Для розрахунку тривалості виробництва
} from '@/utils'; 

console.log("1️⃣getBgColorBuiltInStyles(1951):", getBgColorBuiltInStyles(1951));
console.log("2️⃣getBgColorVanillaCSS(1951):", getBgColorVanillaCSS(1951));
console.log("3️⃣getBgColorCSSModule(1951):", getBgColorCSSModule(1951));

//! Константи для розмірів іконок
import { iconSize } from '@/constants';


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
  description,
  manufacturingStart,
  manufacturingEnd
}) {
  function printlActualimages(urlActual) {
    urlActual.map
  }
  //! Розраховуємо тривалість виробництва
  const duration = getManufacturingYears(manufacturingStart, manufacturingEnd);
  // console.log("duration", duration); //!
  return (
    <>
      {/* //! Приклад react-icons */}
      {/* <FaMapMarkerAlt />
      <FaUserAlt />
      <FaCalendarAlt />
      <FaClock /> */}
      <h3 className={css.planeTitle}>{nameBrief}</h3>
      <img src={urlMain} alt={nameBrief} />
      {/* <p className="textField">Повна назва: <span className="textFieldValue boldStyle">{nameFull}</span></p> */}
      {/* //! Використання властивості composes */}
      <p className={css.textField}><FcTrademark size={28} className={css.icon} /> Повна назва: <span className={css.boldStyle} >{nameFull}</span></p>
      <p className={css.textField}><GiCommercialAirplane size={28} className={css.icon} /> Тип: <span className={css.textFieldValue}>{type}</span></p>
      <p className={css.textField}><GiCurlyMask size={28} className={css.icon} /> Прізвисько: <span className={css.textFieldValue}>{nickname}</span></p>
      <p className={css.textField}><CiGlobe size={28} className={css.icon} /> Країна виробник: <span className={css.textFieldValue}>{country}</span></p>
      <p className={css.textField}><AiOutlineClockCircle size={28} className={css.icon} /> Рік випуску: <span className={css.textFieldValue}>{year}</span></p>
      {/* <p className={css.textField}><TbClockHour4Filled size={28} className={css.icon} /> Тривалість виробництва (в роках): <span className={css.textFieldValue}>{duration}</span></p> */}
      <p className={css.textField}><TbClockHour4Filled size={28} className={css.icon} /> Тривалість виробництва (в роках): <span className={css.textFieldValue}>{getManufacturingYears(manufacturingStart, manufacturingEnd)}</span></p>
      <p className={css.textField}><AiOutlineDollarCircle size={28} className={css.icon} /> Ціна: <span className={css.textFieldValue}>{price}</span></p>
      <p className={css.textField}><AiOutlineInfoCircle size={iconSize.md} className={css.icon} /> Опис: <span className={css.textFieldValue}>{description}</span></p>
      {/*//! заголовок зображень */}
      <h4 className={css.imageTitles}><GiAirplaneDeparture size={32} className={css.iconImageTitles} /> Рекламна модель:</h4>
      <img src={urlPromotional} alt={nameBrief} className="promotionalImage" />
      {/*//! заголовок зображень */}
      <h4 className={css.imageTitles}><CiAirportSign1 size={iconSize.lg} className={css.iconImageTitles} /> Реальна модель:</h4>
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
