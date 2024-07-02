import { Collapsible } from "@ark-ui/react";
import styles from "./SidePanel.module.scss";
import { SidePanelItem } from "./SidePanelItem";

import HomeIcon from "./assets/home.svg";
import SearchIcon from "./assets/search.svg";
import MembersIcon from "./assets/members.svg";
import DomainsIcon from "./assets/domains.svg";
import SettingsIcon from "./assets/settings.svg";
import { UserProfile } from "../../molecules/UserProfile";
import { SidePanelWorkspace } from "./SidePanelWorkspace";

type SidePanelItem = {
  label: string;
  icon: React.ReactNode;
};

const sidePanelItems: SidePanelItem[] = [
  {
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    label: "Search",
    icon: <SearchIcon />,
  },
  {
    label: "Members",
    icon: <MembersIcon />,
  },
  {
    label: "Domains",
    icon: <DomainsIcon />,
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
  },
];

export function SidePanel() {
  return (
    <Collapsible.Root defaultOpen className={styles["side-panel"]}>
      {/* <Collapsible.Trigger>Toggle</Collapsible.Trigger> */}
      <UserProfile />
      <Collapsible.Content className={styles["content"]}>
        <div className="flex flex-col gap-[16px]">
          <div>
            {sidePanelItems.map((item: SidePanelItem) => (
              <SidePanelItem
                key={item.label}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
          <SidePanelWorkspace />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
