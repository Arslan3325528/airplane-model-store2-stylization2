import PropTypes from 'prop-types';

// import defaultImage from "../default.jpg"; //! Дефолтне зображення
import defaultImage from "@/components/default.jpg"; //! Дефолтне зображення --> Аліаси імпортів з абсолютними шляхами з jsconfig.json


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
      <h3 className="planeTitle">{nameBrief}</h3>
      <img src={urlMain} alt={nameBrief} />
      <p className="textField">Повна назва: <span className="textFieldValue boldStyle">{nameFull}</span></p>
      <p className="textField">Тип: <span className="textFieldValue">{type}</span></p>
      <p className="textField">Прізвисько: <span className="textFieldValue">{nickname}</span></p>
      <p className="textField">Країна виробник: <span className="textFieldValue">{country}</span></p>
      <p className="textField">Рік випуску: <span className="textFieldValue">{year}</span></p>
      <p className="textField">Ціна: <span className="textFieldValue">{price}</span></p>
      <p className="textField">Опис: <span className="textFieldValue">{description}</span></p>
      {/*//! заголовок зображень */}
      <h4 className="imageTitles">Рекламна модель:</h4>
      <img src={urlPromotional} alt={nameBrief} className="promotionalImage" />
      {/*//! заголовок зображень */}
      <h4 className="imageTitles">Реальна модель:</h4>
      <div className="actualImageBox">
        {urlActual.map(item =>
          <img
            // key={item} //! поки що не унікальний
            src={item}
            alt={nameBrief}
            className="actualImage"
          />
        )}
      </div>
      <button
        type="button"
        className="planeButton"
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
