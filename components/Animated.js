import styles from '@/styles/Animated.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Animated = () => {

    return (
    <div>
        <motion.div className={styles.meterior}
            animate={{
            y: [ 0, 20, 0 ],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
            duration: 2,
            repeat: Infinity,
            }}
        >
        <Image src='./images/bottom right small meterior.svg' width={110} height={110} />
        </motion.div>
        <motion.div className={styles.flyingMeterior}
        whileHover={{
            scale: 0,
            transition: { duration: 3 }
        }}
        >
        <Image src='./images/flyingMeterior.svg' width={200} height={200} />
        </motion.div>
        <motion.div className={styles.meterior4}
        whileHover={{
            scale: 1.5,
            transition: { duration: 2 },
        }}
        >
        <Image src='./images/half meterior3.svg' width={300} height={300} />
        </motion.div>
        <motion.div className={styles.meterior1}
        whileHover={{
            scale: 1.5,
            transition: { duration: 2 },
        }}
        >
        <Image src='./images/meteror half.svg' width={150} height={150} />
        </motion.div>
        <motion.div className={styles.planet}
        animate={{
            y: [ 0, 20, 0 ],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
        }}
        >
        <Image src='./images/planet.svg' width={200} height={200} />
        </motion.div>
        <motion.div className={styles.satellite}
        animate={{
            rotate: 360,
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
            duration: 120,
            repeat: Infinity,
        }}          
        >
        <Image src='./images/satellite.svg' width={150} height={150} />
        </motion.div>
        <motion.div className={styles.meterior3}
        whileHover={{
            scale: 1.5,
            transition: { duration: 2 },
        }}
        >
        <Image src='./images/second half.svg' width={200} height={200} />
        </motion.div>
        <motion.div className={styles.astronaut}
        animate={{
            scale: [ 1, 2, 1 ],
        }}
        transition={{
            duration: 30,
            repeat: Infinity,
        }}
        >
        <Image src='./images/manWithSpacesuit.svg' width={90} height={90} />
        </motion.div>
        
        <div className={styles.small2}>
        <Image src='./images/small meterior 2.svg' width={110} height={110} />
        </div>
        <div className={styles.small1}>
        <Image src='./images/small meterior 1.svg' width={200} height={200} />
        </div>
        <div className={styles.small3}>
        <Image src='./images/small meterior 3.svg' width={110} height={110} />
        </div>
        <motion.div className={styles.meterior2}
        whileHover={{
            scale: 1.5,
            transition: { duration: 2 },
        }}
        >
        <Image src='./images/Untitled design (49) 4.svg' width={144} height={144} />
        </motion.div>
    </div>
    )
  }

  export default Animated;