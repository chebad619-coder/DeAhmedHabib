import { MadeWithDyad } from "@/components/made-with-dyad";
import MainLayout from "@/components/MainLayout";

const ExaminationPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Examination</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Conduct and record patient examinations.
          </p>
        </div>
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
};

export default ExaminationPage;