import Header from "../Header";

export default function HeaderExample() {
  return (
    <div className="min-h-[200px] bg-gradient-to-b from-slate-900 to-slate-700 relative">
      <Header onScrollTo={(section) => console.log(`Navigating to: ${section}`)} />
      <div className="pt-20 text-center text-white/70 text-sm">
        Scroll down to see header background change
      </div>
    </div>
  );
}
