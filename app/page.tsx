'use client'
import Section1 from "@/src/components/section1";
import Section2 from "@/src/components/section2";
import Section3 from "@/src/components/section3";
import Section4 from "@/src/components/section4";
import Section5 from "@/src/components/section5";
import Section6 from "@/src/components/section6";
import Section7 from "@/src/components/section7";
import Footer from "@/src/components/footer";

export default function Home() {
    return (
        <main style={{marginTop: "84px",overflowX:"hidden"}}>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Footer/>
        </main>
    )
}
