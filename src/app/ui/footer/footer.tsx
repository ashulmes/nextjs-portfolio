export default function Footer() {
  return (
    <footer
      className={`h-18 sticky z-50 w-full px-[5%] border-t-1 border-amber-300/25`}
    >
      <div className="flex items-center h-full justify-center text-xs font-extralight tracking-widest uppercase">
        Built with Next.js and Tailwind CSS, deployed with Vercel.
      </div>
    </footer>
  );
}
