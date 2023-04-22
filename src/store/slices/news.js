import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    value: {
      articles: {
        id: null,
        title: null,
        content: null,
        description: null,
        urlToImage: null,
        publishedAt: null,
        source: {
          name: null,
          id: null,
        },
        url: null,
      },
    },
  },
  reducers: {
    addNews: (state, action) => {
      state.value = action.payload;
    },

  },
});

export const { addNews, setId } = newsSlice.actions;
export default newsSlice.reducer;
