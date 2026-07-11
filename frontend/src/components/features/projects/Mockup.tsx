interface MockupProps {
  title: string;
  date: string;
  image: string;
}

// #1C110A
// #6A041D
// #7A7978
export default function Mockup({ title, date, image }: MockupProps) {
  return (
    <div className="flex flex-col gap-y-1 group transition-all duration-300 cursor-pointer">
      <div className="flex flex-row items-center justify-between bg-[#393E41] px-4 py-3">
        <div className="flex flex-row items-center gap-x-2">
          <h2 className="text-base font-semibold text-white">{title}</h2>
          <p className="text-xs text-gray-500">{date}</p>
        </div>

        <div className="flex flex-row items-center gap-x-1 *:bg-gray-300">
          <span className="p-1 rounded-full  group-hover:bg-red-500 transition-colors" />
          <span className="p-1 rounded-full  group-hover:bg-yellow-500 transition-colors" />
          <span className="p-1 rounded-full group-hover:bg-green-500 transition-colors" />
        </div>
      </div>

      <div className="max-h-[50vh] border border-[3px] border-white overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full group-hover:blur-sm group-hover:scale-105 transition-all duration-300 object-cover"
        />
      </div>
    </div>
  );
}
