import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // بنراقب تغيير الـ URL
  const { pathname } = useLocation();

  useEffect(() => {
    // أول ما الـ Path يتغير، اطلع لقمة الصفحة
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // المكون ده مش بيرندر حاجة، هو شغال في الخلفية بس
};

export default ScrollToTop;