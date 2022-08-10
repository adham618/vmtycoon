import * as React from 'react';

export default function MouseCursor() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  React.useLayoutEffect(() => {
    document.onmousemove = (event) => {
      const e = event;
      setX(e.clientX);
      setY(e.clientY);
    };
    //change cursor style on hoveringn any link on the document
    document.querySelectorAll('a').forEach((link) => {
      //ON mouse over
      link.addEventListener('mouseover', function () {
        document.querySelectorAll('.cursor').forEach((cursor) => {
          cursor.classList.add('hover');
        });
      });

      //On mouse leave
      link.addEventListener('mouseleave', function () {
        document.querySelectorAll('.cursor').forEach((cursor) => {
          cursor.classList.remove('hover');
        });
      });
    });
  });
  const styles = {
    transform: `translate(${x}px, ${y}px)`,
  };
  return (
    <>
      <div
        style={styles}
        className='cursor point pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 hidden h-2 w-2 rounded-[50%] bg-cursor-gradient opacity-90 transition-all duration-75 ease-in-out lg:block'
      ></div>
      <div
        style={styles}
        className='cursor cursor-border pointer-events-none fixed left-0 top-0 z-[9999] -ml-[18px] -mt-[19px] hidden h-[38px] w-[38px] rounded-[50%] border border-cursor opacity-90 transition-all duration-75 ease-in-out lg:block'
      ></div>
    </>
  );
}
