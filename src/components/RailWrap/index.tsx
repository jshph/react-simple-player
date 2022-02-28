import * as React from 'react';
import {rule} from 'p4-css';
import { ReactNode } from 'react';
export interface RailWrapProps {
  children?: ReactNode,
  railHeight: number,
}

export const RailWrap: React.FC<RailWrapProps> = ({children, railHeight}) => {

  const railClass = rule({
    d: 'flex',
    w: '100%',
    h: railHeight + 'px',
    pos: 'relative',
    bdrad: '2px',
    ov: 'hidden',
  });

  return <span className={railClass}>{children}</span>;
};
