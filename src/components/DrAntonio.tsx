import React, { useEffect, useRef } from "react";

export function DrAntonio({ content, profile }: { content: any; profile?: any }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Esconde o scroll da janela principal para que o iframe gerencie (Lenis)
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleLoad = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Envia os dados iniciais do banco para o HTML bruto
        iframeRef.current.contentWindow.postMessage({ type: "LIVE_PREVIEW", content }, "*");
      }
    };
    
    if (iframeRef.current) {
        iframeRef.current.addEventListener('load', handleLoad);
    }
    
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (iframeRef.current) {
          iframeRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, [content]);

  return (
    <iframe
      ref={iframeRef}
      src="/drantonio_raw.html"
      style={{ 
        width: "100%", 
        height: "100dvh", 
        border: "none", 
        position: "fixed", 
        top: 0, 
        left: 0, 
        zIndex: 999999,
        background: "#030303" 
      }}
      title="Dr Antonio Site"
    />
  );
}
