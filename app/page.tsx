import Image from "next/image";

export default function Home() {
  return (
    // prettier-ignore
    <div>
      {/* Colors */}
      <h1 className="bg-green-600 text-gray-100">Hello world!</h1>
      
      <p className="text-customNewColor">Custom color</p>{" "} {/* Custom color class is defined in tailwind.config.css */}
    
    </div>
  );
}
