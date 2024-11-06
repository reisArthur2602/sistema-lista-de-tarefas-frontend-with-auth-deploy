import { clsx, type ClassValue } from "clsx";
import { KeyboardEvent } from "react";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | string) => {
  const dateObject = new Date(date);

  const year = dateObject.getUTCFullYear();
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getUTCDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};


export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const isCostAboveThreshold = (price: number) => {
  return price >= 1000;
};


export const MaskInputNumber = (event:KeyboardEvent<HTMLInputElement>) => {
  if (!/[0-9]/.test(event.key) && !['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.preventDefault();
  }
};