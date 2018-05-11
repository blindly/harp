class CockpitCollection {
  constructor(data) {
    this.host = data.host;
    this.accessToken = data.accessToken;
    this.collection = data.collection;

    this.url = `${this.host}/api/collections/get/${this.collection}?token=${this.accessToken}`;
  }

  listCollections() {
    var url = `${this.host}/api/collections/listCollections?token=${this.accessToken}`;
    fetch(url)
      .then(collections => collections.json())
      .then(collections => console.log(collections));
  }

  getSchema() {
    var url = `${this.host}/api/collections/collection/${this.collection}?token=${this.accessToken}`;
    fetch(url)
      .then(collection => collection.json())
      .then(collection => console.log(collection));
  }

  getCollection() {
    var url = `${this.host}/api/collections/get/${this.collection}?token=${this.accessToken}`;
    fetch(url)
      .then(collections => collections.json())
      .then(collections => console.log(collections));
  }

  filterCollection() {
    var url = `${this.host}/api/collections/get/${this.collection}?token=${this.accessToken}`;
    fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          filter: {
            published: true
          },
          limit: 10,
          skip: 5,
          sort: {
            _created: -1
          },
          populate: 1 // resolve linked collection items
        })
      })
      .then(collections => collections.json())
      .then(collections => console.log(collections));
  }

  updateCollection() {
    var url = `${this.host}/api/collections/save/${this.collection}?token=${this.accessToken}`;
    fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(payload)
      })
      .then(collections => collections.json())
      .then(collections => console.log(collections));
  }

}