import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

export default function ThemeToggle() {
  const loaded = useLoaded();
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label='theme toggle'
      className='border-none  focus:outline-none'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' && loaded ? (
        <div className='relative z-50 m-2 flex items-center'>
          <label
            htmlFor='switch'
            className='relative inline-block h-[35px] w-[35px]'
          >
            <span className="absolute right-0 left-0 bottom-0 top-0 cursor-pointer rounded-[50px] border border-solid border-[#e2e2e2] bg-white shadow-lg duration-[400ms] before:absolute before:left-[4px] before:bottom-[4px] before:h-[24px] before:w-[24px] before:rounded-[50%] before:bg-[#ffc400] before:bg-sun before:bg-center before:bg-no-repeat before:content-[''] dark:border-white/30 dark:bg-[#242424] dark:before:bg-blue-600 dark:before:bg-moon"></span>
          </label>
        </div>
      ) : (
        <div className='relative z-50 m-2 flex items-center'>
          <label
            htmlFor='switch'
            className='relative inline-block h-[35px] w-[35px]'
          >
            <span className="absolute right-0 left-0 bottom-0 top-0 cursor-pointer rounded-[50px] border border-solid border-[#e2e2e2] bg-white shadow-lg duration-[400ms] before:absolute before:left-[4px] before:bottom-[4px] before:h-[24px] before:w-[24px] before:rounded-[50%] before:bg-[#ffc400] before:bg-sun before:bg-center before:bg-no-repeat before:content-[''] dark:border-white/30 dark:bg-[#242424] dark:before:bg-blue-600 dark:before:bg-moon"></span>
          </label>
        </div>
      )}
    </button>
  );
}
