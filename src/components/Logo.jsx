export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-300">
        <div className="relative flex h-2.5 w-4 items-center justify-center">
          <span className="absolute h-0.5 w-3.5 bg-gray-900"></span>
          <span className="absolute left-0 h-2.5 w-1 rounded-sm bg-gray-900"></span>
          <span className="absolute right-0 h-2.5 w-1 rounded-sm bg-gray-900"></span>
        </div>
      </div>
      <span className="text-2xl font-extrabold tracking-tight text-gray-900">GymFlow</span>
    </div>
  );
}
