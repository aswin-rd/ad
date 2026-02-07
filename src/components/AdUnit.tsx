"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
    slotId: string;
    format?: "auto" | "fluid" | "rectangle";
    className?: string;
    style?: React.CSSProperties;
    label?: string;
}

const AdUnit = ({ slotId, format = "auto", className = "", style, label = "Advertisement" }: AdUnitProps) => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, []);

    return (
        <div className={`ad-wrapper ${className}`} style={{ margin: '40px 0', ...style }}>
            {label && <div className="ad-label">{label}</div>}
            <div className="ad-container glass-effect" style={{ minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <ins
                    className="adsbygoogle"
                    style={{ display: "block", width: '100%' }}
                    data-ad-client="ca-pub-7864489971458167"
                    data-ad-slot={slotId}
                    data-ad-format={format}
                    data-full-width-responsive="true"
                />
                {/* Fallback visual for dev/demo purposes when ads don't load */}
                <div className="ad-placeholder-visual" style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    opacity: 0.1,
                    fontSize: '12px',
                    letterSpacing: '1px'
                }}>
                    AD SPACE
                </div>
            </div>
        </div>
    );
};

export default AdUnit;
