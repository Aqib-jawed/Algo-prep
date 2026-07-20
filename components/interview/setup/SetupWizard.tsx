"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useInterviewStore } from "@/store/useInterviewStore";
import { useInterviewSessionStore } from "@/store/useInterviewSessionStore";
import { showGlobalToast } from "@/components/ui/Toast";
import { SetupProgress } from "./SetupProgress";
import { WizardNavigation } from "./WizardNavigation";
import { SetupStep1 } from "./steps/SetupStep1";
import { SetupStep2 } from "./steps/SetupStep2";
import { SetupStep3 } from "./steps/SetupStep3";
import { SetupStep4 } from "./steps/SetupStep4";
import { SetupStep5 } from "./steps/SetupStep5";
import { PageSkeleton } from "@/components/ui/PageSkeleton";

export function SetupWizard() {
  const router = useRouter();
  const { createSession } = useInterviewSessionStore();
  const {
    setup,
    setStep,
    nextStep,
    previousStep,
    setCompanyCategory,
    setCompany,
    setExperience,
    setLanguage,
  } = useInterviewStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Secure routing: Redirect user backwards if they bypass validation steps
  useEffect(() => {
    if (!mounted) return;

    let maxAllowedStep = 1;
    if (setup.companyCategory !== null) {
      maxAllowedStep = 2;
      if (setup.company !== null && setup.company.tier === setup.companyCategory) {
        maxAllowedStep = 3;
        if (setup.experience !== null) {
          maxAllowedStep = 4;
          if (setup.language !== null) {
            maxAllowedStep = 5;
          }
        }
      }
    }

    if (setup.step > maxAllowedStep) {
      setStep(maxAllowedStep);
    }
  }, [
    mounted,
    setup.step,
    setup.companyCategory,
    setup.company,
    setup.experience,
    setup.language,
    setStep,
  ]);

  if (!mounted) {
    return <PageSkeleton />;
  }

  // Check if current step has a valid selection for Next validation
  const getCanNext = () => {
    switch (setup.step) {
      case 1:
        return setup.companyCategory !== null;
      case 2:
        return setup.company !== null;
      case 3:
        return setup.experience !== null;
      case 4:
        return setup.language !== null;
      default:
        return false;
    }
  };
  const handleGenerateSession = () => {
    const { company, companyCategory, experience, language } = setup;
    if (!company || !companyCategory || !experience || !language) {
      showGlobalToast("Setup is incomplete. Please select all options.", "info");
      return;
    }
    const sessionId = createSession(company, companyCategory, experience, language);
    useInterviewStore.getState().resetSetup();
    router.push(`/interview/session/${sessionId}`);
  };

  const renderStepContent = () => {
    switch (setup.step) {
      case 1:
        return (
          <SetupStep1
            selectedCategory={setup.companyCategory}
            onSelect={setCompanyCategory}
          />
        );
      case 2:
        return (
          <SetupStep2
            category={setup.companyCategory}
            selectedCompany={setup.company}
            onSelect={setCompany}
          />
        );
      case 3:
        return (
          <SetupStep3
            selectedExperience={setup.experience}
            onSelect={setExperience}
          />
        );
      case 4:
        return (
          <SetupStep4
            selectedLanguage={setup.language}
            onSelect={setLanguage}
          />
        );
      case 5:
        return (
          <SetupStep5
            companyCategory={setup.companyCategory}
            company={setup.company}
            experience={setup.experience}
            language={setup.language}
            onGenerate={handleGenerateSession}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-primary">Interview Setup Wizard</h1>
        <p className="text-sm text-secondary mt-1">Configure your mock environment parameters.</p>
      </div>

      <div className="card p-6 bg-surface space-y-8">
        <SetupProgress currentStep={setup.step} />

        <div className="pt-4 min-h-[280px]">
          {renderStepContent()}
        </div>

        <WizardNavigation
          currentStep={setup.step}
          onBack={previousStep}
          onNext={nextStep}
          canNext={getCanNext()}
        />
      </div>
    </div>
  );
}
