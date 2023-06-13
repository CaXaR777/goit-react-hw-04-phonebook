import React from 'react';
import * as S from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ OnChange }) => (
  <div>
    <S.Label>
      Filter
      <input
        type="name"
        // value={value}
        onChange={OnChange}
      />
    </S.Label>
  </div>
);

Filter.propTypes = {
  OnChange: PropTypes.func.isRequired,
};

export default Filter;
