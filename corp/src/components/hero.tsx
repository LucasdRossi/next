import Image, { ImageProps } from "next/image";

interface Props {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
  title: string;
}

export default function Hero({ src, alt, title }: Props) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-7xl z-10">{title}</h1>
        <Image src={src} alt={alt} fill className="-z-10 object-cover" />
        <span className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
    </div>
  );
}
