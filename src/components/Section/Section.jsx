import PropTypes from 'prop-types';
import css from "./Section.module.css"; //! CSS-модулі

export function Section({ title, children }) {
  //! Перевірка режимів: development або prodaction
  // console.log("import.meta.env.MODE:", import.meta.env.MODE); //? development
  return (
    <section>
      {/* //! Ванільний CSS  */}
      {/* {title && <h2 className="title">{title}</h2>} */}
      {/* //! CSS-модулі з композицією класів */}
      {/* {title && <h2 className={`${css.title} ${css.lugrasimoBold}`}>{title}</h2>} */}
      {/* //! CSS-модулі з composes */}
      {title && <h2 className={css.titleLugrasimoBold}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

