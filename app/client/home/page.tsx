import NavbarAfter from "../components/NavbarAfter";
import FirstPage from "../components/FirstPage";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <FirstPage />
      <Card />
    </div>
  );
}