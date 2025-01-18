import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";

import { Steppers } from "../../ui/steppers";
import { Chart } from "./AnimatedChartDemo";


const page = () => {
  return (
    <div>
      <PageTemplate title="Animated SVG Chart" className="mt-5">
        <PreviewCodeCard path="/animatedChartDemo.txt" >
          <Chart/>
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Edit tailwind.config.ts to add background grid
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion mini-svg-data-uri"
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="/sample.txt"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
