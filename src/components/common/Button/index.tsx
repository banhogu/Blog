import classNames from 'classnames'
import Spinner from '../Spinner'

// import Spinner from '../Spinner'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * 버튼 크기를 지정합니다 (기본값: 'md')
   */
  size?: 'xs' | 'sm' | 'md'
  /**
   * 버튼 색상을 지정합니다 (기본값: 'black')
   */
  color?: 'black' | 'grey' | 'orange' | 'red'
  /**
   * 버튼 내부 색상이 칠해져 있는지 여부를 지정합니다
   */
  outline?: boolean
  /**
   * 사용자 인터렉션이 진행되고 있는지 여부를 지정합니다
   * */
  isLoading?: boolean
  /**
   * 버튼이 width: 100%여야 하는 경우 사용합니다
   * */
  fullWidth?: boolean
}

/**
 * 버튼을 표시하기 위한 컴포넌트
 */
export default function Button({
  color = 'black',
  size = 'md',
  outline,
  fullWidth,
  isLoading,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={classNames(
        props.className,
        'disabled:opacity-50 relative',
        size === 'xs' && 'text-xs px-2',
        size === 'sm' && 'text-sm px-3 py-1',
        size === 'md' && 'text-base px-5 py-2',
        fullWidth && 'w-full',
        outline === true
          ? {
              'text-black': true,
              border: true,
              'border-black': color === 'black',
              'border-slate-300': color === 'grey',
              'border-orange-500': color === 'orange',
              'border-red-700': color === 'red',
            }
          : {
              'text-white': true,
              'bg-black': color === 'black',
              'bg-slate-300': color === 'grey',
              'bg-orange-500': color === 'orange',
              'bg-red-500': color === 'red',
            },
      )}
    >
      {isLoading ? (
        <>
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
            <Spinner size={size} />
          </div>
          <div className="opacity-0">{children}</div>
        </>
      ) : (
        children
      )}
    </button>
  )
}