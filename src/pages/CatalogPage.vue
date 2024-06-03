<template>
  <MyHeader/>
  
  <div class="card__list">
    
    <MyHeading title="Оверсайз одежда"/>
    <div class="card__func">
      <MyInput @input="onChangeSearch" class="card__list-search"/>
      <MySelect @change="onChangeSelect" class="card__list-select"/>
    </div>
    <!-- Здесь выводятся все наши карточки -->
    <CardList 
      :items="items"
      @addToFavorite="addToFavorite"/>
    
  </div>
  <MyForm/>
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
  import MyForm from "@/components/UI/MyForm.vue"
  
  import axios from "axios"
  
  const items = ref([]); 
  // Переменная для хранения выбранного значения из select, а также текста в input
  const filters = reactive({
    sortBy: "name",
    searchQuery: ''
  });
  
  const STORAGE_KEY = 'favoriteItems';

  // Инициализация массива избранных товаров из localStorage
  const favoriteItems = reactive(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

  // Функция для добавления/удаления товара в избранное
  const addToFavorite = (item) => {
    const index = favoriteItems.findIndex((favItem) => favItem.id === item.id);
    item.isFavorite = !item.isFavorite;

    if (index !== -1) {
      if (!item.isFavorite) {
        favoriteItems.splice(index, 1); // Удаление из избранного
      } else {
        favoriteItems[index] = item; // Обновление элемента в массиве
      }
    } else {
      favoriteItems.push(item); // Добавление в избранное
    }
  };

  // Отслеживание изменений в массиве избранных товаров и обновление localStorage
  watch(favoriteItems, (newFavoriteItems) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavoriteItems));
  }, { deep: true });

  // При монтировании компонента обновляем состояние isFavorite у товаров
  const updateFavoriteStatus = (items) => {
    items.forEach((item) => {
      const isFavorite = favoriteItems.some((favItem) => favItem.id === item.id);
      item.isFavorite = isFavorite;
    });
  };
  
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
  /*нужно при адаптиве настроить чтобы они были в столбец, с лева*/
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
    padding: 2%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
  }

 .card__func{
   width: 70%;
   display: flex;
   justify-content: space-between;
 }
</style>