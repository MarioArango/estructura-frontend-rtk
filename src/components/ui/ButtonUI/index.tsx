import { Button, ButtonProps, Tag } from 'antd';
import { useHotkeys } from 'react-hotkeys-hook';

interface IButtonUIProps extends ButtonProps {
  text: string;
  hotkey?: string;
}

const ButtonUI = ({ text, hotkey, ...buttonProps }: IButtonUIProps) => {
  useHotkeys(
    hotkey || '',
    event => {
      event.preventDefault();
      buttonProps.onClick?.(event as unknown as React.MouseEvent<HTMLElement>); // Convertimos el evento
    },
    {},
    [buttonProps.onClick]
  );

  return (
    <Button {...buttonProps} disabled={buttonProps?.disabled || Boolean(buttonProps?.loading)}>
      {text}
    </Button>
  );
};

export default ButtonUI;
