import React from "react";
import swiftze_logo from "@/assets/img/swiftze_logo.png";
import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import telegramIcon from "@/assets/icons/telegram.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-background text-white py-8 bg-gray-900">
        <div className="px-4 grid md:grid-flow-col md:grid-cols-3  justify-center items-center text-center">
          <div className="flex flex-col  items-center text-center mb-4 md:mb-0">
            <div className="text-center">
              <img
                alt="Swiftze logo"
                className="mb-4"
                height="50"
                src= { swiftze_logo}
                width="100"
              />
           </div>

            <div className="flex flex-row gap-4 items-center ">
              <div className="w-8 h-8">
                <a className="text-blue-500 " href="#">
                  {/**facebook icon*/}
                  <img src={facebookIcon} alt="facebook icon" />
                </a>
              </div>
              <div className="w-8 h-8">
                <a className="text-blue-400" href="#">
                  {/**twitter icon*/}
                  <img src={twitterIcon} alt="twitter icon" />
                </a>
              </div>
              <div className="w-8 h-8">
                <a className="text-blue-700" href="#">
                  {/**linkedin icon*/}
                  <img src={linkedinIcon} alt="linkedin icon" />
                </a>
              </div>
              <div className="w-8 h-8">
                <a className="text-pink-500" href="#">
                  {/**instagram icon*/}
                  <img src={instagramIcon} alt="instagram icon" />
                </a>
              </div>
              <div className="w-8 h-8">
                <a className="text-blue-300" href="#">
                  {/**telegram icon*/}
                  <img src={telegramIcon} alt="telegram icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  mb-4 md:mb-0">
            <div className="text-center ">
              <h3 className="text-lg font-bold mb-2 ">JOIN OUR NEWS LETTER</h3>
            </div>

            <div className="block text-wrap text-center">
              <input
                className="bg-gray-800 text-white p-2 mb-2 rounded w-full"
                placeholder="Names"
                type="text"
              />
              <input
                className="bg-gray-800 text-white p-2 mb-2 rounded w-full"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="text-center">
              <button className="bg-red-500 text-white py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col mx-auto text-center items-center md:items-start">
            <a className="mb-2" href="#">
              About Us
            </a>
            <a className="mb-2" href="#">
              Terms of Service
            </a>
            <a className="mb-2" href="#">
              Privacy Policy
            </a>
            <a href="#">Careers</a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
