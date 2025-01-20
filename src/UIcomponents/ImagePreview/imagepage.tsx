import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";
import { Steppers } from "../../ui/steppers";
import { Demoimages } from "./imagedemo";


const page = () => {
  return (
    <div>
      <PageTemplate title="Card Spotlight" className="mt-5">
        <PreviewCodeCard path="/imagePreview.txt" >
          <Demoimages/>
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Add lib/utils.ts file
        </p>
        <Steppers
          className=""
          installScript={["npm i lucide-react  "]}
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="/image1.txt"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
