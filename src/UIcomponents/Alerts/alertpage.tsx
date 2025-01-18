import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";

import { Steppers } from "../../ui/steppers";
import { Alertdemo } from "./alertDemo.tsx";

const page = () => {
  return (
    <div>
      <PageTemplate title="Animated SVG Chart" className="mt-5">
        <PreviewCodeCard path="/animatedChartDemo.txt">
          <Alertdemo />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Edit tailwind.config.ts to add background grid
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react npx shadcn@latest add alert"
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="/utils.txt"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
