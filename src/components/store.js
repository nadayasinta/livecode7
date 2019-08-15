import createStore from "unistore";

const intialState = {
    listmovie: []
    // topNews: []
};

export const store = createStore(intialState);

export const actions = store => ({
    setListMovie(state, newmovie) {
        return { listmovie: newmovie };
    }
    // setTopNews(state, newnews) {
    //     return { topNews: newnews };
    // }
});
