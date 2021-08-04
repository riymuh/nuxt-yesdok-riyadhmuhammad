import dataBlogs from "@/assets/data/blogs.json";

export const state = () => ({
  blogs: dataBlogs,
  categories: [
    {
      category_id: 1,
      name: "Gaya Hidup",
      slug: "gaya-hidup"
    },
    {
      category_id: 2,
      name: "Diet",
      slug: "diet"
    },
    {
      category_id: 3,
      name: "Seksualitas",
      slug: "seksualitas"
    },
    {
      category_id: 4,
      name: "Pengasuhan",
      slug: "parenting"
    },
    {
      category_id: 5,
      name: "Sehat A-Z",
      slug: "sehat-a-z"
    }
  ]
});

export const getters = {
  filterByCategory: state => category_id => {
    return state.blogs.filter(blog => blog.category_id === category_id);
  },
  singleCategory: state => slug => {
    return state.categories.find(item => item.slug == slug);
  },
  singleBlog: state => slug => {
    return state.blogs.find(item => item.slug == slug);
  }
};

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  }
};
