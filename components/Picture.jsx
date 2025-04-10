"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Picture = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        className="w-[296px] h-[290px] md:w-[387px] md:h-[380px] xl:w-[490px] xl:h-[480px] relative mix-blend-luminosity"
      >
        <Image
          src="/assets/picture.png"
          alt="profile picture"
          className="object-contain rounded-full "
          priority
          fill
          quality={100}
          sizes="auto"
        />
      </motion.div>
    </div>
  );
};

export default Picture;
