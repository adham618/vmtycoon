import * as React from 'react';

export default function ScrollTop() {
  const [onTop, setOnTop] = React.useState(true);
  const handleScroll = () => {
    if (onTop !== window.pageYOffset < 600) {
      setOnTop(window.pageYOffset < 600);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <a
      href='#'
      id='scrollTop'
      className={`${
        onTop ? '' : 'show'
      } fixed -right-96 bottom-8 z-[9999] flex h-[50px] w-[30px] rounded-full bg-[#00baff] bg-arrow-up bg-center bg-no-repeat opacity-40 transition-all duration-300 hover:text-white hover:opacity-100`}
      style={{ backgroundSize: '15px' }}
    ></a>
  );
}
