import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Loader } from "@/components/Loader/Loader";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";

const LOADER_DURATION = 500;

export function MainLayout() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  // Runs synchronously before paint so the jump happens before the new
  // page is visible - a plain scrollTop assignment always jumps instantly,
  // unlike window.scrollTo(), which the site's global smooth-scroll CSS can hijack.
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), LOADER_DURATION);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
