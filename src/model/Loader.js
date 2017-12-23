import Parent from './Parent';

class Loader {
  static selectMarkdown (page, component, id) {
    const resource = page.payload ? page.payload.res : {};
    Parent.readTreeClassification(page.items, resource, 'store');
    component.resolve(id);
  }
}

export default Loader;