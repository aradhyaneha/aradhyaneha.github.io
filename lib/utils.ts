import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// this was added to text the loader
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));