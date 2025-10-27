import React from "react";
import MainLayout from "@/components/MainLayout";
import ReferralFollowupForm from "@/components/ReferralFollowupForm";

const ReferralFollowupPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Referral & Follow-up</h1>
        <ReferralFollowupForm />
      </div>
    </MainLayout>
  );
};

export default ReferralFollowupPage;