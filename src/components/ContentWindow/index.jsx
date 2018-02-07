/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function ContentWindow(props) {
  const { title, children } = props;
  return (
    <section className={style.dialogWindow}>
      <header>
        <h1>{title}</h1>
      </header>
      <article>
        {React.Children.map(children, child => child)}
      </article>
    </section>
  );
}

ContentWindow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
};
ContentWindow.defaultProps = {
  title: '[*title*]',
  children: '[*children*]',
};

export default ContentWindow;
