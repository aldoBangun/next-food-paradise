import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getComments = createAsyncThunk('comments/getComments', async (recipeId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/recipes/${recipeId}/comments`)
    return response?.data?.data
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})

export const createComment = createAsyncThunk('comments/createComment', async (data, { rejectWithValue }) => {
  const { recipeId, userId, message } = data
  const newComment = {
    user_id: userId,
    message: message
  }

  try {
    const resComment = await axios.post(`/recipes/${recipeId}/comments`, newComment)
    const comment = resComment?.data?.comment
    const resUser = await axios.get(`/users/${comment.user_id}`)
    const commentUser = resUser?.data?.data

    return {
      ...comment,
      ...commentUser
    }
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: null,
    error: null,
    loading: false
  },
  extraReducers: {
    [getComments.pending]: (state) => {
      state.comments = null
      state.error = null
      state.loading = true
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.comments = payload
      state.error = null
      state.loading = false
    },
    [getComments.rejected]: (state, { payload }) => {
      state.comments = null
      state.error = payload
      state.loading = false
    },
    [createComment.pending]: (state) => {
      state.loading = true
    },
    [createComment.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null

      if (!state.comments) {
        state.comments = []
      }

      state.comments.unshift(payload)
    },
    [createComment.rejected]: (state, { payload }) => {
      state.error = false
      state.loading = false
    }
  }
})

export default commentsSlice.reducer