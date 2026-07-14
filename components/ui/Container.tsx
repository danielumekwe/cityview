import { ElementType, ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 ${className}`}
      {...props}
    />
  );
}
