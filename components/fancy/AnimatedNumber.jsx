'use client';
import { cn } from '@/components/fancy/cn.jsx';
import { motion, SpringOptions, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';



export function AnimatedNumber({
  value,
  className,
  springOptions,
}) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn('tabular-nums', className)}>
      {display}
    </motion.span>
  );
}
