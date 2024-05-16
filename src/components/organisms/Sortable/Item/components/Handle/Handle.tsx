import { Action, ActionProps } from '../Action';

import HandleIcon from './assets/img/handle.svg';

export const Handle = (props: ActionProps) => {
  return (
    <Action
      data-cypress="draggable-handle"
      {...props}
    >
      <HandleIcon className="overflow-visible" />
    </Action>
  );
};
