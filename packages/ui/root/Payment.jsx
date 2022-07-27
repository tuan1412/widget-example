import React from 'react'
import PropTypes from 'prop-types';

function Payment(props) {
  React.useEffect(() => {
    console.log('test')
  }, [])

  return (
    <div>Đây là widget payment Hi he {props.text}</div>
  )
}

Payment.propTypes = {
  text: PropTypes.string,
};

export default Payment