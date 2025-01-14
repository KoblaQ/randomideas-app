import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/style.css';

import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';

new Modal();
const ideaForm = new IdeaForm();
new IdeaList();

ideaForm.render();
