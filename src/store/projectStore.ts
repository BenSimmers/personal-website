import { create } from "zustand";
import { ProjectType, Repo } from "../utils/types";


type ProjectsStore = {
    projects: ProjectType[];
    isSubscribed: boolean;
    loading: boolean;
    error: string | null;
    actions: {
        fetchProjects: () => Promise<void>;
    };
}


const useProjectsStore = create<ProjectsStore>((set) => ({
    projects: [],
    isSubscribed: false,
    loading: false,
    error: null,
    actions: {
        fetchProjects: async () => {
            set({ loading: true, error: null });
            try {
                const response = await fetch(
                    // "https://api.github.com/users/BenSimmers/repos"
                    import.meta.env.VITE_GITHUB_API_URL
                );
                const data = await response.json();

                const filteredPublicRepos = data.filter(
                    (repo: Repo) => repo.private === false && repo.description !== null
                );
                set({ projects: filteredPublicRepos, loading: false });
            } catch (error) {
                set({ loading: false, error: "Failed to fetch projects" });
            }
        },
    },
}))

export const useProjects = () => useProjectsStore((state) => ({
    projects: state.projects,
    loading: state.loading,
    error: state.error,
}));

export const useProjectsActions = () => useProjectsStore((state) => state.actions);
