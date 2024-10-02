import { create } from 'zustand'; 

interface UserState {
    permission: string | null;
    setPermission: (permission: string | null) => void;
}


const useUserStore = create<UserState>((set) => ({
    permission: null,
    setPermission: (permission: string | null) => set({ permission }),
}));

export default useUserStore;


