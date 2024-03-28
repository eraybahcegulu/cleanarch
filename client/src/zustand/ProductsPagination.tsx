import { create } from 'zustand'

interface PaginationState {
    currentPage: number;
    setCurrentPage: (newPage: number) => void;
}

export const usePaginationStore = create<PaginationState>()((set) => ({
    currentPage: 0,
    setCurrentPage: (newPage: number) => set({ currentPage: newPage }),
}))