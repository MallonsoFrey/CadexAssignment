import VideoContent from "../../components/VideoContent/VideoContent";
import CardComponent from "../../components/CardContent/CardContent";
import AdditionalContent from "../../components/AdditonalContent/AdditionalContent";

export default function Home() {
  return (
    <div className="App">
      <VideoContent />
      <CardComponent />
      <AdditionalContent />
    </div>
  );
}
