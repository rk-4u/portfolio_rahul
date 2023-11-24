import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Rahul.pdf";
import profile from "../../assets/profile-pic_Rahul.png"

const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Rahul Choudhary
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Freelancer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Proficient in coding responsive websites and web applications,
              blending creativity with technical skills to deliver seamless
              digital experiences.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/Random-404error">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rahul-choudhary-73912b26b/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://instagram.com/rahul_choudhary.rk?igshid=YTQwZjQ0NmI0OA==">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/RandomRk404?mibextid=2JQ9oc">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://x.com/RAHULCh58024590?t=zwXLptvkDEjxYyJpVP_nug&s=09">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src="https://lh3.googleusercontent.com/pw/ADCreHdvYjHegC2uwZIly4m4ktRyy8OwyP7wkyH_Bw4sl1nZc2CFWfrE5c180itX6gmF8OxS4KqzAFew7SUuULDU13tTl4Dtyr8ZMOVC2enMS0vFFYE0wqeaR-QMNajbqeAUsPyutJXtgylDyU9APGsOWW3y1Ms62O8UJVe6fbM4p2lr-8QxswvQIcarstNE-9oziwKlidK_ld6Zj0MroruU3HsfHqN_aGOdtN_EG_vfXx7zn-y_Za5B2cMrJrFeWgkvOigZxLDKlPgwwSuaGBiHec2SIfgRBcFoPhg-Q-W-enTmvOoUDTsvaWRSnbl4yt_LkdI4ifCG6DGHS6EP0QrRzEI9I2ltHfc0NvTkkTIULFNN04yufYFumMzj5SJnB1UxoAXXXypy261VNi0syUk7dGLYSVtZUj7kdxQoYEfiIFBglDQct0oHBnFqnCIZ_f2WHaP6xNrSuhnuhNnlBcKP_O-4-XKa571ItYgWWTHzYOd3_XXGD5elGhLr2l1Vn_09XeAOC9KfQP_Fj9e0SmYYDaq42OX1k7oyzikE9IgGK9gifbJ6kE9KATjEqpptTbPVV0ZkaZ0aWLKTfu0pSuLsJw_ychBYQjo_mYrkbOcsVq6QYbGrysf6lexqx1pD9iIIsln-Kbl6QZth2Wtlv3tWFYZU0GDcN4JZd6Cssv_qP3MJdJ_IQmEztioXhXQ6r9QEyp1kDYQvU8F8GV5EARDrvt8igMOJ0SYz3XxwwM8scp2fogtxax6msk2cqL5tR3KU-6k43xH71GtEaIUM9oO-zbSD7epAxMtgQifVv9i6mOfRCM0Joz5SZH__GAyDSG7tEavx3MGq1GbfQodWdDmmYJufcMUJ_irRuvfTOrryV2vj_lOOWZJzZcWtCPnXIiooAcrHjQ=w600-h600-s-no-gm?authuser=0"
              href = {profile}
              alt=""
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
