import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";

import { Steppers } from "../../ui/steppers";
import InfiniteScrollDemo from './infinitydemo'

const Page = () => {
  return (
    <div>
      <PageTemplate title="Animated Testimonials" className="mt-5">
        <PreviewCodeCard path="/infinitypreview.txt">
          <InfiniteScrollDemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          steps={[{ title: "Create feedback component & paste the code" },]}
          withInstall
          codePath="/infinity1.txt"
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
