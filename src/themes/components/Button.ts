import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  sizes: {
    small: {
      height: '25px',
      width: '25px',
    },
    base: {
      height: '53px',
      width: '53px',
    },
    default: {
      width: '353px',
      height: '53px',
    },
    medium: {
      height: '53px',
      width: '150px',
    },
  },
  variants: {
    primary: {
      textTransform: 'uppercase',
      bgColor: 'light',
      textColor: 'dark',
      borderRadius: '4px',
      border: '1px solid #000000',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    default: {
      border: 'none',
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'base',
  },
}
