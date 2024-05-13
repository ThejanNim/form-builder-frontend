import React, { forwardRef } from 'react';

import { Action, ActionProps } from '../Action';

import HandleIcon from './assets/img/handle.svg';

export const Handle = forwardRef<HTMLButtonElement, ActionProps>(
  (props, ref) => {
    return (
      <Action
        ref={ref}
        cursor="grab"
        data-cypress="draggable-handle"
        {...props}
      >
        <HandleIcon className="overflow-visible" />
      </Action>
    );
  }
);

Handle.displayName = 'Handle';