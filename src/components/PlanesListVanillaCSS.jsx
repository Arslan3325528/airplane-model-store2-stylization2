import PropTypes from 'prop-types';

// import Planes from './PlanesWOStyle'; //! без стилізації
// import Planes from './PlanesBuiltInStyles'; //! вбудовані стилі
import Planes from './PlanesVanillaCSS'; //! ванільний CSS

//! Для визначення кольору фону картки в залежності від значення "year"
import { getBgColorBuiltInStyles, getBgColorVanillaCSS } from '../utils/getBackgroundColor'; //! вбудовані стилі + ванільний CSS

//! Для визначення кольору фону картки в залежності від значення "year" - вбудовані стилі
// function getBgColorBuiltInStyles(year) {
//     let bgColor = '#ffdb92';
//     if (year > 1945) bgColor = '#d2fdbd';
//     if (year > 1999) bgColor = '#d6f1ff';
//     return bgColor;
// };

//! Для визначення кольору фону картки в залежності від значення "year" - ванільний CSS
// function getBgColorVanillaCSS(year) {
//     const classNames = ["planesItem"];
//     if (year > 1945) classNames.push("last");
//     if (year > 1999) classNames.push("current");
//     console.log("classNames:", classNames); //!
//     return classNames;
// };


function PlanesList({ items }) {
    return (
        <ul
            className="planesList"
            // style={{
            //     marginLeft: 10,
            //     marginRight: 10,
            //     padding: 10,
            //     display: "grid",
            //     gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',
            //     gap: 32,
            //     outline: "1px solid red",
            // }}
        >
            {items.map(item => 
                <li
                    // className="planesItem"
                    //todo: var.1 та var.2
                    // className={getBgColorVanillaCSS(item.info.year).join(" ")}
                    //todo: var.1.1 та var.2.1 - використання бібліотеки clsx
                    className={getBgColorVanillaCSS(item.info.year)} 
                    key={item.id}
                    // style={{
                    //     display: "grid",
                    //     gap: 12,
                    //     padding: 10,
                    //     // backgroundColor: '#ffdb92', // "year" до 1946
                    //     // backgroundColor: '#d2fdbd', // "year"  1946 - 1999
                    //     // backgroundColor: '#d6f1ff', // "year" від 2000
                    //     backgroundColor: getBgColorBuiltInStyles(item.info.year),
                    //     outline: "1px solid grey",
                    // }}
                >
                    <Planes
                        urlMain={item.url.main}
                        urlPromotional={item.url.promotional}
                        urlActual={item.url.actual}
                        nameBrief={item.name.brief}
                        nameFull={item.name.full}
                        nickname={item.name.nickname}
                        year={item.info.year}
                        country={item.info.country}
                        type={item.info.type}
                        price={item.info.price}
                        description={item.info.description}
                    />
                </li>
            )}
        </ul>
    );
};

PlanesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default PlanesList;
