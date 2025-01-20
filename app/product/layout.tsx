import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {ReactNode} from "react";

type Props = {
  children: ReactNode;
}

export default function Layout(
  {
    children,
  }: Props) {
  return (
    <div className="site_wraper">
     <Header/>
      {children}
     <Footer/>
    </div>
  );
}
