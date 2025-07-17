import * as React from "react";

export interface ToastProps {
  variant?: "default" | "destructive";
  className?: string;
  children?: React.ReactNode;
}

export interface ToastActionElement {
  altText: string;
}

export function Toast({ children, className, ...props }: ToastProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function ToastAction({ altText }: ToastActionElement) {
  return <div>{altText}</div>;
}

export function ToastClose() {
  return <div>Close</div>;
}

export function ToastDescription({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function ToastTitle({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function ToastViewport() {
  return <div />;
}
