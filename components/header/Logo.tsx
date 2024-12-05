import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="header__logo">
      <Link href="/" className="header__logo" rel="home"
         >
        <Image priority src="https://rc.israelcart.com/wp-content/uploads/2023/03/logo-pc.svg" width={183} height={40}
               alt="Logo"/>
      </Link>
    </div>
  );
}
