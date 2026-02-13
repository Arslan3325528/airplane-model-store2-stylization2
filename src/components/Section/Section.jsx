import PropTypes from 'prop-types';
import css from "./Section.module.css";

export function Section({ title, children }) {
  //! Перевірка режимів: development або prodaction
  // console.log("import.meta.env.MODE:", import.meta.env.MODE); //? development
  return (
    <section>
      {/* //! Вбудовані стилі  */}
      {/* {title && <h2 className="title">{title}</h2>} */}
      {/* //! Ванільний CSS  */}
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

