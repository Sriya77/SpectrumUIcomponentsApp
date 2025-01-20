import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";

import { Steppers } from "../../ui/steppers";
import Feedback from './feedbackdemo'

const Page = () => {
  return (
    <div>
      <PageTemplate title="Animated Testimonials" className="mt-5">
        <PreviewCodeCard path="/imagepreview.txt">
          <Feedback />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>

        <Steppers
          className=""
          installScript={["npm i framer-motion lucide-react"]}
          steps={[{ title: "Create feedback component & paste the code" },]}
          withInstall
          codePath="/utils.txt"
        />
      </PageTemplate>
    </div>
  );
};

export default Page;
