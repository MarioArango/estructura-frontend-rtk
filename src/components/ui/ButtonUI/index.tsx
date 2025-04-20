import React, { forwardRef, ForwardedRef } from 'react';
import { Button, ButtonProps, Tag, Tooltip } from 'antd';
import { useHotkeys } from 'react-hotkeys-hook';
import { TButtonRef } from '../../../mapping/referencesAnt';
import { TooltipPlacement } from 'antd/es/tooltip';

interface IButtonUIProps extends ButtonProps {
  text?: string;
  hotkey?: string;
  title?: string;
  placement?: TooltipPlacement;
}

const ButtonUI = forwardRef<TButtonRef, IButtonUIProps>(
  ({ text, hotkey, title, placement, ...buttonProps }: IButtonUIProps, ref: ForwardedRef<TButtonRef>) => {
    useHotkeys(
      hotkey || '',
      event => {
        event.preventDefault();
        buttonProps.onClick?.(event as unknown as React.MouseEvent<HTMLElement>);
      },
      {},
      [buttonProps.onClick]
    );

    console.log(placement);

    return (
      <Tooltip title={title} placement={placement}>
        <Button
          {...buttonProps}
          ref={ref}
          disabled={buttonProps?.disabled || Boolean(buttonProps?.loading)}
          style={{ paddingInline: 8 }}
        >
          {text}
          {hotkey && (
            <Tag style={{ marginLeft: 4, fontSize: '0.8rem', marginInlineEnd: 0 }}>{hotkey.toUpperCase()}</Tag>
          )}
        </Button>
      </Tooltip>
    );
  }
);

export default ButtonUI;
