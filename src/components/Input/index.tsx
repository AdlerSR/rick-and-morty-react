/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

import { ControllerRenderProps } from 'react-hook-form';

interface Props extends ControllerRenderProps<any, any> {
  inputProps?: InputProps;
}

type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>(({ inputProps, ...rest }, ref) => (
  <>
    <label htmlFor="name">name</label>
    <ChakraInput id="name" {...inputProps} {...rest} ref={ref} />
  </>
));

export default Input;
