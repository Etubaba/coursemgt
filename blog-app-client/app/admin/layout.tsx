// "use client";

import SideBar from "@/components/admin/layout/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"w-full overflow-hidden"}>
      <div className="flex flex-col justify-between h-screen lg:flex-row md:space-y-3 lg:space-y-0 ">
        <div
          // id="adminend"
          className="w-full  hidden lg:block animate__fadeInLeft shadow-md   border-r lg:h-full   lg:w-1/6 pb-24 "
        >
          <SideBar />
        </div>

        <section
          className={
            "w-full lg:w-5/6 md:p-5  p-3   shadow-md    bg-[#FDFDFF] h-full pb-16 overflow-y-scroll"
          }
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default layout;
