import activewearLogo from "../../assets/ActiveWearLogo.png";

export function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6fb] font-sans text-[#171629]">
      <header className="bg-white">
        <div className="flex h-[22px] items-center justify-center bg-[#241e25] px-4 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
          Free shipping on orders over $100 · 30-day hassle-free returns
        </div>

        <div className="mx-auto flex min-h-[70px] max-w-[1400px] items-center gap-5 px-6">
          <img
            src={activewearLogo}
            alt="Activewear"
            className="h-7 w-auto shrink-0 object-contain"
          />

          <nav className="hidden shrink-0 items-center gap-6 text-[12px] font-medium uppercase tracking-wide text-[#38343d] lg:flex">
            <a href="#" className="hover:text-[#6b39c5]">Shop</a>
            <a href="#" className="hover:text-[#6b39c5]">New arrivals</a>
            <a href="#" className="hover:text-[#6b39c5]">Best sellers</a>
            <a href="#" className="hover:text-[#6b39c5]">Collections</a>
            <a href="#" className="hover:text-[#6b39c5]">Community</a>
          </nav>

          <label className="ml-auto flex h-8 min-w-32 max-w-[280px] flex-1 items-center gap-2 rounded-sm bg-[#f1f0fa] px-2.5 text-[#777482]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 shrink-0"
            >
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search gear, apparel..."
              className="min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#9693a0]"
            />
            <span className="hidden rounded border border-[#dedce8] px-1 text-[9px] sm:inline">
              ⌘K
            </span>
          </label>

          <button type="button" aria-label="Wishlist" className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-[19px] w-[19px]"
            >
              <path
                d="M20.3 5.7a5 5 0 0 0-7.1 0L12 6.9l-1.2-1.2a5 5 0 0 0-7.1 7.1l1.2 1.2L12 21l7.1-7 1.2-1.2a5 5 0 0 0 0-7.1Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -right-2 -top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#292333] px-1 text-[8px] text-white">
              0
            </span>
          </button>

          <button type="button" aria-label="Shopping bag" className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-[19px] w-[19px]"
            >
              <path
                d="M5 8h14l1 13H4L5 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M9 9V6a3 3 0 0 1 6 0v3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute -right-2 -top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#5523c5] px-1 text-[8px] text-white">
              0
            </span>
          </button>

          <div
            aria-label="Account"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e9e6f2] text-[9px] font-semibold text-[#39334a]"
          >
            FC
          </div>
        </div>

        <div className="h-1 bg-[#f1efff]" />
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77758b]">
          Secure checkout · Step 01
        </p>
        <h1 className="mt-2 text-2xl font-bold uppercase tracking-tight">
          Your active bag
        </h1>

        <div className="mt-8 flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-[#eeecf5] bg-white px-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f1efff] text-[#5b45a5]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-10 w-10"
            >
              <path
                d="M5 8h14l1 12H4L5 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 9V6a3 3 0 0 1 6 0v3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="mt-6 text-lg font-bold uppercase tracking-wide">
            Your bag is empty
          </h2>
          <p className="mt-2 max-w-sm text-sm text-[#77758b]">
            You haven’t added anything to your bag yet. Explore the collection
            and find your next favorite.
          </p>

          <button
            type="button"
            className="mt-6 rounded-sm bg-[#292333] px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#443954]"
          >
            Continue shopping
          </button>
        </div>
      </section>

      <footer className="mt-10 border-t border-[#e9e7f1] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-[10px] text-[#77758b]">
          © 2025 ACTIVEWEAR Philippines Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}