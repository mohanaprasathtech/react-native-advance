import {createStore} from 'redux';
import {mainreducer} from './Reducer';

export const store = createStore(mainreducer);
