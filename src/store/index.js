import { createStore } from "vuex";

export default createStore({
  state: {
    articels: [],
    posts: [
      {
        id: 1,
        title: "title satu",
        deskripsi: "deskripsi satu",
      },
      {
        id: 2,
        title: "title dua",
        deskripsi: "deskripsi dua",
      },
    ],
  },
  getters: {
    allPost: (state) => state.articels,
    allPosts: (state) => state.posts,
  },
  actions: {
    addPost({ commit }, post) {
      commit("add_post", post);
    },
    deletePost({ commit }, id) {
      commit("delete_post", id);
    },
  },
  mutations: {
    add_post(state, post) {
      state.posts.push(post);
      state.articels = state.posts;
    },
    delete_post(state, id) {
      state.posts = state.posts.filter((post) => post.id != id);
      state.articels = state.posts;
    },
  },
  modules: {},
});
