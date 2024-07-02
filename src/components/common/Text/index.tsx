import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classNames';

interface TextProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * 텍스트의 크기를 설정합니다. (기본값 : md)
   */
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /**
   * 텍스트의 색상을 설정합니다. (기본값 : black)
   */
  color?: 'black' | 'grey' | 'red' | 'white';
  /**
   * 텍스트의 굵기 설정합니다. (기본값 : normal)
   */
  weight?: 'normal' | 'semi' | 'bold';
}

/**
 * 일반적인 텍스트를 표시하기 위한 컴포넌트
 */
const Text = ({ size = 'md', color = 'black', weight = 'normal', ...props }: TextProps) => {
  return (
    <span
      className={`
          ${
            size === '2xl'
              ? 'text-2xl'
              : size === 'xl'
                ? 'text-xl'
                : size === 'lg'
                  ? 'text-lg'
                  : size === 'md'
                    ? 'text-md'
                    : size === 'sm'
                      ? 'text-sm'
                      : size === 'xs'
                        ? 'text-xs'
                        : ''
          }
          ${
            color === 'black'
              ? 'text-black'
              : color === 'grey'
                ? 'text-gray-500'
                : color === 'red'
                  ? 'text-red-600'
                  : color === 'white'
                    ? 'text-white'
                    : ''
          }
          ${
            weight === 'normal'
              ? 'font-normal'
              : weight === 'semi'
                ? 'font-semibold'
                : weight === 'bold'
                  ? 'font-bold'
                  : ''
          }
        `}
      {...props}
    />
  );
};

export default Text;
