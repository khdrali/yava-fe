"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  customPageName?: string; 
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ customPageName }) => {
  const pathname = usePathname();

  const pageMap: Record<string, string> = {
    "/Home": "Home",
    "/news-event": "News & Event",
    "/": "Our Foods",
    "/products": "Products",
    "/contact": "Contact Us",
  };

  const currentPage = customPageName || pageMap[pathname] || "news-event";

  const breadcrumbColor = "#B0B0B0"; 

  const isCentered =
    pathname === "/our-foods" || pathname === "/news-event"; 

  return (
    <div
      style={{
        fontSize: "18px",
        color: breadcrumbColor,
        marginBottom: "1rem",
        fontWeight: 400,
        lineHeight: "140%",
        letterSpacing: "0%",
        fontFamily: "Poppins, sans-serif",
        textAlign: isCentered ? "center" : "left", 
        width: "100%", 
        boxSizing: "border-box",
      }}
    >
      {/* Tombol Home */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: breadcrumbColor,
          marginRight: "0.5rem",
        }}
      >
        Home
      </Link>
      {" / "}

      <span
        style={{
          marginLeft: "0.5rem",
          cursor: "default",
        }}
      >
        {currentPage}
      </span>
    </div>
  );
};

export default Breadcrumb;