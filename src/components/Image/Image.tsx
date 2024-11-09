import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { StaticImageData } from "next/image";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  styleSheet?: StyleSheet; 
}
export default function Image({ src, alt, ...props }: ImageProps) {
  return (
    <BaseComponent
      as="img"
      src={src}
      alt={alt}
      {...props}
    />
  )
}
