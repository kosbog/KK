import * as React from "react";
import { observer } from "mobx-react-lite";
import { Image, Transition } from "semantic-ui-react";
import logo from "../assets/images/logo.22f8373f.jpg";
import { Link } from "react-router-dom";

export const Logo = observer(({ toggleDrawer }: { toggleDrawer?: () => void; }) => {
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, [isVisible]);
  return (
    <>
      <Transition visible={isVisible} animation="fade" duration={600}>
        <div className="logo-wrapper">
          <div className="logo-container">
            <div className="logo-image">
              <Link to={"/"}>
                <Image src={logo} fluid />
              </Link>
            </div>
          </div>
          {/* <* className="logo-frame" />*/}
        </div>
      </Transition>
      {/* <CustomDivider /> */}
    </>
  );
});
