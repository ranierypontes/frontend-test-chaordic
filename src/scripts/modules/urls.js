import axios from 'axios';

class UrlsJson {
  constructor() {
    // Call methods
    this.init();
  }

  init() {
    setTimeout(() => {
      axios.get('../../scripts/urls.json')
      .then((response) => {
        // Get the section DOM
        const section = document.querySelector('.section-block.-top5');

        // Create List
        const listLinks = document.createElement('UL');
        listLinks.className = 'list-links';
        section.appendChild(listLinks);

        for (let index = 0; index < 5; index++) {
          const data = response.data[index];

          // Create ListItems
          const listItem = document.createElement('LI');
          listItem.className = 'item';
          listLinks.appendChild(listItem);

          // Create Links
          const link = document.createElement('A');
          link.innerHTML = data.shortUrl;
          link.className = 'link';
          link.setAttribute('href', data.url);
          link.setAttribute('title', data.url);
          link.setAttribute('target', '_blank');
          listItem.appendChild(link);

          // Create Hits
          const hits = document.createElement('SPAN');
          hits.innerHTML = data.hits;
          hits.className = 'hits';
          listItem.appendChild(hits);
        }

        // Remove loading spinner
        const spinner = document.querySelector('.section-block.-top5>.loading');
        spinner.parentNode.removeChild(spinner);
      })
      .catch((error) => {
        console.log(error);
      });
    }, 2000);
  }
}

export default UrlsJson;
