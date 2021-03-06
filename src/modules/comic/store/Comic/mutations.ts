import { MutationTree } from 'vuex';
import { ComicInterface } from '../../components/models';
import { ComicStateInterface } from './state';

const mutation: MutationTree<ComicStateInterface> = {
  addComic (state: ComicStateInterface, data:ComicInterface) {
    state.comic = data
  },
  changeRatingValue(state: ComicStateInterface, value:number) {
    state.ratingValue = value
  },
  changeLoading(state: ComicStateInterface){
   state.loadingComic = !state.loadingComic
  }

};

export default mutation;
