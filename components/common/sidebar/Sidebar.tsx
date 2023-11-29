import SidebarItems from "@/components/common/sidebar/SidebarItems";
import AuthorWrapper from "@/components/common/author/AuthorWrapper";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-5 py-5">
      <SidebarItems />
      <div>
        <AuthorWrapper />
      </div>
    </div>
  );
};

export default Sidebar;
