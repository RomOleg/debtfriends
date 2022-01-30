import { ReactFragment, ReactPortal } from "react";
import { ReactChild } from "react";

export interface TypeDebt {
  id: number;
  name: string;
  sum: number;
  people: number;
  debtInfo: TypeDebtInfo[];
}

export interface TypeFriend {
  id: string;
  name: string;
}

export interface TypeDebtInfo {
  id: string;
  debtorName: string;
  debtMe: string;
  debtMy: string;
}