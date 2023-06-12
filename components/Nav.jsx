"use client";
// important to use "use client" if we are using for client otherwise
// next js components are server side by default

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          alt="prompt"
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompt</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">Create Post</Link>
          <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>

          <Link href="/profile">
            <Image src="/assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"/>
          </Link>
        </div> : <></>}
      </div>
    </nav>
  );
};

export default Nav;
