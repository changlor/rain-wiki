import { Core } from '../../vendor/lib';

const processor = (page, component, id) => {
  const resource = page.payload ? page.payload.res : {};
  Core.readTreeClassification(page.items, resource, 'store');
  component.resolve(id);
}

export default processor;