import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";

import { Steppers } from "../../ui/steppers";
import CardHoverEffectDemo from './CardsDemo.tsx'

const Page = () => {
  return (
    <div>
      <PageTemplate title="Animated Testimonials" className="mt-5">
        <PreviewCodeCard path="/HoverPreview.txt">
          <CardHoverEffectDemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>

        <Steppers
          className=""
          installScript={["npm i framer-motion clsx tailwind-merge"]}
          steps={[{ title: "Create feedback component & paste the code" },]}
          withInstall
          codePath="/Hovercopy.txt"
        />

        <div>
          <h1>Credits</h1>
          <p>
            This component is inspired by{" "}
            <a
              href="https://www.youtube.com/watch?v=c1A4rSvQR44&t=529s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aceternity UI ❤️
            </a>
          </p>
        </div>
      </PageTemplate>
    </div>
  );
};

export default Page;
