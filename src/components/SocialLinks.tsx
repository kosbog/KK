import * as React from "react";
import { Menu, Icon, SemanticICONS } from "semantic-ui-react";

interface SocialLinkConfig {
  name: string;
  icon: SemanticICONS;
  title: string;
  link: string;
  action: (x: string) => void;
}

const linksConfig: SocialLinkConfig[] = [
  {
    name: 'instagram',
    title: 'Like',
    icon: 'instagram',
    link: 'https://www.instagram.com/konstantin.kositskiy',
    action: (link: string) => window.open(link),
  },
  {
    name: 'telegram',
    title: 'Follow',
    icon: 'telegram plane',
    link: 'https://t.me/KonstantinKositskiy',
    action: (link: string) => window.open(link),
  },
  {
    name: 'pinterest',
    title: 'Pin',
    icon: 'pinterest',
    link: 'https://www.pinterest.com',
    action: (link: string) => window.open(link),
  }
]

export const SocialLinks = ({ withText = true }: { withText?: boolean }) => {
  return (
    <Menu compact fluid text icon="labeled" className="social-menu">
      {linksConfig.map(({ action, icon, link, name, title }, idx) => (
        <Menu.Item
          name={name}
          onClick={() => action(link)}
        >
          {icon && <Icon name={icon} />}
          {withText && title}
        </Menu.Item>
      ))}
    </Menu>
  );
};
