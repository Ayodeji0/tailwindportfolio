import  bitcoin  from "../assets/btcImg.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={bitcoin} className="w-full h-64" />
        <article>
          <SectionTitle text="that name crypTech" />
          <p className="text-slate-600 mt-8 leading-loose">
            As Cryptech, I symbolize the fusion of crypto trading and software
            engineering. I excel in market analysis, risk management, and
            strategic trading, leveraging advanced tools for data-driven
            decisions. Simultaneously, I possess strong coding, debugging, and
            automation skills. My adaptability, analytical abilities, and
            disciplined approach ensure consistent performance in dynamic
            markets and innovative software solutions, making me a versatile
            asset in both domains.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
