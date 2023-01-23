import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";

const Ball = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div
            ref={ref}
            className="box"
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001,
            }}
        />
    );
};

export default Ball;
