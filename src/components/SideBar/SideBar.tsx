import { Outlet, useLocation, useNavigate } from "react-router-dom";
import s from "./SideBar.module.scss";
import { FC, ReactElement, useContext } from "react";
import { pages } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { NodesContext } from "../../contexts/nodesContext";
import ArrowBottom from "../../assets/svgs/ArrowBottom";
import Logo from "../../assets/svgs/Logo";
import Footer from "../Footer/Footer";
import {
  getSideBarIsMini,
  setSideBarIsMini,
} from "../../redux/slices/sideBarSlice";

type SideBarProps = {
  children: ReactElement;
};

const SideBar: FC<SideBarProps> = () => {
  const { addHoverNode, removeHoverNode } = useContext(NodesContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMini = useAppSelector(getSideBarIsMini);
  const { pathname } = useLocation();

  return (
    <div className={s.wrapper}>
      <div className={`${s.sideBar} ${isMini && s.mini}`}>
        <div className={s.header}>
          <div className={s.logo}>
            <Logo />
          </div>
          <div className={s.title}>Motion Capture</div>
        </div>
        <div className={s.links}>
          {pages.map((p) => (
            <div
              key={p.url}
              onClick={() => navigate(p.url)}
              className={`${s.link} ${p.url === pathname && s.active}`}
              ref={(ref) =>
                addHoverNode({
                  id: `sideBar_${p.url}`,
                  ref,
                  hoverClassName: "sideBarLink",
                })
              }
            >
              <div className={s.icon}>{p.icon}</div>
              <div className={s.label}>{p.label}</div>
            </div>
          ))}
        </div>
        <div
          className={s.close}
          onClick={() => dispatch(setSideBarIsMini(!isMini))}
          ref={(ref) =>
            addHoverNode({
              id: `sideBar_isMiniToggle`,
              ref,
              hoverClassName: "sideBarToggle",
            })
          }
        >
          <ArrowBottom />
        </div>
      </div>
      <div className={s.rightSide}>
        <div className={s.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SideBar;
