import React, { useState, useEffect } from "react";
import { H4 } from "../ui/headingwithAnchor";
import { cn } from "../lib/utils";
import CodeHighlight from "../UIcomponents/components/code-card/parts/code-highlight";
import { InlineCode } from "./inline";

interface StepperProps {
  children?: React.ReactNode;
  title?: string;
  step?: number;
}

const Stepper: React.FC<StepperProps> = ({ title, children, step }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white p-3">
          {step}
        </span>
        <H4>
          {title === "Extend tailwind.config.js" ? (
            <span>
              Extend <InlineCode>tailwind.config.js</InlineCode>
            </span>
          ) : (
            title
          )}
        </H4>
      </div>
      <div className="my-3 ml-5 border-l-2 border-l-gray-200 pl-8">
        {children}
      </div>
    </div>
  );
};

interface SteppersBaseProps {
  steps?: Omit<StepperProps, "step">[];
  className?: string;
  withEnd?: boolean;
}

interface TailwindConfigStep {
  tailwindConfig?: boolean;
  codePath?: string;  // First code path
}

interface SteppersWithInstallProps extends SteppersBaseProps {
  withInstall: true;
  installScript?: string[];  // Array of install scripts
  codePath?: string;  // First code path
  // codePathOne?: string;  // Second code path
  tailwindConfig?: TailwindConfigStep;
}

interface Steppers2WithInstallProps extends SteppersBaseProps {
  withInstall: true;
  installScript?: string[];  // Array of install scripts
  codePath?: string;  // First code path
  codePathOne?: string;  // Second code path
  tailwindConfig?: TailwindConfigStep;
}


interface SteppersWithoutInstallProps extends SteppersBaseProps {
  withInstall?: false;
  tailwindConfig?: TailwindConfigStep;
}

type SteppersProps = 
  | (SteppersWithInstallProps & { withInstall: true; codePathOne?: never }) 
  | Steppers2WithInstallProps
  | SteppersWithoutInstallProps;

export const Steppers: React.FC<SteppersProps> = (props) => {
  const [installCode, setInstallCode] = useState<string[]>([]);
  const [tailwindConfigCode, setTailwindConfigCode] = useState<string>("");
  const [tailwindConfigCodeOne, setTailwindConfigCodeOne] = useState<string[]>([]);
  const { steps, className, withEnd, withInstall, tailwindConfig } = props;

  useEffect(() => {
    if (withInstall && props.codePath) {
      fetch(props.codePath)
        .then((response) => response.text())
        .then((code) => setInstallCode([code])) // Store the fetched code
        .catch((err) => console.error("Failed to load code:", err));
    }
  }, [withInstall, props]);

  useEffect(() => {
    if (withInstall && props.codePathOne) {
      fetch(props.codePathOne)
        .then((response) => response.text())
        .then((code) => setTailwindConfigCodeOne([code]))
        .catch((err) => console.error("Failed to load tailwind config code path one:", err));
    }
  }, [withInstall, props]);

  useEffect(() => {
    if (tailwindConfig?.tailwindConfig && tailwindConfig.codePath) {
      fetch(tailwindConfig.codePath)
        .then((response) => response.text())
        .then(setTailwindConfigCode)
        .catch((err) => console.error("Failed to load tailwind config code path:", err));
    }
  }, [tailwindConfig?.tailwindConfig, tailwindConfig?.codePath]);

  const installStepsCount = withInstall ? (props.installScript ? props.installScript.length : 0) : 0;
  const tailwindStepCount = tailwindConfig?.tailwindConfig ? 2 : 0;  
  const totalOffset = installStepsCount + tailwindStepCount;

  return (
    <div className={cn(className)}>
      {withInstall && props.installScript && (
        <>
          {props.installScript.map((script, index) => (
            <Stepper key={index} title={`Install the package if you do not have it.`} step={index + 1}>
              <CodeHighlight code={script} />
            </Stepper>
          ))}
        </>
      )}

      {tailwindConfig?.tailwindConfig && tailwindConfig.codePath && (
        <Stepper title="Extend tailwind.config.js (Path 1)" step={installStepsCount + 1}>
          <CodeHighlight code={tailwindConfigCode || ""} />
        </Stepper>
      )}

      {withInstall && tailwindConfigCodeOne.map((code, index) => (
        <Stepper key={`code-${index}`} title="Copy and paste the following code into your project." step={installStepsCount + index + 1}>
          <CodeHighlight code={code || ""} />
        </Stepper>
      ))}

      {withInstall && installCode.map((code, index) => (
        <Stepper key={`code-${index}`} title="Copy and paste the following code into your project." step={installStepsCount + index + 1}>
          <CodeHighlight code={code} />
        </Stepper>
      ))}

      {steps?.map((step, index) => (
        <Stepper key={step.title} {...step} step={index + 1 + totalOffset} />
      ))}

      {withEnd && (
        <Stepper title="Update the import paths to match your project setup." step={(steps?.length || 0) + 1 + totalOffset} />
      )}
    </div>
  );
};
