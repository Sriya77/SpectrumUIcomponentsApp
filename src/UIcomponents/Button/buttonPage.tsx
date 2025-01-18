import ButtonCollection from "../../components/ButtonCollection";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import { Steppers } from "../../ui/steppers";
const page = () => {
  return (
    <div>
      <PageTemplate title="Pre Design Button">
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          withInstall
          codePath="/buttons.txt"
          installScript="npx shadcn@latest add button"
         
          withEnd
        />
        <PageSubTitle>Usage</PageSubTitle>
        <div className="mt-12">
          <ButtonCollection />
        </div>
      </PageTemplate>
    </div>
  );
};

export default page;