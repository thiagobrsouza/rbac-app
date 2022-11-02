import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  xxl?: string;
  xl?: string;
  lg?: string;
  md?: string;
  sm?: string;
  xs?: string;
  title?: string;
  children: ReactNode;
}

export function Layout({ xxl, xl, lg, md, sm, xs, title, children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <h3 className="text-center">{title}</h3>
          <div className={`col-xxl-${xxl} col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm} col-xs-${xs}`}>
            { children }
          </div>
        </div>
      </div>
    </>
  )
}