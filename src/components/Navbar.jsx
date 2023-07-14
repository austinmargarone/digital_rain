import { motion } from "framer-motion"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav className="flex items-center flex-grow p-5 bg-[#0D0208]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <h1 className="text-white cursor-pointer hover:text-[#008F11] text-xl font-bold ml-6">Digital Rain</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex flex-col md:flex-row lg:flex-row items-center text-2xl justify-center flex-grow"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white cursor-pointer"
        >
          <Link
            to='about'
            smooth={true}
            duration={500}
            offset={-70}
            className="mx-3 hover:text-[#008F11]"
          >
            About
          </Link>
          <Link
            to='features'
            smooth={true}
            duration={500}
            offset={-70}
            className="mx-3 hover:text-[#008F11]"
          >
            Time
          </Link>
          <Link
            to='features'
            smooth={true}
            duration={500}
            offset={-70}
            className="mx-3 hover:text-[#008F11]"

          >
            Date
          </Link>
          <Link
            to='pricing'
            smooth={true}
            duration={500}
            offset={-70}
            className="mx-3 hover:text-[#008F11]"
          >
            Calculator
          </Link>

          <Link
            to='game'
            smooth={true}
            duration={500}
            offset={-70}
            className="mx-3 hover:text-[#008F11]"
          >
            Game
          </Link>

        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"

      >
        <a href='https://github.com/austinmargarone/digital_rain' target=".blank">
          <button className="text-white mr-6 border-white border-2 hover:text-[#008F11] hover:border-[#008F11] bg-transparent h-10 px-4 rounded-md hover font-semibold">GitHub</button>
        </a>

      </motion.div>
    </nav>
  )
}

export default Navbar