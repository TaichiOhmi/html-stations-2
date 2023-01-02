function displayList() {
    const fruits = document.getElementById('fruits');
    const ul = document.createElement('ul');
    if (fruits.getElementsByTagName('p').length > 0){
        for(i=0;i<fruits.getElementsByTagName('p').length;){
            const li = document.createElement('li');
            li.textContent = fruits.children[i].textContent;
            ul.append(li);
            fruits.removeChild(fruits.children[i]);
        }
        fruits.append(ul);
    }
};