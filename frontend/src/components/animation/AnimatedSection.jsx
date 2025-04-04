/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion"

export const AnimatedSection = ({ children, x=0, y=0, duration=0.5 }) => 
{
    return (
        <motion.div
            initial={{ opacity: 0, x: x, y: y }}
            transition={{ duration: duration }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
            {children}
        </motion.div>
    );
}

   
