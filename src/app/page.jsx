import AboutMe from '@/components/aboutme/AboutMe';
import Services from '@/components/myservices/Services';
import Trajectory from '@/components/mytrajectory/Trajectory';
// --
export default function Home() {
  return (
    <>
      <AboutMe />
      <Services />
      <Trajectory />
      {/* <FloatingButton {...{ trigger: 'click', visibilityHeight: 1000 }} /> */}
    </>
  );
}
