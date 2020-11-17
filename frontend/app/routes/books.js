import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksRoute extends Route {
    store = service();
    model() {
        const store = this.get('store');
        return store.findAll('book');
    }
}