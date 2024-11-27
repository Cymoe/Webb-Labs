'use client';

import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";

export function useInitializeTestData() {
  return useMutation(api.init.populateTestData);
}
