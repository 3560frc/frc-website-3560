import { useRef, useState, useEffect } from "react";
import type { IframeHTMLAttributes } from "react";
import windowSizeContext from "../contexts/windowSizeContext";

type ResponsiveIframeProps = Omit<
  IframeHTMLAttributes<HTMLIFrameElement>,
  "src" | "width" | "height"
> & {
  src: string;
  holdAspect?: boolean;
};

export default function ResponsiveIframe({
  src,
  holdAspect = false,
  className,
  ...iframeProps
}: ResponsiveIframeProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const { width, height } = windowSizeContext();
  const [divWidth, setDivWidth] = useState(480);
  const [divHeight, setDivHeight] = useState(360);

  const setSize = () => {
    if (divRef.current == null) return;
    setDivWidth(divRef.current.clientWidth);
    setDivHeight(divRef.current.clientHeight);
  };

  useEffect(setSize, [width, height]);

  return (
    <div ref={divRef} className={`w-full h-full ${className ?? ""}`.trim()}>
      <iframe
        {...iframeProps}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        width={divWidth}
        height={holdAspect ? (divWidth * 1080) / 1920 : divHeight}
        src={src}
      />
    </div>
  );
}
