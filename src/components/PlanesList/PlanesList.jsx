import PropTypes from 'prop-types';
import css from "./PlanesList.module.css";
 
// import Planes from './PlanesWOSyle'; //! без стилізації
// import Planes from './PlanesBuiltInStyles'; //! вбудовані стилі
// import Planes from './PlanesVanillaCSS'; //! ванільний CSS

// import { Planes } from '../Planes/Planes.jsx'; //! CSS-модулі
import { Planes } from '@/components/Planes/Planes.jsx'; //! CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

// import { getBgColorBuiltInStyles, getBgColorVanillaCSS, getBgColorCSSModule } from '../../utils/getBackgroundColor.js'; //! вбудовані стилі + ванільний CSS
import { getBgColorBuiltInStyles, getBgColorVanillaCSS, getBgColorCSSModule } from '@/utils/getBackgroundColor.js'; //! вбудовані стилі + ванільний CSS + CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

export function PlanesList({ items }) {
    return (
        <ul className={css.planesList}>
            {items.map(item => 
                <li
                    //todo: var.1 та var.2
                    // className={getBgColorVanillaCSS(item.info.year).join(" ")}
                    //todo: var.1.1 та var.2.1 - використання бібліотеки clsx
                    // className={getBgColorVanillaCSS(item.info.year)}
                    //todo: CSS-модулі
                    // className={css.planesItem}
                    className={css[getBgColorCSSModule(item.info.year)]}
                    key={item.id}
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
                        manufacturingStart={item.manufacturing.start}
                        manufacturingEnd={item.manufacturing.end}
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

