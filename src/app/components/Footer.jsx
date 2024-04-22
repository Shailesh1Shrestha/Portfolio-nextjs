"use client"
import React from "react";
import { FaGithub, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import  Link  from "next/link";


function Footer() {
  return (
   

    <div className="bg-bgShade py-5 md:px-12 px-4  border-t-2 border-purple-500 ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-20">
        <a href=""className="flex-shrink-0">
          {/* <img src={logo} alt="logo" className="w-15 h-14 hover:-translate-y-3"/> */}
          <h3 className="w-32 hover:-translate-y-3 ">
            <img src="/images/logo.png" alt=""  />
          </h3>
          </a>
          <section className="section-home">
        <div className=" flex flex-col sm:flex-row md:items-center gap-1 flex-wrap ">
       
          <Link href="/" className=" block hover:text-gray-400 py-2 px-4">Home</Link>
       
         
          <Link href="#skills" className=" block hover:text-gray-400 py-2 px-4">Skills</Link>
         
          <Link href="#about" className=" block hover:text-gray-400 py-2 px-4">About Me</Link>
         
          <Link href="#projects" className=" block hover:text-gray-400 py-2 px-4">Projects</Link>
                  
        </div>
        </section>
        <div className="flex items-center gap-4 ">
          <a target="_blank" href="https://github.com/Shailesh1Shrestha">
          <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCUBpKrn0GZzbRUZlP5kzTHw">
          <FaYoutube className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100025225284094">
          <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
          <a target="_blank" href="https://www.instagram.com/shailesh_shrestha21/">
          <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
        </div>
      </div>
      <hr />
      <div className="mt-5 flex flex-col md:flex-row justify-between gap-8">
        <p>Made with  💖 in Nepal</p>
        <span className="text-sm text-gray-500 sm:text-center">
            © 2023  
            <a href="https://shresthashailesh.com.np/" className="hover:underline hover:text-primary">
               shresthashailesh.com.np
            </a>
            . All Rights Reserved.
            
          </span>
        <div className="space-x-6">
          <a href="/" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/" className="hover:text-gray-400">Terms of Service</a>
          <a href="/" className="hover:text-gray-400">Cookies Settings</a>
        </div>
      </div>
    </div>

  );
}

export default Footer;
