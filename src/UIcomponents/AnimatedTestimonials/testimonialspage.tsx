import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";

import { Steppers } from "../../ui/steppers";
import AnimatedTestimonialsDemo from "./animateddemo";

const Page = () => {
  return (
    <div>
      <PageTemplate title="Animated Testimonials" className="mt-5">
        <PreviewCodeCard path="/animatedTestimonails.txt">
          <AnimatedTestimonialsDemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p>
          Create a new file called <code>ImagePreview.tsx</code> in the
          {" components"}
        </p>

        <Steppers
          className=""
          installScript="npm i lucide-react framer-motion"
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="/testimonials.txt"
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
