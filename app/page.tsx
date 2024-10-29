import Image from "next/image";

export default function Home() {
  return (
    // prettier-ignore
    <div>
      {/* Colors */}
      <h1 className="bg-green-600 text-gray-100">Hello world!</h1>
      
      <p className="text-customNewColor">Custom color</p>{" "} {/* Custom color class is defined in tailwind.config.css */}
      <p className="text-[#bada55]">Custom color 2</p>  {/* Custom attribute */}
    
      {/* Text sizes customization */}
      {/* Screen sizes added in tailwind.config.css. If not defined, it will use the default sizes */}
      <p className="text-xs lg:text-3xl">
        This text resizes based on screen size
      </p>

      {/* Spacing, can be customized in tailwind.config.css */}
      <p className="mb-4">Line 1 - Margin Bottom 4</p>
      <p>Line 2</p>


      {/* Typography */}
      <p className="mt-4">Typography</p>
      <p className="font-bold text-2xl">Bold text</p>
      <p className="font-mono">Monospaced text</p>
      <p className="note text-xs">Small note</p>

      {/* spacing */}
      <p className="mt-4">Spacing</p>
      <div className="flex w-full">
        <div className="w-2/5 h-16 bg-blue-500">div1</div>
        <div className="w-3/5 h-16 bg-red-300">div2</div>
      </div>

      <div className="mt-3 Parent">
        <div className="">Header</div>
        <div className="flex flex-row">
          <div className="bg-blue-500">Main content</div>
          <div className="flex flex-col">
            <div className="bg-red-300">Sidebar</div>
            <div className="bg-yellow-300">Menu</div>
          </div>
        </div>
      </div>

      <div className="mt-3 Parent">
        <div className="">Header 2</div>
        <div className="flex flex-col">
          <div className="flex w-full flex-nowrap">
            <div className="w-full grow">01</div>
            <div className="w-full grow">02</div>
            <div className="w-full grow">03</div>
            <div className="w-full grow">04</div>
            <div className="w-full grow">05</div>
          </div>
        </div>
      </div>

      <div className="mt-3 Parent">
        <div className="">Header 3</div>
        <div className="flex flex-col">
          <div className="flex w-full flex-wrap">
            <div className="w-32 grow">01</div>
            <div className="w-32 grow">02</div>
            <div className="w-32 grow">03</div>
            <div className="w-32 grow">04</div>
            <div className="w-32 grow">05</div>
          </div>
        </div>
      </div>

      {/* Grids */}
      <p className="mt-4">Grids</p>
      <div className="Parent">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
          <div className="p-6 rounded-lg bg-blue-500">01</div>
          <div className="p-6 rounded-lg bg-blue-500">02</div>
          <div className="p-6 rounded-lg bg-blue-500">03</div>
          <div className="p-6 rounded-lg bg-blue-500">04</div>
          <div className="p-6 rounded-lg bg-blue-500">05</div>
          <div className="p-6 rounded-lg bg-blue-500">06</div>
          <div className="p-6 rounded-lg bg-blue-500">07</div>
        </div>
      </div>

      {/* Columns */}
      <p className="mt-4">Columns</p>
      <div className="Parent">
        <div className="container px-2 columns-3">
          <p>
            Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed , convallis ex.  Praesent 
          </p>
          <p>
            Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed , convallis ex.  Praesent 
          </p>
          <p>
            Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed , convallis ex.  Praesent 
          </p>
        </div>
      </div>


    </div>
  );
}
