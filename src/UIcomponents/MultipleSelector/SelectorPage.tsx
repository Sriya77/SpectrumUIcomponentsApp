import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/previewcodecard";
import { Steppers } from "../../ui/steppers";
import  MultipleSelectorDemo  from "./SelectorDemo";


const page = () => {
  return (
    <div>
      <PageTemplate title="Card Spotlight" className="mt-5">
        <PreviewCodeCard path="/selectorPreview.txt" >
          <MultipleSelectorDemo/>
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Add lib/utils.ts file
        </p>
        <Steppers
          className=""
          installScript={["npx shadcn@latest add command badge"]}
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="/selector1.txt"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
