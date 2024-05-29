<template>
  <MyHeader/>
  
  <div class="card__list">
    <MyHeading title="Наши хиты"/>
    
    <MyInput @input="onChangeSearch" class="card__list-search"/>
    <MySelect @change="onChangeSelect" class="card__list-select"/>
    <!-- Здесь выводятся все наши карточки -->
    <CardList 
      :items="items"
      @addToFavorite="addToFavorite"/>
  </div>
  
  <MyFooter/>
</template>

<script setup>
  // импорт методов самого Vue.js
  import {onMounted, ref, provide, watch, reactive, toRefs} from "vue"
  
  import MyFooter from "@/components/MyFooter.vue"
  import MyHeader from "@/components/MyHeader.vue"
  import CardList from "@/components/CardList.vue"
  import MyHeading from "@/components/UI/MyHeading.vue"
  import MyInput from "@/components/UI/MyInput.vue"
  import MySelect from "@/components/UI/MySelect.vue"
  import axios from "axios"
  
  const items = ref([]); 
  // Переменная для хранения выбранного значения из select, а также текста в input
  const filters = reactive({
    sortBy: "name",
    searchQuery: ''
  });
  
  const STORAGE_KEY = "favoriteItems"  
  // Массив с избранными товарами

  const favoriteItems = reactive(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

  // Функция, в которой добавляем товар в избранное
  const addToFavorite = (item) => {
    try {
    
      const index = favoriteItems.findIndex((favItem) => favItem.id === item.id);
      item.isFavorite = !item.isFavorite;
      
      if (index !== -1) {
          if (favoriteItems[index].isFavorite) {
            favoriteItems.splice(index, 1); 
          } else {
             favoriteItems[index] = item; // обновляем элемент в массиве (1:05)
          }  
      } else {
        favoriteItems.push(item);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteItems));
    } catch (error) {
      console.log(error);
    }
  }
  
  // Выгружает товары из LS
  const loadFavoritesFromLocalStorage = () => {
    favoriteItems.forEach((savedItem) => {
      const itemIndex = items.value.findIndex((item) => item.id === savedItem.id);

      if (itemIndex !== -1) {
        items.value[itemIndex].isFavorite = true;
      }
    });
  }
  // Рендерит карточки через запрос
  const fetchCard = async () => { 
    try {
      
      const params = {
        sortBy: filters.sortBy,
      };

      if (filters.searchQuery) {
        params.title = `*${filters.searchQuery}*`
      }
      
      const response = await axios.get('https://460e28092cf83f01.mokky.dev/catalog', {params})

      items.value = response.data.map((obj) => ({
        ...obj,
        isFavorite: false,
        favoriteId: null
      }));
    } catch (error) {
      console.log(error);
    }
  };

  /*provide('card', {
    favoriteItems,
    addToFavorite,
    loadFavoritesFromLocalStorage
  })*/
  // Функционал поиска и сортировки
  const onChangeSelect = (event) => {
    filters.sortBy = event.target.value; 
  };

  const onChangeSearch = (event) => {
    filters.searchQuery = event.target.value; 
  }
  
  onMounted(async () => {
    await fetchCard();
    loadFavoritesFromLocalStorage()
  });

  watch(filters, fetchCard);
</script>

<style scoped>
  /* Div в котором товары, поиск, сортировка и загаловок*/
  .card__list{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #807A80;
  }

  .card__list-search{
    align-self: flex-start;
  }

  .card__list-select{
    align-self: flex-end;
  }
</style>