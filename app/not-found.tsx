import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-32 md:py-44 text-center">
      <p className="font-display text-9xl md:text-[12rem] leading-none">404</p>
      <p className="font-display text-3xl md:text-4xl mt-4">Looks like this beat got dropped.</p>
      <p className="text-mute mt-4 max-w-sm mx-auto">
        The page you are looking for does not exist. Try the homepage, the shop, or use search.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/shop" className="btn-ghost">Shop</Link>
        <Link href="/stick-finder" className="btn-ghost">Find Your Stick</Link>
      </div>
    </section>
  );
}
