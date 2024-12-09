const HeroSection = () => (
  <section className="overflow-hidden w-screen h-screen relative flex items-center justify-center flex-col bg-home-top-gradient bg-center bg-no-repeat bg-fill">
    <img className="absolute hexagon hexagon-1 animate-slide-out-bottom-8" src="/images/hero/1.png" alt="hexagon-1" />
    <img className="absolute hexagon hexagon-2 animate-slide-out-bottom" src="/images/hero/2.png" alt="hexagon-2" />

    <img className="absolute hexagon hexagon-4 animate-slide-out-bottom" src="/images/hero/4.png" alt="hexagon-4" />
    <img className="absolute hexagon hexagon-5 animate-slide-out-bottom-8" src="/images/hero/5.png" alt="hexagon-5" />
    <img className="absolute hexagon hexagon-6 animate-slide-out-bottom-10" src="/images/hero/6.png" alt="hexagon-6" />
    <img className="absolute hexagon hexagon-7 animate-slide-out-bottom-11" src="/images/hero/7.png" alt="hexagon-7" />
    <img className="absolute hexagon hexagon-8 animate-slide-out-bottom-13" src="/images/hero/8.png" alt="hexagon-8" />
    <img className="absolute hexagon hexagon-9 animate-slide-out-bottom-12" src="/images/hero/9.png" alt="hexagon-9" />
    <img
      className="absolute hexagon hexagon-10 animate-slide-out-bottom-11"
      src="/images/hero/10.png"
      alt="hexagon-10"
    />
    <img
      className="absolute hexagon hexagon-11 animate-slide-out-bottom-13"
      src="/images/hero/11.png"
      alt="hexagon-11"
    />

    <div className="relative z-10 ">
      <p className="mx-auto mt-4 max-w-2xl text-center lg:text-xl text-md leading-8 text-primary">
        Imagine a more human Web.
      </p>
      <h1 className="lg:text-6xl text-3xl">The People's Superapp</h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-md lg:text-xl leading-8 text-white/60 pt-10 pb-12">
        One Superapp made up of many interconnected
        <span className="text-primary-color text-md lg:text-xl tracking-tight"> human-centric apps</span>. Owned and
        operated by us all. <br />
        <br />
      </p>
      <button className="btn btn-primary text-white mt-10 "> Request Genesis Access </button>
      <h2 className="mx-auto font-display lg:text-md text-sm text-white/60 mt-4">
        Limited
        <span className="relative lg:text-md text-sm text-primary font-bold"> Genesis Accounts </span>
        available.
      </h2>
    </div>
  </section>
);

export default HeroSection;
