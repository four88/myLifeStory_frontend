import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loadingData from "../Utils/loading.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <FadeIn>
      <div className="w-screen absolute h-screen flex justify-center items-center">
        <Lottie options={defaultOptions} height={300} width={400} />
      </div>
    </FadeIn>
  );
}
