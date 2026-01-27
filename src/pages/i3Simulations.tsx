import CompanyPageLayout, { type CompanyData } from "../components/company/CompanyPageLayout";

const i3SimulationsData: CompanyData = {
  name: "i3 Simulations",
  duration: "2021 - 2022",
  role: "Game Developer",
  summary: "Developed VR simulation experiences focusing on realistic training scenarios. Worked with Unreal Engine to create immersive virtual environments for educational purposes.",
  projects: [
    {
      id: "vr-simulations",
      title: "VR Simulations",
      mainMedia: {
        type: "image",
        src: "/Gifs/i3SimGif.gif",
        alt: "VR Simulations",
        title: "VR Training Simulations"
      },
      features: [
        {
          systemName: "VR Interaction System",
          skills: ["Unreal Engine", "C++", "VR", "Motion Controls"],
          description: "Implemented VR interaction system with motion controllers for realistic object manipulation.",
          media: {
            type: "image",
            src: "/Gifs/i3SimVR.gif"
          }
        },
        {
          systemName: "Replay System with FFmpeg",
          skills: ["C++", "FFmpeg", "Video Encoding", "Replay"],
          description: "Created a replay system that records and encodes gameplay sessions using FFmpeg for training review."
        }
      ]
    }
  ]
};

const I3Simulations = () => {
  return <CompanyPageLayout company={i3SimulationsData} />;
};

export default I3Simulations;