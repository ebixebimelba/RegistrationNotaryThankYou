import Group47392 from "assets/Group47392";
import Footer from "components/Footer";
import Layer3 from "assets/Layer3";

export default function NRegistrationNotary(props: NRegistrationNotaryProps) {
  return (
    <div
      className={`relative bg-white text-center w-[1440px] h-[900px] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <div
        className="inset-x-0 top-0 absolute h-[900px] bg-[rgba(8,37,68,1)]"
       />
      <p
        className="absolute text-5xl font-semibold text-white inline m-0 w-[505px] left-[468px] top-[485px] leading-[68px]"
      >
        Thank You!
      </p>
      <p
        className="absolute text-sm font-normal inline m-0 w-[500px] left-[470px] top-[561px] leading-[normal] text-[rgba(124,154,187,1)]"
      >
        Check your email and follow the instructions.
      </p>
      <Group47392 />
      <Footer />
      <Layer3 />
    </div>
  );
}

NRegistrationNotary.defaultProps = {
  style: {},
};

interface NRegistrationNotaryProps {
  style: Object;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
