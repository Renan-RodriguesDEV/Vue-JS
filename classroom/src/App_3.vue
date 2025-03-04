<template>
    <div id="app">
        <h1>List of person</h1>
        <ul>
            <li v-for="person in personList" :key=person.id>{{ person.name }} - {{ person.age }} years</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "App",
    data() {
        return {
            personList: [
                { id: 1, name: "Jesus", age: 30 },
                { id: 2, name: "Maria", age: 50 },
                { id: 3, name: "José", age: 55 },
            ]
        }
    }

}

</script>
<style scoped>
#app {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #f8f9fa;
    margin: 10px 0;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

li:hover {
    transform: translateX(10px);
    background-color: #e9ecef;
}
</style>