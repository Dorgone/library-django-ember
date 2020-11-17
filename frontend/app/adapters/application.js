import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = computed(function(){
        return "http://localhost:8000/";
    });
    namespace = "api";
}