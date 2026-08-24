import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo2.svg";
import b1 from "../assets/b1.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const locationPath =
    typeof window !== "undefined"
      ? window.location.pathname
      : "/";

  // ============================================================
  // NAVIGATION ITEMS
  // ============================================================

  const navItems = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About Us",
      dropdown: [
        {
          name: "Who We Are",
          path: "/who-we-are",
        },
        {
          name: "Teams",
          path: "/who-we-are/#teams",
        },
      ],
    },

    {
      name: "Services",
      dropdown: [
        {
          name: "Student Visa",
          path: "/services/student-visa",
        },
        {
          name: "Work Visa",
          path: "/services/work-visa",
        },
        {
          name: "Migration Visa",
          path: "/services/migration-visa",
        },
        {
          name: "Visitor Visa",
          path: "/services/visitor-visa",
        },
        {
          name: "Dependent Visa",
          path: "/services/dependent-visa",
        },
      ],
    },

    {
      name: "English Test",
      path: "/english-test",
    },

    {
      name: "Migration Assessment",
      dropdown: [
        {
          name: "Australia",
          path:
            "/migration-assessment/points-calculator-australia",
        },
        {
          name: "Canada",
          path:
            "/migration-assessment/points-calculator-canada",
        },
        {
          name: "Canada (CRS)",
          path:
            "/migration-assessment/points-calculator-canada-crs",
        },
      ],
    },

    {
      name: "Latest Update",
      dropdown: [
        {
          name: "Videos",
          path: "/latest-update/videos",
        },
        {
          name: "News",
          path: "/latest-update/news",
        },
        {
          name: "Blogs",
          path: "/latest-update/blogs",
        },
      ],
    },
  ];

  // ============================================================
  // ACTIVE LINK
  // ============================================================

  const activeLink =
    navItems.find(
      (item) =>
        item.path === locationPath ||
        item.dropdown?.some(
          (subItem) =>
            subItem.path === locationPath ||
            locationPath.startsWith(
              subItem.path.split("#")[0] + "/"
            )
        )
    )?.name || "";

  // ============================================================
  // CLOSE MENU
  // ============================================================

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // ============================================================
  // TOGGLE DROPDOWN
  // ============================================================

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) =>
      prev === name ? null : name
    );
  };

  return (
    <nav className="relative z-50 w-full bg-[#CFFCFF]">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div
        className="
          flex
          h-[80px]
          w-full
          items-center
          justify-between
          px-4
          sm:px-5
          lg:px-6
        "
      >

        {/* ====================================================
            LOGO
        ==================================================== */}

        <a
          href="/"
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt="Logo"
            className="
              h-[52px]
              w-[160px]
              sm:h-[60px]
              sm:w-[180px]
              lg:h-[66px]
              lg:w-[200px]
            "
          />
        </a>

        {/* ====================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <ul
          className="
            hidden
            items-center
            gap-5
            text-[16px]
            xl:flex
            xl:gap-8
            xl:text-[18px]
          "
        >
          {navItems.map((item) => (
            <li
              key={item.name}
              className="group relative"
              onMouseEnter={() => {
                if (item.dropdown) {
                  setOpenDropdown(item.name);
                }
              }}
              onMouseLeave={() => {
                if (item.dropdown) {
                  setOpenDropdown(null);
                }
              }}
            >

              {/* =================================================
                  PARENT WITH DROPDOWN
              ================================================= */}

              {item.dropdown ? (
                <button
                  type="button"
                  onClick={() =>
                    toggleDropdown(item.name)
                  }
                  className={`
                    flex
                    items-center
                    gap-1
                    whitespace-nowrap
                    text-[#000000]
                    transition-all
                    ${
                      activeLink === item.name
                        ? "font-bold"
                        : "font-normal"
                    }
                  `}
                >
                  {item.name}

                  <ChevronDown
                    size={17}
                    strokeWidth={2}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        openDropdown === item.name
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>
              ) : (

                /* =================================================
                    NORMAL LINK
                ================================================= */

                <a
                  href={item.path}
                  onClick={handleNavClick}
                  className={`
                    flex
                    items-center
                    gap-1
                    whitespace-nowrap
                    text-[#000000]
                    transition-all
                    ${
                      activeLink === item.name
                        ? "font-bold"
                        : "font-normal"
                    }
                  `}
                >
                  {item.name}
                </a>
              )}

              {/* =================================================
                  DESKTOP DROPDOWN
              ================================================= */}

              {item.dropdown &&
                openDropdown === item.name && (
                  <div
                    className="
                      absolute
                      left-0
                      top-full
                      z-50
                      pt-3
                    "
                  >
                    <div
                      className="
                        min-w-[240px]
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#27456E]/10
                        bg-white
                        py-2
                        shadow-lg
                      "
                    >
                      {item.dropdown.map(
                        (subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.path}
                            onClick={handleNavClick}
                            className={`
                              block
                              px-5
                              py-3
                              text-[15px]
                              text-[#27456E]
                              transition-all
                              hover:bg-[#CFFCFF]
                              ${
                                locationPath ===
                                subItem.path
                                  ? "bg-[#CFFCFF] font-semibold"
                                  : "font-normal"
                              }
                            `}
                          >
                            {subItem.name}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
            </li>
          ))}
        </ul>

        {/* ====================================================
            CONTACT BUTTON
        ==================================================== */}

        <a
          href="/contact"
          className="
            hidden
            h-[46px]
            w-[150px]
            items-center
            justify-center
            gap-2
            rounded-[30px]
            bg-[#84C8AF]
            px-[14px]
            py-[12px]
            text-[16px]
            font-semibold
            text-[#27456E]
            xl:flex
          "
        >
          Contact Us

          <img
            src={b1}
            alt="Button Image"
            className="h-[20px] w-[20px]"
          />
        </a>

        {/* ====================================================
            MOBILE MENU BUTTON
        ==================================================== */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => {
            setIsMenuOpen(
              (prev) => !prev
            );
            setOpenDropdown(null);
          }}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            border
            border-[#27456E]/20
            bg-white/40
            text-[#27456E]
            xl:hidden
          "
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-[#27456E]" />
            <span className="block h-0.5 w-5 bg-[#27456E]" />
            <span className="block h-0.5 w-5 bg-[#27456E]" />
          </span>
        </button>
      </div>

      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      {isMenuOpen && (
        <div
          className="
            border-t
            border-[#27456E]/10
            bg-[#CFFCFF]
            px-4
            py-4
            xl:hidden
          "
        >
          <ul
            className="
              flex
              flex-col
              gap-2
              text-[16px]
            "
          >
            {navItems.map((item) => (
              <li key={item.name}>

                {/* ============================================
                    MOBILE PARENT
                ============================================ */}

                <div className="flex items-center">

                  {item.dropdown ? (
                    <button
                      type="button"
                      onClick={() =>
                        toggleDropdown(
                          item.name
                        )
                      }
                      className={`
                        flex
                        flex-1
                        items-center
                        justify-between
                        rounded-md
                        px-3
                        py-2
                        text-left
                        text-[#000000]
                        ${
                          activeLink ===
                          item.name
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {item.name}

                      <ChevronDown
                        size={18}
                        className={`
                          transition-transform
                          duration-200
                          ${
                            openDropdown ===
                            item.name
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>
                  ) : (

                    /* ==========================================
                        MOBILE NORMAL LINK
                    ========================================== */

                    <a
                      href={item.path}
                      onClick={handleNavClick}
                      className={`
                        flex-1
                        rounded-md
                        px-3
                        py-2
                        text-[#000000]
                        ${
                          activeLink ===
                          item.name
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {item.name}
                    </a>
                  )}
                </div>

                {/* ============================================
                    MOBILE DROPDOWN
                ============================================ */}

                {item.dropdown &&
                  openDropdown ===
                    item.name && (
                    <div
                      className="
                        ml-3
                        mt-1
                        overflow-hidden
                        rounded-lg
                        bg-white/50
                      "
                    >
                      {item.dropdown.map(
                        (subItem) => (
                          <a
                            key={
                              subItem.name
                            }
                            href={
                              subItem.path
                            }
                            onClick={
                              handleNavClick
                            }
                            className={`
                              block
                              border-b
                              border-[#27456E]/5
                              px-4
                              py-2.5
                              text-[15px]
                              text-[#27456E]
                              last:border-b-0
                              ${
                                locationPath ===
                                subItem.path
                                  ? "bg-white/50 font-semibold"
                                  : ""
                              }
                            `}
                          >
                            {
                              subItem.name
                            }
                          </a>
                        )
                      )}
                    </div>
                  )}
              </li>
            ))}
          </ul>

          {/* ==================================================
              MOBILE CONTACT BUTTON
          ================================================== */}

          <a
            href="/contact"
            onClick={handleNavClick}
            className="
              mt-4
              ml-2
              flex
              h-[46px]
              w-[calc(100%-8px)]
              items-center
              justify-center
              gap-2
              rounded-[30px]
              bg-[#84C8AF]
              text-[16px]
              font-semibold
              text-[#27456E]
            "
          >
            Contact Us

            <img
              src={b1}
              alt="Button Image"
              className="h-[20px] w-[20px]"
            />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;