import {createSlice} from '@reduxjs/toolkit';

const initialDetailState = {showContent: false}

const detailSlice = createSlice({
    name: 'detalhes',
    initialState: initialDetailState,
    reducers: {
        showDetail(state) {
            state.showContent = true
        }
    }
});

export const showContentActions = detailSlice.actions;

export default detailSlice.reducer;
