class Cockpitregion {
  constructor(data) {
    this.host = data.host;
    this.accessToken = data.accessToken;
    this.region = data.region;
  }

  listRegions() {
    var url = `${this.host}/api/regions/listRegions?token=${this.accessToken}`;
    fetch(url)
      .then(regions => regions.json())
      .then(regions => console.log(regions));
  }

  getSchema() {
    var url = `${this.host}/api/regions/region/${this.region}?token=${this.accessToken}`;
    fetch(url)
      .then(region => region.json())
      .then(region => console.log(region));
  }

  getregion() {
    var url = `${this.host}/api/regions/get/${this.region}?token=${this.accessToken}`;
    fetch(url)
      .then(regions => regions.json())
      .then(regions => console.log(regions));
  }

  filterregion() {
    var url = `${this.host}/api/regions/get/${this.region}?token=${this.accessToken}`;
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
          populate: 1 // resolve linked region items
        })
      })
      .then(regions => regions.json())
      .then(regions => console.log(regions));
  }

  updateregion() {
    var url = `${this.host}/api/regions/save/${this.region}?token=${this.accessToken}`;
    fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(payload)
      })
      .then(regions => regions.json())
      .then(regions => console.log(regions));
  }

}