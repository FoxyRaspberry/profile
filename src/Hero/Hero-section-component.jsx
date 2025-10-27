import './Hero-section-component.css';

export function Hero() {
  return (
    <>
      <div className='hero-section'>
        <div className='wrapper'>
          <h1 className='hero-section__title'>
            I bring your ideas to life with stylish, modern front-end solutions!
          </h1>
          <p className='hero-section__subtitle'>
            Marina L. — <span className='hero-section__text-emphasis'> Front-end developer</span>
          </p>
        </div>
      </div>
    </>
  );
}
