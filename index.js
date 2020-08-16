<script>
    const loadButton = document.querySelector("#loadButton");
    const result = document.querySelector('#result');

    loadButton.addEventListener('click', () => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'content.txt');
        xhr.send();
    });
</script>