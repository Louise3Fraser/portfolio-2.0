// import { useLayoutEffect, useState } from "react";

// export default function useSize(ref) {
//   const [size, setSize] = useState({ width: 0, height: 0 });
//   useLayoutEffect(() => {
//     if (!ref.current) return;
//     const ro = new ResizeObserver(([entry]) => {
//       const cr = entry.contentRect;
//       setSize({ width: cr.width, height: cr.height });
//     });
//     ro.observe(ref.current);
//     return () => ro.disconnect();
//   }, [ref]);
//   return size;
// }
