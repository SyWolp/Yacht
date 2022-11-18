import React from 'react';

import { BoxProps, Flex, Image } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';

interface RoundBasisProps extends BoxProps {}
interface RoundPropsType {
  hasIcon?: boolean;
  icon?: string;
  iconSize?: string | number;
  iconGap?: string | number;
  hasArrow?: boolean;
  arrowSize?: string | number;
  arrowIcon?: string;
  text: string;
  isCentered?: boolean;
  cursor?: 'pointer' | 'not-allowed' | 'default';
}

function Round(
  {
    hasIcon,
    icon,
    iconSize,
    iconGap,
    hasArrow,
    arrowSize,
    arrowIcon,
    text,
    isCentered,
    cursor = 'pointer',
    ...basisProps
  }: RoundBasisProps & RoundPropsType,
  ref?: any,
) {
  return (
    <>
      {hasIcon || hasArrow ? (
        <Center {...basisProps} cursor={cursor} ref={ref}>
          <Flex
            align={'center'}
            justify={'space-between'}
            w={hasArrow ? '100%' : 'fit-content'}
            gap={iconGap}
          >
            <Flex
              align={'center'}
              justify={isCentered ? 'center' : 'flex-start'}
              w={'100%'}
            >
              {hasIcon && (
                <Image
                  src={icon}
                  alt={text}
                  w={iconSize}
                  h={iconSize}
                  mr={'10px'}
                  loading={'lazy'}
                />
              )}
              {text}
            </Flex>
            {hasArrow && (
              <Image
                src={arrowIcon}
                alt={text}
                w={arrowSize}
                h={arrowSize}
                loading={'lazy'}
              />
            )}
          </Flex>
        </Center>
      ) : (
        <Center {...basisProps} cursor={cursor}>
          {text}
        </Center>
      )}
    </>
  );
}

export default React.forwardRef(Round);