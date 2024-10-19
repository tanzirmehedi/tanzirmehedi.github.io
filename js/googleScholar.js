<script>
        // Fetch data from SerpAPI
        async function fetchPublications() {
            const apiKey = '270fb85fd908055efe9fb00b3a216e71115b2e223413aa6dd1cf27e5890851e2';
            const authorId = 'tfKIiZoAAAAJ';
            const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&hl=en&api_key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                const publications = data.articles;
                const listElement = document.getElementById('publication-list');

                // Render publications in HTML
                publications.forEach(pub => {
                    const listItem = document.createElement('li');
                    listItem.className = 'publication-item';
                    listItem.innerHTML = `
                        <p class="publication-title">${pub.title}</p>
                        <p class="citation-count">Cited by: ${pub.cited_by ? pub.cited_by.value : '0'}</p>
                    `;
                    listElement.appendChild(listItem);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
                document.getElementById('publication-list').innerHTML = '<p>Failed to load data.</p>';
            }
        }

        // Call function on page load
        document.addEventListener('DOMContentLoaded', fetchPublications);
    </script>