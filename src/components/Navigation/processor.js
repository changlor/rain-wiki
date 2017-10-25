import { Func } from '../../vendor/lib';

const processor = (page, component, id) => {
  // render tree node object to a markdown type string
  const renderTreeToIndex = (tree) => {
    let titleOrder = 0;
    const suffix = function (markdownText, markdownMarker, treeNode, treeKey, index) {
      if (index == 1) {
        titleOrder++;
        // with title order, look like > 1.some text
        return `${markdownText}${markdownMarker} ${titleOrder}.${treeNode[treeKey].parent}.${treeKey}\r\n`;
      }
      // without title order, look like > some text
      return `${markdownText}${markdownMarker} ${treeNode[treeKey].parent}.${treeKey}\r\n`;
    }
    const markdown = Func.renderTreeToIndex(tree, suffix);
    return  Func.parseMarkdown(markdown);
  }
  // parse param name to vue template programmer
  const parseParamName = (paramName) => {
    let paramValue = paramName;
    let paramKey = paramName;
    // 素质三连
    paramKey = paramKey.replace(/null./gi, '');
    paramKey = paramKey.replace(/>|<\//g, '');
    paramKey = paramKey.replace(/(\.)/g, '.child$1');

    // 素质二连
    paramValue = (paramValue.match(/[a-z]+<\/$/gi))[0];
    paramValue = paramValue.replace(/([a-z]+)<\/$/gi, '$1');

    // 届不到的index
    let index = paramKey.match(/[0-9]+./g);
    paramKey = paramKey.replace(/[0-9]+.child./g, '');
    if (index) {
      return ` @click="switchItem('${paramValue}')">${index[0]} {{ ${paramKey}.name }}</`;
    }
    return ` @click="switchItem('${paramValue}')">{{ ${paramKey}.name }}</`;
  }
  const index = renderTreeToIndex(page.payload.res);
  const componentOptions = {};
  const template = `<div>${index.replace(/>([a-zA-Z0-9.]+)<\//g, parseParamName)}</div>`;
  const mounted = function () {
    this.$request('switchItem', { itemName: page.payload.index });
  }
  const data = () => {
    return { ...page.payload.res };
  }
  const methods = {
    switchItem (name) {
      this.$request('switchItem', { itemName: name });
    }
  }
  page.indexComponent = component.$extend({ template, data, methods, mounted });
}

export default processor;