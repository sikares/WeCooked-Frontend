import NavbarBefore from "./client/components/NavbarBefore";
import FirstPage from "./client/components/FirstPage";
import Card from "./client/components/Card";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarBefore />
      <FirstPage />
      <Card />
    </div>
  );
}