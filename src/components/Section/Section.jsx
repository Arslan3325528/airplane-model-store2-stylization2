import PropTypes from 'prop-types';
import css from "./Section.module.css";

export function Section({ title, children }) {
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

