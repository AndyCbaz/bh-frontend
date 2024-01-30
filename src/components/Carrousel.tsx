type CarrouselDotsProps = {
  activeDots: boolean;
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  gap?: string;
  padding?: string;
};

import { Key, ReactNode, useEffect, useRef, useState } from 'react';

const Carrousel = ({ items, children, activeDots, gap, padding }: CarrouselDotsProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(
              parseInt((entry.target as HTMLElement).dataset.index || '0'),
            );
          }
        });
      },
      { threshold: 0.5 },
    );

    const items = document.querySelectorAll('[data-carousel-item]');
    items.forEach((item) => observerRef.current?.observe(item));

    return () => {
      items.forEach((item) => observerRef.current?.unobserve(item));
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="relative flex flex-grow flex-col" data-carousel>
      <div
        className={`no-scrollbar flex items-center h-full snap-x snap-mandatory overflow-scroll ${padding} ${gap}`}
        data-carousel-slides
      >
        {children}
      </div>
      <div
        className={`my-2  flex justify-center ${activeDots ? '' : 'hidden'}`}
      >
        {items.map((_: unknown, index: Key | null | undefined) => (
          <div
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === activeStep ? 'bg-primary-orange' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carrousel;
