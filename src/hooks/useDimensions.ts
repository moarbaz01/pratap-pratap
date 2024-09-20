import { useEffect, useState } from "react";

const useDimensions = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.addEventListener("resize", handleResize);
        };
    }, []);

    return dimensions
}

export default useDimensions;