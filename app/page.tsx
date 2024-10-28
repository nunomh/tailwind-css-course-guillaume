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
      <div>
        <div className="bg-blue-500">div1</div>
        <div className="bg-red-300">div2</div>
      </div>

    </div>
  );
}
