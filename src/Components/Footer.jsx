import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 md:px-10 lg:px-[120px] pb-[60px]">
      <div className="pt-[120px] pb-20">
        <div className="flex justify-between">
          <div>
            <div>
              <h1 className="text-[32px] font-bold mb-7">Business Logo</h1>
            </div>
            <div className="flex space-x-4 text-2xl">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaLinkedinIn />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="flex justify-between space-x-20">
            <div>
              <h4 className="text-sm font-semibold mb-6">Our Services</h4>
              <div className="flex flex-col space-y-4">
                <Link className="text-sm">Plumbing</Link>
                <Link className="text-sm">Drainage</Link>
                <Link className="text-sm">Bathrooms</Link>
                <Link className="text-sm">Commercial</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-6">Useful Links</h4>
              <div className="grid grid-cols-2 gap-y-4">
                <Link className="text-sm">Contact Us</Link>
                <Link className="text-sm">Customer Services</Link>
                <Link className="text-sm">Updates</Link>
                <Link className="text-sm">Updates</Link>
                <Link className="text-sm">About Us</Link>
                <Link className="text-sm">Locations</Link>
                <Link className="text-sm">Rates</Link>
                <Link className="text-sm">Sitemap</Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-6">Contact Info</h4>
            <div className="space-y-5">
              <p className="text-sm font-semibold flex items-center">
                <IoLocationOutline className="mr-3" /> 1 Sail Street, London,
                SE11 6NQ
              </p>
              <p className="text-sm font-semibold flex items-center">
                <MdOutlineEmail className="mr-3" /> enquiries@PlumbingPros.com
              </p>
              <p className="text-sm font-semibold flex items-center">
                <MdOutlinePhoneInTalk className="mr-3" /> 020 4527 6474
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-[#2A2F3250]">
            © Plumbing Pros. All Rights Reserved 
          </p>
        </div>
        <div>
          <p className="text-sm text-[#2A2F3250]">
            Website by IH Adventure And Creative
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
