import { FC, Children, ReactNode,  useEffect, useState } from "react";
import { useTrail, a } from '@react-spring/web';

interface TrailProps {
  open: boolean;
  children: ReactNode;
}
const trailConfig = {
  config: { mass: 5, tension: 2000, friction: 200 },
  opacity: (open: boolean) => (open ? 1 : 0),
  x: (open: boolean) => (open ? 0 : 20),
  height: (open: boolean) => (open ? 110 : 0),
};

const Trail:FC<TrailProps>= ({ children }) => {
  const items = Children.toArray(children);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const trail = useTrail(items.length, {
    ...trailConfig,
    opacity: trailConfig.opacity(mounted),
    x: trailConfig.x(mounted),
    height: trailConfig.height(mounted),
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default Trail;