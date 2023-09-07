export const Status = () => {
  return (
    <div className="mb-6 grid w-full grid-cols-2 gap-0 border shadow-lg border-borderColor bg-tertiary p-6 text-primary lg:max-w-lg rounded-md">
      <div className="grid grid-cols-3">
        <div className="col-1 col-span-1 flex items-center justify-center text-2xl font-bold text-white">14</div>
        <div className="col-2 col-span-2">
          <p className="text-xs lg:text-base">Month</p>
          <p className="text-xs lg:text-base">Experience</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-1 col-span-1 flex items-center justify-center text-2xl font-bold text-white">16</div>
        <div className="col-2 col-span-2">
          <p className="text-xs lg:text-base">Projects</p>
          <p className="text-xs lg:text-base">Completed</p>
        </div>
      </div>
    </div>
  );
};
