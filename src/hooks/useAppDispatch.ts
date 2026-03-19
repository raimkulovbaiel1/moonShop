import { useDispatch } from "react-redux";

// Temporary typed hook until the store types are implemented.
// Using `any` avoids type errors while keeping the hook usable.
export const useAppDispatch = () => useDispatch<any>();