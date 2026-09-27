import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import "../styles/ScrollToTopButton.css"
function ScrollToTopButton(){
const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(()=>{
    function handleScroll(){
        if(window.scrollY > 300){
            setShowScrollTop(true)
        }else{
            setShowScrollTop(false)
        }
    }

    window.addEventListener("scroll", handleScroll)

    return ()=>{
        window.removeEventListener("scroll", handleScroll)
    }
}, [])

const scrollToTop = ()=>{
    window.scrollTo({
   top: 0,
   behavior: "smooth"
});

}

return (
    <>
    {showScrollTop && (
        <button onClick={scrollToTop}
        className="scroll-top-btn"
        >
<FaArrowUp/>
        </button>
    )}

</>
)
}

export default ScrollToTopButton