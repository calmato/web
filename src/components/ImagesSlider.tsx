import React, { useEffect, useRef } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
interface Props {
  width: string,
  height: string,
  images: Array<{
    url: string;
  }>;
}

export function ImageSlider(props: Props) {
  const {width, height, images} = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    const root =  Array.from(ref.current?.children || [])[0];
    (root as HTMLDivElement).style.position = 'relative';
    const child =  Array.from(root?.children[0].children[0].children || [])[0];
    (child as HTMLDivElement).style.backgroundPosition = 'center';
    (child as HTMLDivElement).style.backgroundSize= 'contain';
    (child as HTMLDivElement).style.backgroundRepeat= 'no-repeat';
    (child as HTMLDivElement).style.backgroundColor= '#F2F2F2';
    const imageChild =  Array.from(root?.children[0].children[0].children || [])[1];
    (imageChild as HTMLDivElement).style.backgroundPosition = 'center';
    (imageChild as HTMLDivElement).style.backgroundSize= 'contain';
    (imageChild as HTMLDivElement).style.backgroundRepeat= 'no-repeat';
    (imageChild as HTMLDivElement).style.backgroundColor= '#F2F2F2';
  }, [])

  return (
    <div ref={ref}>
      <SimpleImageSlider width={width} height={height} images={images} showNavs={true} showBullets={false} />
    </div>
  )
}
