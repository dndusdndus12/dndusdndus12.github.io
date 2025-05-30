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
                    <img src="${paper.image}" alt="${paper.title}" class="pub-thumb hover-zoom">
                 </a>`;
            }

            html += `<div class="pub-meta">
                 <h3>`
            if (paper.pdf) {
                html += `<a href="${paper.pdf}" target="_blank">${paper.title}</a>`;
            } else {
                html += paper.title;
            }
            html += `</a></h3>
                 <p>${paper.authors}</p>
                 <p><em>${paper.venue}, ${paper.year}</em></p>
               </div>`;

            div.innerHTML = html;
            container.appendChild(div);
        });


        // Add CSS dynamically for hover-zoom effect
        const style = document.createElement('style');
        style.textContent = `
      .hover-zoom {
        transition: transform 0.3s ease;
        transform-origin: top left;
      }
      .hover-zoom:hover {
        transform: scale(3);
        z-index: 10;
      }
    `;
        document.head.appendChild(style);
    });
