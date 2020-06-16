import * as React from "react";
import { observer } from "mobx-react-lite";
import { Icon, Sidebar, Menu, Item } from "semantic-ui-react";

export const Drawer = observer(({ children }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Sidebar.Pushable as={Item}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        direction="top"
        inverted
        onHide={() => setVisible(false)}
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <div className="menu-burger" onClick={() => setVisible(!visible)}>
          <div className="menu-burger-wrapper">
            <Icon size="tiny" name='sidebar' />
          </div>
        </div>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
});
