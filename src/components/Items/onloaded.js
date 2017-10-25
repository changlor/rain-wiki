const onloaded = (page) => {
  page.$bubble(`${page.payload.delegation}device${page.device}`);
}

export default onloaded;