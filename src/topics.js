import { changeacc } from './js/changetorigistrated';
import { load_topics, root_topic } from './js/topic_load';
window.addEventListener('load', () => {
  load_topics();
  changeacc();
});
