import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

interface TooltipProps {
    title : string,
    placement : 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top',
    className? : string,
    children : JSX.Element
}
const LightTooltip = styled(({ title, children, placement, className, ...props } : TooltipProps) => (
    <Tooltip {...props} placement={placement} title={title} classes={{ popper: className }}>
        {children}
    </Tooltip>
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  export default LightTooltip;