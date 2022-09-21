import MyModal from "@/components/Modal";
import ProjectSection from "@/components/ProjectSection";

export default function HomeContainer() {
  return (
    <div className="bg-white pt-16  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row  w-full flex-wrap">
        <MyModal />
        <ProjectSection />
      </div>
    </div>
  );
}
