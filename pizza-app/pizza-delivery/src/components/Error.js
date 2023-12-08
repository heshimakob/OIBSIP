import React from 'react'
import { Alert } from 'react-bootstrap'

export const Error = ({error}) => {
  // eslint-disable-next-line react/jsx-no-undef
  return <Alert variant="danger">   {error} </Alert>;
}
