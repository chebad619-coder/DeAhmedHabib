import { MadeWithDyad } from "@/components/made-with-dyad";
import MainLayout from "@/components/MainLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Welcome to Your Clinic App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start managing your patients and clinic operations here!
          </p>
          <Link to="/add-patient">
            <Button size="lg">Add New Patient</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;