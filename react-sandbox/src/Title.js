import React from "react";
import { motion } from "framer-motion";

const Title = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1.5 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <h1> Stellar Beings of CSIL </h1>
        </motion.div>
    );
};

export default Title;
