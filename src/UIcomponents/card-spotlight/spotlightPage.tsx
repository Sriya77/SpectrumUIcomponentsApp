import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";

import { Steppers } from "../../ui/steppers";
import { CardSpotlightDemo } from "./spotlightDemo";


const page = () => {
  return (
    <div>
      <PageTemplate title="Card Spotlight" className="mt-5">
        <PreviewCodeCard path="/spotpreview.txt" >
          <CardSpotlightDemo/>
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Add lib/utils.ts file
        </p>
        <Steppers
          className=""
          installScript={["npm i framer-motion clsx tailwind-merge three @react-three/fiber @types/three"]}
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="/spot1.txt"
          codePathOne="/spot2.txt"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
