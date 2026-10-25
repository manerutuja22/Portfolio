import useReveal from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
