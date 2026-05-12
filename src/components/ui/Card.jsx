import { motion } from "framer-motion";

export default function Card({ children, className = "", as = "div", interactive = false, ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={`card-surface rounded-3xl ${interactive ? "transition-transform duration-300 hover:-translate-y-0.5" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
