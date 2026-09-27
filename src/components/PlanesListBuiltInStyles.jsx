import PropTypes from 'prop-types';

// import Planes from './PlanesWOStyle'; //! без стилізації
import Planes from './PlanesBuiltInStyles'; //! вбудовані стилі

import { getBgColorBuiltInStyles } from '../utils/getBackgroundColor';

//! Для визначення кольору фону картки в залежності від значення "year"
// function getBgColorBuiltInStyles(year) {
//     let bgColor = '#ffdb92';
//     if (year > 1945) bgColor = '#d2fdbd';
//     if (year > 1999) bgColor = '#d6f1ff';
//     return bgColor;
// };


function PlanesList({ items }) {
    return (
        <ul
            style={{
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                display: "grid",
                gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',
                gap: 32,
                outline: "1px solid red",
            }}
        >
            {items.map(item => 
                <li
                    key={item.id}
                    style={{
                        display: "grid",
                        gap: 12,
                        padding: 10,
                        // backgroundColor: '#ffdb92', // "year" до 1946
                        // backgroundColor: '#d2fdbd', // "year"  1946 - 1999
                        // backgroundColor: '#d6f1ff', // "year" від 2000
                        // ! Для визначення кольору фону картки в залежності від значення "year"
                        backgroundColor: getBgColorBuiltInStyles(item.info.year), 
                        outline: "1px solid grey",
                    }}
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
