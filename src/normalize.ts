interface PostsData {
    id: string;
    title: string;
    body: string;
}

interface NormalizedPostsData {
    byId: Record<string, PostsData>;
    allIds: string[];
}

export const normalizeData = (data: PostsData[]): NormalizedPostsData => {
    const allIds = data.map(({ id }) => id);
    const byId = data.reduce((acc: Record<string, PostsData>, post: PostsData) => {
        acc[post.id] = post;
        return acc;
    }, {})
    return {
        byId,
        allIds
    };
};