import { PageSubTitle, PageTemplate } from "../components/page-template";
import { Steppers } from "../../ui/steppers";
import {BackgroundBoxesDemo} from "./BoxDemo";
import PreviewCodeCard from "../components/previewcodecard";

 const Page =() => {
  return(
  <PageTemplate title="Background Boxes">
    <PreviewCodeCard path="/BoxPreview.txt">
          <BackgroundBoxesDemo />
        </PreviewCodeCard>

    <PageSubTitle>Installation </PageSubTitle>
    <p></p>
      <Steppers
      className=""
      installScript={["npm i framer-motion clsx tailwind-merge"]}
      steps={[{title:  "Don't forget to add util.ts file" }]}
      withInstall
      tailwindConfig={{
        tailwindConfig: true,
        codePathh: "/tailwindbox.txt",
      }}
      codePath="/BoxPage.txt"
      />
  </PageTemplate>
  );
};


export default Page;