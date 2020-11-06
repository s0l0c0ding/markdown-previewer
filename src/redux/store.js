import { createStore } from 'redux';
import mdPreviewReducer from './mdPreviewRducer'

export const store = createStore(mdPreviewReducer);