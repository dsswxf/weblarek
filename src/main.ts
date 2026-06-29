import './scss/styles.scss';
import { CatalogModel } from './components/Models/CatalogModel';
import { BasketModel } from './components/Models/BasketModel';
import { BuyerModel } from './components/Models/BuyerModel';
import { AppApi } from './components/AppApi';
import { Api } from './components/base/Api';
import { apiProducts } from './utils/data';
import { API_URL } from './utils/constants';

const catalogModel = new CatalogModel();
const basketModel = new BasketModel();
const buyerModel = new BuyerModel();
const api = new Api(API_URL);
const appApi = new AppApi(api);

catalogModel.setItems(apiProducts.items);
console.log('Каталог товаров:', catalogModel.getItems());

const firstProductId = apiProducts.items[0].id;
console.log('Товар по id:', catalogModel.getItemById(firstProductId));

catalogModel.setSelectedProduct(apiProducts.items[0]);
console.log('Выбранный товар:', catalogModel.getSelectedProduct());

basketModel.add(apiProducts.items[0]);
basketModel.add(apiProducts.items[1]);
console.log('Товары в корзине после добавления:', basketModel.getItems());

console.log('Есть ли товар 0 в корзине:', basketModel.inBasket(apiProducts.items[0].id));
console.log('Сумма корзины:', basketModel.getTotal());
console.log('Количество товаров в корзине:', basketModel.getCount());

basketModel.remove(apiProducts.items[0].id);
console.log('Товары в корзине после удаления:', basketModel.getItems());

basketModel.clear();
console.log('Корзина после очистки:', basketModel.getItems());

console.log('Ошибки валидации (пустой покупатель):', buyerModel.validate());

buyerModel.setPayment('card');
buyerModel.setEmail('test@mail.ru');
buyerModel.setPhone('+79991234567');
buyerModel.setAddress('Москва, ул. Пушкина, д. 1');

console.log('Данные покупателя:', buyerModel.getData());
console.log('Ошибки валидации (заполненный покупатель):', buyerModel.validate());

buyerModel.clear();
console.log('Данные покупателя после очистки:', buyerModel.getData());

appApi.getProducts()
    .then((response) => {
        catalogModel.setItems(response.items);
        console.log('Каталог товаров с сервера:', catalogModel.getItems());
    })
    .catch((error) => {
        console.log('Ошибка при загрузке товаров с сервера:', error);
    });