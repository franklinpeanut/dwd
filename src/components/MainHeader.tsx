
export default function MainHeader() {
  return (
    <section
      id="about"
      aria-labelledby="main-header-title"
      className="w-full bg-white px-6 py-20 text-black md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 md:mb-14">
          About Darnell White Design
        </p>

        {/* Main statement */}
        <h2
          id="main-header-title"
          className="max-w-5xl text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl lg:text-6xl"
        >
          Every space has a story worth telling.
        </h2>

        {/* Business description */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12">
          <div className="hidden md:col-span-3 md:block">
            <span className="text-sm font-medium uppercase tracking-widest text-neutral-400">
              What We Do
            </span>
          </div>

          <div className="md:col-span-9">
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-800 md:text-2xl md:leading-relaxed">
              At Darnell White Design, we believe every space has a
              story worth telling. We help small businesses bring that
              story to life through decorative painting, plastering,
              tiling, photography, and video production.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-2xl md:leading-relaxed">
              By combining craftsmanship with visual storytelling,
              we transform ordinary walls and everyday business
              spaces into memorable experiences. Our goal is to
              make creative design accessible, helping businesses
              stand out without losing what makes them unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
