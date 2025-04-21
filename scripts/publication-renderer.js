fetch('data/publications.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('publications');
    data.forEach(paper => {
      const div = document.createElement('div');
      div.classList.add('pub-item');

      let html = '';

      if (paper.image) {
        html += `<a href="${paper.pdf}" target="_blank">
                    <img src="${paper.image}" alt="${paper.title}" class="pub-thumb">
                 </a>`;
      }

      html += `<div class="pub-meta">
                 <h3><a href="${paper.pdf}" target="_blank">${paper.title}</a></h3>
                 <p>${paper.authors}</p>
                 <p><em>${paper.venue}, ${paper.year}</em></p>
               </div>`;

      div.innerHTML = html;
      container.appendChild(div);
    });
  });
